export const initialClient = {
	client: {
		ip: null,
		userName: null,
		password: null,
		roomName: null,
	},
}

export function setClient() {
	return {
		type: 'SET_CLIENT',
		payload: {
			ip: '123.456.789',
			userName: 'Kenneth',
			password: 'Mcdo1989',
			roomName: 'MyRoom',
		},
	}
}
