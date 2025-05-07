import { betterAuth } from "better-auth";
import { convexAdapter } from "@better-auth-kit/convex";
import { ConvexHttpClient } from "convex/browser";
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend";
import { sendEmail } from "@/resend/sendEmail"; // Import the typed sendEmail function

const convexClient = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const resend = new Resend(process.env.RESEND_API_KEY!);

export const auth = betterAuth({
  database: convexAdapter(convexClient),
  plugins: [nextCookies()],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
   
    sendResetPassword: async ({ user, url }) => {
      try {
        await sendEmail({
          to: user.email,
          subject: "Reset Your Password",
          userName: user.name || user.email.split("@")[0],
          brandName: "Your App",
          title: "Reset Your Password",
          previewText: "Reset your password for Your App",
          mainText: "You requested to reset your password for Your App. Click the button below to set a new password.",
          ctaText: "Reset Password",
          ctaLink: url,
          secondaryText: "This link will expire in 24 hours. If you didn’t request a password reset, please contact our support team.",
        });
      } catch (error) {
        console.error("Failed to send reset password email:", error);
        throw new Error("Unable to send reset password email");
      }
    },
    resetPasswordTokenExpiresIn: 60 * 60, // 1 hour
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, token }) => {
      
      const verificationUrl = `${process.env.BETTER_AUTH_URL}/api/auth/verify-email?token=${token}&callbackURL=${process.env.EMAIL_VERIFICATION_CALLBACK_URL}`;
      console.log("Verification url to verify the email: ", verificationUrl);
      try {
        await sendEmail({
          to: user.email,
          subject: "Verify Your Email Address",
          userName: user.name || user.email.split("@")[0],
          brandName: "Your App",
          title: "Verify Your Email",
          previewText: "Verify your email address for Your App",
          mainText: "Please verify your email address to complete your Your App registration.",
          ctaText: "Verify Email",
          ctaLink: verificationUrl,
          secondaryText: "This link will expire in 24 hours. If you didn’t request this email, you can safely ignore it.",
        });
      } catch (error) {
        console.error("Failed to send verification email:", error);
        throw new Error("Unable to send verification email");
      }
    },
  },
  account: {
    accountLinking: {
      enabled: true,
    },
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});