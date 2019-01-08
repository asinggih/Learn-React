import jsonPlaceholder from "../apis/jsonPlaceholder";

// getState is removed from the function argument because we don't acutally call it inside our function.
export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get("/posts");

	dispatch({
		type: "FETCH_POST",
		payload: response
	});
};
