'use client';
import React from 'react'
import Link from 'next/link';

const SidebarAboutUsButton = () => {
  return (
    <div>
        <button onClick={() => console.log('About Us')} className=' bg-slate-500 hover:bg-red-200'>
          <Link href={'/aboutUs'}>About Us</Link>
        </button>
    </div>
  )
}

export default SidebarAboutUsButton