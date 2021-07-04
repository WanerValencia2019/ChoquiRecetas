import Actions from '../../redux/actionsTypes.js';

const initialState = {
    token: null,
    user_id: null,
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    followers: [],
    isLoading: false,
    error: null,
    logged: false,
    message: true,
    image_profile: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_PROFILE:
            return {
                ...state,
                error: false,
                logged: true,
                token: action.payload.token,
                user_id: action.payload.id,
                email: action.payload.email,
                username: action.payload.username,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                followers: action.payload.followers,
                image_profile: action.payload.image_profile,
            };
        case Actions.LOGOUT_SUCCESS:
            return { ...state, ...initialState };
        case Actions.LOGOUT_ERROR:
            return { ...state, error: true, message: action.payload.messageError };
        default:
            return state;
    }
};
