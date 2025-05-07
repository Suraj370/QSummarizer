import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = "https://your-app.com";
const logoUrl = "https://your-app.com/logo.png";

const EmailTemplate = ({
  title = "Welcome to Our Service",
  previewText = "A message from Your App",
  mainText = "Thank you for joining us! Get started with your account.",
  ctaText = "Get Started",
  ctaLink = "#",
  secondaryText = "If you have any questions, feel free to contact our support team.",
  userName = "User",
  brandName = "Your App",
}) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>{previewText}</Preview>
      <Container style={containerStyle}>
        <Section style={headerStyle}>
          <Img src={logoUrl} alt={`${brandName} Logo`} style={logoStyle} />
        </Section>
        <Section style={contentStyle}>
          <Heading style={headingStyle}>{title}</Heading>
          <Text style={textStyle}>Hello {userName},</Text>
          <Text style={textStyle}>{mainText}</Text>
          <Button href={ctaLink} style={buttonStyle}>
            {ctaText}
          </Button>
          <Text style={textStyle}>
            Or copy and paste this URL into your browser:
            <Link href={ctaLink} style={linkStyle}>
              {ctaLink}
            </Link>
          </Text>
          <Text style={textStyle}>{secondaryText}</Text>
        </Section>
        <Section style={footerStyle}>
          <Text style={footerTextStyle}>
            © {new Date().getFullYear()} {brandName}. All rights reserved.
          </Text>
          <Text style={footerTextStyle}>
            <Link href={`${baseUrl}/support`} style={linkStyle}>
              Contact Support
            </Link>{" "}
            |{" "}
            <Link href={`${baseUrl}/privacy`} style={linkStyle}>
              Privacy Policy
            </Link>
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const containerStyle = {
  margin: "0 auto",
  padding: "20px",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  border: "1px solid #e5e5e5",
};

const headerStyle = {
  padding: "20px 0",
};

const logoStyle = {
  width: "150px",
  height: "auto",
};

const contentStyle = {
  padding: "20px",
};

const headingStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#1a1a1a",
  marginBottom: "20px",
};

const textStyle = {
  fontSize: "16px",
  color: "#333333",
  lineHeight: "24px",
  marginBottom: "20px",
};

const buttonStyle = {
  backgroundColor: "#2563eb",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "6px",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  display: "inline-block",
  marginBottom: "20px",
};

const linkStyle = {
  color: "#2563eb",
  textDecoration: "underline",
};

const footerStyle = {
  padding: "20px",
  backgroundColor: "#f8f8f8",
  borderTop: "1px solid #e5e5e5",
};

const footerTextStyle = {
  fontSize: "14px",
  color: "#666666",
  marginBottom: "10px",
};

export default EmailTemplate;
