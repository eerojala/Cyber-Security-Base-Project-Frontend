import React from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import Redirector from './Redirector'
import { messageEdit } from '../reducers/messageReducer'
import { redirect } from '../reducers/redirectReducer'

class MessageEditForm extends React.Component {
    editMessage = async (event) => {
        event.preventDefault()

        await this.props.messageEdit({
            title: event.target.title.value,
            content: event.target.content.value
        })

        this.props.redirect('/')
    }

    render() {
        const { message } = this.props
        
        if (message === null || message === undefined) {
            return null
        }

        return (
            <div>
                <h3>Edit this message</h3>
                <Form onSubmit={this.editMessage}>
                    <Form.Field label="Title" name="title" control="input" value={message.title} />
                    <Form.Field label="Message" name="content" control="input" value={message.content} />
                    <Button type="submit">Edit</Button>
                </Form>
                <Redirector />
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
        message: state.messages.find(message => message.id === messageId)
    }
}

const mapDispatchToProps = { messageEdit, redirect }

export default connect(mapStateToProps, mapDispatchToProps) (MessageEditForm)

