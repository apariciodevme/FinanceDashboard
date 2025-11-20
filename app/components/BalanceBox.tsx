import { IconArrowUp, IconArrowUpDashed } from '@tabler/icons-react'
import React from 'react'



const BalanceBox = () => {
  return (


    <div className='  bg-white  dark:bg-slate-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-slate-700'>

        <div className='flex flex-col items-start space-y-5'>
        <h2 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">Balance</h2>

            <p className=' font-bold text-3xl lg:text-5xl dark:text-slate-200 text-slate-700'>NOK 245,500</p>

            <div className='p-3  items-center justify-center flex rounded-xl h-8 bg-blue-300 dark:bg-blue-300'>
            <IconArrowUp className='text-blue-600 dark'/>
                <p className='text-blue-600 dark:text-clue-900'>2,4%</p>
            </div>
        
        </div>
    </div>
  )
}

export default BalanceBox