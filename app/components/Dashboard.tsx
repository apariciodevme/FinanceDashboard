import React from 'react'
import BalanceBox from './BalanceBox'
import LineChart from './LineChartExp'
import IncomeChart from './IncomeChart'
import TreeGraph from './TreeGraph'
import Transactions from './Transactions'
import LineChartDisplay from './LineChartExp'

export default function Dashboard() {
  return (
    <div className='flex-1 p-5 bg-linear-to-b dark:from-slate-950 dark:to-slate-900 '>

      <div className='lg:grid grid-cols-2 gap-5 flex flex-col     '>

        <BalanceBox />


        <div className="p-6 bg-white border border-gray-200 dark:border-slate-700 rounded-xl shadow-sm  dark:bg-slate-800">
          <h2 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">Activity</h2>
          <LineChartDisplay />
        </div>
        <div className="p-6 bg-white shadow-sm border border-gray-200 dark:border-slate-700 rounded-xl  dark:bg-slate-800">
          
          <h2 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">Monthly Income</h2>
          <IncomeChart />

        </div>



        <Transactions />





      </div>
    </div>
  )
}
