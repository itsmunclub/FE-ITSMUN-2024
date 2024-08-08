import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='fixed z-50 flex flex-col justify-between bg-MUN-englishViolet w-fit h-[700px] p-5 rounded-3xl'>
      <div className='flex flex-col gap-5'>
        <Image
          src="/munLogo.svg"
          width={64}
          height={57}
          alt="MUN Logo"
        />
        <button className='Hall-Of-Fame'>
          <Link href="/hall-of-fame">
            <div className="group flex bg-MUN-sidebar-linen rounded-full w-16 h-16 justify-center items-center hover:bg-MUN-beigeBanner p-5">
              <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className=" group-hover:fill-MUN-bg-purple-dark" fillRule="evenodd" clipRule="evenodd" d="M16.8 0.128906H7.19981H4.79982V2.52889L2.39999 2.52889H0V4.92888V14.5288H2.39999L4.79982 14.5288V16.9288L10.7998 16.9288V19.3288H7.2001V21.7288L10.7998 21.7288H13.1998L16.8 21.7288V19.3288H13.1998V16.9288L19.1997 16.9288V14.5288L19.1999 14.5288L19.2 14.5288L21.5997 14.5288H23.9997V4.92888H24V2.52889H23.9997H21.5997H19.2V0.128906H19.1997H16.8ZM16.8 14.5288V4.92888V2.52889L7.19996 2.52889V4.92888H7.19981V14.5288H16.8ZM21.5997 4.92888V12.1288H19.2V4.92888H21.5997ZM4.79982 12.1288H2.39999V4.92888H4.79982V12.1288Z" fill="#53405F"/>
              </svg>
            </div>
          </Link>
        </button>
      </div>
      <div className='flex flex-col gap-5'>
        <button className='Home'>
          <Link href="/">
            <div className="group flex bg-MUN-sidebar-linen rounded-full w-16 h-16 justify-center items-center hover:bg-MUN-beigeBanner p-5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className=" group-hover:fill-MUN-bg-purple-dark" fillRule="evenodd" clipRule="evenodd" d="M10.2856 0.5H13.7142V3.92857H10.2856V0.5ZM13.7142 21.0716H24V24.5001H0V21.0716H10.2856V14.2147H13.7142V21.0716ZM17.1429 3.92844H13.7144V7.35701H17.1429V3.92844ZM17.143 7.35734H20.5715V10.7853H23.9999V21.071H20.5713V10.7859H17.143V7.35734ZM6.85703 3.92844H10.2856V7.35701H6.85703V3.92844ZM6.85728 7.35734H3.42871V10.7859H6.85728V7.35734ZM0 10.7853H3.42857V21.071H0V10.7853Z" fill="#53405F"/>
            </svg>
            </div>
          </Link>
        </button>
        <button className='Blog'>
          <Link href="/blog">
            <div className="group flex bg-MUN-sidebar-linen rounded-full w-16 h-16 justify-center items-center hover:bg-MUN-beigeBanner p-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className=" group-hover:fill-MUN-bg-purple-dark" fillRule="evenodd" clipRule="evenodd" d="M24 0.218262H24.0001V2.1819H24V17.8911H24.0001V19.8547H4.3637V19.8546V17.8911V2.1819V0.218262H6.54552H21.8181H24ZM21.8181 2.1819H6.54552V17.8911H21.8181V2.1819ZM8.72722 4.14545H19.6363V6.10909H8.72722V4.14545ZM19.6363 8.07287H8.72722V10.0365H19.6363V8.07287ZM8.72722 12.0001H16.3636V13.9637H8.72722V12.0001ZM19.6364 21.8183H2.18182V4.14545H0V21.8183V23.7818V23.7819H19.6364V21.8183Z" fill="#53405F"/>
              </svg>
            </div>
          </Link>
        </button>
        <button className='Event'>
          <Link href="/event">
            <div className="group flex bg-MUN-sidebar-linen rounded-full w-16 h-16 justify-center items-center hover:bg-MUN-beigeBanner p-5">
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className=" group-hover:fill-MUN-bg-purple-dark" fillRule="evenodd" clipRule="evenodd" d="M15.9999 0.666504H18.6665V3.33317H21.3333H24H24V27.3332H24H21.3333H2.66667H0V24.6665V11.3332V8.6665V5.99984V3.33317H2.66667H5.33347V0.666504H8.00014V3.33317H15.9999V0.666504ZM5.33347 5.99984L2.66667 5.99984V8.6665H21.3333V5.99984L18.6665 5.99984H15.9999H8.00014H5.33347ZM2.66667 11.3332V24.6665H21.3333V11.3332H2.66667ZM5.33347 13.9998H8.00014V16.6665H5.33347V13.9998ZM13.3334 13.9998H10.6668V16.6665H13.3334V13.9998ZM15.9999 13.9998H18.6665V16.6665H15.9999V13.9998ZM8.00014 19.3332H5.33347V21.9998H8.00014V19.3332ZM10.6668 19.3332H13.3334V21.9998H10.6668V19.3332ZM18.6665 19.3332H15.9999V21.9998H18.6665V19.3332Z" fill="#53405F"/>
              </svg>
            </div>
          </Link>
        </button>
        <button>
          <Link href="/aboutUs">
            <div className="group flex bg-MUN-sidebar-linen rounded-full w-16 h-16 justify-center items-center hover:bg-MUN-beigeBanner p-5">
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className=" group-hover:fill-MUN-bg-purple-dark" fillRule="evenodd" clipRule="evenodd" d="M6.75 0.5H3.75V2H2.25V6.5L3.75 6.5V8H6.75V6.5H3.75V2H6.75V0.5ZM14.25 0.5H9.75V2H8.25V6.5L9.75 6.5V8H14.25V6.5L15.75 6.5V2H14.25V0.5ZM14.25 2V6.5H9.75V2H14.25ZM7.5 11V14H16.5V11H18V15.5H16.5H7.5H6V11H7.5ZM7.5 11V9.5H16.5V11H7.5ZM17.25 0.5H20.25V2H17.25V0.5ZM20.25 6.5V2H21.75V6.5L20.25 6.5ZM20.25 6.5V8H17.25V6.5H20.25ZM24 11H22.5V9.5H19.5V11H22.5V14H19.5V15.5H24V14V11ZM0 11H1.5V14H4.5V15.5H0V14V11ZM1.5 11V9.5H4.5V11H1.5Z" fill="#53405F"/>
            </svg>
            </div>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Sidebar