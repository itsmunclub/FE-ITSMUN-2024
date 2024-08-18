import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const Homepage = () => {
  return (
        <><Sidebar />
        <div className={`${styles.bgPaper} bg-MUN-bg-light`}>
            <div className="flex flex-col justify-center gap-[3vw]">
              <div className='hero__section layout md:pt-[0.6vw]'>
                <div className="flex flex-col h-full w-full gap-6">
                  <div className='hero__top flex flex-col-reverse md:flex-row justify-around w-full'>
                      <div className='top__left flex flex-col justify-between gap-3 md:gap-1 md:w-7/12 lg:w-8/12'>
                          <div className="content__text flex flex-col gap-2 cursor-default">
                              <p className='font-montserrat whitespace-nowrap text-[7.5vw] md:text-[3.4vw] lg:text-[4.17vw] w-auto'>Boost your <span className={`${styles.span} font-spritz`}>
                                  Public
                              </span>
                              </p>
                              <p className='font-montserrat md:whitespace-nowrap text-[6.5vw] md:text-[3.4vw] lg:text-[4.17vw] w-auto'>
                                  <span className={`${styles.span} font-spritz`}>
                                      Speaking </span>skills in  <span className={`${styles.span} font-spritz`}>
                                      Sepuluh
                                  </span>
                              </p>
                              <p className={`${styles.span} font-spritz text-[7vw] md:text-[3.4vw] lg:text-[4.17vw] md:whitespace-nowrap`}>Nopember Institute of</p>
                              <p className='font-montserrat md:whitespace-nowrap text-[8.5vw] md:text-[3.4vw] lg:text-[4.17vw]'><span className={`${styles.span} font-spritz`}>Technology</span> leading
                              </p>
                              <p className='font-montserrat md:whitespace-nowrap text-[8.5vw] md:text-[3.4vw] lg:text-[4.17vw]'>MUN organization</p>
                          </div>
                          <a href="http://its.id/m/PPITSMUNMRegistrationForm" target="_blank" rel="noopener noreferrer" className="flex self-start">
                              <div className="flex self-start">
                                  <div className={styles['button-container-2']}>
                                      <span className={`${styles.mas} font-montserrat`}>Register Here</span>
                                      <button className={`${styles.button} font-montserrat`} type="button" name="Hover">Register Here</button>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div className="top__right h-auto w-auto relative md:w-5/12 lg:w-4/12">
                          <Image
                              src='/heroHome.svg'
                              alt='hero home page'
                              height={580}
                              width={544} />
                      </div>
                  </div>
                  <div className='hero__side'>
                      <div className='side__main flex justify-between'>
                          <div className='side__blocks'>
                              <div className=' bg-MUN-UCLAGold w-8 h-8 ml-8 md:w-12 md:h-12 md:ml-12 animate-bounce'></div>
                              <div className=' bg-MUN-solidPink w-8 h-8 md:w-12 md:h-12 animate-bounce'></div>
                          </div>
                          <p className='side__text flex self-end font-montserrat text-[3vw] md:text-[1.2vw] whitespace-nowrap'>ITS Model United Nations Club 2024</p>
                      </div>
                      <hr className='side__line border-black border-1' />
                  </div>
                </div>
              </div>
              <div className="country__section layout">
                <div className="w-full h-full flex justify-center flex-col items-center gap-10 md:gap-16">
                    <h4 className={`${styles.country} font-montserrat font-semibold text-[7.35vw] md:text-[2.35vw] text-MUN-bg-light text-center`} style={{textShadow: `3px 3px 0 #603B28, 6px 6px 0 #DD704F, 9px 9px 0 #F4C245`}}>OUR MEMBER HAS BEEN TO</h4>
                    <div className="flex flex-col flex-nowrap gap-10 md:gap-20 items-center justify-center w-full md:flex-row md:flex-wrap font-montserrat font-semibold text-[5vw] md:text-[1.55vw] text-MUN-vanDykeBrown">
                        <h5>LONDON</h5>
                        <h5>PARIS</h5>
                        <h5>GOTTINGEN</h5>
                        <h5>NETHERLAND</h5>
                        <h5>SINGAPORE</h5>
                    </div>
                </div>
              </div>
              <div className="blog__section layout">
                <div className="section__title h-auto w-auto flex justify-center items-center">
                    <Image
                        src="/blogtitle.svg"
                        alt="blog"
                        height={127.95}
                        width={229.45}
                    />
                </div>
                <div className="blogg">
                    <div></div>
                    <div></div>
                </div>
              </div>
            </div>
      </div>
      <Footer /></>
  )
}

export default Homepage