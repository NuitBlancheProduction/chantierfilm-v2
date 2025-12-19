import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactEmail from '@/components/emails/ContactTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, description } = body;

    // Validation stricte
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

    // Validation de longueur
    if (name.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: 'Le nom est trop long (max 100 caractères)' },
        { status: 400 }
      );
    }

    if (description && description.trim().length > 2000) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'La description est trop longue (max 2000 caractères)' 
        },
        { status: 400 }
      );
    }

    // Envoi de l'email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Chantier Film <contact@chantierfilm.com>',
      to: ['contact@chantierfilm.com'],
      replyTo: email.trim(),
      subject: `Nouvelle demande de devis - ${name.trim()}`,
      react: ContactEmail({
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || undefined,
        description: description?.trim() || undefined,
      }),
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' 
        },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    
    return NextResponse.json({ 
      success: true,
      message: 'Votre demande a été envoyée avec succès'
    });

  } catch (error) {
    console.error('Unexpected error in contact API:', error);
    
    // Gestion des erreurs spécifiques
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, error: 'Données invalides' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        error: 'Une erreur inattendue s\'est produite. Veuillez réessayer plus tard.' 
      },
      { status: 500 }
    );
  }
}

// Fonction de validation email améliorée
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Vérifications supplémentaires
  if (!emailRegex.test(email)) return false;
  if (email.length > 254) return false; // RFC 5321
  
  const [localPart, domain] = email.split('@');
  if (localPart.length > 64) return false; // RFC 5321
  if (domain.length > 253) return false;
  
  return true;
}