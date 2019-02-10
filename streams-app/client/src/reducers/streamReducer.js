import {
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	EDIT_STREAM,
	DELETE_STREAM
} from "../actions/types";
import streams from "../apis/streams";

// Stream Reducer
export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_STREAM:
			// dynamically add key value pair to the state object
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		default:
			return state;
	}
};
