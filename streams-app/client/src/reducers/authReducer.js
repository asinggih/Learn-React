// authReducer

const INITIAL_STATE = {
	isSignedIn: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "SIGN_IN":
			/**
			 * create a new object with the same content (use spread),
			 * plus the new addition, or change.
			 */
			return { ...state, isSignedIn: true };
		case "SIGN_OUT":
			return { ...state, isSignedIn: false };
		default:
			return state;
	}
};
