import { profile } from '../data/cv'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} {profile.firstName} {profile.lastName} — Tous droits réservés.
    </footer>
  )
}
