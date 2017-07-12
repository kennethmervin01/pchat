import { initialClient } from 'actions/client'

export default function clientReducer(state = initialClient, action) {
	switch (action.type) {
		case 'SET_CLIENT' :
			return Object.assign({}, state, { client: action.payload })
		default:
			return state
	}
}
