'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Jan',
    Income: 4000,
    Expenses: 2400,
  },
  {
    name: 'Feb',
    Income: 4500,
    Expenses: 2398,
  },
  {
    name: 'Mar',
    Income: 5000,
    Expenses: 2300,
  },
  {
    name: 'Apr',
    Income: 5750,
    Expenses: 3908,
  },
  {
    name: 'May',
    Income: 6000,
    Expenses: 4800,
  },
  {
    name: 'Jun',
    Income: 6500,
    Expenses: 3800,
  },
  {
    name: 'Jul',
    Income: 7550,
    Expenses: 4300,
  },
];
// #endregion

export default function LineChartExp() {
  return (
    <div className='h-64 text-slate-800 dark:text-slate-200'>

    <LineChart
      style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis tick={{ fill: 'currentColor' }} dataKey="name" />
      <YAxis tick={{ fill: 'currentColor' }} width="auto" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Income" stroke="#82ca9d" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Expenses" stroke="#3B82F6" />
    </LineChart>
    </div>
  );
}