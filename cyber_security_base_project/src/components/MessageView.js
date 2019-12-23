import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class MessageView extends React.Component {
    render () {
        const { message } = this.props

        if (message === null || message === undefined) {
            return null
        }

        const editLink = this.props.loggedInUser !== null && this.props.loggedInUser.id === message.user._id ?
        <Link to={`/messages/${message.id}/edit`}>Edit</Link>:
        null

        return (
            <div key={message.id}>
                <h2>{message.title}</h2>
                <p>From: {message.user.username}</p>
                <div dangerouslySetInnerHTML={{"__html": message.content}} />
                <p>{editLink}</p>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const { messageId } = props

    if (state.messages === null) {
        return { message: null }
    }

    return {
        message: state.messages.find(message => message.id === messageId),
        loggedInUser: state.loggedInUser
    }
}

export default connect(mapStateToProps) (MessageView)