# 📈 Stock Portfolio Tracker

A sleek and responsive web application built with React and Material-UI for tracking your stock portfolio. Add stocks, view their performance, and get a real-time summary of your total portfolio value.


---

## ✨ Features

* **Add & Manage Stocks**: Easily add new stocks to your portfolio by providing the ticker symbol and number of shares.
* **Real-time Portfolio Value**: Get an instant calculation of your total portfolio's current market value.
* **CRUD Operations**: Update the number of shares or delete stocks from your portfolio with an intuitive UI.
* **Detailed Stock View**: Click on any stock to navigate to a dedicated page with historical data and charts.
* **Persistent Data**: Your portfolio is saved to the browser's local storage, so your data persists between sessions.
* **Dynamic UI**: A modern, animated gradient background and responsive design built with Material-UI.

---

## 🛠️ Tech Stack

This project is built using the following technologies:

* **Frontend**: React, React Router
* **UI Library**: Material-UI (MUI)
* **Data Fetching**: Axios
* **Charting**: Recharts
* **API**: [Finnhub Stock API](https://finnhub.io/) for real-time stock data.

---

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

You need to have Node.js and npm installed on your machine.
* [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1.  **Clone the repository:**
    
    git clone [https://github.com/MayankRaj435/stock-portfolio.git](https://github.com/MayankRaj435/stock-portfolio.git)
    cd stock-portfolio
    

2.  **Install NPM packages:**
    
    npm install
    

3.  **Set up Environment Variables:**
    This project requires an API key from [Finnhub](https://finnhub.io/) to fetch stock data.

    * Sign up for a free API key at [Finnhub](https://finnhub.io/register).
    * Create a `.env` file in the root of your project.
    * Add your API key to the `.env` file as follows:

        
        REACT_APP_FINNHUB_API_KEY=your_api_key_here
        
    * **Important**: You will also need to update `/src/api/stockapi.js` to use this environment variable instead of the hardcoded key.
        

        const API_KEY = process.env.REACT_APP_FINNHUB_API_KEY;
        

### Running the Application

Once the dependencies are installed and the environment variables are set, you can run the app in development mode.


npm start
