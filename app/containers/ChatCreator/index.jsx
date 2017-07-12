import React from 'react'
import { connect } from 'react-redux'
import { setClient } from 'actions/client'
import PropTypes from 'prop-types'
import { Segment } from 'semantic-ui-react'
import ChatCreatorForm from './ChatCreatorForm'

const ChatCreator = ({ handleClick, client }) => (
	<Segment>
		<ChatCreatorForm handleClick={handleClick} client={client} />
	</Segment>
)

const mapStateToProps = state => (
	{
		client: state.client,
	}
)

const mapDispatchToProps = dispatch => ({
	handleClick: () => {
		dispatch(setClient())
	},
})

ChatCreator.propTypes = {
	handleClick: PropTypes.func.isRequired,
	client: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatCreator)
