'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { PiBug } from "react-icons/pi"
import classNames from 'classnames';


const Navbar = () => {
    const currentPath = usePathname();
    
    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Issues', href: '/issues'}
    ]
  return (
    <div>
      <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><PiBug /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
                <Link 
                    key={link.href} 
                    className={classNames({
                        'text-zinc-900' : link.href === currentPath,
                        'text-zinc-500' : link.href !== currentPath,
                        'hover:text-zinc-800 transition-colors' : true
                    })}
                    href={link.href}>{link.label}</Link>)}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
