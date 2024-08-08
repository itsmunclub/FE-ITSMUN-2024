import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="fixed bg-MUN-englishViolet max-w-360 w-full max-h-[242px] py-[60px] px-[115px]">
      <div className="containerr w-full h-full m-auto">
        <div className="content flex flex-row h-full">
          <img className="items-center" src="/footerLogo.svg" alt="Footer Logo"/>
          <Link href="/home" className="">
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer