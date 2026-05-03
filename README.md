# Belle Wong Resume Landing Page

Static one-page resume landing page for a Cathay Pacific Senior Airport Lead application in Brisbane.

## Project Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── airport-operations-hero.jpg
    └── airport-operations-hero.png
```

## Run Locally

Open `index.html` directly in a browser, or run a local static server:

```bash
python3 -m http.server 4173
```

Then visit:

```text
http://127.0.0.1:4173/
```

## Upload to GitHub

```bash
git init
git add .
git commit -m "Add Belle Wong resume landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## Deploy to Vercel

1. Sign in to Vercel.
2. Choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the framework preset as **Other** or **Static**.
5. Leave build command empty.
6. Leave output directory empty or set it to the project root.
7. Deploy.

## Update Content Later

- Edit page copy in `index.html`.
- Edit colours, spacing, layout, and responsive rules in `styles.css`.
- Replace the hero image by saving a new image at `assets/airport-operations-hero.jpg`.
- The contact section intentionally avoids publishing phone number, full street address, and referee details.
- If you later want a public email link, update the `Contact details` block in `index.html`.
