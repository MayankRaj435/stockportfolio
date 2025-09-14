import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

function ChartComponent({ data, xDataKey, yDataKey, xAxisLabel, yAxisLabel }) {
    return (
        <LineChart
            width={600}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xDataKey} label={{ value: xAxisLabel, position: 'bottom' }} />
            <YAxis label={{ value: yAxisLabel, angle: -90, position: 'left' }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={yDataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
    );
}

export default ChartComponent;