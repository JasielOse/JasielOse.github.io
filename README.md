# JasielOse.github.io
# HerGame ⚽

A SofaScore-style live scores app, built exclusively for **women's football**.

Live scores, fixtures, standings, top scorers, match details, and AI-powered player/match analysis — all in one dark, editorial interface designed for the women's game.

## Features

- **Live scores feed** — filter by All / Live / Finished / Upcoming
- **League coverage** — UEFA Women's Champions League, WSL, Liga F, Frauen-Bundesliga, Division 1 Féminine, NWSL, Nigeria WFL, and more
- **Match detail view** — timeline of goals/cards, match stats (possession, shots, corners), and full lineups
- **Player profiles** — season stats, career history, international caps
- **✨ AI Analysis** — match breakdowns and player profiles generated live via the Claude API
- **Standings & top scorers** — sidebar widgets updated per league

## Tech

Single-file app — pure HTML, CSS, and vanilla JavaScript. No build step, no dependencies.

- `Bebas Neue` for scores and display type
- `DM Sans` for body text
- `JetBrains Mono` for stats and numerical data
- AI analysis calls `api.anthropic.com/v1/messages` (Claude Sonnet)

## Running locally

Just open `index.html` in a browser. That's it.

```bash
git clone https://github.com/yourusername/hergame.git
cd hergame
open index.html
```

## Hosting on GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to your main branch, root folder
4. Your app will be live at `https://yourusername.github.io/hergame`

## Roadmap

- [ ] Real-time data feed (currently uses sample fixtures)
- [ ] Search functionality
- [ ] Team profile pages
- [ ] News section
- [ ] Push notifications for live goals

---

Built with [Claude](https://claude.ai).
