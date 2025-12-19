'use client';

import { motion } from 'framer-motion';
import { BookingButton } from '@/components/ui/BookingButton';
import { Mail, Phone } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardHover = {
  rest: { scale: 1, borderColor: 'rgb(39, 39, 42)' },
  hover: { 
    scale: 1.02, 
    borderColor: 'rgb(63, 63, 70)',
    transition: { duration: 0.3 }
  },
};

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-4 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-950" />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Prêt à passer au
            <br />
            niveau supérieur ?
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Discutons de votre projet et créons ensemble quelque chose
            d'exceptionnel
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center"
        >
          {/* Booking Button */}
          <div className="mb-8">
            <BookingButton variant="default" />
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            {/* Email Card */}
            <motion.a
              href="mailto:contact@nuitblancheproduction.com"
              initial="rest"
              whileHover="hover"
              variants={cardHover}
              className="group flex items-center gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:bg-zinc-800 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-800/80 flex items-center justify-center group-hover:bg-zinc-700 transition-colors duration-300">
                <Mail className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-xs text-zinc-500 mb-1">Email</p>
                <p className="text-xs text-zinc-400 group-hover:text-white transition-colors duration-300">
                  contact@nuitblancheproduction.com
                </p>
              </div>
            </motion.a>

            {/* Phone Card */}
            <motion.a
              href="tel:+33651301383"
              initial="rest"
              whileHover="hover"
              variants={cardHover}
              className="group flex items-center gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:bg-zinc-800 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-800/80 flex items-center justify-center group-hover:bg-zinc-700 transition-colors duration-300">
                <Phone className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-xs text-zinc-500 mb-1">Téléphone</p>
                <p className="text-xs text-zinc-400 group-hover:text-white transition-colors duration-300">
                  06 51 30 13 83
                </p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}