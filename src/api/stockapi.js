import axios from 'axios';
const API_KEY = "cv8rgh1r01qk2jfs40hgcv8rgh1r01qk2jfs40i0"; 
const BASE_URL = 'https://finnhub.io/api/v1';

// Function to get a stock quote
export const getQuote = async (symbol) => {
    try {
        const response = await axios.get(`${BASE_URL}/quote?symbol=${symbol}&token=${API_KEY}`);
        return response.data; // Returns an object with keys like 'c' (current price), 'h' (high), 'l' (low), etc.
    } catch (error) {
        console.error(`Error fetching quote for ${symbol}:`, error);
        throw error;
    }
};
// Function to get company profile
export const getCompanyProfile = async (symbol) => {
    try {
        const response = await axios.get(`${BASE_URL}/stock/profile2?symbol=${symbol}&token=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching company profile for ${symbol}:`, error);
        throw error;
    }
};
// Function to get stock candles (historical data)
export const getStockCandles = async (symbol, from, to) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/stock/candle?symbol=${symbol}&resolution=D&from=${from}&to=${to}&token=${API_KEY}`
        );
        return response.data; // Returns an object with arrays for 'o' (open), 'h' (high), 'l' (low), 'c' (close), 't' (timestamp), 'v' (volume)
    } catch (error) {
        console.error(`Error fetching candles for ${symbol}:`, error);
        throw error;
    }
};
