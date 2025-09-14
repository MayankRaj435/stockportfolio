import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { getQuote } from '../api/stockapi';

function PortfolioSummary({ portfolio }) {
    const [portfolioValue, setPortfolioValue] = useState(0);

    useEffect(() => {
        const calculatePortfolioValue = async () => {
            let totalValue = 0;
            for (const stock of portfolio) {
                try {
                    const quote = await getQuote(stock.symbol); // Fetch current price
                    totalValue += quote.c * stock.shares; // quote.c is current price (check API docs)
                } catch (error) {
                    console.error(`Error fetching quote for ${stock.symbol}:`, error);
                }
            }
            setPortfolioValue(totalValue);
        };

        calculatePortfolioValue();
    }, [portfolio]); // Recalculate when portfolio changes

    return (
        <Box>
            <Typography variant="h6">Portfolio Value: ${portfolioValue.toFixed(2)}</Typography>
            
        </Box>
    );
}

export default PortfolioSummary;