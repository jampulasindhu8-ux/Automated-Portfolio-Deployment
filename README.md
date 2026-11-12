# 🚀 Automated Portfolio Website & CI/CD Deployment

[![CI/CD Portfolio Automated Deployment](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blueviolet?style=for-the-badge&logo=github-actions)](https://github.com/features/actions)
[![Hosting](https://img.shields.io/badge/Hosted%20On-GitHub%20Pages-success?style=for-the-badge&logo=github)](https://pages.github.com/)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-emerald?style=for-the-badge)]()

A modern, responsive, high-performance personal portfolio website built for **Sindhuja**, a **B.Tech Computer Science and Engineering** undergraduate at **AVN Institute of Engineering and Technology, Hyderabad** (Class of 2028).

This project highlights modern frontend engineering and a complete, production-grade **DevOps automation pipeline** using **GitHub Actions** and **GitHub Pages**.

---

## 📋 Table of Contents
1. [Key Features](#-key-features)
2. [Project Structure](#-project-structure)
3. [Technologies Used](#-technologies-used)
4. [Local Development Setup](#-local-development-setup)
5. [DevOps Automation & CI/CD Workflow](#-devops-automation--cicd-workflow)
6. [Step-by-Step GitHub Setup & Deployment Guide](#-step-by-step-github-setup--deployment-guide)
7. [Enabling GitHub Pages in Repository Settings](#-enabling-github-pages-in-repository-settings)
8. [Verifying Deployment & Viewing Live Website](#-verifying-deployment--viewing-live-website)
9. [Customization Guide](#-customization-guide)

---

## ✨ Key Features

- **Modern Dark Theme with Gradients**: Tailored aesthetic utilizing deep indigo/dark-space backgrounds with neon purple (`#8b5cf6`), cyan (`#06b6d4`), and blue accents.
- **Dynamic Typing Animation**: Interactive hero typing effect showcasing core engineering identities.
- **Glassmorphism UI**: High-end backdrop filters, translucent borders, and subtle glow shadows.
- **Full Responsiveness**: Optimized across mobile phones, tablets, laptops, and ultra-wide screens with a fluid hamburger navigation drawer.
- **Interactive Skills Filter**: Real-time category filtering (Languages, DevOps & Cloud, Web Development, Core CS).
- **Flagship Project Deep Dive**: Detailed presentation of **AI CareerMate**, accompanied by **DevOps Pipeline Architecture**, **AlgoVisualizer**, and **Student Performance Tracker**.
- **Official Resume (PDF) & Online CV Modal**: Direct download button linked to an ATS-friendly PDF (`assets/Sindhuja_Resume.pdf`) and an interactive in-browser modal with print support.
- **Client-Side Validated Contact Form**: Real-time regex validation with custom toast notifications.
- **Production CI/CD Automation**: GitHub Actions workflow validating code syntax and automatically deploying to GitHub Pages on every push to `main`.

---

## 📁 Project Structure

```text
sindhuja-portfolio/
│
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD Pipeline
│
├── assets/
│   ├── favicon.svg                 # Glowing branded SVG favicon
│   ├── avatar.svg                  # Modern developer avatar graphic
│   ├── Sindhuja_Resume.pdf         # Official PDF resume file
│   ├── resume.pdf                  # Resume alias for compatibility
│   └── projects/
│       ├── ai-careermate.svg       # Architecture graphic for AI CareerMate
│       ├── devops-pipeline.svg     # CI/CD visual flowchart
│       ├── algo-visualizer.svg     # Sorting visualizer illustration
│       └── student-tracker.svg     # Analytics & attendance dashboard illustration
│
├── index.html                      # Semantic HTML5 single-page application
├── style.css                       # Modern dark-mode stylesheet & animations
├── script.js                       # Interactive client-side JavaScript
└── README.md                       # Comprehensive setup & deployment guide
```

---

## 🛠️ Technologies Used

### Frontend & Design
- **HTML5**: Semantic tags, accessibility (a11y), Open Graph meta tags.
- **CSS3**: CSS Custom Properties (Variables), Flexbox, CSS Grid, Glassmorphism, Keyframe animations, Print stylesheet.
- **JavaScript (ES6+)**: Async DOM manipulation, event delegation, regex validation, modal controls.
- **Font Awesome 6**: Scalable vector icons.
- **Google Fonts**: Inter & JetBrains Mono typography.

### DevOps & Cloud Infrastructure
- **Git**: Distributed version control.
- **GitHub**: Source code repository and issue tracking.
- **GitHub Actions**: Automated CI/CD pipeline (`.github/workflows/deploy.yml`).
- **GitHub Pages**: Zero-cost, high-availability static hosting with SSL certificate.

---

## 💻 Local Development Setup

To test or view the portfolio locally on your computer:

### Option 1: Using Python's Built-in HTTP Server (Recommended)
Open a terminal (PowerShell or Bash) in the project folder and run:

```bash
# Navigate to the portfolio directory
cd C:\sindhuja-portfolio

# Start a local web server on port 8000
python -m http.server 8000
```
Then open your browser and navigate to:
👉 **`http://localhost:8000`**

### Option 2: Using Node.js (npx serve)
```bash
cd C:\sindhuja-portfolio
npx serve .
```

### Option 3: Direct File Opening
You can simply double-click `index.html` to open it in Google Chrome, Microsoft Edge, or Mozilla Firefox.

---

## ⚙️ DevOps Automation & CI/CD Workflow

The continuous delivery pipeline is defined in `.github/workflows/deploy.yml`.

### Workflow Stages:
1. **Trigger Condition**:
   - Executes automatically on any `push` event to the `main` branch.
   - Supports manual execution via `workflow_dispatch` button in the GitHub Actions tab.

2. **Job 1: `validate` (Continuous Integration)**:
   - **Checkout**: Pulls repository code using `actions/checkout@v4`.
   - **File Integrity**: Verifies all required assets, HTML, CSS, JS, and PDF files exist.
   - **JavaScript Validation**: Runs syntax check via `node --check script.js`.
   - **HTML & CSS Verification**: Checks semantic HTML5 doctype, viewport tags, and balanced CSS curly brackets.
   - **Summary Report**: Writes an audit report directly into the GitHub Actions step summary.

3. **Job 2: `deploy` (Continuous Deployment)**:
   - **Permissions**: Requires explicit scoped tokens (`pages: write`, `id-token: write`, `contents: read`).
   - **Configure Pages**: Initializes deployment environment via `actions/configure-pages@v5`.
   - **Upload Artifact**: Packages site root via `actions/upload-pages-artifact@v3`.
   - **Deploy**: Deploys artifact to production via `actions/deploy-pages@v4`.
   - **Live Output**: Publishes live website URL directly to the pipeline logs.

---

## 🚀 Step-by-Step GitHub Setup & Deployment Guide

Follow these steps to connect your local project to a GitHub repository and activate automatic deployment:

### Step 1: Install Git (If not already installed)
If Git is not installed on your system, install it using:
```powershell
winget install --id Git.Git -e --source winget
```
*Or download the installer from [git-scm.com](https://git-scm.com/).*

### Step 2: Initialize Git Repository
Open PowerShell or your command prompt in the project directory:
```bash
cd C:\sindhuja-portfolio

# Initialize Git
git init -b main

# Configure your Git username and email
git config user.name "Sindhuja"
git config user.email "sindhuja.cse2028@gmail.com"

# Stage all files
git add .

# Create the initial commit
git commit -m "feat: initial commit for automated portfolio deployment pipeline"
```

### Step 3: Create a Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Set the **Repository name** (e.g., `sindhuja-portfolio` or `<your-username>.github.io`).
3. Set the visibility to **Public** (required for free GitHub Pages).
4. Do **not** initialize with README or .gitignore (we already have them).
5. Click **Create repository**.

### Step 4: Link Remote & Push Code
Copy the remote URL from your newly created GitHub repository and run:
```bash
# Add your remote GitHub repository
git remote add origin https://github.com/<your-github-username>/sindhuja-portfolio.git

# Push code to the main branch
git push -u origin main
```

---

## 🌐 Enabling GitHub Pages in Repository Settings

> [!IMPORTANT]
> **This one-time step is required** to allow GitHub Actions to deploy to GitHub Pages.

1. In your GitHub repository, click on the **Settings** tab (the gear icon at the top).
2. In the left navigation sidebar under the **Code and automation** section, click on **Pages**.
3. Under **Build and deployment**:
   - Locate the **Source** dropdown menu.
   - Change the source from `Deploy from a branch` to:  
     👉 **`GitHub Actions`**
4. Save the setting (no additional save button is needed once selected).

---

## 🔍 Verifying Deployment & Viewing Live Website

Once your code is pushed and GitHub Pages source is set to `GitHub Actions`:

1. Click on the **Actions** tab in your repository.
2. You will see a workflow run named **`CI/CD Portfolio Automated Deployment`**.
3. Click on the run to view live logs for both jobs:
   - `CI: Code Validation & Quality Checks`
   - `CD: Deploy to GitHub Pages`
4. Once completed (typically under 30 seconds), click the **github-pages** environment link on the summary page.
5. Your live portfolio will be accessible at:
   ```text
   https://<your-github-username>.github.io/sindhuja-portfolio/
   ```
   *(or `https://<your-github-username>.github.io` if named `<username>.github.io`)*

---

## 🔄 Automatic Continuous Deployment Demonstration

Every time you modify any file (e.g., adding a new project or updating your skills):
```bash
git add .
git commit -m "update: added new project details"
git push origin main
```
The GitHub Actions workflow will automatically run, validate your updates, and deploy the fresh changes live within seconds!

---

## 👤 Author Information

- **Name:** Sindhuja
- **Degree:** Bachelor of Technology (B.Tech) &ndash; Computer Science and Engineering
- **Institution:** AVN Institute of Engineering and Technology, Hyderabad
- **Expected Graduation:** 2028
- **Email:** [sindhuja.cse2028@gmail.com](mailto:sindhuja.cse2028@gmail.com)
- **LinkedIn:** [linkedin.com/in/sindhuja-cse](https://www.linkedin.com/in/sindhuja-cse)
- **GitHub:** [github.com/sindhuja-dev](https://github.com/sindhuja-dev)
