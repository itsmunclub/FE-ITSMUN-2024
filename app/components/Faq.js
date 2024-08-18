"use client";
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-group flex flex-col md:flex-row flex-nowrap md:flex-wrap gap-14 justify-center items-start">
        <div
            className={`accordion group bg-MUN-solidPink py-8 px-6 border-b border-solid border-gray-200 w-full md:w-[40%] transition-all duration-500 rounded-2xl hover:bg-MUN-deepChampagne-100 hover:bg-opacity-60 ${activeIndex === 0 ? 'accordion-active:bg-MUN-deepChampagne-100' : ''}`}
            id="basic-heading-one-with-arrow"
        >
            <button
                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-MUN-sidebar-linen font-semibold font-montserrat w-full transition duration-500 text-left group-hover:text-MUN-solidPink group-hover:font-bold"
                aria-controls="basic-collapse-one-with-arrow"
                onClick={() => toggleAccordion(0)}
            >
                <h5>What is MUN?</h5>
                <svg
                    className={`text-MUN-sidebar-linen transition duration-500 group-hover:text-MUN-solidPink ${activeIndex === 0 ? 'accordion-active:text-MUN-solidPink accordion-active:rotate-180' : ''}`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <div
                id="basic-collapse-one-with-arrow"
                className={`accordion-content w-full px-0 overflow-hidden ${activeIndex === 0 ? 'max-h-screen' : 'max-h-0'}`}
                aria-labelledby="basic-heading-one-with-arrow"
            >
                <p className="text-[4vw] md:text-[1.3vw] text-justify text-MUN-sidebar-linen font-montserrat leading-6 group-hover:text-MUN-solidPink">
                    Model United Nations (MUN) is a simulation of the United Nations. Participants, known as delegates, represent different countries and engage in discussions, debates, and negotiations on global issues.
                </p>
            </div>
        </div>
        <div
            className={`accordion group bg-MUN-solidPink py-8 px-6 border-b border-solid border-gray-200 w-full md:w-[40%] transition-all duration-500 rounded-2xl hover:bg-MUN-deepChampagne-100 hover:bg-opacity-60 ${activeIndex === 1 ? 'accordion-active:bg-MUN-deepChampagne-100' : ''}`}
            id="basic-heading-two-with-arrow"
        >
            <button
                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-MUN-sidebar-linen font-semibold font-montserrat w-full transition duration-500 text-left group-hover:text-MUN-solidPink group-hover:font-bold"
                aria-controls="basic-collapse-two-with-arrow"
                onClick={() => toggleAccordion(1)}
            >
                <h5>What is ITS MUN Club?</h5>
                <svg
                    className={`text-MUN-sidebar-linen transition duration-500 group-hover:text-MUN-solidPink ${activeIndex === 1 ? 'accordion-active:text-MUN-solidPink accordion-active:rotate-180' : ''}`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <div
                id="basic-collapse-two-with-arrow"
                className={`accordion-content w-full px-0 overflow-hidden ${activeIndex === 1 ? 'max-h-screen' : 'max-h-0'}`}
                aria-labelledby="basic-heading-two-with-arrow"
            >
                <p className="text-[4vw] md:text-[1.3vw] text-justify text-MUN-sidebar-linen font-montserrat leading-6 group-hover:text-MUN-solidPink">
                    ITS MUN Club is one of UKM in ITS that prepares members for MUN competition. The main objective of ITS MUN Club is to shape members into recognizing strength in making use and framing within societal implementation of STEM.
                </p>
            </div>
        </div>
        <div
            className={`accordion group bg-MUN-solidPink py-8 px-6 border-b border-solid border-gray-200 w-full md:w-[40%] transition-all duration-500 rounded-2xl hover:bg-MUN-deepChampagne-100 hover:bg-opacity-60 ${activeIndex === 2 ? 'accordion-active:bg-MUN-deepChampagne-100' : ''}`}
            id="basic-heading-three-with-arrow"
        >
            <button
                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-MUN-sidebar-linen font-semibold font-montserrat w-full transition duration-500 text-left group-hover:text-MUN-solidPink group-hover:font-bold"
                aria-controls="basic-collapse-three-with-arrow"
                onClick={() => toggleAccordion(2)}
            >
                <h5 className="text-[5.17vw] md:text-[1.7vw] lg:text-[1.47vw] xl:text-[1.17vw]">What kind of activities does ITS MUN Club do?</h5>
                <svg
                    className={`text-MUN-sidebar-linen transition duration-500 group-hover:text-MUN-solidPink ${activeIndex === 2 ? 'accordion-active:text-MUN-solidPink accordion-active:rotate-180' : ''}`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <div
                id="basic-collapse-three-with-arrow"
                className={`accordion-content w-full px-0 overflow-hidden ${activeIndex === 2 ? 'max-h-screen' : 'max-h-0'}`}
                aria-labelledby="basic-heading-three-with-arrow"
            >
                <p className="text-[4vw] md:text-[1.3vw] text-justify text-MUN-sidebar-linen font-montserrat leading-6 group-hover:text-MUN-solidPink">
                    ITS MUN provides general and private training for members to learn the skills needed in MUN conferences, and also provides simulations through General Assembly and Joint Simulation. ITS MUN Club also provides webinars with various topics around diplomacy, international exposure, and many more.
                </p>
            </div>
        </div>
        <div
            className={`accordion group bg-MUN-solidPink py-8 px-6 border-b border-solid border-gray-200 w-full md:w-[40%] transition-all duration-500 rounded-2xl hover:bg-MUN-deepChampagne-100 hover:bg-opacity-60 ${activeIndex === 3 ? 'accordion-active:bg-MUN-deepChampagne-100' : ''}`}
            id="basic-heading-four-with-arrow"
        >
            <button
                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-MUN-sidebar-linen font-semibold font-montserrat w-full transition duration-500 text-left group-hover:text-MUN-solidPink group-hover:font-bold"
                aria-controls="basic-collapse-four-with-arrow"
                onClick={() => toggleAccordion(3)}
            >
                <h5>Who can join ITS MUN Club?</h5>
                <svg
                    className={`text-MUN-sidebar-linen transition duration-500 group-hover:text-MUN-solidPink ${activeIndex === 3 ? 'accordion-active:text-MUN-solidPink accordion-active:rotate-180' : ''}`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <div
                id="basic-collapse-four-with-arrow"
                className={`accordion-content w-full px-0 overflow-hidden ${activeIndex === 3 ? 'max-h-screen' : 'max-h-0'}`}
                aria-labelledby="basic-heading-four-with-arrow"
            >
                <p className="text-[4vw] md:text-[1.3vw] text-justify text-MUN-sidebar-linen font-montserrat leading-6 group-hover:text-MUN-solidPink">
                    ITS MUN clubs are open to all ITS students. We accept those who are willing to learn how to discuss international issues in a professional manner.
                </p>
            </div>
        </div>
        <div
            className={`accordion group bg-MUN-solidPink py-8 px-6 border-b border-solid border-gray-200 w-full md:w-[40%] transition-all duration-500 rounded-2xl hover:bg-MUN-deepChampagne-100 hover:bg-opacity-60 ${activeIndex === 4 ? 'accordion-active:bg-MUN-deepChampagne-100' : ''}`}
            id="basic-heading-five-with-arrow"
        >
            <button
                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-MUN-sidebar-linen font-semibold font-montserrat w-full transition duration-500 text-left group-hover:text-MUN-solidPink group-hover:font-bold"
                aria-controls="basic-collapse-five-with-arrow"
                onClick={() => toggleAccordion(4)}
            >
                <h5>What are the benefits of joining MUN?</h5>
                <svg
                    className={`text-MUN-sidebar-linen transition duration-500 group-hover:text-MUN-solidPink ${activeIndex === 4 ? 'accordion-active:text-MUN-solidPink accordion-active:rotate-180' : ''}`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <div
                id="basic-collapse-five-with-arrow"
                className={`accordion-content w-full px-0 overflow-hidden ${activeIndex === 4 ? 'max-h-screen' : 'max-h-0'}`}
                aria-labelledby="basic-heading-five-with-arrow"
            >
                <p className="text-[4vw] md:text-[1.3vw] text-justify text-MUN-sidebar-linen font-montserrat leading-6 group-hover:text-MUN-solidPink">
                    MUN enhances skills in diplomacy, critical thinking, and communication. It also provides insight into international relations and fosters a deeper understanding of global issues
                </p>
            </div>
        </div>
        <div
            className={`accordion group bg-MUN-solidPink py-8 px-6 border-b border-solid border-gray-200 w-full md:w-[40%] transition-all duration-500 rounded-2xl hover:bg-MUN-deepChampagne-100 hover:bg-opacity-60 ${activeIndex === 5 ? 'accordion-active:bg-MUN-deepChampagne-100' : ''}`}
            id="basic-heading-six-with-arrow"
        >
            <button
                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-MUN-sidebar-linen font-semibold font-montserrat w-full transition duration-500 text-left group-hover:text-MUN-solidPink group-hover:font-bold"
                aria-controls="basic-collapse-six-with-arrow"
                onClick={() => toggleAccordion(5)}
            >
                <h5 className="text-[4.5vw] md:text-[1.74vw] lg:text-[1.5vw] xl:text-[1.05vw]">How do MUN beneficial for engineers and scientist?</h5>
                <svg
                    className={`text-MUN-sidebar-linen transition duration-500 group-hover:text-MUN-solidPink ${activeIndex === 5 ? 'accordion-active:text-MUN-solidPink accordion-active:rotate-180' : ''}`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <div
                id="basic-collapse-six-with-arrow"
                className={`accordion-content w-full px-0 overflow-hidden ${activeIndex === 5 ? 'max-h-screen' : 'max-h-0'}`}
                aria-labelledby="basic-heading-six-with-arrow"
            >
                <p className="text-[4vw] md:text-[1.3vw] text-justify text-MUN-sidebar-linen font-montserrat leading-6 group-hover:text-MUN-solidPink">
                    MUN benefits by enhancing communication, critical thinking, and research skills, which are crucial for presenting complex ideas and solving problems. Developing global awareness and collaborate effectively on interdisciplinary projects. MUN foster leadership abilities and provides networking opportunities, complementing to technical expertise.
                </p>
            </div>
        </div>
        <div
            className={`accordion group bg-MUN-solidPink py-8 px-6 border-b border-solid border-gray-200 w-full md:w-[60%] transition-all duration-500 rounded-2xl hover:bg-MUN-deepChampagne-100 hover:bg-opacity-60 ${activeIndex === 6 ? 'accordion-active:bg-MUN-deepChampagne-100' : ''}`}
            id="basic-heading-seven-with-arrow"
        >
            <button
                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-MUN-sidebar-linen font-semibold font-montserrat w-full transition duration-500 text-left group-hover:text-MUN-solidPink group-hover:font-bold"
                aria-controls="basic-collapse-seven-with-arrow"
                onClick={() => toggleAccordion(6)}
            >
                <h5 className="text-[3.7vw] md:text-[1.6vw] lg:text-[1.5vw]">What should members expect as a new member of ITS MUN club?</h5>
                <svg
                    className={`text-MUN-sidebar-linen transition duration-500 group-hover:text-MUN-solidPink ${activeIndex === 6 ? 'accordion-active:text-MUN-solidPink accordion-active:rotate-180' : ''}`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <div
                id="basic-collapse-seven-with-arrow"
                className={`accordion-content w-full px-0 overflow-hidden ${activeIndex === 6 ? 'max-h-screen' : 'max-h-0'}`}
                aria-labelledby="basic-heading-six-with-arrow"
            >
                <p className="text-[4vw] md:text-[1.3vw] text-justify text-MUN-sidebar-linen font-montserrat leading-6 group-hover:text-MUN-solidPink">
                    New members can expect to learn about international issues, understanding the rules and procedures of MUN, and preparing for conferences. Members will participate in regular meetings to learn the skills. The meetings will be conducted with guidance from mentors and simulations to enhance understanding. Joining ITS MUN Club offers a collaborative and educational environment to develop skills in diplomacy and global awareness.
                </p>
            </div>
        </div>
    </div>
  );
};

export default FAQ;