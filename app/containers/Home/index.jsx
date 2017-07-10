import React from 'react'
import { Segment, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Home = () => (
	<Segment>
		<Header as="h1">Welcome to PChat</Header>
		<p>The Chat App good for Private Conversation</p>
		<p>{"Don't"} save any chat conversation</p>
		<Button primary as={Link} to="/create">Create A Room</Button>
	</Segment>
)

export default Home
