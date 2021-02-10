import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import rootReducers from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
	rootReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root"),
);
// //Store --> Globalized State
// import { createStore } from "redux";

// //Action --> Describes what you want to do I plan to do this is put here!
// //Here we are going to increment -- Simple function that returns an object
// const increment = () => {
// 	return {
// 		type: "INCREMENT", //use this instead of type...in all caps!
// 	};
// };

// const decrement = () => {
// 	return {
// 		type: "DECREMENT", //use this instead of type...in all caps!
// 	};
// };

// //Reducer --> How your actions transform your state
// //Make sure to have the two parameters: initial state and the action you want to perform
// const counter = (state = 0, action) => {
// 	switch (action.type) {
// 		case "INCREMENT":
// 			return state + 1;
// 		case "DECREMENT":
// 			return state - 1;
// 		default:
// 			return state;
// 	}
// };

// let store = createStore(counter);

// //Display in console
// store.subscribe(() => console.log(store.getState()));

// //Dispatch --> Send the action to the reducer or execute it
// store.dispatch(increment());
// store.dispatch(decrement());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
