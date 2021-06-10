import Actions from '../../redux/actionsTypes.js';

export const startLoading = () => (dispatch) => dispatch({type: Actions.START_LOADING});

export const stopLoading = () => (dispatch) => dispatch({type: Actions.STOP_LOADING});
