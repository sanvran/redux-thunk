import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'

const ProtectedRoute = ({ auth, element: Element, ...rest }) => {
   return (
      <Routes {...rest} render={(props) => {
         if (auth) return <Element {...props} />
         if (!auth)
            return (
               <Navigate to={{ path: '/', state: { from: props.location } }} />
            );
      }} >

      </Routes>
   );
};

export default ProtectedRoute