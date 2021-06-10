import Actions from '../../redux/actionsTypes.js';

const initialState = {
    isLoading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Actions.START_LOADING:
            return { ...state, isLoading: true };
        case Actions.STOP_LOADING:
            return { ...state, isLoading: false };
        default:
            return state;
    }
};
