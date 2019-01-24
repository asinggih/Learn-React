import { SIGN_IN, SIGN_OUT } from "../actions/types";

// authReducer

const INITIAL_STATE = {
	isSignedIn: null,
	userId: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN:
			/**
			 * create a new object with the same content (use spread),
			 * plus the new addition, or change.
			 */
			return { ...state, isSignedIn: true, userId: action.payload }; // update userId according to the payload of SIGN_IN
		case SIGN_OUT:
			return { ...state, isSignedIn: false, userId: null }; // reset current user's userId to null
		default:
			return state;
	}
};
