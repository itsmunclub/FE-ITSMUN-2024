import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-MUN-englishViolet py-[60px] px-[115px]">
      <div className="containerr max-w-360 w-full h-full m-auto">
        <div className="content flex flex-row h-full">
          <img className="items-center" src="/PPfooter.svg" alt="Footer Logo"/>
          <Link href="/home" className="">
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer