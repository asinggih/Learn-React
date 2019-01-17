import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

// Utilising dispatch and getState to get access on the posts details
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());
	/**
	 * Below is Lodash's version of map, and basically it's just
	 * pulling the info of userId from objects inside the array
	 * and store it as an array of userIds
	 *
	 * We turn that array into a set, so we only hv distinct values
	 * by using _.uniq. Or we can just use the standard method
	 * of converting it into a Set, and back to Array by using spread
	 *
	 * */
	const arrayOfUserIds = _.map(getState().posts, "userId");
	const uniqUserIds = _.uniq(arrayOfUserIds);

	uniqUserIds.forEach(id => dispatch(fetchUser(id)));

	/**
	 * The code above can be refactored by using the Lodash's
	 * chain library to hv a more compact feature
	 */
	// _.chain(getState().posts)
	// 	.map("userId") // func above becomes first arg of cur func
	// 	.uniq() // same concept
	// 	.forEach(id => dispatch(fetchUser(id)))
	// 	.value(); // this function executes the whole chain

	/**
	 * the map - dispatch function returns array of promises instead.
	 * By using Promise.all, we combine the array of promise into
	 * a single promise, after all of them has been resolved.
	 *
	 * and then we have to add the await keyword in front of it
	 * to make sure we wait until the promise has been resolved
	 * before proceeding to the next line of code.
	 */
	// await Promise.all(uniqUserIds.map(id => dispatch(fetchUser(id))));
	// console.log(getState().users);
};

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
