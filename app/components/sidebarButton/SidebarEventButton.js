'use client';
import React from 'react'
import Link from 'next/link';

const SidebarEventButton = () => {
  return (
    <div>
        <button onClick={() => console.log("Event")} className=' bg-MUN-steelTeal-100 hover:bg-MUN-Persimmon'>
          <Link href={'/event'}>Event</Link> 
        </button>
    </div>
  )
}

export default SidebarEventButton