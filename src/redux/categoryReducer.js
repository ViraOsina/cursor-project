import { ADD_CATEGORY } from './actionTypes'

const initialState = {
	categories: [
		{
			name: 'food',
			id: Math.trunc(Math.random() * Date.now()),
		},
		{
			name: 'clothes',
			id: Math.trunc(Math.random() * Date.now()),
		},
		{
			name: 'restaurants',
			id: Math.trunc(Math.random() * Date.now()),
		},
		{
			name: 'Utility bills',
			id: Math.trunc(Math.random() * Date.now()),
		},
		{
			name: 'pets',
			id: Math.trunc(Math.random() * Date.now()),
		},
	],
}

export const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CATEGORY:
			return {
				...state,
				categories: [...state.categories, action.payload],
			}
		default:
			return state
	}
}

export const addCategoryAction = payload => ({
	type: ADD_CATEGORY,
	payload: {
		name: payload,
		id: Math.trunc(Math.random() * Date.now()),
	},
})
