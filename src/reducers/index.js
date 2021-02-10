import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
	//Below means => counter: counterReducer,
	counterReducer,
	loggedReducer,
});

export default rootReducers;
