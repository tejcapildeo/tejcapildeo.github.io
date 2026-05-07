import { motion } from 'framer-motion'
import { projects } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-block font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-cyan-500/30 text-cyan-500 bg-cyan-500/5">
      {label}
    </span>
  )
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-28">
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
            Projects
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            Things I've built
          </motion.h2>
          <motion.div variants={fadeUp} className="section-divider" />

          {/* Featured project */}
          {featured && (
            <motion.div
              variants={fadeUp}
              className="mb-6 group relative card border-l-2 border-l-cyan-500 rounded-l-none"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge label={featured.badge} />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#555]">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#f0f0f0]">
                    {featured.title}
                  </h3>
                </div>
              </div>

              <p className="text-[#777] text-sm leading-relaxed mb-3">
                {featured.description}
              </p>

              {featured.detail && (
                <p className="text-[#555] text-sm leading-relaxed mb-5 border-t border-[#1c1c1c] pt-4">
                  {featured.detail}
                </p>
              )}

              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Rest of projects grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {rest.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="card flex flex-col"
              >
                <div className="mb-3">
                  <Badge label={project.badge} />
                </div>
                <h3 className="text-base font-semibold text-[#f0f0f0] mb-3">
                  {project.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
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
