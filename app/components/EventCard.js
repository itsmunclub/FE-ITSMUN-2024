"use client";
import React from 'react'
import Image from 'next/image'

const EventCard = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-around gap-[15vw] md:gap-0">
            <div className="rounded-tl-3xl rounded-br-3xl bg-MUN-steelTeal border-8 border-[#D7C1AE] h-full flex flex-col overflow-hidden w-[240px] xxl:w-[280px]">
                <div className="card__top h-3/7 overflow-hidden flex justify-center items-center px-9 py-11">
                    <Image
                        src="/events/logomun.svg"
                        alt="itsmun"
                        height={119}
                        width={119}
                        className="h-auto w-auto"
                    />
                </div>
                <div className="card__bottom h-4/7 flex flex-col px-4 pb-4 pt-1 gap-[5vw] md:gap-[1vw]">
                    <table className="table-auto">
                        <thead>
                            <tr className="border-b-[1.5px] border-MUN-sidebar-linen">
                                <th colSpan="2" className="text-center font-montserrat font-semibold text-[5vw] md:text-[2vw] lg:text-[1.32vw] text-MUN-sidebar-linen">UKM Expo</th>
                            </tr>
                        </thead>
                        <tbody className="flex flex-col">
                            <tr className="flex flex-row justify-between border-b-[1.5px] border-MUN-sidebar-linen">
                                <td className="flex items-center justify-center pr-[4px] w-[25%] border-r-[1.5px] border-MUN-sidebar-linen py-2 h-auto">
                                    <Image
                                        src="/events/calendar.svg"
                                        alt="date"
                                        height={26}
                                        width={26}
                                    />
                                </td>
                                <td className="pl-[12px] w-[75%] py-2 font-montserrat text-MUN-sidebar-linen font-medium text-[4.8vw] md:text-[2vw] lg:text-[1.25vw]">18 Aug - 20 Aug</td>
                            </tr>
                            <tr className="flex flex-row justify-between border-b-[1.5px] border-MUN-sidebar-linen">
                                <td className="flex items-center justify-center pr-[4px] w-[25%] border-r-[1.5px] border-MUN-sidebar-linen py-2 h-auto">
                                    <Image
                                        src="/events/location.svg"
                                        alt="location"
                                        height={21}
                                        width={21}
                                    />
                                </td>
                                <td className="pl-[12px] w-[75%] py-2 font-montserrat text-MUN-sidebar-linen font-medium text-[4.5vw] md:text-[2vw] lg:text-[1.25vw]">Taman Alumni ITS</td>
                            </tr>
                            <tr className="flex flex-row justify-between border-b-[1.5px] border-MUN-sidebar-linen">
                                <td className="flex items-center justify-center pr-[4px] w-[25%] border-r-[1.5px] border-MUN-sidebar-linen py-2 h-auto">
                                    <Image
                                        src="/events/fee.svg"
                                        alt="fee"
                                        height={26.59}
                                        width={28.86}
                                    />
                                </td>
                                <td className="pl-[12px] w-[75%] py-2 font-montserrat text-MUN-sidebar-linen font-medium text-[4.5vw] md:text-[2vw] lg:text-[1.25vw]">Free</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex justify-center items-center">
                        <a className="flex justify-center items-center bg-MUN-solidPink p-2 w-[55%]" href="https://maps.app.goo.gl/gWgmKBReXGwtfnVP7">
                            <div className="bg-MUN-solidPink border border-MUN-deepChampagne-100 w-full">
                                <p className="font-montserrat font-semibold text-MUN-sidebar-linen text-center">Details</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="rounded-tl-3xl rounded-br-3xl bg-MUN-steelTeal border-8 border-[#D7C1AE] h-full flex flex-col overflow-hidden w-[240px] xxl:w-[280px]">
                <div className="card__top h-3/7 overflow-hidden flex justify-center items-center px-9 py-11">
                    <Image
                        src="/events/logomun.svg"
                        alt="itsmun"
                        height={119}
                        width={119}
                        className="h-auto w-auto"
                    />
                </div>
                <div className="card__bottom h-4/7 flex flex-col px-4 pb-4 pt-1 gap-[5vw] md:gap-[1vw]">
                    <table className="table-auto">
                        <thead>
                            <tr className="border-b-[1.5px] border-MUN-sidebar-linen">
                                <th colSpan="2" className="text-center font-montserrat font-semibold text-[5vw] md:text-[2vw] lg:text-[1.32vw] text-MUN-sidebar-linen">Member Recruitment</th>
                            </tr>
                        </thead>
                        <tbody className="flex flex-col">
                            <tr className="flex flex-row justify-between border-b-[1.5px] border-MUN-sidebar-linen">
                                <td className="flex items-center justify-center pr-[4px] w-[25%] border-r-[1.5px] border-MUN-sidebar-linen py-2 h-auto">
                                    <Image
                                        src="/events/calendar.svg"
                                        alt="date"
                                        height={26}
                                        width={26}
                                    />
                                </td>
                                <td className="pl-[12px] w-[75%] py-2 font-montserrat text-MUN-sidebar-linen font-medium text-[4.8vw] md:text-[2vw] lg:text-[1.25vw]">08 Aug - 04 Sep</td>
                            </tr>
                            <tr className="flex flex-row justify-between border-b-[1.5px] border-MUN-sidebar-linen">
                                <td className="flex items-center justify-center pr-[4px] w-[25%] border-r-[1.5px] border-MUN-sidebar-linen py-2 h-auto">
                                    <Image
                                        src="/events/location.svg"
                                        alt="location"
                                        height={21}
                                        width={21}
                                    />
                                </td>
                                <td className="pl-[12px] w-[75%] py-2 font-montserrat text-MUN-sidebar-linen font-medium text-[4.5vw] md:text-[2vw] lg:text-[1.25vw]">UKM Expo Booth</td>
                            </tr>
                            <tr className="flex flex-row justify-between border-b-[1.5px] border-MUN-sidebar-linen">
                                <td className="flex items-center justify-center pr-[4px] w-[25%] border-r-[1.5px] border-MUN-sidebar-linen py-2 h-auto">
                                    <Image
                                        src="/events/fee.svg"
                                        alt="fee"
                                        height={26.59}
                                        width={28.86}
                                    />
                                </td>
                                <td className="pl-[12px] w-[75%] py-2 font-montserrat text-MUN-sidebar-linen font-medium text-[4.5vw] md:text-[2vw] lg:text-[1.25vw]">Free</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex justify-center items-center">
                        <a className="flex justify-center items-center bg-MUN-solidPink p-2 w-[55%]" href="http://its.id/m/PPITSMUNGuidebook">
                            <div className="bg-MUN-solidPink border border-MUN-deepChampagne-100 w-full">
                                <p className="font-montserrat font-semibold text-MUN-sidebar-linen text-center">Details</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="rounded-tl-3xl rounded-br-3xl bg-MUN-steelTeal border-8 border-[#D7C1AE] h-full flex flex-col overflow-hidden w-[240px] xxl:w-[280px]">
                <div className="card__top h-3/7 overflow-hidden flex justify-center items-center px-9 py-11">
                    <Image
                        src="/events/sumunlogo.svg"
                        alt="sumun"
                        height={116}
                        width={118}
                        className="h-auto w-auto"
                    />
                </div>
                <div className="card__bottom h-4/7 flex flex-col px-4 pb-4 pt-1 gap-[5vw] md:gap-[1vw]">
                    <table className="table-auto">
                        <thead>
                            <tr className="border-b-[1.5px] border-MUN-sidebar-linen">
                                <th colSpan="2" className="text-center font-montserrat font-semibold text-[5vw] md:text-[2vw] lg:text-[1.32vw] text-MUN-sidebar-linen">Surabaya MUN 2024</th>
                            </tr>
                        </thead>
                        <tbody className="flex flex-col">
                            <tr className="flex flex-row justify-between border-b-[1.5px] border-MUN-sidebar-linen">
                                <td className="flex items-center justify-center pr-[4px] w-[25%] border-r-[1.5px] border-MUN-sidebar-linen py-2 h-auto">
                                    <Image
                                        src="/events/calendar.svg"
                                        alt="date"
                                        height={26}
                                        width={26}
                                    />
                                </td>
                                <td className="pl-[12px] w-[75%] py-2 font-montserrat text-MUN-sidebar-linen font-medium text-[4.8vw] md:text-[2vw] lg:text-[1.25vw]">09 Oct - 10 Oct</td>
                            </tr>
                            <tr className="flex flex-row justify-between border-b-[1.5px] border-MUN-sidebar-linen">
                                <td className="flex items-center justify-center pr-[4px] w-[25%] border-r-[1.5px] border-MUN-sidebar-linen py-2 h-auto">
                                    <Image
                                        src="/events/location.svg"
                                        alt="location"
                                        height={21}
                                        width={21}
                                    />
                                </td>
                                <td className="pl-[12px] w-[75%] py-2 font-montserrat text-MUN-sidebar-linen font-medium text-[4.5vw] md:text-[2vw] lg:text-[1.25vw]">Hybrid</td>
                            </tr>
                            <tr className="flex flex-row justify-between border-b-[1.5px] border-MUN-sidebar-linen">
                                <td className="flex items-center justify-center pr-[4px] w-[25%] border-r-[1.5px] border-MUN-sidebar-linen py-2 h-auto">
                                    <Image
                                        src="/events/fee.svg"
                                        alt="fee"
                                        height={26.59}
                                        width={28.86}
                                    />
                                </td>
                                <td className="pl-[12px] w-[75%] py-2 font-montserrat text-MUN-sidebar-linen font-medium text-[4.5vw] md:text-[2vw] lg:text-[1.25vw]">75 - 550k (check details)</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex justify-center items-center">
                        <a className="flex justify-center items-center bg-MUN-solidPink p-2 w-[55%]" href="https://itsmunclub.online/SurabayaMUN2024">
                            <div className="bg-MUN-solidPink border border-MUN-deepChampagne-100 w-full">
                                <p className="font-montserrat font-semibold text-MUN-sidebar-linen text-center">Details</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EventCard