import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    TextField,
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, Save as SaveIcon, Cancel as CancelIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function StockList({ stocks, onDeleteStock, onUpdateStock }) {
    const [editingStock, setEditingStock] = React.useState(null);
    const [editedShares, setEditedShares] = React.useState('');

    const handleEditClick = (stock) => {
        setEditingStock(stock.symbol);
        setEditedShares(stock.shares);
    };

    const handleSaveClick = (stock) => {
        const updatedStock = { ...stock, shares: parseInt(editedShares, 10) };
        onUpdateStock(updatedStock);
        setEditingStock(null);
        setEditedShares('');
    };

    const handleCancelClick = () => {
        setEditingStock(null);
        setEditedShares('');
    };
    return (
        <List>
            {stocks.map((stock) => (
                <ListItem key={stock.symbol}>
                    <ListItemText
                        primary={<Link to={`/stock/${stock.symbol}`}>{stock.symbol}</Link>}
                        secondary={`Shares: ${stock.shares}`}
                    />
                    <ListItemSecondaryAction>
                        {editingStock === stock.symbol ? (
                            <>
                                <TextField
                                    label="Shares"
                                    value={editedShares}
                                    onChange={(e) => setEditedShares(e.target.value)}
                                    type="number"
                                    size="small"
                                />
                                <IconButton edge="end" aria-label="save" onClick={() => handleSaveClick(stock)}>
                                    <SaveIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="cancel" onClick={handleCancelClick}>
                                    <CancelIcon />
                                </IconButton>
                            </>
                        ) : (
                            <>
                                <IconButton edge="end" aria-label="edit" onClick={() => handleEditClick(stock)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete" onClick={() => onDeleteStock(stock.symbol)}>
                                    <DeleteIcon />
                                </IconButton>
                            </>
                        )}
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
}

export default StockList;