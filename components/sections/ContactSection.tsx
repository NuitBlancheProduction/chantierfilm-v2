'use client';

import { useState } from 'react';
import { CalendarCheck, FileText, Lock, CheckCircle } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validation côté client
    if (!formData.name.trim() || !formData.email.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Veuillez remplir les champs obligatoires (Nom et Email)'
      });
      return;
    }

    // Validation email basique côté client
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Veuillez entrer une adresse email valide'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Merci pour votre demande ! Nous vous recontacterons sous 48h ouvrées.'
        });
        // Reset du formulaire après succès
        setFormData({ name: '', email: '', phone: '', description: '' });
        
        // Auto-clear du message de succès après 10 secondes
        setTimeout(() => {
          setSubmitStatus({ type: null, message: '' });
        }, 10000);
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Une erreur est survenue. Veuillez réessayer.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Impossible de contacter le serveur. Vérifiez votre connexion et réessayez.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error message when user starts typing
    if (submitStatus.type === 'error') {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  return (
    <section className="relative bg-gray-50 py-20 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-chantier-yellow opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-chantier-concrete opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="block text-chantier-asphalt">
                  Transformez Votre Projet
                </span>
                <span className="block text-chantier-yellow mt-2">
                  en Histoire Visuelle
                </span>
              </h2>
              
              <p className="text-lg lg:text-xl text-chantier-concrete leading-relaxed">
                Chaque chantier raconte une histoire unique. Laissez-nous capturer la vôtre avec une qualité cinématographique qui impressionnera vos clients et partenaires.
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="/rendez-vous"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-chantier-yellow text-chantier-asphalt font-bold text-lg rounded-lg hover:bg-chantier-yellow hover:border-chantier-yellow-dark transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <CalendarCheck className="w-6 h-6 text-chantier-yellow group-hover:text-chantier-asphalt transition-colors" />
                <span>Prendre Rendez-vous</span>
              </a>
              
              <p className="text-sm text-chantier-steel italic">
                Disponible pour un échange visio avec nos experts
              </p>
            </div>

            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-chantier-light-grey"></div>
              <div className="w-2 h-2 rounded-full bg-chantier-yellow"></div>
              <div className="flex-1 h-px bg-chantier-light-grey"></div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-chantier-asphalt">
                Échangez avec Nos Experts
              </h3>
              <p className="text-chantier-concrete leading-relaxed">
                Planifiez un entretien visio avec l'un de nos spécialistes en captation audiovisuelle. Lors de cet échange, nous prendrons le temps d'analyser en détail vos besoins, d'explorer les différentes options adaptées à votre projet et de vous conseiller sur les meilleures solutions. À l'issue de cette consultation, vous recevrez une proposition tarifaire sur mesure, parfaitement ajustée à vos exigences techniques et budgétaires.
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 border border-chantier-light-grey">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-chantier-asphalt mb-2">
                  Prêt à Immortaliser Votre Chantier?
                </h3>
                <p className="text-chantier-steel">
                  Contactez-nous pour une proposition personnalisée
                </p>
              </div>

              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg border-2 transition-all ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 border-green-300 text-green-800'
                      : 'bg-red-50 border-red-300 text-red-800'
                  }`}
                  role="alert"
                >
                  <div className="flex items-start gap-3">
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    ) : (
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                    <p className="text-sm font-medium leading-relaxed">
                      {submitStatus.message}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="*Nom"
                      required
                      disabled={isSubmitting}
                      maxLength={100}
                      className="w-full px-4 py-3 bg-gray-50 border border-chantier-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-chantier-yellow focus:border-transparent transition-all text-chantier-asphalt placeholder:text-chantier-steel disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="*Email"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-gray-50 border border-chantier-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-chantier-yellow focus:border-transparent transition-all text-chantier-asphalt placeholder:text-chantier-steel disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Téléphone"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 border border-chantier-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-chantier-yellow focus:border-transparent transition-all text-chantier-asphalt placeholder:text-chantier-steel disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Décrivez brièvement votre projet de construction..."
                    rows={4}
                    disabled={isSubmitting}
                    maxLength={2000}
                    className="w-full px-4 py-3 bg-gray-50 border border-chantier-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-chantier-yellow focus:border-transparent transition-all text-chantier-asphalt placeholder:text-chantier-steel resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  ></textarea>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-chantier-light-grey">
                  <p className="text-sm text-chantier-steel leading-relaxed">
                    Notre équipe s'engage à vous répondre sous 48h ouvrées. Chaque demande est traitée avec soin pour vous proposer une solution parfaitement adaptée à votre projet. N'hésitez pas à détailler vos attentes pour une proposition plus précise.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-chantier-yellow hover:bg-chantier-yellow-dark text-chantier-asphalt font-bold text-lg py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    'Demander un Devis Gratuit'
                  )}
                </button>
              </form>

              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-chantier-light-grey">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-chantier-yellow bg-opacity-10 rounded-full mb-2">
                    <FileText className="w-6 h-6 text-chantier-yellow" />
                  </div>
                  <p className="text-xs font-semibold text-chantier-asphalt">Devis gratuit</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-chantier-yellow bg-opacity-10 rounded-full mb-2">
                    <CheckCircle className="w-6 h-6 text-chantier-yellow" />
                  </div>
                  <p className="text-xs font-semibold text-chantier-asphalt">Sans engagement</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-chantier-yellow bg-opacity-10 rounded-full mb-2">
                    <Lock className="w-6 h-6 text-chantier-yellow" />
                  </div>
                  <p className="text-xs font-semibold text-chantier-asphalt">Données sécurisées</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}