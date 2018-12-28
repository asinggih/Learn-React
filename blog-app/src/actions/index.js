import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = async () => {
	//
	const res = await jsonPlaceholder.get("/posts");

	return {
		type: "FETCH_POSTS",
		payload: res
	};
};
