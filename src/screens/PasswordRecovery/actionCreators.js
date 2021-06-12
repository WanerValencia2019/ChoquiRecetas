import axios from 'axios';
import Actions from '../../redux/actionsTypes.js';
import { startLoading, stopLoading } from '../../components/Loading/actionCreators.js';

const baseURL = 'http://192.168.1.13:8080/api/v1';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const sendVerificationCode = (email) => (dispatch) => {
    dispatch(startLoading());
    axios
        .post(`${baseURL}/auth/reset_password`, { email })
        .then((res) => {
            dispatch(stopLoading());
            return dispatch({ type: Actions.SEND_CODE_PASSWORD_RECOVERY_SUCCESS });
        })
        .catch((error) => {
            const { message } = error.response.data;
            dispatch(stopLoading());
            return dispatch({
                type: Actions.SEND_CODE_PASSWORD_RECOVERY_ERROR,
                payload: {
                    messageError: message[0],
                },
            });
        });
};

export const verifyCode =
    (email = '', code = 0) =>
    (dispatch) => {
        dispatch(startLoading());
        axios
            .post(`${baseURL}/auth/reset_password/confirm`, { email, code })
            .then((res) => {
                dispatch(stopLoading());
                return dispatch({ type: Actions.PASSWORD_RESET_SUCCESS });
            })
            .catch((error) => {
                const { message } = error.response.data;
                console.log(message);
                dispatch(stopLoading());
                return dispatch({
                    type: Actions.PASSWORD_RESET_ERROR,
                    payload: {
                        messageError: message[0],
                    },
                });
            });
    };

export const clearPasswordRecovery = () => (dispatch) =>
    dispatch({ type: Actions.CLEAR_PASSWORD_RECOVERY });

export const showModal = () => (dispatch) => dispatch({ type: Actions.SHOW_MODAL });
export const hideModal = () => (dispatch) => dispatch({ type: Actions.HIDE_MODAL });
