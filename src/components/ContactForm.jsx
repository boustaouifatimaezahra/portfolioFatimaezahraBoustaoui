import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiSend } from 'react-icons/fi'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

export default function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    if (!isConfigured) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="mt-10 space-y-4 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="user_name" className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-slate-500">
            Nom
          </label>
          <input
            id="user_name"
            name="user_name"
            type="text"
            required
            placeholder="Votre nom"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-fuchsia-400/50 focus:bg-white/10"
          />
        </div>
        <div>
          <label htmlFor="user_email" className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-slate-500">
            Email
          </label>
          <input
            id="user_email"
            name="user_email"
            type="email"
            required
            placeholder="vous@exemple.com"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-fuchsia-400/50 focus:bg-white/10"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-slate-500">
          Sujet
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Objet de votre message"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-fuchsia-400/50 focus:bg-white/10"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-slate-500">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Parlez-moi de votre projet..."
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-fuchsia-400/50 focus:bg-white/10"
        />
      </div>

      <div className="flex flex-col items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
        >
          <FiSend />
          {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>

        {status === 'success' && (
          <p className="text-sm text-emerald-400">Message envoyé ! Je vous répondrai rapidement.</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-400">
            {isConfigured
              ? "Une erreur est survenue. Réessayez ou écrivez-moi directement par email."
              : "Le formulaire n'est pas encore configuré (EmailJS)."}
          </p>
        )}
      </div>
    </motion.form>
  )
}
