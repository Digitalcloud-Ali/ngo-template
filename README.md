# Norge NGO Template

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

[🇬🇧 English](#english) | [🇳🇴 Norsk](#norsk)

---

## English

Modern, responsive single-page website template for humanitarian organizations with stunning 3D effects and animations.

### 📋 Table of Contents

- [Preview](#-preview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Customization](#-customization)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)
- [Developer](#-developer)

### 🎥 Preview

This template features a premium 3D slider with 4 customizable slides, smooth animations, particle effects, and glassmorphism design elements. Perfect for NGOs, charities, and humanitarian organizations looking to create an impactful online presence.

**Key Sections:**
- Hero slider with animated backgrounds
- About section with mission statement
- Programs showcase with 3D cards
- Team member profiles
- Donation forms
- Contact information
- Footer with social links

### 🚀 Features

#### Design & Layout
- **Single-page design** - Smooth scrolling navigation with section anchors
- **3D slider** - Premium hero slider with 4 fully customizable slides
- **Fully responsive** - Mobile-first design that works perfectly on all devices
- **Modern UI** - Clean, professional interface with attention to accessibility

#### Visual Effects
- **3D effects** - Advanced CSS transforms and perspectives
- **Particle system** - Dynamic background particles using particles.js
- **Animations** - Smooth scroll-triggered animations throughout
- **Glassmorphism** - Modern frosted glass effect on cards and overlays
- **Magnetic buttons** - Interactive hover effects on CTA buttons
- **Custom cursor trail** - Enhanced user interaction on desktop

#### Sections Included
- **Hero/Slider** - Eye-catching introduction with multiple slides
- **About** - Organization mission and vision
- **Programs** - Showcase your initiatives with beautiful cards
- **Team** - Meet the team section with profile cards
- **Donate** - Integrated donation call-to-action
- **Contact** - Contact form and information
- **Footer** - Social media links and credits

### 🛠 Tech Stack

**Frontend:**
- HTML5 - Semantic markup
- CSS3 - Modern styling with Grid, Flexbox, and CSS animations
- Vanilla JavaScript (ES6+) - No framework dependencies

**Libraries:**
- [Font Awesome 6.0](https://fontawesome.com/) - Icon system
- [Particles.js](https://vincentgarreau.com/particles.js/) - Particle effects
- [Google Fonts (Inter)](https://fonts.google.com/) - Typography

**Features:**
- CSS Custom Properties (CSS Variables) for easy theming
- CSS Grid & Flexbox for layout
- Intersection Observer API for scroll animations
- Transform & Perspective for 3D effects

### 📦 Quick Start

**Option 1: Direct Download**
1. Download the repository as ZIP
2. Extract the files
3. Open `index.html` in your browser
4. That's it! 🎉

**Option 2: Git Clone**
```bash
git clone https://github.com/Digitalcloud-Ali/ngo-template.git
cd ngo-template
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### 💻 Installation

#### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor (VS Code, Sublime Text, Atom, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

#### Local Development
No build process or dependencies required! Simply edit the files and refresh your browser.

**Optional: Use a local server for better development experience**
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### 🎨 Customization

#### Basic Customization

**1. Change Organization Name and Content**

Edit `index.html` to update:
- Organization name in navigation (`<nav class="navbar">`)
- Hero slider content (4 slides in `<section class="hero-slider">`)
- About section text
- Programs/initiatives
- Team member information
- Contact details

**2. Update Colors**

Edit `css/color-fixes.css` to customize the color scheme:

```css
/* Primary color (Navy blue) */
#1e3a8a - Navigation, headings, buttons

/* Accent color (Purple) */
#667eea - Hover effects, highlights, gradients

/* Additional colors */
#764ba2 - Secondary accent
#3b82f6 - Light blue accents
```

**3. Modify Images**

Replace placeholder images:
- Add your organization logo
- Update team member photos
- Change background images in slider

**4. Customize Fonts**

Currently using Inter from Google Fonts. To change:

```html
<!-- In index.html <head> -->
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600;700&display=swap" rel="stylesheet">
```

```css
/* In css/styles.css */
body {
  font-family: 'YourFont', sans-serif;
}
```

#### Advanced Customization

**Particle Effects**

Edit `js/particles.js` to modify particle behavior:
- Particle count
- Colors
- Speed and movement
- Interaction modes

**3D Slider**

Customize `css/slider-3d-enhanced.css`:
- Slide transition timing
- Animation styles
- Overlay opacity
- Button styles

**Add/Remove Sections**

The template uses semantic HTML5 sections. To add a new section:

```html
<section id="your-section" class="your-class">
    <div class="container">
        <h2 class="section-title">Your Title</h2>
        <!-- Your content -->
    </div>
</section>
```

Don't forget to add navigation link:
```html
<li class="nav-item">
    <a href="#your-section" class="nav-link">Your Section</a>
</li>
```

### 📁 Project Structure

```
ngo-template/
│
├── index.html                      # Main HTML file
│
├── css/
│   ├── styles.css                  # Base styles and layout
│   ├── slider-3d-enhanced.css      # 3D hero slider styles
│   ├── site-3d-effects.css         # 3D effects and animations
│   └── color-fixes.css             # Color scheme and theming
│
└── js/
    ├── script.js                   # Main JavaScript logic
    ├── slider-3d.js                # 3D slider functionality
    ├── site-3d-effects.js          # 3D effects and interactions
    └── particles.js                # Particle system configuration
```

**File Descriptions:**

- `index.html` - Single-page structure with all sections
- `css/styles.css` - Core styling, responsive design, components
- `css/slider-3d-enhanced.css` - Advanced 3D slider with transitions
- `css/site-3d-effects.css` - Glassmorphism, parallax, hover effects
- `css/color-fixes.css` - Color palette and theme customization
- `js/script.js` - Navigation, smooth scroll, form handling
- `js/slider-3d.js` - Slider controls and animations
- `js/site-3d-effects.js` - Scroll animations, magnetic buttons, cursor trail
- `js/particles.js` - Background particle configuration

### 🚀 Deployment

#### GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select branch (usually `main`) and root folder
4. Click "Save"
5. Your site will be live at `https://yourusername.github.io/ngo-template`

#### Netlify

1. Create account at [netlify.com](https://www.netlify.com/)
2. Click "New site from Git"
3. Connect your repository
4. Deploy (no build command needed)
5. Custom domain available in settings

#### Vercel

```bash
npm i -g vercel
vercel
```

Follow the prompts to deploy.

#### Traditional Web Hosting

Upload all files to your web hosting via FTP/SFTP:
- Upload entire folder to public_html or www directory
- Ensure `index.html` is in the root
- Set proper file permissions (644 for files, 755 for directories)

### 🌐 Browser Support

| Browser | Minimum Version | Notes |
|---------|----------------|-------|
| Chrome | 90+ | ✅ Full support |
| Firefox | 88+ | ✅ Full support |
| Safari | 14+ | ✅ Full support |
| Edge | 90+ | ✅ Full support |
| Opera | 76+ | ✅ Full support |

**Features requiring modern browsers:**
- CSS Grid & Flexbox
- CSS Custom Properties
- Intersection Observer API
- ES6+ JavaScript features
- CSS transforms and 3D perspectives

**Note:** Internet Explorer is not supported.

### 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

**Guidelines:**
- Follow existing code style and formatting
- Test on multiple browsers before submitting
- Update README if adding new features
- Keep changes focused and atomic

### ❓ Troubleshooting

**Q: The 3D effects are not working**
- A: Ensure you're using a modern browser that supports CSS transforms and perspectives
- Check browser console for JavaScript errors

**Q: Particles are not showing**
- A: Make sure `particles.js` is loaded correctly
- Check if JavaScript is enabled in your browser
- Verify the particle configuration in `js/particles.js`

**Q: Slider is not transitioning**
- A: Check if `slider-3d.js` is loaded after the DOM
- Verify no JavaScript errors in console
- Ensure slides have the correct HTML structure

**Q: Mobile menu not working**
- A: Check if `script.js` is properly loaded
- Verify hamburger icon event listeners are attached
- Check for conflicting CSS that might hide the menu

**Q: Custom fonts not loading**
- A: Ensure you have internet connection (fonts load from Google Fonts CDN)
- Check for any Content Security Policy issues
- Verify font link in `<head>` section

**Q: Colors are not changing after editing color-fixes.css**
- A: Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Ensure color-fixes.css is loaded after other stylesheets
- Check for CSS specificity issues

**Q: How do I add more slides to the slider?**
- A: Copy an existing slide div structure in `index.html`
- Update the slide content and styling
- The slider automatically detects new slides

**Need more help?** Open an issue on GitHub or contact the developer.

### 📄 License

MIT License

Copyright (c) 2024 Digitalcloud.no

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### 💼 Developer

**Designed & Developed by [Digitalcloud.no](https://digitalcloud.no)**

Professional web development services for NGOs and businesses.

📧 Contact: [hei@digitalcloud.no](mailto:hei@digitalcloud.no)
🌐 Website: [digitalcloud.no](https://digitalcloud.no)

---

**⭐ If you find this template useful, please consider giving it a star on GitHub!**

---

## Norsk

Moderne, responsiv single-page nettstedmal for humanitære organisasjoner med fantastiske 3D-effekter og animasjoner.

### 📋 Innholdsfortegnelse

- [Forhåndsvisning](#-forhåndsvisning)
- [Funksjoner](#-funksjoner)
- [Teknologi](#-teknologi)
- [Kom i gang](#-kom-i-gang)
- [Installasjon](#-installasjon)
- [Tilpasning](#-tilpasning)
- [Prosjektstruktur](#-prosjektstruktur)
- [Publisering](#-publisering)
- [Nettleserstøtte](#-nettleserstøtte)
- [Bidra](#-bidra)
- [Feilsøking](#-feilsøking)
- [Lisens](#-lisens)
- [Utvikler](#-utvikler)

### 🎥 Forhåndsvisning

Denne malen har en premium 3D-slider med 4 tilpassbare lysbilder, glatte animasjoner, partikkeleffekter og glassmorfisme-designelementer. Perfekt for frivillige organisasjoner, veldedige organisasjoner og humanitære organisasjoner som ønsker å skape en virkningsfull nettilstedeværelse.

**Hovedseksjoner:**
- Hero-slider med animerte bakgrunner
- Om-seksjon med visjon og misjon
- Programoversikt med 3D-kort
- Teammedlemsprofiler
- Donasjonsskjemaer
- Kontaktinformasjon
- Footer med sosiale lenker

### 🚀 Funksjoner

#### Design & Layout
- **Single-page design** - Jevn rullenavigasjon med seksjonsanker
- **3D-slider** - Premium hero-slider med 4 fullt tilpassbare lysbilder
- **Fullt responsiv** - Mobile-first design som fungerer perfekt på alle enheter
- **Moderne UI** - Rent, profesjonelt grensesnitt med fokus på tilgjengelighet

#### Visuelle Effekter
- **3D-effekter** - Avanserte CSS-transformasjoner og perspektiver
- **Partikkelsystem** - Dynamiske bakgrunnspartikler ved bruk av particles.js
- **Animasjoner** - Glatte scroll-utløste animasjoner gjennomgående
- **Glassmorfisme** - Moderne frosted glass-effekt på kort og overlegg
- **Magnetiske knapper** - Interaktive hover-effekter på CTA-knapper
- **Tilpasset musespor** - Forbedret brukerinteraksjon på desktop

#### Inkluderte Seksjoner
- **Hero/Slider** - Iøynefallende introduksjon med flere lysbilder
- **Om oss** - Organisasjonens misjon og visjon
- **Programmer** - Vis dine initiativer med vakre kort
- **Team** - Møt teamet-seksjon med profilkort
- **Doner** - Integrert donasjons-oppfordring
- **Kontakt** - Kontaktskjema og informasjon
- **Footer** - Sosiale medier-lenker og krediteringer

### 🛠 Teknologi

**Frontend:**
- HTML5 - Semantisk markup
- CSS3 - Moderne styling med Grid, Flexbox og CSS-animasjoner
- Vanilla JavaScript (ES6+) - Ingen rammeverk-avhengigheter

**Biblioteker:**
- [Font Awesome 6.0](https://fontawesome.com/) - Ikonsystem
- [Particles.js](https://vincentgarreau.com/particles.js/) - Partikkeleffekter
- [Google Fonts (Inter)](https://fonts.google.com/) - Typografi

**Funksjoner:**
- CSS Custom Properties (CSS-variabler) for enkel tematisering
- CSS Grid & Flexbox for layout
- Intersection Observer API for scroll-animasjoner
- Transform & Perspective for 3D-effekter

### 📦 Kom i gang

**Alternativ 1: Direkte nedlasting**
1. Last ned repository som ZIP
2. Pakk ut filene
3. Åpne `index.html` i nettleseren din
4. Ferdig! 🎉

**Alternativ 2: Git Clone**
```bash
git clone https://github.com/Digitalcloud-Ali/ngo-template.git
cd ngo-template
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### 💻 Installasjon

#### Forutsetninger
- En moderne nettleser (Chrome, Firefox, Safari eller Edge)
- En teksteditor (VS Code, Sublime Text, Atom, etc.)
- Grunnleggende kunnskap om HTML, CSS og JavaScript

#### Lokal Utvikling
Ingen byggeprosess eller avhengigheter kreves! Bare rediger filene og oppdater nettleseren.

**Valgfritt: Bruk en lokal server for bedre utviklingsopplevelse**
```bash
# Ved bruk av Python
python -m http.server 8000

# Ved bruk av Node.js
npx http-server -p 8000

# Ved bruk av PHP
php -S localhost:8000
```

Besøk deretter `http://localhost:8000` i nettleseren din.

### 🎨 Tilpasning

#### Grunnleggende Tilpasning

**1. Endre Organisasjonsnavn og Innhold**

Rediger `index.html` for å oppdatere:
- Organisasjonsnavn i navigasjon (`<nav class="navbar">`)
- Hero-slider innhold (4 lysbilder i `<section class="hero-slider">`)
- Om oss-seksjonstekst
- Programmer/initiativer
- Teammedlemsinformasjon
- Kontaktdetaljer

**2. Oppdater Farger**

Rediger `css/color-fixes.css` for å tilpasse fargepaletten:

```css
/* Primærfarge (Marineblå) */
#1e3a8a - Navigasjon, overskrifter, knapper

/* Aksentfarge (Lilla) */
#667eea - Hover-effekter, utheving, gradienter

/* Ytterligere farger */
#764ba2 - Sekundær aksent
#3b82f6 - Lyseblå aksenter
```

**3. Endre Bilder**

Erstatt plassholder-bilder:
- Legg til din organisasjons logo
- Oppdater teammedlemsbilder
- Endre bakgrunnsbilder i slider

**4. Tilpass Fonter**

Bruker for øyeblikket Inter fra Google Fonts. For å endre:

```html
<!-- I index.html <head> -->
<link href="https://fonts.googleapis.com/css2?family=DinFont:wght@300;400;600;700&display=swap" rel="stylesheet">
```

```css
/* I css/styles.css */
body {
  font-family: 'DinFont', sans-serif;
}
```

#### Avansert Tilpasning

**Partikkeleffekter**

Rediger `js/particles.js` for å endre partikkelatferd:
- Partikkelantall
- Farger
- Hastighet og bevegelse
- Interaksjonsmoduser

**3D-Slider**

Tilpass `css/slider-3d-enhanced.css`:
- Lysbildeovergang-timing
- Animasjonsstiler
- Overlegg-opasitet
- Knappestiler

**Legg til/Fjern Seksjoner**

Malen bruker semantisk HTML5-seksjoner. For å legge til en ny seksjon:

```html
<section id="din-seksjon" class="din-klasse">
    <div class="container">
        <h2 class="section-title">Din Tittel</h2>
        <!-- Ditt innhold -->
    </div>
</section>
```

Ikke glem å legge til navigasjonslenke:
```html
<li class="nav-item">
    <a href="#din-seksjon" class="nav-link">Din Seksjon</a>
</li>
```

### 📁 Prosjektstruktur

```
ngo-template/
│
├── index.html                      # Hoved HTML-fil
│
├── css/
│   ├── styles.css                  # Basisstiler og layout
│   ├── slider-3d-enhanced.css      # 3D hero-slider stiler
│   ├── site-3d-effects.css         # 3D-effekter og animasjoner
│   └── color-fixes.css             # Fargepalett og tematisering
│
└── js/
    ├── script.js                   # Hoved JavaScript-logikk
    ├── slider-3d.js                # 3D-slider funksjonalitet
    ├── site-3d-effects.js          # 3D-effekter og interaksjoner
    └── particles.js                # Partikkelsystem-konfigurasjon
```

**Filbeskrivelser:**

- `index.html` - Single-page struktur med alle seksjoner
- `css/styles.css` - Kjernestiling, responsivt design, komponenter
- `css/slider-3d-enhanced.css` - Avansert 3D-slider med overganger
- `css/site-3d-effects.css` - Glassmorfisme, parallax, hover-effekter
- `css/color-fixes.css` - Fargepalett og tema-tilpasning
- `js/script.js` - Navigasjon, jevn scroll, skjemahåndtering
- `js/slider-3d.js` - Slider-kontroller og animasjoner
- `js/site-3d-effects.js` - Scroll-animasjoner, magnetiske knapper, musespor
- `js/particles.js` - Bakgrunnspartikkel-konfigurasjon

### 🚀 Publisering

#### GitHub Pages

1. Gå til repository-innstillingene dine
2. Naviger til "Pages"-seksjonen
3. Velg branch (vanligvis `main`) og rotmappe
4. Klikk "Save"
5. Nettstedet ditt vil være live på `https://dittbrukernavn.github.io/ngo-template`

#### Netlify

1. Opprett konto på [netlify.com](https://www.netlify.com/)
2. Klikk "New site from Git"
3. Koble til repository
4. Deploy (ingen build-kommando nødvendig)
5. Tilpasset domene tilgjengelig i innstillinger

#### Vercel

```bash
npm i -g vercel
vercel
```

Følg instruksjonene for å publisere.

#### Tradisjonell Webhotell

Last opp alle filer til webhotellet ditt via FTP/SFTP:
- Last opp hele mappen til public_html eller www-katalogen
- Sørg for at `index.html` er i roten
- Sett riktige filtillatelser (644 for filer, 755 for kataloger)

### 🌐 Nettleserstøtte

| Nettleser | Minimumsversjon | Notater |
|-----------|----------------|---------|
| Chrome | 90+ | ✅ Full støtte |
| Firefox | 88+ | ✅ Full støtte |
| Safari | 14+ | ✅ Full støtte |
| Edge | 90+ | ✅ Full støtte |
| Opera | 76+ | ✅ Full støtte |

**Funksjoner som krever moderne nettlesere:**
- CSS Grid & Flexbox
- CSS Custom Properties
- Intersection Observer API
- ES6+ JavaScript-funksjoner
- CSS-transformasjoner og 3D-perspektiver

**Merk:** Internet Explorer støttes ikke.

### 🤝 Bidra

Bidrag er velkomne! Slik kan du bidra:

1. **Fork repository**
2. **Opprett en feature branch** (`git checkout -b feature/fantastisk-funksjon`)
3. **Commit endringene dine** (`git commit -m 'Legg til fantastisk funksjon'`)
4. **Push til branchen** (`git push origin feature/fantastisk-funksjon`)
5. **Åpne en Pull Request**

**Retningslinjer:**
- Følg eksisterende kodestil og formatering
- Test på flere nettlesere før innsending
- Oppdater README hvis du legger til nye funksjoner
- Hold endringer fokuserte og atomære

### ❓ Feilsøking

**Sp: 3D-effektene fungerer ikke**
- S: Forsikre deg om at du bruker en moderne nettleser som støtter CSS-transformasjoner og perspektiver
- Sjekk nettleserkonsollet for JavaScript-feil

**Sp: Partikler vises ikke**
- S: Forsikre deg om at `particles.js` lastes riktig inn
- Sjekk om JavaScript er aktivert i nettleseren din
- Verifiser partikkelkonfigurasjonen i `js/particles.js`

**Sp: Slider går ikke over**
- S: Sjekk om `slider-3d.js` lastes inn etter DOM
- Verifiser ingen JavaScript-feil i konsollen
- Forsikre deg om at lysbildene har riktig HTML-struktur

**Sp: Mobilmeny fungerer ikke**
- S: Sjekk om `script.js` er riktig lastet inn
- Verifiser at hamburger-ikon event listeners er tilkoblet
- Sjekk for CSS-konflikter som kan skjule menyen

**Sp: Tilpassede fonter lastes ikke inn**
- S: Forsikre deg om at du har internettforbindelse (fonter lastes fra Google Fonts CDN)
- Sjekk for eventuelle Content Security Policy-problemer
- Verifiser fontlenke i `<head>`-seksjonen

**Sp: Farger endres ikke etter redigering av color-fixes.css**
- S: Tøm nettleserbuffer (Ctrl+Shift+R eller Cmd+Shift+R)
- Forsikre deg om at color-fixes.css lastes etter andre stilark
- Sjekk for CSS-spesifisitetsproblemer

**Sp: Hvordan legger jeg til flere lysbilder i slideren?**
- S: Kopier en eksisterende lysbildestruktur i `index.html`
- Oppdater lysbildeinnhold og styling
- Slideren oppdager automatisk nye lysbilder

**Trenger mer hjelp?** Åpne en issue på GitHub eller kontakt utvikleren.

### 📄 Lisens

MIT-lisens

Copyright (c) 2024 Digitalcloud.no

Tillatelse gis herved, gratis, til enhver person som skaffer seg en kopi
av denne programvaren og tilhørende dokumentasjonsfiler ("Programvaren"), til å håndtere
Programvaren uten begrensning, inkludert uten begrensning rettighetene
til å bruke, kopiere, endre, slå sammen, publisere, distribuere, underlisensiere og/eller selge
kopier av Programvaren, og til å tillate personer som Programvaren er
levert til å gjøre det, underlagt følgende betingelser:

Ovennevnte opphavsrettighetsmelding og denne tillatelseserklæringen skal inkluderes i alle
kopier eller vesentlige deler av Programvaren.

PROGRAMVAREN LEVERES "SOM DEN ER", UTEN GARANTI AV NOE SLAG, UTTRYKKELIG ELLER
UNDERFORSTÅTT, INKLUDERT MEN IKKE BEGRENSET TIL GARANTIER OM SALGBARHET,
EGNETHET FOR ET BESTEMT FORMÅL OG IKKE-KRENKELSE. I INGEN TILFELLER SKAL
FORFATTERNE ELLER OPPHAVSRETTSHAVERNE VÆRE ANSVARLIGE FOR NOEN KRAV, SKADER ELLER ANDRE
ANSVAR, ENTEN I EN KONTRAKTSAKSJON, TORT ELLER PÅ ANNEN MÅTE, SOM OPPSTÅR FRA,
UT AV ELLER I FORBINDELSE MED PROGRAMVAREN ELLER BRUKEN ELLER ANDRE FORHOLD I
PROGRAMVAREN.

### 💼 Utvikler

**Designet & Utviklet av [Digitalcloud.no](https://digitalcloud.no)**

Profesjonelle webutviklingstjenester for frivillige organisasjoner og bedrifter.

📧 Kontakt: [hei@digitalcloud.no](mailto:hei@digitalcloud.no)
🌐 Nettsted: [digitalcloud.no](https://digitalcloud.no)

---

**⭐ Hvis du synes denne malen er nyttig, vennligst vurder å gi den en stjerne på GitHub!**
