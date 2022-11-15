import React, { useEffect } from 'react';
import {Route, Redirect} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SignIn } from '../actions';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(SignIn())
    },[dispatch])
    const loggedInUserData = useSelector(state => state.isLogged);
    return (
      
            <Route
            {...rest}
            render={props =>
              loggedInUserData?.email ? (
                <Component {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                  }}
                />
              )
            }
          /> 
        
      );
};

export default PrivateRoute;