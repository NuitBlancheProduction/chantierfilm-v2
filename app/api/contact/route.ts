import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactEmail from '@/components/emails/ContactTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, description } = body;

    // Validation
    if (!name || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Le nom est requis' },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Un email valide est requis' },
        { status: 400 }
      );
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
      return NextResponse.json(
        { success: false, error: 'Erreur lors de l\'envoi du message' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { success: false, error: 'Une erreur inattendue s\'est produite' },
      { status: 500 }
    );
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}