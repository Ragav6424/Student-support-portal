import React from 'react';
import {
  BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="admin-sidebar" className={openSidebarToggle ? "admin-sidebar-responsive" : ""}>
      <div className='admin-sidebar-title'>
        <div className='admin-sidebar-brand'>
          <BsCart3 className='admin-icon_header' /> SHOP
            </div>
        <span className='admin-icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='admin-sidebar-list'>
        <li className='admin-sidebar-list-item'>
          <a href="">
            <BsGrid1X2Fill className='admin-icon' /> DASHBOARD
                </a>
        </li>
        <li className='admin-sidebar-list-item'>
          <a href="/staffregister">
            <BsFillArchiveFill className='admin-icon' /> STAFFREGISTER
                </a>
        </li>
        <li className='admin-sidebar-list-item'>
          <a href="/adminedit">
            <BsFillGrid3X3GapFill className='admin-icon' /> EDIT COURSE
                </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
