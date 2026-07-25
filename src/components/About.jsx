import { motion } from 'framer-motion'
import { FiMapPin, FiGlobe } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { profile } from '../data/cv'

const cards = [
  {
    title: 'Full Stack',
    text: 'React.js, Next.js et Laravel pour construire des applications complètes, du frontend au backend.',
  },
  {
    title: 'Design & Marketing',
    text: 'Une sensibilité design (Canva, 2D/3D) et une expérience en gestion des réseaux sociaux.',
  },
  {
    title: 'Freelance & Terrain',
    text: "De l'aide judiciaire au e-commerce artisanal, j'adapte mes solutions aux besoins réels des clients.",
  },
]

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="À propos"
          title="Qui suis-je ?"
          description="Développeuse web full stack passionnée, entre le Maroc, le code et le design."
        />

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-5 text-slate-300"
          >
            <p>
              Je m'appelle <span className="text-white font-semibold">{profile.firstName} {profile.lastName}</span>,
              développeuse web full stack basée entre Ouarzazate et Marrakech. Formée en
              développement digital, j'ai travaillé aussi bien pour des institutions
              publiques que pour des entreprises privées et des clients en freelance.
            </p>
            <p>
              J'aime concevoir des interfaces modernes et performantes tout en gardant un
              œil sur l'expérience utilisateur, le SEO et la sécurité. Curieuse et
              polyvalente, je combine développement, design visuel et gestion de contenu
              digital.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-sm text-slate-400">
              <span className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
                <FiMapPin className="text-fuchsia-400" /> {profile.location}
              </span>
              <span className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
                <FiGlobe className="text-fuchsia-400" /> {profile.languages.join(' · ')}
              </span>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-fuchsia-400/40"
              >
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
