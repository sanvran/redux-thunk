import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { actionLogOut } from "../../redux/actions/login-action";

const Header = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const {isAuth,user } = useSelector(state => state.user)
   // console.log("user token ", user, isAuth);

   const btnLogout = (e) => { 
      e.preventDefault();
      /* localStorage.removeItem('persist:persit_root');
      window.location.reload(true)
      navigate('/auth/login') */
      dispatch(actionLogOut());
      if (isAuth === false) return navigate('/auth/login');
   };
   
   return (
      <>
         <div className="ui attached stackable menu">
            <div className="ui container">
               <Link to='/' className="item">
                  <i className="home icon"></i> Home
               </Link>

               <Link to="/todo" className="item">
                  <i className="mail icon"></i> Todo do
               </Link>
               <Link to="/contact" className="item">
                  <i className="grid layout icon"></i> Contact us
               </Link>
               <Link to={user?.token ? '' : '/auth/login'} onClick={user?.token ? btnLogout : '' } className="item">
                  <i className="lock icon" ></i> {user?.token ? 'Logout' : 'Login'}
               </Link>
               <div className="ui simple dropdown item">
                  More
                  <i className="dropdown icon"></i>
                  <div className="menu">
                     <Link to="#" className="item"><i className="edit icon"></i> Edit Profile</Link>
                     <Link to="#" className="item"><i className="globe icon"></i> Choose Language</Link>
                     <Link to="#" className="item"><i className="settings icon"></i> Account Settings</Link>
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