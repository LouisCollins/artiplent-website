# Artiplent Website

Statische one-pager voor **Artiplent VOF** — digitale weerbaarheid & AI training.

---

## Project openen

### Optie 1 — Direct openen (geen server nodig)

Dubbelklik op `index.html` of sleep het bestand naar je browser.

> Let op: afbeeldingen worden alleen correct geladen als je via een lokale server werkt (zie optie 2). Via `file://` kunnen sommige browsers externe resources blokkeren.

### Optie 2 — Via een lokale server (aanbevolen)

Met Python (standaard beschikbaar op macOS/Linux):

```bash
python3 -m http.server 8080
```

Open daarna: [http://localhost:8080](http://localhost:8080)

Of met Node.js (`npx` vereist):

```bash
npx serve .
```

---

## Foto's toevoegen

Voeg je afbeeldingen toe in de map `images/`:

| Bestandsnaam      | Gebruik                          |
|-------------------|----------------------------------|
| `images/raoul.jpg` | Portretfoto Raoul Ganga          |
| `images/louis.jpg` | Portretfoto Louis Collins        |
| `images/samen.jpg` | Gezamenlijke teamfoto (Over ons) |

De website toont een visuele placeholder zolang de bestanden nog niet aanwezig zijn.

---

## Deployen

### GitHub Pages

1. Maak een repository aan op GitHub (bijv. `artiplent-website`)
2. Push alle bestanden naar de `master` branch
3. Ga naar **Settings → Pages**
4. Kies als source: `Deploy from a branch` → `master` → `/ (root)`
5. Sla op — de site is live op `https://<jouwusernaam>.github.io/artiplent-website/`

```bash
git init
git checkout -b master
git add index.html images/
git commit -m "Initiële versie Artiplent website"
git remote add origin https://github.com/<jouwusernaam>/artiplent-website.git
git push -u origin master
```

### Netlify

1. Ga naar [netlify.com](https://netlify.com) en log in
2. Kies **Add new site → Deploy manually**
3. Sleep de projectmap (met `index.html`) naar het drop-zone
4. De site is direct live — je krijgt een `*.netlify.app` URL

Of via Git-koppeling (automatisch deployen bij elke push):

1. Koppel je GitHub repository aan Netlify
2. Build-commando: *(leeg laten)*
3. Publish directory: `.` (of de root)

---

## Projectstructuur

```
artiplent-website-2/
├── index.html          # Complete one-pager (HTML + CSS + JS inline)
├── images/
│   ├── .gitkeep        # Map bewaken in Git
│   ├── raoul.jpg       # Toe te voegen
│   ├── louis.jpg       # Toe te voegen
│   └── samen.jpg       # Toe te voegen
└── README.md
```

### Technische stack

- **HTML5** — semantische structuur
- **Tailwind CSS** — via Play CDN (geen build-stap nodig)
- **Google Fonts** — Inter + Playfair Display
- **Vanilla JS** — alleen voor mobiel menu + scroll-animaties

---

## Secties

| Sectie-id      | Inhoud                                    |
|----------------|-------------------------------------------|
| `#over-ons`    | Raoul Ganga & Louis Collins + teamfoto    |
| `#wat-we-doen` | Overzicht: Trainingen & Advies            |
| `#trainingen`  | 3 trainingen met duur en doelgroep        |
| `#advies`      | 4 adviesdiensten                          |
| `#contact`     | E-mail via Proton Mail (end-to-end)       |

---

## Contact

**artiplent@proton.me** — end-to-end versleuteld via Proton Mail
KvK: 90216342 · © 2026 Artiplent VOF
