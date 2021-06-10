import Actions from "../../redux/actionsTypes.js";



const initialState = {
	sendedCode: false,
	isLoading: false,
  	error: null,
  	isAlertShow: false,
  	message: '',
  	showModal: false,
  	verified: false
}



export default (state=initialState, action) => {
	switch (action.type) {
		case Actions.SEND_CODE_PASSWORD_RECOVERY_SUCCESS:
			return {...state, sendedCode: true, error:null}
		case Actions.SEND_CODE_PASSWORD_RECOVERY_ERROR:
			return {...state, error: true, message: action.payload.messageError }
		case Actions.CLEAR_PASSWORD_RECOVERY:
			return {...state, ...initialState}
		case Actions.SHOW_MODAL:
			return {...state, showModal: true}
		case Actions.HIDE_MODAL:
			return {...state, showModal: false}
		case Actions.PASSWORD_RESET_SUCCESS:
			return {...state, verified: true }
		case Actions.PASSWORD_RESET_ERROR:
			return {...state, error: true, message: action.payload.messageError}
		default:
			return state
	}

}
