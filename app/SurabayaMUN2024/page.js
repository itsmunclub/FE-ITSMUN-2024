import React from 'react'
import styles from './SurabayaMUN2024.module.css'
import Image from 'next/image'

const Sumun = () => {
  return (
      <div className={`${styles.bgAll}`}>
        <div className="bg-[url('/sumunHero.svg')] bg-cover xl:bg-cover md:bg-center bg-left bg-no-repeat hero flex flex-col md:pl-36 md:pr-12 sm:pl-14 pl-8 pr-4">
          <div className="hero__content flex md:h-[560px] lg:h-[750px] xl:h-[930px] xxl:h-[1050px] h-screen">
            <div className="content__main flex flex-row">
              <div className="content__text md:pt-[82px] md:pl-5 pt-[45px] flex flex-shrink flex-col gap-4 w-auto h-auto">
                <div className="flex flex-row items-center gap-4">
                  <div className="flex flex-col h-auto w-auto">
                    <Image
                      src="/sumunText1.svg"
                      alt="sumun text1"
                      height={194}
                      width={638}
                      priority={true}
                    />
                    <Image
                      src="/sumunText2.svg"
                      alt="sumun text2"
                      height={65}
                      width={618}
                      priority={true}
                    />
                  </div>
                  <div className="h-auto w-auto">
                    <Image
                      src="/sumunLogo.svg"
                      alt="sumun logo"
                      height={163}
                      width={163}
                      priority={true}
                    />
                  </div>
                </div>
                <div className="h-auto w-auto">
                  <Image
                    src="/sumunText3.svg"
                    alt="sumun text3"
                    height={23}
                    width={358}
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="body bg-[url('/bgBodySumun.svg')] bg-cover">
          <div className="h-auto">
            <div className="layout body__theme flex flex-col md:pt-12 pt-8 gap-4">
              <div className="theme__title h-auto w-auto self-center">
                <Image
                  src="/themeTitle.svg"
                  alt="grand-theme"
                  height={77}
                  width={442}
                  priority={false}
                />
              </div>
              <div className="title__pict h-auto w-auto flex md:flex-row flex-col justify-center">
                <div className="h-auto w-auto self-center">
                  <Image
                    src="/themeText.svg"
                    alt="“Disruptive Innovation, Constructive Collaboration: Embracing Emerging Technologies for Preserving the Heritage”"
                    height={305}
                    width={616}
                    priority={false}
                  />
                </div>
                <div className="h-auto w-auto self-center">
                  <Image
                    src="/themePict.svg"
                    alt="sura&baya cutout"
                    height={511}
                    width={513}
                    priority={false}
                  />
                </div>
              </div>
            </div>
            <div className="body__council">
              <div className="council__top flex flex-row">
                <div className="council__hand h-auto w-auto self-center">
                  <Image
                    src="/bodyHands.svg"
                    alt="bodyHands"
                    height={219}
                    width={529}
                    priority={false}
                  />
                </div>
                <div className="council__text animate__animated animate__fadeInDown self-center">
                  <div className="flex flex-col h-auto w-auto">
                    <Image
                      src="/councilText.svg"
                      alt="council&topicreveal"
                      height={65}
                      width={641}
                      priority={false}
                    />
                    <Image
                      src="/councilText.svg"
                      alt="council&topicreveal"
                      height={65}
                      width={641}
                      priority={false}
                    />
                    <Image
                      src="/councilText.svg"
                      alt="council&topicreveal"
                      height={65}
                      width={641}
                      priority={false}
                    />
                  </div>
                </div>
              </div>
              <div className="council__middle">
                <div className="council__carousel">
                  <div 
                      className="w-full inline-flex flex-nowrap"
                      x-data="{}"
                      x-init="$nextTick(() => {
                          let ul = $refs.logos;
                          ul.insertAdjacentHTML('afterend', ul.outerHTML);
                          ul.nextSibling.setAttribute('aria-hidden', 'true');
                      })">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll bg-black">
                      <li>
                        <a href="#councilPaper" className="font-inter font-bold text-white text-lg w-full">OUR COUNCIL & TOPIC</a>
                      </li>
                      <li>
                        <a href="#councilPaper" className="font-inter font-bold text-white text-lg">OUR COUNCIL & TOPIC</a>
                      </li>
                      <li>
                        <a href="#councilPaper" className="font-inter font-bold text-white text-lg">OUR COUNCIL & TOPIC</a>
                      </li>
                      <li>
                        <a href="#councilPaper" className="font-inter font-bold text-white text-lg">OUR COUNCIL & TOPIC</a>
                      </li>
                      <li>
                        <a href="#councilPaper" className="font-inter font-bold text-white text-lg">OUR COUNCIL & TOPIC</a>
                      </li>
                      <li>
                        <a href="#councilPaper" className="font-inter font-bold text-white text-lg">OUR COUNCIL & TOPIC</a>
                      </li>
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll bg-black" aria-hidden="true">
                      <li>
                        <a href="#councilPaper" className="font-inter font-bold text-white text-lg">OUR COUNCIL & TOPIC</a>
                      </li>
                      <li>
                        <a href="#councilPaper" className="font-inter font-bold text-white text-lg">OUR COUNCIL & TOPIC</a>
                      </li>
                      <li>
                        <a href="#councilPaper" className="font-inter font-bold text-white text-lg">OUR COUNCIL & TOPIC</a>
                      </li>
                      <li>
                        <a href="#councilPaper" className="font-inter font-bold text-white text-lg">OUR COUNCIL & TOPIC</a>
                      </li>
                      <li>
                        <a href="#councilPaper" className="font-inter font-bold text-white text-lg">OUR COUNCIL & TOPIC</a>
                      </li>
                      <li>
                        <a href="#councilPaper" className="font-inter font-bold text-white text-lg">OUR COUNCIL & TOPIC</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="council__bottom layout"></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Sumun
