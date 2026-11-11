# Automated DevOps Pipeline for Portfolio Web Application

**Author:** Sujith V M  
**Internship:** RyniXsoft (RyniX Launchpad) — 1-Month DevOps Project  

## Project Overview
An end-to-end automated DevOps workflow for a responsive personal portfolio web application, covering version control, Nginx web server configuration, Docker containerization, GitHub Actions CI/CD automation, and Docker Compose deployment scripts.

## Technologies Used
- **OS:** Linux / Ubuntu (WSL2)
- **Web Server:** Nginx
- **Version Control:** Git & GitHub
- **Containerization:** Docker & Docker Compose
- **CI/CD:** GitHub Actions
- **Scripting:** Bash Shell Scripting

## Project Folder Structure
```text
rynix-devops-portfolio/
├── .github/workflows/   # CI/CD GitHub Actions (Week 3)
├── nginx/               # Custom Nginx configuration
│   └── default.conf
├── scripts/             # Startup & shutdown automation scripts (Week 4)
├── src/                 # Portfolio Web Application source code
│   ├── css/style.css
│   ├── js/app.js
│   └── index.html
└── README.md
