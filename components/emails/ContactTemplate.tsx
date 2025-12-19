import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Hr,
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
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={logoText}>CHANTIER FILM</Heading>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={title}>Nouvelle demande de devis</Heading>
            <Text style={subtitle}>
              Une nouvelle demande vient d'être soumise depuis le formulaire de contact.
            </Text>

            <Hr style={divider} />

            {/* Contact Information */}
            <Section style={infoSection}>
              <table style={table}>
                <tbody>
                  <tr>
                    <td style={labelCell}>
                      <Text style={label}>Nom</Text>
                    </td>
                    <td style={valueCell}>
                      <Text style={value}>{name}</Text>
                    </td>
                  </tr>
                  <tr>
                    <td style={labelCell}>
                      <Text style={label}>Email</Text>
                    </td>
                    <td style={valueCell}>
                      <Text style={value}>{email}</Text>
                    </td>
                  </tr>
                  {phone && (
                    <tr>
                      <td style={labelCell}>
                        <Text style={label}>Téléphone</Text>
                      </td>
                      <td style={valueCell}>
                        <Text style={value}>{phone}</Text>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </Section>

            {description && (
              <>
                <Hr style={divider} />
                <Section style={descriptionSection}>
                  <Text style={label}>Description du projet</Text>
                  <Text style={descriptionText}>{description}</Text>
                </Section>
              </>
            )}

            <Hr style={divider} />

            {/* CTA Section */}
            <Section style={ctaSection}>
              <Text style={ctaText}>
                💡 <strong>Action recommandée :</strong> Répondez directement à cet email pour
                contacter {name}.
              </Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Envoyé depuis le site web{' '}
              <span style={footerBrand}>Chantier Film</span>
            </Text>
            <Text style={footerSubtext}>
              {new Date().toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
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
  backgroundColor: '#f6f6f6',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0',
  maxWidth: '600px',
};

const header = {
  backgroundColor: '#212125',
  padding: '30px 40px',
  borderRadius: '8px 8px 0 0',
};

const logoText = {
  color: '#FACC15',
  fontSize: '28px',
  fontWeight: '900',
  letterSpacing: '2px',
  margin: '0',
  textAlign: 'center' as const,
};

const content = {
  backgroundColor: '#ffffff',
  padding: '40px',
  borderRadius: '0 0 8px 8px',
};

const title = {
  color: '#212125',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 10px',
};

const subtitle = {
  color: '#6b7280',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 24px',
};

const divider = {
  borderColor: '#e5e7eb',
  margin: '24px 0',
};

const infoSection = {
  margin: '20px 0',
};

const table = {
  width: '100%',
  borderCollapse: 'collapse' as const,
};

const labelCell = {
  padding: '12px 0',
  width: '140px',
  verticalAlign: 'top' as const,
};

const valueCell = {
  padding: '12px 0',
  verticalAlign: 'top' as const,
};

const label = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const value = {
  color: '#212125',
  fontSize: '16px',
  margin: '0',
  fontWeight: '500',
};

const descriptionSection = {
  margin: '20px 0',
};

const descriptionText = {
  color: '#212125',
  fontSize: '15px',
  lineHeight: '24px',
  margin: '10px 0 0',
  padding: '16px',
  backgroundColor: '#f9fafb',
  borderLeft: '4px solid #FACC15',
  borderRadius: '4px',
};

const ctaSection = {
  margin: '20px 0',
  padding: '20px',
  backgroundColor: '#fffbeb',
  borderRadius: '8px',
  border: '1px solid #fde68a',
};

const ctaText = {
  color: '#78350f',
  fontSize: '14px',
  margin: '0',
  lineHeight: '20px',
};

const footer = {
  padding: '20px 40px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#6b7280',
  fontSize: '14px',
  margin: '0',
};

const footerBrand = {
  color: '#FACC15',
  fontWeight: '700',
};

const footerSubtext = {
  color: '#9ca3af',
  fontSize: '12px',
  margin: '8px 0 0',
};