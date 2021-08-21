import Icons from '../components/Icons'
import { ADD_CATEGORY, REMOVE_CATEGORY } from './actionTypes'

const initialState = {
	categories: [
		{
			id: Math.trunc(Math.random() * Date.now()),
			name: 'Food',
			icon: Icons.Food,
			description: 'For all my food',
			date: '21.07.2021',
		},
		{
			id: Math.trunc(Math.random() * Date.now()),
			name: 'Clothes',
			icon: Icons.Clothes,
			description: 'Clothing costs',
			date: '11.06.2021',
		},
		{
			id: Math.trunc(Math.random() * Date.now()),
			name: 'Restaurants',
			icon: Icons.Restaurants,
			description: 'The cost of going to the restaurant',
			date: '19.01.2019',
		},
		{
			id: Math.trunc(Math.random() * Date.now()),
			name: 'Utility bills',
			icon: Icons.UtilityBills,
			description: 'Who invented the water bills?',
			date: '16.04.2020',
		},
		{
			id: Math.trunc(Math.random() * Date.now()),
			name: 'Pets',
			icon: Icons.Pets,
			description: 'Shopping for a tailed friend',
			date: '12.08.2021',
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
		date: Date.now().toLocaleString(),
	},
})

export const removeCategoryAction = payload => ({
	type: REMOVE_CATEGORY,
	payload,
})
