# GitHub Actions CI/CD Assignment

A small Task Tracker website demonstrating:
- **CI (Continuous Integration):** GitHub Actions installs the project, runs automated tests, and builds the site.
- **CD (Continuous Deployment):** after tests pass on `main`, the workflow deploys the site to GitHub Pages.
- **Automated tests:** five tests using Node.js's built-in test runner (no test framework dependency).

## Run locally

You need Node.js 20 or newer.

```bash
npm ci
npm test
npm run build
```

The production website is generated in the `dist/` folder. Open `dist/index.html` in a browser to preview it.

## Upload to GitHub

1. Create a new empty repository on GitHub. For example: `github-actions-ci-deploy`.
2. Extract this ZIP file.
3. Open a terminal in the extracted project folder and run:

```bash
git init
git add .
git commit -m "Add task tracker with CI/CD"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your own repository URL.

## Enable GitHub Pages

1. Open your repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open the **Actions** tab and watch the `CI and Deploy` workflow.
5. When it finishes successfully, open **Settings → Pages** to find your website URL.

## What the workflow does

```text
Push to main / Pull request
          |
          v
     Install Node.js
          |
          v
       npm ci
          |
          v
      npm test
          |
          v
     npm run build
          |
          +---- Pull request: stop after CI
          |
          v
  Upload GitHub Pages artifact
          |
          v
    Deploy to GitHub Pages
```

The deploy job depends on the test job (`needs: test`), so deployment cannot happen if tests fail. Pull requests run CI but do not deploy. A push to `main` runs tests and deploys if they pass.

## Files to point out in your assignment

- `.github/workflows/ci-cd.yml` — the GitHub Actions pipeline.
- `tests/task-utils.test.js` — automated unit tests.
- `scripts/build.js` — creates the deployable website in `dist/`.
- `src/task-utils.js` — application logic covered by tests.
