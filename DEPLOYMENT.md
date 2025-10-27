# 🚀 Deployment Guide

Denne guideen viser deg hvordan du deployer din futuristiske nettside til GitHub og Vercel.

## 📋 Forutsetninger

- [Git](https://git-scm.com/) installert
- [Node.js](https://nodejs.org/) installert (valgfritt)
- GitHub konto
- Vercel konto (gratis)

## 🔧 Lokal Utvikling

### 1. Start lokal server
```bash
# Med live-server (anbefalt for utvikling)
npm run dev

# Eller med serve
npm start
```

### 2. Åpne i nettleser
Gå til `http://localhost:3000` for å se nettsiden.

## 📤 GitHub Setup

### 1. Initialiser Git repository
```bash
# I prosjektmappen
git init
git add .
git commit -m "Initial commit: Futuristisk personlig nettside"
```

### 2. Opprett GitHub repository
1. Gå til [GitHub.com](https://github.com)
2. Klikk "New repository"
3. Navn: `min-personlige-nettside`
4. Beskrivelse: `Futuristisk personlig nettside med glassmorfisme-effekter`
5. Velg "Private" (kan endres til public senere)
6. Ikke huk av for README, .gitignore eller lisens (vi har dem allerede)

### 3. Koble til GitHub
```bash
git branch -M main
git remote add origin https://github.com/DITT-BRUKERNAVN/min-personlige-nettside.git
git push -u origin main
```

## 🌐 Vercel Deployment

### 1. Opprett Vercel konto
1. Gå til [Vercel.com](https://vercel.com)
2. Klikk "Sign up" og logg inn med GitHub

### 2. Deploy prosjektet
1. Klikk "New Project" på Vercel dashboard
2. Velg ditt GitHub repository: `min-personlige-nettside`
3. Vercel vil automatisk oppdage at det er en statisk nettside
4. Klikk "Deploy"

### 3. Tilpass domenenavn
1. Gå til Project Settings
2. Under "Domains" kan du endre domenenavnet
3. Standard: `min-personlige-nettside-xxx.vercel.app`

## 🔄 Oppdateringer

### Push nye endringer
```bash
git add .
git commit -m "Beskrivelse av endringene"
git push origin main
```

Vercel vil automatisk bygge og deploye nye endringer!

## 🎨 Tilpasning for Produksjon

### 1. Oppdater kontaktinformasjon
Rediger `index.html` og endre:
- Navn i hero-seksjonen
- Kontaktinfo i footer
- Prosjektbeskrivelser

### 2. Endre bakgrunnsbilde
I `style.css`, endre URL i `body` background:
```css
background: 
    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
    url('DIN-BILDE-URL') 
    no-repeat center center fixed;
```

### 3. Tilpass farger
Endre CSS variabler i `:root`:
```css
:root {
    --primary-color: #DIN-FARGE;
    --accent-color: #DIN-AKSENT-FARGE;
    /* ... */
}
```

## 🔍 Testing

### 1. Lokal testing
```bash
npm run dev
```

### 2. Test på forskjellige enheter
- Mobil (Chrome DevTools)
- Tablet
- Desktop

### 3. Performance testing
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

## 🛠️ Feilsøking

### Vanlige problemer

#### 1. Bilder vises ikke
- Sjekk at URL-er er korrekte
- Bruk HTTPS URLs for produksjon

#### 2. Fonts lastes ikke
- Sjekk internettforbindelse
- Google Fonts kan være nede

#### 3. Vercel deployment feiler
- Sjekk at alle filer er committet
- Sjekk `vercel.json` konfigurasjon

### Debug tips
```bash
# Sjekk Git status
git status

# Sjekk remote repository
git remote -v

# Se commit historie
git log --oneline
```

## 📊 Analytics (Valgfritt)

### Google Analytics
Legg til i `<head>` i `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎉 Gratulerer!

Din futuristiske nettside er nå live! 🚀

- **GitHub**: `https://github.com/DITT-BRUKERNAVN/min-personlige-nettside`
- **Live Site**: `https://min-personlige-nettside-xxx.vercel.app`

## 📞 Support

Hvis du støter på problemer:
1. Sjekk [Vercel dokumentasjon](https://vercel.com/docs)
2. Sjekk [GitHub dokumentasjon](https://docs.github.com/)
3. Opprett en issue i GitHub repository

---

**Happy coding!** 🎨✨
