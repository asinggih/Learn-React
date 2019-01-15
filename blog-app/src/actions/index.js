import jsonPlaceholder from "../apis/jsonPlaceholder";

// getState is removed from the function argument because we don't acutally call it inside our function.
export const fetchPosts = () => async dispatch => {
	const res = await jsonPlaceholder.get("/posts");

	dispatch({
		type: "FETCH_POST",
		payload: res.data
	});
};

export const fetchUser = id => async dispatch => {
	// The response of this api call will be an object,
	// instead of a list of objects like in fetchPosts
	const res = await jsonPlaceholder.get(`/users/${id}`);

	dispatch({
		type: "FETCH_USER",
		payload: res.data
	});
};
