import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader'
import { userLogin } from '../../redux/actions/login-action'


const Login = () => {
   const loggedIn = JSON.parse(sessionStorage.getItem('user'));
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { loading, isAuth, err, user} = useSelector(state => state.user);
   // console.log("isauth==>", isAuth, user)
   
   const submitUserLogin = (e) => {
      e.preventDefault();
      dispatch(userLogin(username, password));
   };



   useEffect(() => { 
      if (isAuth) return navigate('/')
   }, [isAuth]);

   // console.log("on=======>", isAuth)

   return (
      <>
         {
            loading ? (<Loader />) : (
               <div className="ui segment">
                  <>
                     <form onSubmit={submitUserLogin} className="ui form">
                        <p style={{ color: 'red' }}>{err} </p>
                        <div className="field">
                           <label>username</label>
                           <input type="text" name="username" placeholder="Username"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                           />
                        </div>
                        <div className="field">
                           <label>Password</label>
                           <input type="text" name="password" placeholder="******"
                              onChange={(e) => setPassword(e.target.value)}
                           />
                        </div>
                        <div className="field">
                           <div className="ui checkbox">
                              <input type="checkbox" tabIndex="0" className="hidden" />
                              <label>I agree to the Terms and Conditions</label>
                           </div>
                        </div>
                        <button className="ui button" type="submit">Submit</button>
                     </form>
                  </>
               </div>
            )

         }
      </>

   )
};

export default Login