import Actions from '../../redux/actionsTypes.js';

const initialState = {
    sendedCode: false,
    verified: false,
    isLoading: false,
    error: null,
    message: null,
    isAlertShow: false,
    messageAlert: '',
    showModal: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.REGISTER_SUCCESS:
            return { ...state, sendedCode: true, verified: false, error: null };
        case Actions.REGISTER_ERROR:
            return {
                ...state,
                error: true,
                sendedCode: false,
                verified: false,
                message: action.payload.messageError,
            };
        case Actions.SHOW_MODAL:
            return { ...state, showModal: true };
        case Actions.HIDE_MODAL:
            return { ...state, showModal: false };
        case Actions.VERIFY_ACCOUNT_SUCCESS:
            return { ...state, verified: true };
        case Actions.VERIFY_ACCOUNT_ERROR:
            return { ...state, error: true, verified: false, message: action.payload.messageError };
        case Actions.CLEAR_REGISTER:
            return { ...state, ...initialState };
        default:
            return state;
    }
};
