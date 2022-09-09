import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/auth';

const SignIn = () => {
   const [user, setUser] = useState('');
   const auth = useAuth();
   const navigate = useNavigate();

   const handleLogin = () => {
      // within the fun we need call the login fun from authContext
      auth.login(user);
      navigate('/todo');
   };

   return (
      <div>SignIn
         <input type="text"
            onChange={(e) => setUser(e.target.value)}
         />
         <button onClick={handleLogin}>Login</button>
      </div>

   )
}

export default SignIn