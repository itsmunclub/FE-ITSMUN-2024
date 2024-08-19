import React from 'react'
import styles from './SurabayaMUN2024.module.css'
import Image from 'next/image'
import FooterSumun from '../components/FooterSumun'
import Aos from '../components/Aos'

const Sumun = () => {
  return (
    <Aos>
    <title>Surabaya MUN 2024 | ITS MUN 2024</title>
      <div className={`${styles.bgAll}`}>
        <div className="bg-[url('/sumun/sumunHero.svg')] bg-cover xl:bg-cover md:bg-center bg-left bg-no-repeat hero flex flex-col md:pl-36 md:pr-12 sm:pl-14 pl-8 pr-4">
          <div className="hero__content flex md:h-[560px] lg:h-[750px] xl:h-[930px] xxl:h-[1054px] h-screen">
            <div className="content__main flex flex-row">
              <div className="content__text md:pt-[68px] md:pl-5 pt-[45px] flex flex-shrink flex-col w-auto h-auto">
                <div className="flex flex-row items-center md:gap-4 gap-2">
                  <div className="flex flex-col h-auto w-auto gap-2">
                    <div className="">
                      <p className={`${styles.text1} font-frankRuhlLibre font-bold whitespace-nowrap text-white`}>surabaya</p>
                      <div className={`${styles.sumunLine}`}></div>
                    </div>
                    <p className={`${styles.text2} font-frankRuhlLibre font-bold whitespace-nowrap text-black`}>Model United Nations 2024</p>
                  </div>
                  <div className="h-auto w-auto">
                    <Image
                      src="/sumun/sumunLogo.svg"
                      alt="sumun logo"
                      height={163}
                      width={163}
                      priority={true}
                    />
                  </div>
                </div>
                <div className="h-auto w-auto">
                  <p className={`${styles.text3} font-inter font-bold whitespace-nowrap text-white`}>Hybrid, 9-10<sup>th</sup> November 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="body bg-[url('/sumun/bgBodySumun.svg')] bg-cover">
          <div className="h-auto">
            <div className="layout body__theme flex flex-col md:pt-12 pt-8 gap-4 pb-4">
              <div className="theme__title h-auto w-auto self-center">
                <Image
                  src="/sumun/themeTitle.svg"
                  alt="grand-theme"
                  height={77}
                  width={442}
                  priority={false}
                />
              </div>
              <div className="title__pict h-auto w-auto flex md:flex-row flex-col justify-center">
                <div data-aos="fade-right" className="h-auto w-auto md:w-1/2 flex items-center justify-center">
                  <p className={`${styles.themeText} font-inter font-extrabold italic text-white md:text-left text-center`}>“Disruptive Innovation, Constructive Collaboration: Embracing Emerging Technologies for Preserving the Heritage”</p>
                </div>
                <div data-aos="fade-right" className="h-auto w-auto md:w-1/2 flex items-center justify-center">
                  <Image
                    src="/sumun/themePict.svg"
                    alt="sura&baya cutout"
                    height={511}
                    width={513}
                    priority={false}
                  />
                </div>
              </div>
            </div>
            <div className="body__council pt-4">
              <div className="council__top flex flex-row md:pr-12 pr-2 justify-between gap-2">
                <div className="council__hand h-auto w-auto self-center">
                  <Image
                    src="/sumun/bodyHands.svg"
                    alt="bodyHands"
                    height={219}
                    width={529}
                    priority={false}
                  />
                </div>
                <div className="council__text animate__animated animate__fadeInDown self-center">
                  <div className="flex flex-col h-auto w-auto">
                    <p className={`${styles.tstay} text-white font-frankRuhlLibre font-black whitespace-nowrap`}>COUNCIL & TOPIC REVEAL</p>
                    <p className={`${styles.tstay} ${styles.second} text-white font-frankRuhlLibre font-black whitespace-nowrap`}>COUNCIL & TOPIC REVEAL</p>
                    <p className={`${styles.tstay} ${styles.third} text-white font-frankRuhlLibre font-black whitespace-nowrap`}>COUNCIL & TOPIC REVEAL</p>
                    <p className={`${styles.tstay} ${styles.fourth} text-white font-frankRuhlLibre font-black whitespace-nowrap`}>COUNCIL & TOPIC REVEAL</p>
                  </div>
                </div>
              </div>
              <div className="council__middle flex overflow-hidden">
                <div className="council__carousel">
                  <div className="carousel__text flex overflow-hidden bg-black my-3">
                    <ul className="flex animate-infinite-scroll-left gap-10 py-4 text-white">
                      {[...texts, ...texts].map((text, index) => {
                        return (
                          <li key={index} className="flex items-center gap-2">
                            <p className="text-white font-montserrat text-sm font-bold whitespace-nowrap">{text.word}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="carousel__image flex overflow-hidden my-4">
                    <ul className="flex animate-infinite-scroll-right gap-2">
                      {[...images, ...images].map((image, index) => {
                        return (
                          <li key={index} className="flex items-center gap-2">
                            <img src={image.src} alt={image.alt} className="h-auto w-auto" />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="carousel__text flex overflow-hidden bg-black my-3">
                    <ul className="flex animate-infinite-scroll-left gap-10 py-4 text-white">
                      {[...texts2, ...texts2].map((text2, index) => {
                        return (
                          <li key={index} className="flex items-center gap-2">
                            <p className="text-white font-montserrat text-sm font-bold whitespace-nowrap">{text2.word}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="council__bottom">
                <div className="clutterPaper h-auto w-auto flex justify-end mt-[-7vw] md:mt-[-3.5vw]">
                  <div className="h-auto w-[60vw] xxl:w-[50vw]">
                    <Image
                      src="/sumun/paperClutter.svg"
                      alt="paper clutter"
                      height={415}
                      width={779}
                      priority={false}
                    />
                  </div>
                </div>
                <div className={`${styles.council__paper}`}>
                  <div className="layout flex flex-col md:gap-20 lg:gap-7">
                    <div data-aos="fade-down" className="h-auto w-auto flex justify-center xl:mt-28">
                      <Image
                        src="/sumun/HAMDALAHUNEP.png"
                        alt="unep"
                        height={1180}
                        width={826}
                        priority={true}
                      />
                    </div>
                    <div data-aos="fade-down" className="h-auto w-auto flex justify-center xl:mt-16 xxl:mt-32">
                      <Image
                        src="/sumun/finallyunesco.png"
                        alt="unesco"
                        height={1118}
                        width={1035}
                        priority={true}
                      />
                    </div>
                    <div data-aos="fade-down" className="h-auto w-auto flex justify-center xl:mt-28 md:mt-1 mt-none mt-10 xxl:mt-52">
                      <Image
                        src="/sumun/HAMDALAH-UNCSTD.png"
                        alt="uncstd"
                        height={994}
                        width={749}
                        priority={true}
                      />
                    </div>
                    <div data-aos="fade-down" className="h-auto w-auto flex justify-center xl:mt-24 md:mt-1 mt-6 xxl:mt-52">
                      <Image
                        src="/sumun/HAMDALAHUNTOURISM.png"
                        alt="untourism"
                        height={1115}
                        width={779}
                        priority={true}
                      />
                    </div>
                    <div data-aos="fade-up" className="flex flex-row mt-[7vw] md:mt-0 lg:mt-[7vw] xl:h-[35vw] xxl:h-[60vw] lg:h-[32vw] md:h-[30vw] gap-12 md:gap-4 lg:gap-12">
                      <div className="w-1/2 xxl:flex xxl:self-center">
                        <div className="transform rotate-min-15.4 flex justify-center md:justify-start lg:justify-center xl:pt-[8vw] xxl:pt-[18vw] xl:pl-[3vw] xxl:pl-[8vw] md:bg-transparent bg-white bg-opacity-80 h-[20vw] items-center rounded-md">
                          <p className="font-frankRuhlLibre font-bold text-[5vw]">
                            Join us <a href="https://its.id/m/SUMUN2024RegularBird" className="underline text-[#109D82]">here</a>
                          </p>
                        </div>
                      </div>
                      <div className="w-1/2 xxl:flex xxl:self-center">
                        <div className="transform rotate-18.6 flex justify-center md:justify-start md:pl-[1.5vw] xl:pr-[6vw] xxl:pt-[5vw] xl:pt-[3vw] xxl:pl-[2.5vw] xl:pl-[1.5vw] md:bg-transparent bg-white bg-opacity-80 h-[18vw] md:h-1 lg:h-[18vw] items-center md:items-start rounded-md">
                          <p className="font-frankRuhlLibre font-bold text-[5vw]">Interested?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <FooterSumun/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Aos>
  )
}

export default Sumun;

const texts = [
  { word: "OUR COUNCIL & TOPIC"},
  { word: "OUR COUNCIL & TOPIC"},
  { word: "OUR COUNCIL & TOPIC"},
  { word: "OUR COUNCIL & TOPIC"},
  { word: "OUR COUNCIL & TOPIC"},
  { word: "OUR COUNCIL & TOPIC"},
  { word: "OUR COUNCIL & TOPIC"},
  { word: "OUR COUNCIL & TOPIC"},
  { word: "OUR COUNCIL & TOPIC"},
  { word: "OUR COUNCIL & TOPIC"},
];

const texts2 = [
  { word: "OUR COUNCIL & TOPIC"},
  { word: "OUR COUNCIL & TOPIC"},
  { word: "OUR COUNCIL & TOPIC"},
  { word: "OUR COUNCIL & TOPIC"},
  { word: "OUR COUNCIL & TOPIC"},
  { word: "OUR COUNCIL & TOPIC"},
  { word: "OUR COUNCIL & TOPIC"},
  { word: "OUR COUNCIL & TOPIC"},
  { word: "OUR COUNCIL & TOPIC"},
  { word: "OUR COUNCIL & TOPIC"},
];

const images = [
  { src: "/sumun/unepCarousel.svg", alt: "UNEP" },
  { src: "/sumun/unescoCarousel.svg", alt: "UNESCO" },
  { src: "/sumun/uncstdCarousel.svg", alt: "UNCSTD" },
  { src: "/sumun/untourismCarousel.svg", alt: "UNTourism" },
];