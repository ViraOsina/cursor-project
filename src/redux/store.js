import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './rootReducer'

export const store = createStore(rootReducer, composeWithDevTools())

store.subscribe(() => {
	localStorage['reduxState'] = JSON.stringify(store.getState())
})
