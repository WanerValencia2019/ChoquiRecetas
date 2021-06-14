import { combineReducers } from 'redux';
import loginReducer from '../screens/Login/reducer.js';
import profileReducer from '../screens/Profile/reducer.js';
import AlertMessage from '../components/AlertMessage/reducer.js';
import Loading from '../components/Loading/reducer.js';
import passwordRecovery from '../screens/PasswordRecovery/reducer.js';
import registerReducer from '../screens/Register/reducer.js';
import activateAccount from '../screens/ActivateAccount/reducers.js';

export default combineReducers({
    login: loginReducer,
    register: registerReducer,
    profile: profileReducer,
    loading: Loading,
    alert: AlertMessage,
    passwordRecovery,
    activateAccount
});
