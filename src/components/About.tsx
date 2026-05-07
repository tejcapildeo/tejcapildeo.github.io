import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { about } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.p variants={fadeUp} className="section-label">
            About
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            Who I am
          </motion.h2>
          <motion.div variants={fadeUp} className="section-divider" />

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeUp} className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-[#888] text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="card flex items-start gap-4">
                <div className="mt-0.5 p-2.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                  <GraduationCap size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-[#f0f0f0] font-semibold mb-0.5">
                    {about.education.school}
                  </p>
                  <p className="text-sm text-[#888]">{about.education.degree}</p>
                  <p className="text-xs text-[#555] font-mono mt-2">
                    {about.education.period}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
