# Asconix Systems website

Static site for GitHub Pages. No build step, no dependencies, no third-party requests.

## Files

- `index.html`: the page (English by default, Norwegian toggle in the header)
- `styles.css`: all styling, built on the CI tokens
- `script.js`: contour animation in the hero, EN/NO language toggle, compact header, contact form
- `404.html`: not-found page
- `logo-full.svg`: primary logo with tagline (header, from 280 px wide)
- `logo.svg`: primary logo without tagline (header when scrolled or on small screens)
- `logo-dark.svg`: logo for dark backgrounds (footer, 404 page)
- `favicon.svg`: the mark, used as site icon
- `fonts/`: Outfit (headlines) and Inter (body text), self-hosted, with their licences
- `.nojekyll`: tells GitHub Pages to serve the files as they are

## Corporate identity

The site follows `asconix-ci` (brand guidelines v1.0).

- **Colours:** Teal `#076D6D` on light backgrounds, Teal Light `#2EC9BF` on dark, Slate `#58626C` and Slate Light `#9BA7B1` for secondary text, Night `#0D151B` as dark background. They are defined as variables at the top of `styles.css`.
- **Amber** `#E29E2C` appears only in the logo's top-left tile, as the guidelines require. It is not used for text, lines or buttons.
- **Fonts:** Outfit SemiBold for headlines, Inter for body text.
- **Logo:** the primary logo with tagline is shown at 280 px wide at the top of the page. Below that width, and once the page is scrolled, the version without tagline is used, as the minimum-size rules require.
- **Updating the logo:** copy the new files from `asconix-ci/logo/` over `logo-full.svg` (`asconix-logo-full.svg`), `logo.svg` (`asconix-logo.svg`), `logo-dark.svg` (`asconix-logo-dark.svg`) and `favicon.svg` (`asconix-mark.svg`).

## Publish on GitHub Pages

1. Create a repository and upload these files to the root of the `main` branch.
2. Open **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. The site goes live at `https://<user-or-org>.github.io/<repo>/` within a minute or two.

### Custom domain (for example asconix.com)

1. In **Settings > Pages**, enter the domain under **Custom domain**.
2. At your DNS provider, point the domain to GitHub Pages (see GitHub's documentation for the current A and CNAME records).
3. Tick **Enforce HTTPS** once the certificate is ready.

`404.html` uses paths starting with `/`, which is correct on a custom domain or a `<user>.github.io` repository. For a project site under `/<repo>/`, prefix those paths with `/<repo>`.

## Things to check before launch

- **Email address:** the contact address `info@asconix.com` is set in `index.html` (link and text) and in `script.js` (contact form). Change it in both places if it ever changes.
- **Copy:** the text describes common services in these three areas. Adjust the lists to what you actually offer, and add your organisation number to the footer if you want it shown.
- **Contact form:** GitHub Pages has no server, so the form opens the visitor's email app with the message filled in. For a form that sends directly, connect a service such as Formspree or Netlify Forms.
