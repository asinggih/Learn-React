import streams from "../apis/streams";
import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	EDIT_STREAM,
	DELETE_STREAM
} from "./types";

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

export const createStream = formValues => async (dispatch, getState) => {
	const { userId } = getState().authentication;
	// spread the formValues, and add user id into the new object
	const res = await streams.post("/streams", { ...formValues, userId });

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

export const fetchStreams = () => async dispatch => {
	const res = await streams.get("/streams");
	dispatch({
		type: FETCH_STREAMS,
		payload: res.data
	});
};

export const fetchStream = id => async dispatch => {
	const res = await streams.get(`/streams/${id}`); // backticks let us interpolate

	dispatch({
		type: FETCH_STREAM,
		payload: res.data
	});
};

export const editStream = (id, formValues) => async dispatch => {
	const res = await streams.put(`/streams/${id}`, formValues);
	dispatch({
		type: EDIT_STREAM,
		payload: res.data
	});
};

export const deleteStream = id => async dispatch => {
	// no response cos we dont need it

	await streams.delete(`/streams/${id}`);

	dispatch({
		type: DELETE_STREAM,
		payload: id
	});
};
