import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { education } from '../data/cv'

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Formation" title="Parcours académique" />

        <div className="grid gap-5 sm:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-fuchsia-400/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 text-fuchsia-300">
                <FiBookOpen size={20} />
              </div>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-widest text-fuchsia-400">
                {edu.period}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-white">{edu.degree}</h3>
              <p className="mt-1 text-sm text-slate-400">{edu.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
