'use server';

import { Resend } from 'resend';
import ContactEmail from '@/components/emails/ContactTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailResponse {
  success: boolean;
  error?: string;
}

export async function sendEmail(formData: FormData): Promise<EmailResponse> {
  try {
    // Extract and validate form data
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const description = formData.get('description') as string;

    // Validation
    if (!name || name.trim().length === 0) {
      return {
        success: false,
        error: 'Le nom est requis',
      };
    }

    if (!email || !isValidEmail(email)) {
      return {
        success: false,
        error: 'Un email valide est requis',
      };
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Chantier Film <noreply@chantierfilm.com>',
      to: ['contact@chantierfilm.com'],
      replyTo: email,
      subject: `Nouvelle demande de devis - ${name}`,
      react: ContactEmail({
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || undefined,
        description: description?.trim() || undefined,
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        success: false,
        error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.',
      };
    }

    console.log('Email sent successfully:', data);
    return { success: true };
  } catch (error) {
    console.error('Unexpected error in sendEmail:', error);
    return {
      success: false,
      error: 'Une erreur inattendue s\'est produite. Veuillez réessayer plus tard.',
    };
  }
}

// Email validation helper
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}