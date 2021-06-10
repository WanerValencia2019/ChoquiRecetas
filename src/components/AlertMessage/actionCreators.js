import Actions from '../../redux/actionsTypes.js';

export const showAlert = (message) => (dispatch) => {
    return dispatch({
        type: Actions.SHOW_ALERT,
        payload: {
            message,
        },
    });
};

export const hideAlert = () => (dispatch) => {
    return dispatch({
        type: Actions.HIDE_ALERT,
    });
};
