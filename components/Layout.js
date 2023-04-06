import React from 'react'
import Sidebar from './Sidebar'
import BookPreviewCollection from './BookPreviewCollection'



const Layout = () => {
  return (
    <div className='layout'>
      <Sidebar />
      <div className='content'>
        <BookPreviewCollection />
      </div>
    </div>
  )
}

export default Layout