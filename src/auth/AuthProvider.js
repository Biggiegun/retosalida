// import {createContext, useState} from 'react';

// export const AuthContext = createContext();

//  const AuthProvider = ({children }) => {

//      const [user, setUser] = useState(null);

//      const contextValue = {
//          user,
//          login(){
//             setUser({id:1, username: "luis50"})
//          },
//          logout(){
//              setUser(null);
//          },
//          isLogged(){
//     //  doble negación, si el usuario existe asigna 'true', caso contrario devuelve 'false'
//              return !!user 
//          }
//      }

//     return <AuthContext.Provider value={contextValue}>
//     {/* // si no se incorpora el children es como si no se estuviera aceptando los componentes que AuthRouter encapsula. */}
//             {children} 
//     </AuthContext.Provider>

// }
// export default AuthProvider;