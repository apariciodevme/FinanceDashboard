'use client'

import React from 'react'
import { DarkThemeToggle } from 'flowbite-react'

export default function Header() {

  return (
    <div className='ml-64 z-10 h-20 bg-white bg-linear-to-r dark:from-slate-950 dark:to-slate-900 items-center border-b border-gray-300 dark:border-gray-700 flex  dark:bg-slate-900 justify-between p-4'>
        <h1 className='text-3xl font-medium text-slate-800 dark:text-slate-200   '>Dashboard</h1>
        <DarkThemeToggle />
    </div>
  )
}
