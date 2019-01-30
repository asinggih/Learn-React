import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"; // to avoid naming confusion
import authReducer from "./authReducer";

// we can access these items below inside mapStateToProps via state.KEYNAME
export default combineReducers({
  authentication: authReducer,
  form: formReducer // redux form reducer key MUST BE NAMED as "form"
});
