import loggedReducer from './isLogged';
import loginPageReducer from './isLoginPage';
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    isLogged: loggedReducer,
    loginPageActive: loginPageReducer,
})

export default rootReducers;