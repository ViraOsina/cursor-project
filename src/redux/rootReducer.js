import { categoryReducer } from './categoryReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
	category: categoryReducer,
})
