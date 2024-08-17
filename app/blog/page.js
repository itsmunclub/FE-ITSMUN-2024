import React from 'react'
import styles from './blog.module.css'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Image from 'next/image'
import Aos from '../components/Aos'

const BlogPage = () => {
  return (
    <Aos>
      <Sidebar/>
      <div className={`${styles.bgPaper}`}>
        <div className="layout">
          <div data-aos="flip-right" className="h-auto w-auto flex justify-center items-center py-[3vw]">
          <Image
            src="/WIP.svg"
            alt="work in progress"
            height={573}
            width={472}
          />
          </div>
        </div>
      </div>
      <Footer/>
    </Aos>
  )
}

export default BlogPage