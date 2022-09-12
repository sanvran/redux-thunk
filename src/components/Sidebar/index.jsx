import React from 'react'
import { Sidebars } from './data';
import './Sidebar.css'

const Sidebar = () => {
   return (
      <>
         <nav className="main-menu">
            <ul>
               {
                  Sidebars.map((item, ind) => {
                     return (
                        <li key={ind}>
                           <a href={item.url}>
                              <i className={item.icon}></i>
                              <span className="nav-text">
                                 {item.title}
                              </span>
                           </a>
                        </li>
                     )
                  })
               }
            </ul>
            <ul className="logout">
               <li>
                  <a href="#">
                     <i className="fa fa-power-off fa-2x"></i>
                     <span className="nav-text">
                        Logout now
                     </span>
                  </a>
               </li>
            </ul>
         </nav>
      </>
   )
};

export default Sidebar