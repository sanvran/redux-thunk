import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
   return (
      <>
         <div className="ui attached stackable menu">
            <div className="ui container">
               <Link to='/' className="item">
                  <i className="home icon"></i> Home
               </Link>
               <a className="item">
                  <i className="grid layout icon"></i> Products
               </a>
               <a className="item">
                  <i className="mail icon"></i> Cart
               </a>
               <div className="ui simple dropdown item">
                  More
                  <i className="dropdown icon"></i>
                  <div className="menu">
                     <a className="item"><i className="edit icon"></i> Edit Profile</a>
                     <a className="item"><i className="globe icon"></i> Choose Language</a>
                     <a className="item"><i className="settings icon"></i> Account Settings</a>
                  </div>
               </div>
               <div className="right item">
                  <div className="ui input"><input type="text" placeholder="Search..." /></div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Header