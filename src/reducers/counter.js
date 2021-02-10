const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENTOR":
			return state + action.payload;
		case "DECREMENTOR":
			return state - 1;
		default:
			return state;
	}
};

export default counterReducer;
