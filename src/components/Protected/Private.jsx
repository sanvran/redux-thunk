import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

const Private = ({ children }) => {
   const { user } = useSelector(state => state.user);
   let isLogin = user?.token;
   return isLogin ? children : <Navigate to="/auth/login" />
}

export default Private;