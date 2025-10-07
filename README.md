📈 Stock Portfolio Tracker 🚀
<p align="center">
<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img alt="MUI" src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white"/>
<img alt="Axios" src="https://img.shields.io/badge/axios-2B2F33?style=for-the-badge&logo=axios&logoColor=white"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
</p>

<p align="center">
A sleek and modern web application for tracking your stock portfolio in real-time. Built with <b>React</b> and a beautiful, dynamic UI from <b>Material-UI</b>. Watch your investments grow! 🌱
</p>

<p align="center">
<img src="https://i.imgur.com/your-demo-gif-url.gif" alt="Stock Portfolio Tracker Demo" width="100%">
</p>

🌟 Core Features
✅ Live Portfolio Valuation: Instantly see the total current market value of your holdings.

➕ Add Stocks Easily: Add any stock to your portfolio using its ticker symbol.

✏️ Full CRUD Functionality: Effortlessly update share counts or remove stocks from your list.

📊 Detailed Stock View: Dive deep into a stock's performance with historical data charts.

💾 Persistent Session: Your portfolio is saved in local storage, so you can pick up right where you left off.

🎨 Dynamic Animated UI: A visually stunning animated gradient background that makes tracking stocks a pleasure.

🛠️ Technology & Tools
This project is powered by a modern frontend stack:

Category	Technology
Core	React, React Router, JavaScript (ES6+)
Styling	Material-UI (MUI), Emotion
Data	Axios for API requests, Recharts for beautiful charts
API Provider	Finnhub Stock API for real-time and historical financial data
Development	Create React App, Git & GitHub

Export to Sheets
🚀 Get It Running Locally
Ready to launch your own tracker? Just follow these simple steps.

1. Clone the Magic 🐑
First, clone the repository to your local machine.

Bash

git clone https://github.com/MayankRaj435/stock-portfolio.git

cd stock-portfolio

2. Install Dependencies 📦
Next, install all the necessary npm packages.

Bash

npm install

3. Set Up Your API Key 🔑

This app needs a key from Finnhub to work its magic.

Sign up for a free API key at finnhub.io/register.

Create a new file named .env in the project's root directory.

Add your shiny new API key to the .env file like this:

REACT_APP_FINNHUB_API_KEY=your_secret_api_key_goes_here


4. Liftoff! 🛰️
You're all set! Start the development server.

Bash

npm start
Your app will be live at http://localhost:3000. Enjoy!

📁 File Structure Overview
Here’s a map of the most important files and folders in the project.

stock-portfolio/
├─ 📂 public/
│  └─ 📄 index.html
├─ 📂 src/
│  ├─ 📂 api/
│  │  └─ 📄 stockapi.js      # Handles all Finnhub API calls
│  ├─ 📂 components/
│  │  └─ 📄 ...               # All the reusable UI components
│  ├─ 📂 pages/
│  │  ├─ 📄 home.js          # The main portfolio dashboard page
│  │  └─ 📄 stockpage.js     # The detailed view for a single stock
│  ├─ 📄 App.js             # Main component with routing logic
│  └─ 📄 index.js           # The app's entry point
├─ 📄 .env                  # Where your API key lives (you create this!)
└─ 📄 package.json          # Project dependencies and scripts
