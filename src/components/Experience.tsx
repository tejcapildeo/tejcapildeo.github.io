import { motion } from 'framer-motion'
import { experience } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#0a0a0a]">
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
            Experience
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            Where I've worked
          </motion.h2>
          <motion.div variants={fadeUp} className="section-divider" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-[#1c1c1c]" />

            <div className="space-y-12">
              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative pl-10"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-cyan-500 -translate-x-[3.5px] ring-4 ring-[#0a0a0a]" />

                  <div className="card group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="text-[#f0f0f0] font-semibold text-base">
                          {item.role}
                        </h3>
                        <p className="text-cyan-400 text-sm font-medium">
                          {item.company}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-mono text-xs text-[#555]">{item.period}</p>
                        <p className="font-mono text-xs text-[#444]">{item.location}</p>
                      </div>
                    </div>

                    <p className="text-[#777] text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
