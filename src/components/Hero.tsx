import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '../data/content'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 50% -5%, rgba(6,182,212,0.1) 0%, transparent 100%)',
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(circle, #3a3a3a 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="section-label mb-6">
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#f0f0f0] leading-tight tracking-tight mb-3"
          >
            Tej Capildeo
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-8"
          >
            AI Engineer
          </motion.h2>

          <motion.p
            variants={item}
            className="text-[#888] text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            {personal.tagline}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
            <a href={personal.resume} download className="btn-primary">
              Download Resume
              <ArrowDown size={15} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github size={15} />
              GitHub
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-5">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#555] hover:text-cyan-400 transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#555] hover:text-cyan-400 transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="text-[#555] hover:text-cyan-400 transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-[#444]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
