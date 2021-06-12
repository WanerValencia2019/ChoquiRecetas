import axios from 'axios';
import Actions from '../../redux/actionsTypes.js';
import { startLoading, stopLoading } from '../../components/Loading/actionCreators.js';

const baseURL = 'http://192.168.1.13:8080';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const login =
    (email = '', password = '') =>
    async (dispatch) => {
        dispatch(startLoading());
        const data = {
            username: email,
            password,
        };
        axios
            .post(`${baseURL}/api/v1/auth/login`, data)
            .then((res) => {
                const { token, user } = res.data;

                dispatch({ type: Actions.LOGIN_SUCCESS });
                dispatch(stopLoading());
                return dispatch({
                    type: Actions.GET_PROFILE,
                    payload: {
                        token,
                        ...user,
                    },
                });
            })
            .catch((error) => {
                const { message } = error.response.data;
                dispatch(stopLoading());
                return dispatch({
                    type: Actions.LOGIN_ERROR,
                    payload: {
                        messageError: message[0],
                    },
                });
            });
    };

export const clearLogin = () => (dispatch) => dispatch({ type: Actions.CLEAR_LOGIN });
