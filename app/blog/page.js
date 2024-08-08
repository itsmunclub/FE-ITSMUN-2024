import React from 'react'
import styles from './blog.module.css'
import Sidebar from '../components/Sidebar'

const BlogPage = () => {
  return (
    <>
      <Sidebar/>
      <div className='layout'>
        <h1 id={styles.title}>This is blog page</h1>
        <p>Boost your <span className={styles.span}>public </span></p>
        <p><span className={styles.span}>speaking</span> skills in <span className={styles.span}>Sepuluh</span></p>
        <p><span className={styles.span}>Nopember Institute of</span></p>
        <p><span className={styles.span}>Technology</span> leading</p>
        <p>MUN organization</p>  
      </div>
      
    </>
    
  )
}

export default BlogPage