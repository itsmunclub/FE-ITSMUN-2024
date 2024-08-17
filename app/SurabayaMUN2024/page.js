import React from 'react'
import styles from './SurabayaMUN2024.module.css'

const Sumun = () => {
  return (
      <div className={`${styles.bgAll}`}>
        <div className="bg-[url('/sumunHero.svg')] bg-cover lg:bg-auto xl:bg-cover bg-center bg-no-repeat hero flex flex-col md:pl-36 md:pr-12 sm:pl-14 pl-12 pr-4">
          <div className="hero__content flex xl:h-[1280px] h-screen">
            <div className="content__main flex flex-row">
              <div className="content__text md:pt-[82px] md:pl-5 pt-[45px]">
                <img className="h-auto w-auto" src="/heroosumun.svg" alt="hero sumun text"/>
              </div>
            </div>
          </div>
        </div>
        <div className="body">
          <img className="" src="/bgBodySumun.svg" alt="bg-sumun"></img>
        </div>
      </div>
  )
}

export default Sumun
