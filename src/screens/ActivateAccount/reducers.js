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
		case Actions.SEND_CODE_ACTIVATE_ACCOUNT_SUCCESS:
			return {...state, sendedCode: true, error:null}
		case Actions.SEND_CODE_ACTIVATE_ACCOUNT_ERROR:
			return {...state, error: true }
		case Actions.CLEAR_ACTIVATE_ACCOUNT:
			return {...state, ...initialState}
		case Actions.SHOW_MODAL:
			return {...state, showModal: true}
		case Actions.HIDE_MODAL:
			return {...state, showModal: false}
		case Actions.ACTIVATE_ACCOUNT_SUCCESS:
			return {...state, verified: true }
		case Actions.ACTIVATE_ACCOUNT_ERROR:
			return {...state, error: true, verified: false}
		default:
			return state
	}

}
