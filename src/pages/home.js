import React, { useState, useEffect } from 'react';
import StockList from '../components/stocklist';
import PortfolioSummary from '../components/portfoliosummary';
import AddStockForm from '../components/addstockform';
import { Typography, Box,Container } from '@mui/material';

function Home() {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const storedPortfolio = localStorage.getItem('portfolio');
        if (storedPortfolio) {
            setPortfolio(JSON.parse(storedPortfolio));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('portfolio', JSON.stringify(portfolio));
    }, [portfolio]);

    const handleAddStock = (newStock) => {
        setPortfolio([...portfolio, newStock]);
    };

    const handleUpdateStock = (updatedStock) => {
        setPortfolio(portfolio.map(stock => stock.symbol === updatedStock.symbol ? updatedStock : stock));
    }

    const handleDeleteStock = (symbol) => {
        setPortfolio(portfolio.filter(stock => stock.symbol !== symbol));
    }


    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}> {}
                <Typography variant="h4" component="h1" gutterBottom>
                    Stock Calculator
                </Typography>
                <PortfolioSummary portfolio={portfolio} />
                <AddStockForm onAddStock={handleAddStock} />
                <StockList
                    stocks={portfolio}
                    onUpdateStock={handleUpdateStock}
                    onDeleteStock={handleDeleteStock}
                />
            </Box>
        </Container>
    );
}

export default Home;