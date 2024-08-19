import React from 'react'
import Sidebar from '../components/Sidebar'
import styles from './aboutus.module.css'
import Image from 'next/image'
import Footer from '../components/Footer'
import Aos from '../components/Aos'

const AboutUsPage = () => {
  return (
    <Aos>
      <title>About Us | ITS MUN 2024</title>
      <Sidebar/>
        <div className={`${styles.bgPaper} bg-MUN-bg-light`}>
            <div className="flex flex-col justify-center">
              <div className="hero__section">
                <div data-aos="flip-left" className="layout h-auto w-auto flex justify-center items-center py-[2vh]">
                  <Image
                    src="/aboutus/heroLogo.png"
                    alt="MUN-logo"
                    height={646}
                    width={729}
                    data-aos="flip-left"
                  />
                </div>
                <div className="layout-about">
                  <p data-aos="fade-up" className="font-montserrat text-MUN-englishViolet text-justify text-[3.3vw] md:text-[1.37vw] lg:text-[1.5vw] xl:text-[1.57vw] xxl:text-[1.61vw]">
                    <span className="font-bold text-MUN-bg-purple-dark">
                      The Institut Teknologi Sepuluh Nopember Model United Nations Club (abbreviated ITS MUN Club)
                    </span> is a student organization led by dedicated undergraduates who have a keen interest in international relations and diplomacy.
                  </p>
                </div>
              </div>
              <div className="WWD__section">
                <div data-aos="fade-up" className="layout-about hero__WWD mb-[5vw] md:mb-0">
                  <div className="flex flex-col md:flex-row w-full items-center">
                    <div className="flex justify-center items-center h-auto w-auto md:w-2/5">
                      <Image
                        src="/aboutus/wwd.svg"
                        alt="what we do?"
                        height={211}
                        width={369}
                        className="h-auto w-auto"
                      />
                    </div>
                    <p className="font-montserrat text-MUN-englishViolet text-justify text-[3.3vw] md:text-[1.37vw] lg:text-[1.5vw] xl:text-[1.57vw] xxl:text-[1.61vw] w-full md:w-3/5">
                      <span className="font-bold text-MUN-bg-purple-dark">
                        Our mission
                      </span> is to raise awareness of global issues and enhance the soft skills of ITS students through various initiatives, such as Model United Nations (MUN) simulations, participation in international and national conferences, mentoring programs, and high-quality workshops.
                      <br></br>
                      <br></br>
                      These programs are conducted regularly due to the requirement of exceptional leadership skills in MUN conferences. The list of these programs are included below:
                    </p>
                  </div>
                </div>
                <div className="GT__WWD">
                  <div data-aos="fade-right" className="bg-[url('/aboutus/GTsecsm.svg')] md:bg-[url('/aboutus/GTsection.svg')] bg-cover bg-center">
                    <div className="layout-about mt-[-3vw] h-[150vw] md:h-[49.8vw]">
                      <div className="flex flex-col md:flex-row pt-[4vw] justify-between w-full">
                        <div className="h-full md:w-1/2">
                          <Image
                            src="/aboutus/GTpic.svg"
                            alt="general training"
                            height={352.12}
                            width={528.11}
                          />
                        </div>
                        <div className="flex flex-col font-montserrat text-white md:pt-[10vw] md:w-1/2 pl-4">
                          <h3 className="font-bold underline text-[5vw] md:text-[2vw] xl:text-[2.4vw] mb-2">General Training</h3>
                          <p className="text-[3.1vw] md:text-[1.3vw] xl:text-[1.42vw] text-justify">General Training is a weekly training held exclusively for ITS MUN Club Members to improve the necessary skills in the MUN competition. The General Training includes different topics each week, which are, but not limited to:</p>
                          <ul className="list-disc pl-7 text-[3.1vw] md:text-[1.2vw] xl:text-[1.41vw] md:pt-[0.5vw]">
                              <li>Writing and Research: Writing a Position Paper,</li>
                              <li>Speaking: General Speakers' List,</li>
                              <li>Debate: Moderated and Unmoderated Caucus</li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="JS__section">
                  <div data-aos="fade-right" className="layout-about mt-[-1vw] md:mt-[-9vw]">
                    <div className="flex flex-col md:flex-row justify-between w-full">
                      <div className="flex flex-col font-montserrat text-MUN-englishViolet justify-center items-center md:w-1/2 pr-4">
                        <h3 className="font-bold underline text-[5vw] md:text-[2vw] xl:text-[2.4vw] mb-2 text-left w-full">Joint Simulation</h3>
                        <p className="text-[3.1vw] md:text-[1.3vw] xl:text-[1.45vw] text-justify">
                          Joint Simulation is an MUN competition simulation held with MUN organizations outside the ITS campus. Joint Simulation will allow the participants to network with fellow MUN enjoyer from other campus.
                          <br></br>
                          <br></br>
                          Previously, we’ve held a Joint Simulation with various organizations, which are: Airlangga MUN Community and UPNVJT MUN.</p>
                      </div>
                      <div className="h-full md:w-1/2">
                        <Image
                          src="/aboutus/JSpic.svg"
                          alt="joint simulation"
                          height={512}
                          width={381.25}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="GA__section">
                  <div data-aos="fade-right" className="bg-[url('/aboutus/GAsecsm.svg')] md:bg-[url('/aboutus/GAsection.svg')] bg-cover bg-center">
                    <div className="layout-about h-[147vw] md:h-[44vw]">
                      <div className="flex flex-col md:flex-row pt-[5.5vw] justify-between w-full">
                        <div className="h-full md:w-1/2">
                          <Image
                            src="/aboutus/GApic.svg"
                            alt="general assembly"
                            height={484}
                            width={361}
                            className="w-full"
                          />
                        </div>
                        <div className="flex flex-col font-montserrat text-white md:pt-[6vw] md:w-1/2 pl-4">
                          <h3 className="font-bold underline text-[5vw] md:text-[2vw] xl:text-[2.4vw] mb-2">General Assembly</h3>
                          <p className="text-[3.1vw] md:text-[1.3vw] xl:text-[1.4vw] text-justify">General Assembly is a university-level MUN competition simulation, which means, as long as you’re an ITS student, you are free to join our General Assembly!
                            <br></br>
                            <br></br>
                            Test your MUN skills (speaking, writing, debating, negotiating, critical thinking, etc.) here and network with fellow ITS students with the same interest in global issues!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="CB__section">
                  <div data-aos="fade-right" className="layout-about">
                    <div className="flex flex-col md:flex-row justify-between w-full">
                      <div className="flex flex-col font-montserrat text-MUN-englishViolet justify-center items-center md:w-1/2 pr-4">
                        <h3 className="font-bold underline text-[5vw] md:text-[2vw] xl:text-[2.4vw] mb-2 text-left w-full">Club Bonding</h3>
                        <p className="text-[3.1vw] md:text-[1.3vw] xl:text-[1.45vw] text-justify">
                          Not only activities that can boost your MUN skills, we also have a club bonding! In club bonding, we will gather all ITS MUN Club members and do fun activities such as games and watching movies!
                          <br></br>
                          <br></br>
                          <span className="underline">Build your connection here and have some fun!</span></p>
                      </div>
                      <div className="h-full md:w-1/2">
                      <Image
                        src="/aboutus/CBpic.svg"
                        alt="club bonding"
                        height={510.4}
                        width={358}
                        className="w-full"
                      />
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-down" className="accomplishment__section mt-[5vw]">
                  <div className="hero__section layout-about">
                    <div className="flex flex-col gap-[3vw] md:gap-[2vw]">
                      <div className="h-auto w-auto">
                        <Image
                          src="/aboutus/accomplish.svg"
                          alt="our accomplishment"
                          height={78.93}
                          width={504.94}
                        />
                      </div>
                      <p className="text-[3.1vw] md:text-[1.3vw] xl:text-[1.4vw] font-montserrat text-MUN-englishViolet text-justify">
                        Recognized as one of Indonesia's prominent MUN communities, ITS MUN Club always encourage 
                        its members in reaching their maximum potential by sending delegations to either national 
                        or international level MUNs, creating a competitive culture and building its credibility 
                        with increasing numbers of awards each year. Below, you can find a list of our noteworthy 
                        accomplishments that highlight the achievements of the ITS MUN Club:
                      </p>
                    </div>
                  </div>
                  <div className="h-auto w-auto mt-4">
                    <Image
                      src="/aboutus/achievements.svg"
                      alt="achievements.svg"
                      height={905}
                      width={1280}
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>
        <Footer/>
    </Aos>
  )
}

export default AboutUsPage