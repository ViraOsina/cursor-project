import moment from 'moment'
import { OPEN_MODAL, CLOSE_MODAL, REMOVE_ITEM, ADD_ITEM, EDIT_ITEM, OPEN_EDIT_MODAL, CLOSE_EDIT_MODAL } from './actionTypes'

const initialState = {
	display: 'none',
	displayEdit: 'none',
	chargesDB: [
		{
			category: 'Food',
			description: "All my food",
			date: moment(1629925200000).format('l'),
			milliseconds: 1629925200000,
			money: 25,
		},
		{
			category: 'Travel',
			description: "buy a tent",
			date: moment(1621285200000).format('l'),
			milliseconds: 1621285200000,
			money: 180,
		},
		{
			category: 'Health',
			description: "Medicine",
			date: moment(1617051600000).format('l'),
			milliseconds: 1617051600000,
			money: 13,
		},
	],
	incomesDB: [
		{
			category: 'Salary',
			description: "",
			date: moment(1629925200000).format('l'),
			milliseconds: 1629925200000,
			money: 2300,
		},
		{
			category: 'Gift',
			description: "",
			date: moment(1621285200000).format('l'),
			milliseconds: 1621285200000,
			money: 200,
		},
		{
			category: 'Bonus',
			description: "",
			date: moment(1617051600000).format('l'),
			milliseconds: 1617051600000,
			money: 350,
		},
	],
}

export const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_MODAL:
			return {
				...state,
				display: 'block',
			}
		case CLOSE_MODAL:
			return {
				...state,
				display: 'none'
			}
		case OPEN_EDIT_MODAL:
			state.targetItem = action.targetItem
			return {
				...state,
				displayEdit: 'block',
				editId: action.id,
				targetItem: state.targetItem,
			}
		case CLOSE_EDIT_MODAL:
			state.targetItem = undefined;
			return {
				...state,
				displayEdit: 'none'
			}

		case REMOVE_ITEM:
			if(action.target === 'charges') {
				return {
					...state,
					chargesDB: action.filteredArr
				}
				
			} else {
				return {
					...state,
					incomesDB: action.filteredArr
				}
			}
		case ADD_ITEM:
			if(action.target === 'charges') {
				return {
					...state,
					chargesDB: [...state.chargesDB, action.payload],
				}
				
			} else {
				return {
					...state,
					incomesDB: [...state.incomesDB, action.payload],
				}
			}
		case EDIT_ITEM:
			const {category, description, date, money} = action.payload;
			
			if(action.target === 'charges') {
				state.chargesDB[state.editId] = {category, description, date, money}
				return {
					...state,
					chargesDB: [...state.chargesDB]
				}
			} else {
					state.incomesDB[state.editId] = {category, description, date, money}
				return {
					...state,
					incomesDB: [...state.incomesDB]
				}
			}
			
		default:
			return state
	}
}

export const openModalAction = () => ({
	type: OPEN_MODAL,
})

export const closeModalAction = () => ({
	type: CLOSE_MODAL,
})

export const openEditModalAction = (id, data) => ({
	type: OPEN_EDIT_MODAL,
	id: id,
	targetItem: data,
})

export const closeEditModalAction = () => ({
	type: CLOSE_EDIT_MODAL,
})
