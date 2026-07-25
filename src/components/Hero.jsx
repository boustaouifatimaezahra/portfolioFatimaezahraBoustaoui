import { motion } from 'framer-motion'
import { FiArrowDown, FiMail, FiPhone } from 'react-icons/fi'
import { profile, getGmailComposeUrl } from '../data/cv'

const gmailUrl = getGmailComposeUrl({
  subject: 'Contact depuis votre portfolio',
  body: 'Bonjour Fatima Ezahra,\n\n',
})

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex max-w-3xl flex-col items-center"
      >
        <motion.div
          variants={item}
          className="relative mb-8 h-32 w-32 rounded-full p-1"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#e879f9,#818cf8,#c084fc,#e879f9)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-3xl font-bold text-white">
            FZ
          </div>
        </motion.div>

        <motion.span
          variants={item}
          className="mb-4 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-1 text-sm text-fuchsia-300"
        >
          Disponible pour de nouveaux projets
        </motion.span>

        <motion.h1
          variants={item}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
        >
          Bonjour, je suis{' '}
          <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            {profile.firstName} {profile.lastName}
          </span>
        </motion.h1>

        <motion.p variants={item} className="mt-5 max-w-xl text-lg text-slate-400">
          {profile.title} — basée à {profile.location}. Je conçois des expériences web
          modernes, rapides et sur mesure, du frontend au backend.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:scale-105"
          >
            Discutons de votre projet
          </a>
          <a
            href="#experience"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/40 hover:bg-white/5"
          >
            Voir mon parcours
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400"
        >
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <FiMail /> {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:text-white">
            <FiPhone /> {profile.phone}
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Défiler vers le bas"
        className="absolute bottom-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-400"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FiArrowDown />
      </motion.a>
    </section>
  )
}
