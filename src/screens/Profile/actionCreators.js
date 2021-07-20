import axios from 'axios';
import Actions from '../../redux/actionsTypes.js';
import { startLoading, stopLoading } from '../../components/Loading/actionCreators.js';

const baseURL = 'http://192.168.1.13:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const logout =
    (token = '') =>
    (dispatch) => {
        axios
            .post(
                `${baseURL}/api/v1/auth/logout`,
                {},
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            )
            .then((res) => {
                return dispatch({
                    type: Actions.LOGOUT_SUCCESS,
                });
            })
            .catch((error) => {
                return dispatch({
                    type: Actions.LOGOUT_SUCCESS,
                });
            });
    };

export const get_profile = (token) => (dispatch) => {
    dispatch(startLoading());
    axios
        .get(`${baseURL}/api/v1/auth/user_profile`, {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .then((res) => {
             dispatch(stopLoading());    
            const { user, token } = res.data;

            return dispatch({
                type: Actions.GET_PROFILE,
                payload: {
                    token,
                    ...user,
                },
            });
        })
        .catch(async (error) => {
            dispatch(stopLoading());    
            const { message } = await error.response.data;
            return dispatch({
                type: Actions.GET_PROFILE_ERROR,
            });
        });
};

export const update_image_profile = (token, imagen_base64) => (dispatch) => {
    const data = {
        image_profile: imagen_base64,
    };
    dispatch(startLoading());
    axios
        .post(`${baseURL}/api/v1/auth/update_image_profile`, data, {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .then((res) => {
            dispatch(stopLoading());
            const { image_url } = res.data;
            return dispatch({
                type: Actions.UPDATE_IMAGE_PROFILE_SUCCESS,
                payload: {
                    image_url,
                },
            });
        })
        .catch(async (error) => {
            dispatch(stopLoading());    
            console.log(error)
            const { message } = await error.response.data;           
            return dispatch({
                type: Actions.UPDATE_IMAGE_PROFILE_ERROR,
                payload: {
                    message: message[0],
                },
            });
        });

};
