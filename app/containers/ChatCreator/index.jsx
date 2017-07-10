import React from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

const ChatCreator = () => (
	<Segment>
		<h3>Create your Secret Chat Room</h3>
		<Form>
			<Form.Input label="Chatroom Name" type="text" />
			<Form.Input label="Create Password" type="password" />
			<Button primary>Create</Button>
		</Form>
	</Segment>
)

export default ChatCreator
