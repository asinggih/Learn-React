export default (state = [], action) => {
	switch (action.type) {
		case "FETCH_USER":
			/**
			 * we basically create a NEW array with with the same content as the previous one plus the new payload (the user that we fetched).
			 * */
			return [...state, action.payload];

		default:
			return state;
	}
};
