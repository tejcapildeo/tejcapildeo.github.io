import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { personal } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const links = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'tej-capildeo',
    href: personal.linkedin,
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'tejcapildeo',
    href: personal.github,
    icon: Github,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="max-w-2xl"
        >
          <motion.p variants={fadeUp} className="section-label">
            Contact
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            Let's connect
          </motion.h2>
          <motion.div variants={fadeUp} className="section-divider" />

          <motion.p variants={fadeUp} className="text-[#777] text-base leading-relaxed mb-12">
            I'm actively looking for AI engineering roles. Whether you want to talk about a role, a project,
            or just want to connect — reach out.
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-4">
            {links.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="flex items-center justify-between group card hover:border-cyan-500/40"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-md bg-[#161616] border border-[#222] group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-colors">
                    <Icon size={16} className="text-[#666] group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-[#555] font-mono uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="text-sm text-[#ccc]">{value}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[#333] group-hover:text-cyan-400 transition-colors shrink-0"
                />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
