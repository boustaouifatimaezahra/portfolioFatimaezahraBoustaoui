import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import ContactForm from './ContactForm'
import { profile, getGmailComposeUrl } from '../data/cv'

const gmailUrl = getGmailComposeUrl({
  subject: 'Contact depuis votre portfolio',
  body: 'Bonjour Fatima Ezahra,\n\n',
})

const info = [
  { icon: FiMail, label: 'Email', value: profile.email, href: gmailUrl, external: true },
  { icon: FiPhone, label: 'Téléphone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: FiMapPin, label: 'Localisation', value: profile.location, href: null },
]

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Contact"
          title="Travaillons ensemble"
          description="Un projet en tête ? Je suis disponible pour des missions freelance ou une collaboration."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-3">
            {info.map(({ icon: Icon, label, value, href, external }) => {
              const content = (
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-6 text-center transition hover:border-fuchsia-400/40 hover:bg-white/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 text-fuchsia-300">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-slate-500">{label}</span>
                  <span className="text-sm font-medium text-white break-all">{value}</span>
                </div>
              )
              return href ? (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              )
            })}
          </div>

          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:scale-105"
            >
              Ouvrir Gmail
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-xs text-slate-500 underline-offset-2 hover:text-slate-300 hover:underline"
            >
              Ou ouvrir avec mon client mail par défaut
            </a>
          </div>
        </motion.div>

        <p className="mt-12 text-center text-sm text-slate-500">
          Ou envoyez-moi directement un message ci-dessous
        </p>
        <ContactForm />
      </div>
    </section>
  )
}
