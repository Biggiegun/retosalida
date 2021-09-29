// import React from 'react'
// import {Route, Redirect} from 'react-router-dom'
// import {UseAuth} from '../auth/UseAuth'

// // component: Component - se asigna alias para que lo reconozca el Route
// export const PublicRoute = ({component: Component, ...rest}) => {
    
//     const auth = UseAuth()

//     return (
//         <Route {...rest}>
//             {!auth.user?
//             (<Component/>):
//             (<Redirect to="/"/>)
//             }
//         </Route>
//     )
// }
