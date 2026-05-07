import { motion } from 'framer-motion'
import { skills } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#0a0a0a]">
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
            Skills
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            What I work with
          </motion.h2>
          <motion.div variants={fadeUp} className="section-divider" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                variants={fadeUp}
                custom={i}
              >
                <h3 className="section-label mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="tag cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
