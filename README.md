# Dynamics Days Africa 2027 — Conference Website

The official website for **Dynamics Days Africa 2027 (DDA 2027)**, the inaugural African edition of the international Dynamics Days conference series on chaos and nonlinear dynamics.

**Host:** Redeemer's University, Ede, Osun State, Nigeria.

---

## Project structure

```
dda2027/
├── index.html              Welcome / hero
├── topics.html             Areas of interest
├── speakers.html           Invited speakers
├── committee.html          LOC, Technical, Advisory committees
├── venue.html              Location and travel
├── dates.html              Important dates
├── registration.html       Fees and registration
├── submission.html         Abstract submission
├── sponsors.html           Sponsors
├── css/
│   └── style.css           Main stylesheet
├── js/
│   └── main.js             Navigation + Lorenz attractor animation
├── .nojekyll               Disables Jekyll on GitHub Pages
└── README.md               This file
```

Pure static HTML, CSS, and JavaScript. No build step. No dependencies beyond Google Fonts (loaded via CDN).

---

## Deploy to GitHub Pages

### Option 1: Deploy from the `main` branch

1. Create a new repository on GitHub, for example `dda-2027` or `dda2027.github.io`.

2. Push the contents of this folder to the repository:

   ```bash
   cd dda2027
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/dda-2027.git
   git push -u origin main
   ```

3. On GitHub, go to **Settings → Pages**, and under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** / folder: **/ (root)**
   - Click **Save**.

4. Your site will be published within a minute or two at `https://YOUR_USERNAME.github.io/dda-2027/` (or at `https://YOUR_USERNAME.github.io/` if you named the repo `YOUR_USERNAME.github.io`).

### Option 2: Deploy from the `gh-pages` branch

If you prefer to keep source code separate from published content, push the site files to a `gh-pages` branch and set the Pages source to that branch.

### Custom domain (optional)

To use a custom domain such as `dda2027.org`:

1. Add a file called `CNAME` at the repository root with your domain as the only content:

   ```
   dda2027.org
   ```

2. Configure your DNS provider with an `A` or `CNAME` record pointing to GitHub Pages. Instructions here: <https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site>.

---

## Local preview

You can preview the site locally with any static file server. For example:

```bash
# Python 3
python3 -m http.server 8000

# Node
npx serve

# Or just open index.html directly in your browser
```

Then open <http://localhost:8000> in your browser.

---

## Editing content

- **Text:** All page content lives directly in the HTML files. Search for the section you want to change and edit inline.
- **Committee members, speakers:** Edit the corresponding `.html` file and duplicate a `.person-card` block to add new entries.
- **Fees:** Edit the fee rows in `registration.html`.
- **Dates:** Edit the `.timeline-item` blocks in `dates.html`.
- **Colors, typography, spacing:** Edit CSS variables in the `:root` block at the top of `css/style.css`.

---

## Design notes

- **Palette:** Deep midnight navy (`#0A0E27`) with warm parchment text (`#F7F3E9`), vivid coral accent (`#FF6B35`), mint (`#40C9A2`), and saffron gold (`#FFD23F`).
- **Type:** Fraunces (display) + Inter (body) + JetBrains Mono (data and dates).
- **Signature element:** Animated Lorenz attractor SVG on the homepage, drawn client-side via JavaScript.
- **Accessibility:** Respects `prefers-reduced-motion`. Keyboard-navigable, mobile-responsive.

---

## License

Content © 2027 Dynamics Days Africa organizing committee.
Site code is free to reuse and adapt.
