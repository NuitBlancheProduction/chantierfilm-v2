import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  description?: string;
}

export default function ContactEmail({
  name,
  email,
  phone,
  description,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nouvelle demande de devis - {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerTitle}>Nouveau Lead - Chantier Film</Heading>
            <div style={yellowBar} />
          </Section>

          {/* Content */}
          <Section style={content}>
            <Text style={label}>Nom du contact</Text>
            <Text style={value}>{name}</Text>

            <Hr style={divider} />

            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>

            <Hr style={divider} />

            {phone && (
              <>
                <Text style={label}>Téléphone</Text>
                <Text style={value}>{phone}</Text>
                <Hr style={divider} />
              </>
            )}

            {description && (
              <>
                <Text style={label}>Description du projet</Text>
                <Text style={descriptionValue}>{description}</Text>
                <Hr style={divider} />
              </>
            )}
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Envoyé depuis le formulaire de contact du site web chantierfilm.com
            </Text>
            <Text style={footerSubtext}>
              {new Date().toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f5f5f5',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '0',
  maxWidth: '600px',
  border: '1px solid #e5e5e5',
};

const header = {
  backgroundColor: '#1a1a1a',
  padding: '32px 40px',
};

const headerTitle = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: '700',
  margin: '0 0 12px 0',
  lineHeight: '1.3',
};

const yellowBar = {
  width: '60px',
  height: '4px',
  backgroundColor: '#FACC15',
  borderRadius: '2px',
};

const content = {
  padding: '40px',
};

const label = {
  color: '#6b7280',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  margin: '0 0 8px 0',
};

const value = {
  color: '#1a1a1a',
  fontSize: '16px',
  fontWeight: '500',
  margin: '0 0 24px 0',
  lineHeight: '1.5',
};

const descriptionValue = {
  color: '#1a1a1a',
  fontSize: '15px',
  fontWeight: '400',
  margin: '0 0 24px 0',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap' as const,
};

const divider = {
  borderColor: '#e5e5e5',
  margin: '0 0 24px 0',
};

const footer = {
  backgroundColor: '#f9fafb',
  padding: '24px 40px',
  borderTop: '1px solid #e5e5e5',
};

const footerText = {
  color: '#6b7280',
  fontSize: '13px',
  margin: '0 0 8px 0',
  lineHeight: '1.4',
};

const footerSubtext = {
  color: '#9ca3af',
  fontSize: '12px',
  margin: '0',
};