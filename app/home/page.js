import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Link from 'next/link'

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
              <div className="blog__section layout flex flex-col gap-4">
                <div className="section__title h-auto w-auto flex justify-center items-center">
                    <Image
                        src="/blogtitle.svg"
                        alt="blog"
                        height={127.95}
                        width={229.45}
                    />
                </div>
                <div className="blogg flex flex-col md:flex-row justify-between w-full">
                    <div className="blog__text font-montserrat text-MUN-englishViolet md:w-1/2">
                        <p className="hidden sm:flex text-xs">Written by Bayu Prayogo</p>
                        <div className="flex flex-row justify-center sm:justify-between">
                            <h1 className="font-bold text-[13vw] md:text-[3.8vw]">MUN 101</h1>
                            <Image
                                src="/starasset.svg"
                                alt="star"
                                height={49.25}
                                width={42.55}
                                className="h-auto w-auto hidden sm:flex"
                            />
                        </div>
                        <p className="text-[4vw] md:text-[1.6vw] text-justify">For almost 3 years ITS MUN Club has been found, many of them turned their backs away because “MUN is complicated.” Well, for this reason, we have gathered our three years worth of knowledge to provide everything you need to know about MUN in “MUN 101” article.</p>
                        <div className="flex items-center justify-center md:justify-start w-auto text-MUN-sidebar-linen font-montserrat py-4">
                            <Link href="/mun-101" passHref>
                                <button className="hidden bg-MUN-solidPink sm:flex group text-md md:text-[1.6vw] px-3 py-2 items-center justify-center rounded-full duration-300 ease-in-out whitespace-nowrap">
                                    Curious?
                                    <span className="flex items-center group-hover:pl-3 justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-3 duration-300 ease-in-out">
                                    See here!
                                    </span>
                                </button>
                                <button className="flex bg-MUN-solidPink sm:hidden dark:text-dark-text dark:border-dark-accent group text-sm px-6 py-4 items-center justify-center rounded-full duration-300 ease-in-out">See here!</button>
                            </Link>
                        </div>
                    </div>
                    <div className="h-auto w-auto md:w-1/2 flex justify-center items-center">
                        <Image
                            src="/mun101pic.png"
                            alt="mun101"
                            height={276}
                            width={490}
                        />
                    </div>
                </div>
              </div>
              <div className="faq__section"></div>
            </div>
      </div>
      <Footer /></>
  )
}

export default Homepage