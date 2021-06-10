import Actions from "../../redux/actionsTypes.js";



const initialState = {
	isLoading: false,
  	error: null,
  	logged: false,
  	message: null,
  	isAlertShow: false,
  	messageAlert: '',
}



export default (state=initialState, action) => {
	switch (action.type) {
		case Actions.LOGIN_SUCCESS:
			return {...state, logged:true, error:null}
		case Actions.LOGIN_ERROR:
			return {...state, error: true, message: action.payload.messageError }
		default:
			return state
	}

}
