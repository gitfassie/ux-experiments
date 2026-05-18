# Repo Template

Starting point for new projects. Includes secret-scanning out of the box and a pre-configured `.gitignore` for the standard stack (Next.js, TypeScript, Supabase, Vercel).

## What is in this template

- **`.github/workflows/gitleaks.yml`** — A workflow that runs the Gitleaks secret scanner on every push and pull request. If anything that looks like an API key, token, or password ends up in a commit, the workflow fails and the commit shows a red cross on GitHub.
- **`.gitignore`** — Pre-configured to keep `.env.local`, `node_modules`, `.next`, build artifacts, and OS junk files out of Git.

## How to use this template

When creating a new repository on github.com, click **"Use this template"** at the top of this page and pick **"Create a new repository"**. GitHub copies all the files into the new repo automatically. The Secret Scan workflow starts running on the very first push.

If a repository is created somewhere else first (for example by AI Studio or another tool), you can manually copy `.github/workflows/gitleaks.yml` and `.gitignore` into that repo to get the same protection.

## Layered secret protection

This template is one of three layers that work together:

1. **Local pre-commit hook** — Gitleaks runs on this Mac before every commit (configured globally in `~/.git-hooks/pre-commit`).
2. **GitHub push protection** — Enabled at the account level. Blocks pushes that contain known secret formats from partners like AWS, Stripe, and Slack.
3. **This workflow** — Runs Gitleaks on GitHub's servers as a final net for anything that slipped past the first two.

## Customizing

If a real value gets falsely flagged, add its fingerprint to a `.gitleaksignore` file in the root of the repository. The fingerprint is shown in the Gitleaks output. Do not bypass the scanner with `--no-verify` as a routine — the whole point is to catch mistakes you didn't notice.
