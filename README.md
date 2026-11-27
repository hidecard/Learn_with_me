# Learn_with_me

**မြန်မာဘာသာဖြင့် Web Development ကို အပြန်အလှန် လေ့လာနိုင်သော သင်ခန်းစာများ။** This project is a single-page, interactive web development learning guide written primarily in Burmese.

**Live website:** [https://learnwithme.arkaryan.net/](https://learnwithme.arkaryan.net/)

## What’s inside

The docs include guided lessons and editable, runnable examples for:

- HTML and CSS fundamentals
- Tailwind CSS
- JavaScript
- Git and GitHub
- PHP and MySQL
- Laravel and REST APIs
- React
- Dart and Flutter
- Browser Developer Tools and debugging
- Web security: XSS, SQL injection, CSRF, sessions, secrets and HTTPS
- Deployment, GitHub Pages, environment configuration and CI/CD
- Dedicated Continuous Integration and Delivery workflows
- Performance measurement, asset optimization and accessibility

The course presents 2,702 lessons across 35 topics after the supplementary curriculum loads. The HTML file contains 2,460 lesson articles, with additional lessons supplied by `extra-lessons.js`. Use the built-in topic navigation and search to find a lesson. Many examples can be edited, run, copied, and previewed in the page. The layout supports mobile screens and light/dark system themes. Some previews are browser-based simulations (for example, terminal, database, framework, and API behavior), not live backends or actual command-line environments; use the lesson's instructions to try those tools in their real environments.

## Run it

No build step or package installation is required. Download or clone this repository, then open `index.html` in a modern browser.

```bash
git clone https://github.com/hidecard/Learn_with_me.git
cd Learn_with_me
```

You can also serve the folder locally if your browser restricts local-file features:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

To begin, select **Start learning** on the welcome screen, then choose a topic and lesson. Use the lesson search to find a keyword across topics. In supported examples, edit the code and choose **Run** to see its output; **Copy** copies the example. Simulated previews are illustrative and do not replace running the relevant database, server, shell, or framework locally.

## Project files

- `index.html` — complete interactive learning site, including all lesson content, topic tabs and navigation markup
- `script.js` — site interactions and example preview behavior
- `extra-lessons.js` — supplementary lesson content and behavior
- `learning-paths.js` — guided learning-path definitions
- `styles.css` — styles used by the site
- `favicon.png` and `og-preview.jpg` — site icon and 1200 × 630 social-sharing preview
- `robots.txt` and `sitemap.xml` — crawler access guidance and the canonical homepage URL
- `codexa-mm-logo-black-transparent.png` and `codexa-mm-logo-transparent.png` — repository logo image assets
- `README.md` — project overview and usage instructions
- `CONTRIBUTING.md` — Burmese/English contribution guide
- `scripts/validate_repo.py` — standard-library validation for lesson structure, navigation, counts, learning-path targets, SEO metadata, and crawler files; also checks JavaScript syntax when Node.js is available
- `.github/workflows/validate.yml` — GitHub Actions workflow that runs the validator

## Language

The learning content and interface are primarily in Burmese (မြန်မာဘာသာ), with English technical terms and code examples.

## Contributing

Suggestions, corrections, and beginner-friendly lesson improvements are welcome. Please open an issue or submit a pull request with a clear description of the change.
See [CONTRIBUTING.md](CONTRIBUTING.md) for content standards, safe contribution steps, and checks.

## SEO and social previews

The HTML page includes a descriptive title, page description, topic keywords, Open Graph/Twitter preview metadata, a favicon, and the canonical URL for the live website: <https://learnwithme.arkaryan.net/>. `robots.txt` and `sitemap.xml` are provided at the repository root for static hosting.
