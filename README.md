# Portfolio — Fatima Ezahra Boustaoui

Portfolio personnel construit avec **Vite**, **React**, **Tailwind CSS** et **Framer Motion**.

## Stack

- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Démarrage

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Configurer le formulaire de contact (EmailJS)

Le formulaire de contact utilise [EmailJS](https://www.emailjs.com) pour envoyer les
messages des visiteurs directement vers ta boîte Gmail, sans backend à héberger.

1. Crée un compte gratuit sur https://dashboard.emailjs.com/sign-up
2. **Email Services** → *Add New Service* → choisis **Gmail** → connecte ton compte
   `fatimzahraboustaoui@gmail.com` → note le **Service ID**
3. **Email Templates** → *Create New Template* → crée un template avec les variables
   `{{user_name}}`, `{{user_email}}`, `{{subject}}`, `{{message}}` → note le **Template ID**
4. **Account** → **General** → copie ta **Public Key**
5. Crée un fichier `.env` à la racine (copie `.env.example`) et renseigne les 3 valeurs :

   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
   ```

6. Redémarre `npm run dev` pour tester en local

### Pour que ça fonctionne aussi sur le site en ligne (GitHub Pages)

Ajoute les 3 mêmes valeurs comme secrets du dépôt GitHub (elles ne sont jamais
commitées, `.env` est ignoré par git) :

**Settings → Secrets and variables → Actions → New repository secret**, pour
chacune des 3 clés : `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`,
`VITE_EMAILJS_PUBLIC_KEY`.

Le workflow `.github/workflows/deploy.yml` les injecte automatiquement au moment
du build. Un nouveau push (ou un re-run du workflow) suffit pour que le
formulaire fonctionne en production.
