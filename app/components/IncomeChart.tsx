
'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', income: 2000 },
  { name: 'Feb', income: 3000 },
  { name: 'Mar', income: 4000 },
  { name: 'Apr', income: 3500 },
  { name: 'May', income: 5000 },
  { name: 'Jun', income: 6000 },
]

export default function IncomeChart() {
  return (
    <div className="h-64 text-slate-800 dark:text-slate-200">
      <ResponsiveContainer  width="100%" height="100%">
        <BarChart  data={data}>
          <CartesianGrid  strokeDasharray="3 3" />
          <XAxis   dataKey="name" tick={{ fill: 'currentColor' }} />
          <YAxis  tick={{ fill: 'currentColor' }} />
          <Tooltip />
          <Bar   dataKey="income" fill="#3B82F6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}