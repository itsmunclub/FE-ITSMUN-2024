import React from 'react'
import SidebarBlogButton from './sidebarButton/SidebarBlogButton'
import SidebarEventButton from './sidebarButton/SidebarEventButton'
import SidebarAboutUsButton from './sidebarButton/SidebarAboutUsButton'


const Sidebar = () => {
  return (
    <div>
        <h1 className=' text-MUN-steelTeal'>this is sidebar</h1>
        <SidebarBlogButton/>
        <SidebarEventButton/>
        <SidebarAboutUsButton/>
    </div>
  )
}

export default Sidebar