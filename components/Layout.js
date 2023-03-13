import React from 'react'
import Content from './Content'
import Sidebar from './Sidebar'


const Layout = () => {
  return (
    <div className='layout'>
      <Sidebar />
      <Content />
    </div>
  )
}

export default Layout