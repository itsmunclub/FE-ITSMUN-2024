import React from 'react'
import Link from 'next/link'

const FooterSumun = () => {
  return (
    <div className="bg-white bg-opacity-50 max-w-360 w-full sm:max-h-[242px] md:py-[60px] md:px-[100px] sm:py-9 sm:px-11 py-7 px-8 px-">
      <div className="containerr w-full h-full m-auto">
        <div className="content flex sm:flex-row flex-col h-full justify-around gap-2">
          <div className="2sm:self-center">
            <img className="items-center w-auto h-auto" src="/footerLogo.svg" alt="Footer Logo"/>
          </div>
          <div className="flex flex-col font-montserrat lg:text-xl text-lg lg:justify-around sm:justify-center justify-around sm:text-center text-left text-MUN-englishViolet gap-2">
            <Link href="/" className="">
              Home
            </Link>
            <Link href="/blog" className="">
              Blog
            </Link>
            <Link href="/event" className="">
              Events
            </Link>
          </div>
          <div className="flex flex-col font-montserrat lg:text-xl text-lg lg:justify-around sm:justify-center justify-around sm:text-center text-left text-MUN-englishViolet gap-2">
            <Link href="/aboutUs" className="">
              About Us
            </Link>
            <Link href="/hall-of-fame" className="">
              Hall of Fame
            </Link>
          </div>
          <div className="flex flex-col justify-around lg:justify-around sm:justify-center gap-2">
            <div>
              <img className="w-auto h-auto" src="/diplomaticeng.svg" alt="#diplomaticengineer"/>
            </div>
            <div className="w-[161px]">
              <div className="flex flex-row justify-around">
                <div className="bg-MUN-solidPink rounded-md w-8 h-8 border border-black flex justify-center items-center" style={{ boxShadow: '2px 2px 0px 0 rgba(0, 0, 0, 1)' }}>
                  <a href="https://www.instagram.com/itsmunclub/" target="_blank" rel="noopener noreferrer">
                    <svg className="stroke-1 stroke-white" xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 16 16" fill="none" strokeLinecap="round" strokeLinejoin="round" id="Instagram--Streamline-Lucide" height="24" width="24">
                      <desc>Instagram Streamline Icon: https://streamlinehq.com</desc>
                      <path d="M4.375 1.25h6.25s3.125 0 3.125 3.125v6.25s0 3.125 -3.125 3.125H4.375s-3.125 0 -3.125 -3.125V4.375s0 -3.125 3.125 -3.125"></path>
                      <path d="M10 7.106249999999999A2.5 2.5 0 1 1 7.893750000000001 5 2.5 2.5 0 0 1 10 7.106249999999999z"></path>
                      <path d="m10.9375 4.0625 0.00625 0"></path>
                    </svg>
                  </a>
                </div>
                <div className="bg-MUN-steelTeal rounded-md w-8 h-8 border border-black flex justify-center items-center" style={{ boxShadow: '2px 2px 0px 0 rgba(0, 0, 0, 1)' }}>
                  <a href="https://id.linkedin.com/company/its-mun-club" target="_blank" rel="noopener noreferrer">
                    <svg className="stroke-[0.1px] stroke-white fill-white" viewBox="-0.5 -0.5 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Linkedin--Streamline-Unicons" height="24" width="24"><desc>Linkedin Streamline Icon: https://streamlinehq.com</desc>
                    <path d="M13.725375 0.150125H1.2746250000000001C1.1346874999999998 0.148125 0.9956875 0.1738125 0.865625 0.2255625 0.735625 0.277375 0.6170625 0.35424999999999995 0.5166875 0.4518125 0.416375 0.5494375 0.33625000000000005 0.6658124999999999 0.2809375 0.7943749999999999c-0.055375 0.1285625 -0.08481249999999999 0.2668125 -0.08675000000000001 0.40675000000000006v12.597750000000001c0.0019375 0.1399375 0.031375 0.2781875 0.08675000000000001 0.40675000000000006s0.1354375 0.24493750000000003 0.23575 0.3425625c0.10037499999999999 0.097625 0.2189375 0.1745 0.3489375 0.22625 0.1300625 0.0518125 0.2690625 0.07743749999999999 0.409 0.0754375h12.45075c0.1399375 0.002 0.2789375 -0.023625 0.4089375 -0.0754375 0.130125 -0.05175 0.24862499999999998 -0.12862500000000002 0.349 -0.22625 0.1003125 -0.097625 0.1804375 -0.21406250000000002 0.23575 -0.3425625 0.055375 -0.1285625 0.08481249999999999 -0.2668125 0.08675000000000001 -0.40675000000000006V1.201125c-0.0019375 -0.1399375 -0.031375 -0.278125 -0.08675000000000001 -0.40675000000000006 -0.0553125 -0.1285625 -0.1354375 -0.24493750000000003 -0.23575 -0.3425625 -0.10037499999999999 -0.0975625 -0.21887500000000001 -0.1745 -0.349 -0.22625 -0.13 -0.05175 -0.269 -0.07743749999999999 -0.4089375 -0.0754375ZM4.6261875 12.453812500000002h-2.205V5.8389375h2.205v6.614875ZM3.5236875000000003 4.9128125c-0.3040625 0 -0.5956874999999999 -0.12075000000000001 -0.81075 -0.3358125 -0.21499999999999997 -0.21499999999999997 -0.3358125 -0.506625 -0.3358125 -0.81075 0 -0.3040625 0.1208125 -0.59575 0.3358125 -0.81075 0.21506250000000002 -0.21506250000000002 0.5066875 -0.3358125 0.81075 -0.3358125 0.1615 -0.0183125 0.325 -0.0023125000000000003 0.47987500000000005 0.0469375 0.15487499999999998 0.049249999999999995 0.2975625 0.1306875 0.41875 0.23893749999999997 0.12125 0.10825 0.2181875 0.240875 0.284625 0.3891875 0.066375 0.1483125 0.10075 0.309 0.10075 0.4715 0 0.1625 -0.034375 0.3231875 -0.10075 0.4715 -0.06643750000000001 0.1483125 -0.16337500000000002 0.2809375 -0.284625 0.3891875 -0.12118749999999999 0.10825 -0.263875 0.1896875 -0.41875 0.23893749999999997 -0.15487499999999998 0.049312499999999995 -0.31837499999999996 0.0653125 -0.47987500000000005 0.047ZM12.578750000000001 12.453812500000002h-2.2049374999999998v-3.55c0 -0.8893125000000001 -0.3160625 -1.4699375000000001 -1.1171875 -1.4699375000000001 -0.2479375 0.0018124999999999999 -0.489375 0.0795625 -0.69175 0.2228125s-0.356 0.34506250000000005 -0.44012500000000004 0.5783125c-0.0575625 0.17275 -0.0825 0.3546875 -0.0735 0.5365v3.675H5.8462499999999995V5.8315625h2.205v0.9334375c0.20025 -0.3475625 0.491625 -0.6339375 0.8425625000000001 -0.8281875 0.3510625 -0.19425 0.748375 -0.2890625 1.1492499999999999 -0.2743125 1.47 0 2.5356875 0.9481249999999999 2.5356875 2.9840625v3.80725Z"></path>
                    </svg>
                  </a>
                </div>
                <div className="bg-MUN-solidPink rounded-md w-8 h-8 border border-black flex justify-center items-center" style={{ boxShadow: '2px 2px 0px 0 rgba(0, 0, 0, 1)' }}>
                  <a href="mailto:itsmunclub2024@gmail.com?subject=Request for Collaboration">
                    <svg className="stroke-1 stroke-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-0.5 -0.5 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" id="Mail--Streamline-Tabler">
                      <path d="M1.875 4.375a1.25 1.25 0 0 1 1.25 -1.25h8.75a1.25 1.25 0 0 1 1.25 1.25v6.25a1.25 1.25 0 0 1 -1.25 1.25h-8.75a1.25 1.25 0 0 1 -1.25 -1.25v-6.25z"></path>
                      <path d="M1.875 4.375l5.625 3.75l5.625 -3.75"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterSumun