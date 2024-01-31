import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Adminhome from './adminhome'
import '..//admin/admin.css'


function  Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='admin-body'>
    <div className='admin-grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Adminhome />
      </div>
      </div>
  )
}

export default Admin;