import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class ChatCreatorForm extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.checkIfSet = this.checkIfSet.bind(this)
	}

	componentWillMount() {
		this.checkIfSet()
	}


	handleClick() {
		this.props.handleClick()
	}

	checkIfSet() {
		const client = this.props.client
		if (client.userName !== null && client.password !== null) {
			this.props.history.push('/home')
		}
	}


	render() {
		return (
			<Form>
				<Form.Input label="Username" />
				<Form.Input label="Room Name" />
				<Form.Input label="Password" type="password" />
				<Button as="div" primary onClick={this.handleClick}>Create</Button>
			</Form>
		)
	}

}

ChatCreatorForm.propTypes = {
	handleClick: PropTypes.func.isRequired,
	client: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
	history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default withRouter(ChatCreatorForm)
