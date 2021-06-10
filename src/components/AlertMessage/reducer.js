import Actions from '../../redux/actionsTypes.js';

const initialState = {
    showAlert: false,
    message: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.SHOW_ALERT:
            return { ...state, showAlert: true, message: action.payload.message };
        case Actions.HIDE_ALERT:
            return { ...state, showAlert: false, message: "" };
        default:
            return state;
    }
};
