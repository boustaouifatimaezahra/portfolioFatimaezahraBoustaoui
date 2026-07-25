import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { experiences } from '../data/cv'

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Parcours"
          title="Expériences professionnelles"
          description="Un mélange d'institutions, d'entreprises et de projets freelance."
        />

        <div className="relative border-l border-white/10 pl-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              className="relative mb-12 last:mb-0"
            >
              <span className="absolute -left-[2.35rem] top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-indigo-400 ring-4 ring-slate-950" />

              <span className="text-xs font-semibold uppercase tracking-widest text-fuchsia-400">
                {exp.period}
              </span>
              <h3 className="mt-1 text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-sm text-slate-400">{exp.place}</p>

              <ul className="mt-3 space-y-1.5">
                {exp.description.map((line) => (
                  <li key={line} className="flex gap-2 text-sm text-slate-300">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fuchsia-400" />
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
