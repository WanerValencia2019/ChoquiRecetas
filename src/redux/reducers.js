import { combineReducers } from 'redux';
import loginReducer from './../screens/Login/reducer.js';
import profileReducer from './../screens/Profile/reducer.js';
import AlertMessage from './../components/AlertMessage/reducer.js';
import Loading from './../components/Loading/reducer.js';
import passwordRecovery from './../screens/PasswordRecovery/reducer.js'

export default combineReducers({
    login: loginReducer,
    profile: profileReducer,
    loading: Loading,
    alert: AlertMessage,
    passwordRecovery: passwordRecovery
});

