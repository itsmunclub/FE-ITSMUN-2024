import React from 'react'
import Sidebar from '../components/Sidebar'
import styles from './home.module.css'
import Image from 'next/image'

const Home = () => {
  return (
    <div className={`${styles.bgPaper}  min-h-screen`}>
        <Sidebar/>
        <div className='layout'>
            <div className='hero flex flex-col h-full'>
                <div className='hero__content flex'>
                    <div className='content__main flex flex-col gap-9 pt-12'>
                        <div className="content__text text-6xl space-y-5  cursor-default">
                            <p className=' font-montserrat'>Boost your <span className={`${styles.span} font-spritz`}>
                                Public
                                </span>
                            </p>
                            <p className='font-montserrat'>
                                <span className={`${styles.span} font-spritz`}>
                                Speaking </span>skills in  <span className={`${styles.span} font-spritz`}>
                                Sepuluh
                                </span>
                            </p>
                            <p className={`${styles.span} font-spritz`}>Nopember Institute of</p>
                            <p className='font-montserrat'><span className={`${styles.span} font-spritz`}>Technology</span> leading
                            </p>
                            <p className='font-montserrat'>MUN organization</p>   
                        </div>     
                        <div className={styles['button-container-2']}>
                            <span className={`${styles.mas} font-montserrat`}>Register Here</span>
                            <button className={`${styles.button} font-montserrat`} type="button" name="Hover">Register Here</button>
                        </div>
                        {/* <button className="content__btn w-fit cursor-pointer font-montserrat font-ex my-1 bg-transparent border border-black rounded-full px-8 py-1 text-2xl text-black hover:bg-black hover:text-white" type="button">
                            Register Here
                        </button> */}
                    </div>
                    <div className="content__img h-[600px] w-[580px] relative mt-3">
                        <Image
                            src='/heroHome.png'
                            alt='hero home page'
                            layout="fill"
                            objectFit="cover" 
                            className="" 
                        />
                    </div>  
                </div>
                <div className='hero__side'>
                    <div className='side__main flex justify-between'>
                        <div className='side__blocks'>
                            <div className=' bg-MUN-UCLAGold w-12 h-12 ml-12 animate-bounce'></div>
                            <div className=' bg-MUN-solidPink w-12 h-12 animate-bounce'></div>    
                        </div>
                        <p className='side__text flex items-end font-montserrat'>ITS Model United Nations Club 2024</p>
                    </div>
                    <hr className='side__line border-black border-1'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home