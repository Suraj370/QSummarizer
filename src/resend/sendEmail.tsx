import { render } from '@react-email/render';
import EmailTemplate from './EmailTemplate';
import { Resend } from 'resend';
import { text } from 'stream/consumers';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailProps {
  to: string;
  subject: string;
  userName?: string;
  brandName?: string;
  title: string;
  previewText: string;
  mainText: string;
  ctaText: string;
  ctaLink: string;
  secondaryText: string;
}

export const sendEmail = async ({
  to,
  subject,
  userName = 'User',
  brandName = 'Your App',
  title,
  previewText,
  mainText,
  ctaText,
  ctaLink,
  secondaryText,
}: EmailProps) => {
  const emailHtml = await  render(
    <EmailTemplate
      title={title}
      previewText={previewText}
      mainText={mainText}
      ctaText={ctaText}
      ctaLink={ctaLink}
      secondaryText={secondaryText}
      userName={userName}
      brandName={brandName}
    />
  );

  const options = {
    from: 'Acme <onboarding@resend.dev>',
    to,
    subject,
    html: emailHtml,
  };

  try {
    const data = await resend.emails.send(options);
    console.log('Email sent:', data);
    return data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};