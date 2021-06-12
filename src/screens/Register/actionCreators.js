import axios from 'axios';
import Actions from '../../redux/actionsTypes.js';
import { startLoading, stopLoading } from '../../components/Loading/actionCreators.js';

const baseURL = 'http://192.168.1.13:8080/api/v1';

export const register =
    ({ first_name, last_name, email, username, password, password_confirm }) =>
    (dispatch) => {
        dispatch(startLoading());
        const data = {
            first_name,
            last_name,
            email,
            username,
            password,
            password_confirm,
        };
        axios
            .post(`${baseURL}/auth/register`, data)
            .then((res) => {
                dispatch(stopLoading());
                return dispatch({
                    type: Actions.REGISTER_SUCCESS,
                });
            })
            .catch((error) => {
                dispatch(stopLoading());
                const { message } = error.response.data;
                return dispatch({
                    type: Actions.REGISTER_ERROR,
                    payload: {
                        messageError: message[0],
                    },
                });
            });
    };

export const activateAccount = (email, code) => (dispatch) => {
    dispatch(startLoading());
    axios
        .post(`${baseURL}/auth/codeVerification`, { email, code })
        .then((res) => {
            dispatch(stopLoading());
            return dispatch({ type: Actions.VERIFY_ACCOUNT_SUCCESS });
        })
        .catch((error) => {
            const { message } = error.response.data;
            dispatch(stopLoading());
            return dispatch({
                type: Actions.VERIFY_ACCOUNT_ERROR,
                payload: {
                    messageError: message[0],
                },
            });
        });
};

export const clearRegister = () => (dispatch) => dispatch({ type: Actions.CLEAR_REGISTER });

export const showModal = () => (dispatch) => dispatch({ type: Actions.SHOW_MODAL });
export const hideModal = () => (dispatch) => dispatch({ type: Actions.HIDE_MODAL });
