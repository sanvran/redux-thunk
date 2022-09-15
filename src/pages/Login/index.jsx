import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Main from '../../components/Layout';
import Loader from '../../components/Loader'
import Sidebar from '../../components/Sidebar';
import { userLogin } from '../../redux/actions/login-action'

const NAME_RGX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PSWD_RGX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const PSWD_RGX = /^[A-z][A-z0-9-_]{3,23}$/;

const Login = () => {
   const userRef = useRef();
   const errRef = useRef();
   const loggedIn = JSON.parse(sessionStorage.getItem('user'));
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')

   const [validName, setValidName] = useState(false)
   const [validNameFocus, setValidNameFocus] = useState(false);
   const [passwordMatch, setpasswordMatch] = useState(false)
   const [passwordFocus, setPasswordFocus] = useState(false)
   const [errMsg, setErrMsg] = useState('')

   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { loading, isAuth, err, user } = useSelector(state => state.user);
   // console.log("isauth==>", isAuth, user)

   const submitUserLogin = (e) => {
      e.preventDefault();
      // if button enabled with JS hack
      const v1 = NAME_RGX.test(username);
      const v2 = PSWD_RGX.test(password);
      /* if (!v1 || !v2) {
         setErrMsg("Invalid Entry");
         alert(errMsg)
         return;
      } */
      dispatch(userLogin(username, password));
      errRef.current.focus();
   };

   useEffect(() => {
      userRef.current?.focus();
   }, []);

   // valid name checker
   useEffect(() => {
      setValidName(NAME_RGX.test(username))
      console.log("error", validName)
   }, [username]);
   // pasword stong checker
   useEffect(() => {
      setpasswordMatch(PSWD_RGX.test(password))
      console.log("password==>", passwordMatch)
   }, [password])


   useEffect(() => {
      if (isAuth) return navigate('/')
   }, [isAuth]);

   return (
      <>
         {
            loading ? (<Loader />) : (
               <div className="container">

                  <div className="mt-3 ui segment">
                     <>
                        <form onSubmit={submitUserLogin} className="ui form">
                           <p style={{ color: 'red' }}>{err} </p>
                           <div className="field">
                              <label>username</label>
                              <input type="text" name="username" placeholder="Username"
                                 ref={userRef}
                                 value={username}
                                 onChange={(e) => setUsername(e.target.value)}
                                 onFocus={() => setValidNameFocus(true)}
                                 onBlur={() => setValidNameFocus(false)}
                              />
                              {validNameFocus && username && !validName ? (<p className='text-danger'>4 to 24 characters.<br />
                                 Must begin with a letter.<br />
                                 Letters, numbers, underscores, hyphens allowed.</p>) : ('')}
                              {errMsg ? 'Invalid Entry' : ''}
                           </div>
                           <div className="field">
                              <label>Password</label>
                              <input type="text" name="password" placeholder="******"
                                 onChange={(e) => setPassword(e.target.value)}
                                 onFocus={() => setPasswordFocus(true)}
                                 onBlur={() => setPasswordFocus(false)}
                              />
                              {passwordFocus && password && !passwordMatch ? (<p id="pwdnote" className="text-danger">
                                 8 to 24 characters.<br />
                                 Must include uppercase and lowercase letters, a number and a special character.<br />
                                 Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                              </p>) : ('')}
                           </div>
                           <div className="field">
                              <div className="ui checkbox">
                                 <input type="checkbox" tabIndex="0" className="hidden" />
                                 <label>I agree to the Terms and Conditions</label>
                              </div>
                           </div>
                           <button className="ui button" disabled={
                              !validName
                              // ||
                              // !passwordMatch
                              ? true : false} type="submit">
                              Submit
                           </button>
                        </form>
                     </>
                  </div>

               </div>
            )

         }

      </>

   )
};

export default Login