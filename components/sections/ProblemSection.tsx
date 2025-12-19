'use client';

import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  MessageSquare, 
  SearchX, 
  Archive, 
  Clock,
  Video,
  Users,
  Database,
  BarChart3,
  ClipboardCheck
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-100px" }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 }
};

const challenges = [
  {
    icon: SearchX,
    title: "Manque de visibilité sur l'avancement",
    description: "Difficile d'évaluer précisément l'état du chantier et de suivre son évolution sans un historique détaillé."
  },
  {
    icon: MessageSquare,
    title: "Communication complexe entre équipes",
    description: "Un partage d'informations incomplet entraîne des malentendus, des pertes de temps et un manque de coordination."
  },
  {
    icon: AlertTriangle,
    title: "Absence de preuves concrètes",
    description: "Impossible de démontrer l'avancement des travaux de manière fiable sans support visuel clair et structuré."
  },
  {
    icon: Archive,
    title: "Données mal organisées et peu accessibles",
    description: "Les documents et archives du projet sont dispersés, rendant leur consultation lente et peu efficace."
  },
  {
    icon: Clock,
    title: "Retards difficiles à anticiper",
    description: "Sans outil de suivi adapté, détecter les écarts au planning et réagir rapidement devient très compliqué."
  }
];

const solutions = [
  {
    icon: Video,
    title: "Un suivi visuel immersif",
    description: "Accédez en un clic à un timelapse détaillé et suivez l'évolution du projet avec une vue globale et précise."
  },
  {
    icon: Users,
    title: "Une communication simplifiée",
    description: "Partagez des mises à jour engageantes avec des vidéos claires qui améliorent l'échange entre toutes les parties."
  },
  {
    icon: Database,
    title: "Des preuves visuelles impactantes",
    description: "Documentez chaque phase du chantier avec des images et vidéos valorisant l'expertise et le travail réalisé."
  },
  {
    icon: BarChart3,
    title: "Un archivage structuré et sécurisé",
    description: "Regroupez tous vos fichiers dans un espace centralisé pour retrouver facilement chaque étape du projet."
  },
  {
    icon: ClipboardCheck,
    title: "Un contrôle précis des délais",
    description: "Analysez chaque phase avec des outils visuels performants pour détecter et corriger les écarts immédiatement."
  }
];

export function ProblemSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-chantier-asphalt overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-chantier-yellow/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-chantier-safety/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          {...fadeInUp}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-chantier-off-white mb-4">
            Pourquoi une meilleure documentation{' '}
            <span className="text-chantier-yellow">est essentielle ?</span>
          </h2>
          <p className="text-lg text-chantier-steel max-w-2xl mx-auto">
            Les défis rencontrés sur vos chantiers
          </p>
        </motion.div>

        {/* Introduction Box */}
        <motion.div 
          className="bg-chantier-concrete/50 backdrop-blur-sm border border-chantier-steel/30 rounded-lg p-6 lg:p-8 mb-16 max-w-4xl mx-auto"
          {...fadeInUp}
        >
          <p className="text-chantier-off-white/90 text-lg leading-relaxed text-center">
            Les chantiers de construction présentent de nombreux défis. Sans une documentation visuelle adéquate, la gestion du projet peut devenir complexe.
          </p>
        </motion.div>

        {/* Challenges & Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Challenges Column */}
          <div>
            <motion.div 
              className="mb-8 pb-4 border-b border-chantier-safety/30"
              {...fadeInUp}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-chantier-off-white flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-chantier-safety" />
                Les défis quotidiens
              </h3>
            </motion.div>

            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
            >
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-chantier-concrete/30 backdrop-blur-sm border border-red-500/20 rounded-lg p-5 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                        <challenge.icon className="w-6 h-6 text-red-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-chantier-off-white mb-2">
                        {challenge.title}
                      </h4>
                      <p className="text-chantier-steel/90 text-sm leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Solutions Column */}
          <div>
            <motion.div 
              className="mb-8 pb-4 border-b border-chantier-yellow/30"
              {...fadeInUp}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-chantier-off-white flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-chantier-yellow/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-chantier-yellow" />
                </div>
                Notre solution
              </h3>
            </motion.div>

            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
            >
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-chantier-concrete/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-5 hover:border-chantier-yellow/50 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-chantier-yellow/10 flex items-center justify-center group-hover:bg-chantier-yellow/20 transition-colors">
                        <solution.icon className="w-6 h-6 text-chantier-yellow" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-chantier-off-white mb-2">
                        {solution.title}
                      </h4>
                      <p className="text-chantier-steel/90 text-sm leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}