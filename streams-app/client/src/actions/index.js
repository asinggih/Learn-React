import streams from "../apis/streams";
import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from "./types";

export const signIn = userId => {
	return {
		type: SIGN_IN,
		payload: userId
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

export const createStream = formValues => async dispatch => {
	const res = await streams.post("/streams", formValues);

	/**
	 * Dispatching manually because we're utilising redux-thunk,
	 * due to the use of async await that returns a request object,
	 * instead of a plain object
	 */
	dispatch({
		type: CREATE_STREAM,
		payload: res.data
	});
};
