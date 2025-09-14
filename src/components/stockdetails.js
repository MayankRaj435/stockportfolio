import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getStockDetails } from '../api/stockapi'; 

function StockDetail() {
    const { symbol } = useParams();
    const [stockData, setStockData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const data = await getStockDetails(symbol); 
                setStockData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStockData();
    }, [symbol]);

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography color="error">Error: {error}</Typography>;
    }

    if (!stockData) {
        return <Typography>Stock data not found for {symbol}</Typography>;
    }

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                {stockData.companyName} ({stockData.symbol})
            </Typography>
            <Typography>Price: {stockData.price}</Typography>
            {/* Add more details here */}
        </Box>
    );
}

export default StockDetail;