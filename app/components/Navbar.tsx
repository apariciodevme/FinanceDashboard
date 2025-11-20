'use client'

import React from 'react'
import Navlink from './Navlink'
import { IconHome, IconChartBarPopular, IconWallet, IconReceiptDollar, IconSettings } from '@tabler/icons-react';

export default function Navbar() {
  return (
    <nav className='fixed left-0 top-0 h-screen text-neutral-300 dark:text-neutral-200 w-64 bg-linear-to-b from-slate-800 to-slate-900 dark:from-slate-950 dark:to-slate-900 border-r border-slate-700/50 dark:border-slate-800/50 backdrop-blur-sm z-30'>
      {/* /Logo Section */}
      <div className='px-6 pt-8 pb-6 border-b border-slate-700/50 dark:border-slate-800/50'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-xl bg-linear-to-br from-slate-900 to-slate-600 flex items-center justify-center shadow-lg'>
            <IconWallet className='w-6 h-6 text-white' />
          </div>
          <div>
            <h2 className='text-lg font-bold text-white'>Dashboard</h2>
            <p className='text-xs text-slate-400'>Finance Hub</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className='px-4 py-6 flex flex-col gap-2'>
        <Navlink title='Dashboard' href='/' icon={<IconHome className='w-5 h-5' />} />
        <Navlink title='Analytics' href='/analytics' icon={<IconChartBarPopular className='w-5 h-5' />} />
        <Navlink title='Wallet' href='/wallet' icon={<IconWallet className='w-5 h-5' />} />
        <Navlink title='Payments' href='/payments' icon={<IconReceiptDollar className='w-5 h-5' />} />
        
        {/* Settings Separator */}
        <div className='mt-4 pt-4 border-t border-slate-700/50 dark:border-slate-800/50'>
          <Navlink title='Settings' href='/settings' icon={<IconSettings className='w-5 h-5' />} />
        </div>
      </div>
    </nav>
  )
}
