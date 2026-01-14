# 🚀 GitHub Pages Hosting Guide (with Hostinger Domain)

This guide will walk you through hosting your **Reklamatic.ai** website on GitHub Pages and connecting your **Hostinger** domain.

I have already pre-configured your project for this! ✅

---

## 1. Preparation (Already Done)
I have automated the hard parts for you:
1. **Configured Next.js:** Added `output: 'export'` to `next.config.mjs`.
2. **Created Deployment Workflow:** Added `.github/workflows/nextjs.yml`. This tells GitHub to automatically build and deploy your site whenever you push code.

---

## 2. Push Code to GitHub
You need to upload your project to your new GitHub account.

1. **Create a New Repository** on [GitHub.com](https://github.com/new).
   - Name it `reklamatic-web` (or similar).
   - Select **Public** (Free GitHub Pages requires Public) or **Private** (if you urge to keep code hidden, but Pages is simpler with Public).
   - **Do NOT** initialize with README/gitignore (you already have them).

2. **Push your code** from your terminal:
   *(Run these commands in your project folder)*
   ```bash
   # Initialize git if not already done (skip if you already see a (main) or (master) branch)
   git init
   git add .
   git commit -m "Initial commit - Ready for deployment"

   # Link to your new GitHub repo (Replace YOUR_USERNAME with your actual GitHub username)
   git remote add origin https://github.com/YOUR_USERNAME/reklamatic-web.git
   git branch -M main
   git push -u origin main
   ```

---

## 3. Activate GitHub Pages
Once you push the code, the **Action** I created will start automatically.

1. Go to your repository on GitHub.
2. Click **Settings** (top right tab).
3. On the left sidebar, click **Pages**.
4. Under **"Build and deployment"**:
   - Source: Select **GitHub Actions** (This is crucial! Do not select "Deploy from a branch").
   - *Note: If you don't see "GitHub Actions", just wait a moment. The workflow I added usually sets this up automatically once it runs.*
5. Go to the **Actions** tab (top of page) to watch your build. When the `Deploy Next.js site to Pages` workflow turns **Green** ✅, your site is live!

---

## 4. Connect Hostinger Domain

Now, let's point `reklamatic.ai` to your new GitHub site.

### Step A: Configure GitHub
1. Go back to your Repository **Settings > Pages**.
2. Under **"Custom domain"**, enter: `www.reklamatic.ai` (or just `reklamatic.ai`).
3. Click **Save**.
4. GitHub will verify DNS (it will fail initially, that's normal).

### Step B: Configure Hostinger DNS
1. Log in to **Hostinger** -> **Domains** -> Manage your domain.
2. Go to **DNS / Name Servers**.
3. **Delete** any existing "A" records or "CNAME" records pointing to "Parking" or other IPs if you are not using them.
4. **Add these 4 "A" Records** (points root domain `@` to GitHub):
   - Type: `A` | Name: `@` | Points to: `185.199.108.153` | TTL: 3600
   - Type: `A` | Name: `@` | Points to: `185.199.109.153` | TTL: 3600
   - Type: `A` | Name: `@` | Points to: `185.199.110.153` | TTL: 3600
   - Type: `A` | Name: `@` | Points to: `185.199.111.153` | TTL: 3600
5. **Add one "CNAME" Record** (points `www` to your username):
   - Type: `CNAME` | Name: `www` | Points to: `YOUR_USERNAME.github.io` | TTL: 3600
   *(Replace YOUR_USERNAME with your GitHub username)*

### Step C: Verification (Crucial Step)
GitHub requires you to verify ownership. Add this **TXT Record** in Hostinger:
- **Type:** `TXT`
- **Name:** `_github-pages-challenge-mentorcem-dev` (Hostinger might only show/require `_github-pages-challenge-mentorcem-dev`, usually omitting `.reklamatic.ai`)
- **Value:** `f9ba03778c9a5c9e890a006c97be20`
- **TTL:** `300` (or default 14400)

---

## 5. Finalize
1. Wait 5-30 minutes for DNS to propagate.
2. Go back to **GitHub Settings > Pages**.
3. It should now say "DNS check successful".
4. Check the box **"Enforce HTTPS"** to secure your site.

🎉 **Done!** Your site will be live at `https://reklamatic.ai`.
