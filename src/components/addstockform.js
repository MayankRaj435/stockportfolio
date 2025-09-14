import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Card, CardContent } from '@mui/material';

function AddStockForm({ onAddStock }) {
    const [symbol, setSymbol] = useState('');
    const [shares, setShares] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddStock({ symbol: symbol.toUpperCase(), shares: parseInt(shares, 10) });
        setSymbol('');
        setShares('');
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Add Stock
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <TextField
                        label="Stock Symbol"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        value={symbol}
                        onChange={(e) => setSymbol(e.target.value)}
                        helperText="Enter the stock ticker symbol (e.g., AAPL for Apple Inc.)"
                    />
                    <TextField
                        label="Number of Shares"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        type="number"
                        value={shares}
                        onChange={(e) => setShares(e.target.value)}
                        helperText="Enter the number of shares you want to purchase"
                    />
                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                        Add Stock
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default AddStockForm;