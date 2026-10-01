# Jashvanth Portfolio (React)

The same portfolio, rebuilt with **Vite + React**. Layout, styling, animations and behaviour are unchanged;
the page is now split into components and the content lives in data files.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # serve the build locally
```

## Add your images

Copy your existing `assets/` folder (profile photos, project screenshots, company logos, CV PDF) into
`public/assets/`. The two education logos are already there. File names are used exactly as before, for example:

- `WhatsApp Image 2026-10-01 at 09.45.00.jpeg`, `13.jpeg`, `BalakirushnanJashvanth.pdf`
- `boffosys_logo.jpeg`, `logo_infiny.png`
- project images such as `Hotel Management.JPG`

`public/logo.svg` is the favicon (the navbar hexagon). Replace it with your own if you have one.

## Where to edit things

| What | File |
| --- | --- |
| Projects, filters, tech icons | `src/data/projects.js` |
| Experience cards | `src/data/experience.js` (use `**text**` for bold) |
| Education cards and logos | `src/data/education.js` |
| Tech grid and soft skills | `src/data/technologies.js` |
| Articles and research tabs | `src/data/articles.js` |
| Nav links, social links, EmailJS keys | `src/config.js` |
| Colours (dark and light theme) | top of `src/styles.css` |
| Hero rotating titles | `ROTATOR_ITEMS` in `src/components/Hero.jsx` |

## Structure

```
src/
  components/   Navbar, Hero, About, Experience, Education, Skills,
                Projects (+ ProjectModal), Articles, Contact, Footer, ...
  hooks/        useTheme, useReveal (scroll reveal), useScrollSpy (active nav link)
  data/         all portfolio content
  config.js     links, nav, EmailJS ids
  styles.css    your stylesheet (theme variables at the top)
```

## Old files you can delete

`index.html` (old), `script.js`, and the one-off Python patch scripts (`fix_*.py`, `script*.py`, `update_exp.py`).
