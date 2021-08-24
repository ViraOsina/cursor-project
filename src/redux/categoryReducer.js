import Icons from '../components/Icons'
import { ADD_CATEGORY, REMOVE_CATEGORY } from './actionTypes'
import moment from 'moment'
import { initialState } from './state'

export const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CATEGORY:
			return {
				...state,
				categories: [...state.categories, action.payload],
			}
		case REMOVE_CATEGORY:
			return {
				...state,
				categories: [
					...state.categories.filter(
						category => category.id !== action.payload
					),
				],
			}
		default:
			return state
	}
}

export const addCategoryAction = payload => ({
	type: ADD_CATEGORY,
	payload: {
		id: Math.trunc(Math.random() * Date.now()),
		name: payload.name,
		icon: Icons[payload.icon],
		description: payload.description,
		date: moment().format('DD MMM'),
		standard: false,
	},
})

export const removeCategoryAction = payload => ({
	type: REMOVE_CATEGORY,
	payload,
})
