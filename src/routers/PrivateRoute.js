// import React from 'react'
// import {Route, Redirect, useLocation} from 'react-router-dom'
// import {UseAuth} from '../auth/UseAuth'

// // component: Component - se asigna alias para que lo reconozca el Route
// export const PrivateRoute = ({component: Component, ...rest}) => {
    
//     const auth = UseAuth()
//     const location = useLocation();

//     return (
//         <Route {...rest}>
//             {auth.user?
//             (<Component/>):
//             (<Redirect to={{pathname: "/login", state:{from:location}}}/>)
//             }
//         </Route>
//     )
// }
