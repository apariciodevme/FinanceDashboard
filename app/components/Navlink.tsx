'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
    title: string;
    href: string;
    icon: React.ReactElement;
}

const Navlink = ({title, href, icon}: Props) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className='block'>
      <div className={`
        flex items-center gap-3 px-4 py-3 rounded-xl 
        transition-all duration-200 ease-in-out
        ${isActive 
          ? 'bg-linear-to-r from-slate-900 to-slate-600 text-white shadow-lg shadow-slate-700/25' 
          : 'text-slate-300 dark:text-slate-400 hover:bg-slate-700/50 dark:hover:bg-slate-800/50 hover:text-white dark:hover:text-white'
        }
      `}>
        <div className={`${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`}>
          {icon}
        </div>
        <span className='font-medium text-sm'>{title}</span>
        {isActive && (
          <div className='ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse' />
        )}
      </div>
    </Link>
  )
}

export default Navlink