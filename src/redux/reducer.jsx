import { ADD_ITEM, DELETE_ITEM } from './actions';

const INITIAL_STATE = {
	wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_ITEM:
			const newWish = action.payload.trim();
			const array = !state.wishList.some(
				(item) => item.toLowerCase() === newWish.toLowerCase()
			)
				? [...state.wishList, newWish.trim()]
				: [...state.wishList];

			return {
				wishList: array,
			};
		case DELETE_ITEM:
			const updatedArr = state.wishList.filter(
				(item) => item !== action.payload
			);
			return {
				wishList: updatedArr,
			};
		// I would usually choose to return the current state as default case, however test requires me to
		// clear the wishList upon submitting without creating a new action, hence I chose to return
		// an empty array as default case
		default:
			return {
				wishList: [],
			};
	}
};

export default reducer;
