export const increment = (nr) => {
	return {
		type: "INCREMENTOR",
		payload: nr,
	};
};
export const decrement = () => {
	return {
		type: "DECREMENTOR",
	};
};
