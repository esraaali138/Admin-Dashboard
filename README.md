# Angular Dashboard

This is an **Angular-based Dashboard** that utilizes **Tailwind CSS** for styling, **PrimeNG** for icons, and **ng2-charts** for data visualization.

---

##  **Setup Instructions**

###  Prerequisites
Ensure you have the following installed:
- **Node.js** (Recommended: LTS version)
- **Angular CLI** (Install using: `npm install -g @angular/cli`)

###  Installation  
Clone the repository and install dependencies:

```bash
git clone <repo-url>
npm install
ng serve

To run the JSON Server, use:

json-server --watch data.json

Then, open http://localhost:4200/


Project Structure


src/
│── app/          # Core application (components, pages, services)
│── assets/       # Images, icons, and other static files
│── styles.css    # Global styling



TechnologiAngular - Core framework

Tailwind CSS - Utility-first CSS framework
PrimeNG -  icons
ng2-charts - Charting library based on Chart.jses Used


Design & Choices

Tailwind CSS was used for fast and flexible styling.
PrimeNG provides ready-to-use UI components.
ng2-charts is used for dynamic data visualization