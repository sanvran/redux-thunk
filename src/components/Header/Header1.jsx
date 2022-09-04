import React from 'react'
import { Link } from 'react-router-dom'

const Header1 = () => {
  return (
     <>
        <div className="ui fixed menu">
           <div className="ui container center">
              <h2><Link to='/'> ReduxStore</Link></h2>
           </div>
        </div>
     </>
  )
}

export default Header1