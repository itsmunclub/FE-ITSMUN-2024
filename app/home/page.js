import React from 'react'
import Sidebar from '../components/Sidebar'
import styles from './home.module.css'
import Image from 'next/image'

const Home = () => {
  return (
    <>
        <Sidebar/>
        <div className='layout flex'>
        <div className="text-6xl space-y-5 pt-28 cursor-default">
            <p>Boost your <span className="group text-white relative cursor-default before:bg-MUN-UCLAGold before:content-[''] before:absolute before:inset-0 before:transform before:scale-x-0 before:origin-right before:transition-transform before:duration-200 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-black">
                public
                </span>
            </p>
            <p>
                <span className="text-white relative cursor-default before:bg-MUN-UCLAGold before:content-[''] before:absolute before:inset-0 before:transform before:scale-x-0 before:origin-right before:transition-transform before:duration-200 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-black">
                speaking </span>skills in  <span className="text-white relative cursor-default before:bg-MUN-UCLAGold before:content-[''] before:absolute before:inset-0 before:transform before:scale-x-0 before:origin-right before:transition-transform before:duration-200 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-black">
                Sepuluh
                </span>
            </p>
            <p>
                <span className="text-white relative cursor-default before:bg-MUN-UCLAGold before:content-[''] before:absolute before:inset-0 before:transform before:scale-x-0 before:origin-right before:transition-transform before:duration-200 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-black">
                Nopember Institute of
                </span>
            </p>
            <p>
                <span className="text-white relative cursor-default before:bg-MUN-UCLAGold before:content-[''] before:absolute before:inset-0 before:transform before:scale-x-0 before:origin-right before:transition-transform before:duration-200 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-black">
                Technology
                </span>  leading
            </p>
            <p>MUN organization</p>   
        </div>
                    
            <div className="h-[600px] w-[580px] relative mt-3">
                <Image
                    src='/heroHome.png'
                    alt='hero home page'
                    layout="fill" // required
                    objectFit="cover" // change to suit your needs
                    className="" // just an example
                />
            </div>
            {/* <p>Boost your <span className={styles.span}>public </span></p>
            <p><span className={styles.span}>speaking</span> skills in <span className={styles.span}>Sepuluh</span></p>
            <p><span className={styles.span}>Nopember Institute of</span></p>
            <p><span className={styles.span}>Technology</span> leading</p>
            <p>MUN organization</p>   */}
        </div>
        
    </>
  )
}

export default Home