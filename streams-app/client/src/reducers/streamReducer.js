import _ from "lodash";
import {
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	EDIT_STREAM,
	DELETE_STREAM
} from "../actions/types";

// Stream Reducer
export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_STREAMS:
			// since mapKeys returns a one big object,
			return { ...state, ..._.mapKeys(action.payload, "id") };
		case FETCH_STREAM:
			// dynamically add key value pair to the state object
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_STREAM:
			return _.omit(state, action.payload); // our actioni payload is just an id
		default:
			return state;
	}
};
