# Personal Portfolio Site

A simple personal portfolio site built with **EJS templates** and **Express**.  
This project demonstrates serving static-like pages using routes and shared layouts.

---

## Concepts
- Static pages rendered with EJS.
- Common **header** and **footer** for all pages.
- Basic routing with Express.
- 404 routing to prevent routing errors.

---

## Routes
- `/` - Home page
- `/about` – About Us page
- `/projects` – Projects showcase
- `/contact` – Contact me page

## Features
- Multiple pages: Home, About, Projects, and Contact.  
- Reusable header and footer included on all pages.  
- Static assets (CSS, images) served from the `public/` folder.    
- Clean routing with Express for each page.  
- Custom 404 page for invalid routes.  
  
---

## Tech Stack
- **Backend**: Node.js, Express.js
- **Template Engine**: EJS
- **Styling**: CSS (served from public/)
- **Data**: JSON with fs module

---

## Routes
- `/` - Home page
- `/about` – About page
- `/projects` – Projects showcase
- `/contact` – Contact page
  
---
## Folder Structure
```bash
Personal-portfolio-website-project-
├── node_modules/           (Contains all external libraries/dependencies)
├── public/             (Static assets, accessible directly by the browser)
│   ├── css/                (Stylesheets)
│   │   └── style.css
│   └── images

├── routes/                 (Contains controller logic for specific paths/resources)
│   ├── about.js            (Route handler for the /about page)
│   ├── contact.js          (Route handler for the /contact page)
│   ├── home.js             (Route handler for the /home or /index page)
│   └── project.js          (Route handler for the /project page)
├── views/                  (EJS templates used to render dynamic HTML pages)
│   ├── about.ejs           (View template for the about page)
│   ├── contact.ejs         (View template for the contact page)
│   ├── footer.ejs          (partial template for the footer)
│   ├── header.ejs          (Partial template for the header)
│   ├── home.ejs            (View template for the home page)
│   └── project.ejs         (View template for the project page)
├── .gitignore              (Specifies files/folders to be ignored by Git, node_modules)
├── app.js                  (Main entry point/server configuration file)
├── package.json            (Lists project dependencies and metadata)
├── package-lock.json       (Locks dependency versions for reliable installs)
└── README.md               (Project documentation and overview) 

```

---

## Setup & Guide

### 1. Initialize the project
```bash
mkdir portfolio-site
cd portfolio-site
npm init -y
npm install express ejs
npm run start
```

---

## Installation 
### 1. Clone the repository:
```bash
git clone https://github.com/samuelboman/Personal-portfolio-website-project-.git
cd personal-portfolio-website-project-
```

---
### 2. Install dependencies:
```bash
npm install
```

---
### 3. Run the server:
```bash
npm run start
```

---
-OR-

```bash
node app.js
```

---

### 4. Open in browser:
```bash
http://localhost:3000
```  
