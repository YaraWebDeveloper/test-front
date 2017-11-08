

 //REact dependencies
import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Cookies from 'react-cookie';
import Is from 'is_js';


//export variable of new component
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    (Is.not.undefined(Cookies.load('access-one')) && Is.not.undefined(Cookies.load('access-two')))

     ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

//Export all default variable
export default PrivateRoute;
