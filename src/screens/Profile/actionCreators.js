import Actions from '../../redux/actionsTypes.js';



export const logout = (token="", user_id = -1) => (dispatch) => {
	return dispatch({
		type: Actions.LOGOUT_SUCCESS,
	})
}