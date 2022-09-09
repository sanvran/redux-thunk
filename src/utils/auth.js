import { useContext, createContext, useState } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)
   // make login user function
   const login = (user) => {
      setUser(user)
   };
   // make logout user function
   const logout = () => {
      setUser(null)
   };
   // retutn AuthContext
   return (
      <AuthContext.Provider value={{user, login, logout}}>
         {children}
      </AuthContext.Provider>
   )
};

// finally that retun the value of authContent

export const useAuth = () => { 
   return useContext(AuthContext)
};
