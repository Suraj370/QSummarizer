import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from '@react-email/components';
  
  interface ResetPasswordProps {
    resetpassword?: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `http://localhost:3000`
    : '';
  
  export const ResetPasswordEmail = ({
    resetpassword,
  }: ResetPasswordProps) => (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Reset password with this link</Preview>
        <Container style={container}>
       
          <Heading style={heading}>🪄 Your reset password link</Heading>
          <Section style={body}>
            <Text style={paragraph}>
              <Link style={link} href={resetpassword}>
                👉 Click here to reset password👈
              </Link>
            </Text>
            <Text style={paragraph}>
              If you didn't request this, please ignore this email.
            </Text>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />- QSummmarizer Team
          </Text>
          <Hr style={hr} />
          
          <Text style={footer}>QSummarizer </Text>
          <Text style={footer}>
            2093 Philadelphia Pike #3222, Claymont, DE 19703
          </Text>
        </Container>
      </Body>
    </Html>
  );

  
  export default ResetPasswordEmail;
  
  const main = {
    backgroundColor: '#ffffff',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: '0 auto',
    padding: '20px 25px 48px',
    backgroundImage: 'url("/static/raycast-bg.png")',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat, no-repeat',
  };
  
  const heading = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginTop: '48px',
  };
  
  const body = {
    margin: '24px 0',
  };
  
  const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
  };
  
  const link = {
    color: '#FF6363',
  };
  
  const hr = {
    borderColor: '#dddddd',
    marginTop: '48px',
  };
  
  const footer = {
    color: '#8898aa',
    fontSize: '12px',
    marginLeft: '4px',
  };
  