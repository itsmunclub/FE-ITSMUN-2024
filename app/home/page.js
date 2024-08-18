import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const Homepage = () => {
  return (
        <><Sidebar /><div className={`${styles.bgPaper} bg-cover bg-no-repeat`}>
          <div className='w-[73vh] md:w-full'>
              <div className='hero flex flex-col h-full ml-4 pl-4 pr-4 md:ml-24 md:pl-12 md:pr-0 min-h-screen w-full gap-6'>
                  <div className='hero__content flex flex-col-reverse md:flex-row justify-around'>
                      <div className='content__main flex flex-col md:gap-9 pt-12'>
                          <div className="content__text flex flex-col gap-2 cursor-default">
                              <p className='font-montserrat whitespace-nowrap text-[8.5vw] md:text-[4.17vw]'>Boost your <span className={`${styles.span} font-spritz`}>
                                  Public
                              </span>
                              </p>
                              <p className='font-montserrat md:whitespace-nowrap text-[8vw] md:text-[4.17vw]'>
                                  <span className={`${styles.span} font-spritz`}>
                                      Speaking </span>skills in  <span className={`${styles.span} font-spritz`}>
                                      Sepuluh
                                  </span>
                              </p>
                              <p className={`${styles.span} font-spritz text-[9vw] md:text-[4.17vw]`}>Nopember Institute of</p>
                              <p className='font-montserrat md:whitespace-nowrap text-[10vw] md:text-[4.17vw]'><span className={`${styles.span} font-spritz`}>Technology</span> leading
                              </p>
                              <p className='font-montserrat md:whitespace-nowrap text-[10.5vw] md:text-[4.17vw]'>MUN organization</p>
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
                      <div className="content__img h-auto w-auto relative mt-3">
                          <Image
                              src='/heroHome.png'
                              alt='hero home page'
                              height={580}
                              width={544} />
                      </div>
                  </div>
                  <div className='hero__side'>
                      <div className='side__main flex justify-between'>
                          <div className='side__blocks'>
                              <div className=' bg-MUN-UCLAGold w-12 h-12 ml-12 animate-bounce'></div>
                              <div className=' bg-MUN-solidPink w-12 h-12 animate-bounce'></div>
                          </div>
                          <p className='side__text flex self-end font-montserrat text-[4.2vw] md:text-[1.2vw] whitespace-nowrap'>ITS Model United Nations Club 2024</p>
                      </div>
                      <hr className='side__line border-black border-1' />
                  </div>
              </div>
          </div>
      </div><Footer /></>
  )
}

export default Homepage