# CourtEdge — NBA Playoff Analytics & Betting Site

A professional multi-page website for NBA playoff analytics, standings, betting insights, and a full bet tracker app.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Home — hero, live standings, playoff leaders, Tableau embed, YouTube |
| `standings.html` | Full playoff bracket with records and championship odds |
| `resume.html` | HTML résumé with education, experience, skills, awards |
| `scratch.html` | From-scratch page — no framework, custom CSS, YouTube, Tableau |
| `app/index.html` | Bet Tracker single-page app with odds calculator and P/L chart |

## CSS Files

| File | Description |
|------|-------------|
| `css/main.css` | Site-wide layout, typography, nav, hero, cards, footer |
| `css/theme.css` | Color system, badge variants, table styles, form inputs |
| `css/scratch.css` | Scratch page only — built entirely from scratch, no framework |

## Data Strategy

All data is either:
1. **Hardcoded static JSON** — 2024-25 playoff teams/records (public info), seeded into `js/nba-data.js`
2. **LocalStorage** — Bet Tracker saves all bets to the browser locally, no backend required
3. **Tableau Public embed** — free embedded visualization, no account required to view
4. **YouTube iframe** — public embed, no API key required

No paid APIs. No accounts. No backend. Fully static — works perfectly on GitHub Pages.

## Deploy to GitHub Pages

### Option 1: Automatic (GitHub Actions — recommended)
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **GitHub Actions**
4. Push any commit — the workflow in `.github/workflows/deploy.yml` handles the rest

### Option 2: Manual
1. Push this repo to GitHub  
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch**
4. Select **main** branch, **/ (root)** folder
5. Click Save — your site will be live at `https://yourusername.github.io/repo-name`

## Customize

### Update your name on the résumé
Open `resume.html` and search for `Your Name` — replace with your actual name.

### Update the profile initials
In `resume.html`, change `YN` in the `.profile-avatar` div to your initials.

### Change the YouTube video
In `index.html` and `scratch.html`, replace the YouTube embed src with your preferred video:
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ...>
```

### Add a real Tableau embed
1. Find a visualization on [Tableau Public](https://public.tableau.com/app/discover)
2. Click Share → Copy Embed Code
3. Replace the `<object>` section inside the `tableauPlaceholder` divs in `index.html` and `scratch.html`

### Swap NBA data
Edit `js/nba-data.js` — the `PLAYOFF_TEAMS` and `PLAYOFF_LEADERS` arrays are plain JavaScript objects you can update each round.

## File Structure

```
nba-betting-site/
├── index.html           ← Home page
├── standings.html       ← Playoff standings
├── resume.html          ← HTML résumé
├── scratch.html         ← Scratch page (no framework)
├── css/
│   ├── main.css         ← Custom CSS #1 (layout & components)
│   ├── theme.css        ← Custom CSS #2 (color system & tokens)
│   └── scratch.css      ← Custom CSS #3 (scratch page only)
├── js/
│   ├── main.js          ← Site utilities (nav, scroll, observer)
│   └── nba-data.js      ← NBA data rendering (public data)
├── app/
│   └── index.html       ← Bet Tracker app (self-contained)
├── .github/
│   └── workflows/
│       └── deploy.yml   ← GitHub Pages auto-deploy
└── README.md
```

## Assignment Checklist

- [x] Professional appearance (no bootstrap, custom design system)
- [x] GitHub Pages deployable (static, no backend)
- [x] No broken links or images
- [x] HTML résumé with education, work experience, skills, awards
- [x] From-scratch page (`scratch.html`) with:
  - [x] Ordered list containing unordered lists
  - [x] Image not from a theme
  - [x] Embedded YouTube video
  - [x] On-page anchor links (`#top`, `#why-nba`, `#film-room`, etc.)
  - [x] Custom background color/image
  - [x] Custom stylesheet (`css/scratch.css`) with 4+ style definitions, font color, font family, 3+ divs
  - [x] Live interactive Tableau embed
  - [x] Navigation back to professional pages
- [x] Web app (`app/index.html`):
  - [x] Single-page (styles, HTML, scripts all in one file)
  - [x] Linked from scratch page
  - [x] Bet tracker with log, odds calculator, P/L chart
- [x] Two custom CSS files (`main.css`, `theme.css`) + scratch CSS
- [x] YouTube video embedded
- [x] Tableau visualization embedded
