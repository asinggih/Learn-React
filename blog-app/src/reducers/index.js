import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

// these keys below are our state object keys
export default combineReducers({
	posts: postsReducer,
	users: usersReducer
});
