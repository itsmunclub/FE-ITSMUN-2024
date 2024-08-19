import React from 'react'
import Sidebar from '../components/Sidebar';
import styles from './event.module.css'
import Image from 'next/image'
import EventCard from '../components/EventCard';
import Footer from '../components/Footer';

const EventPage = () => {
    return (
        <>
        <title>Events | ITS MUN 2024</title>
            <Sidebar/>
            <div className={`${styles.bgPaper} bg-cover`}>
                <div className="flex flex-col justify-center gap-[3vw]">
                    <div className="hero__section layout">
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className="hero__img">
                                <Image
                                    src="/events/heropic.svg"
                                    alt="mun events"
                                    height={239.27}
                                    width={462.58}
                                    className="h-auto w-auto"
                                />
                            </div>
                            <div className="hero__text">
                                <p className="font-montserrat font-medium text-xl text-MUN-burntSienna text-center">Sign yourself up and enjoy the ride!</p>
                            </div>
                        </div>
                    </div>
                    <div className="event__card layout mb-[8vw] md:mb-[4vw]">
                        <EventCard/>
                    </div>
                </div>   
            </div>
            <Footer/>
        </>
    )
}

export default EventPage