import React from 'react';
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ component: Component, auth, ...rest }) => {
let chek = {isAuth: true}
console.log(auth)
    return(
        <Route {...rest} render={(props) => ((JSON.stringify(auth) === JSON.stringify(chek)) ? <Component {...props} />  : <Redirect to='/auth' />)} />
    )
}

export default GuardedRoute;