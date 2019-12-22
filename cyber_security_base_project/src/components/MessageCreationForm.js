import React from 'react'
import { connect } from 'react-redux'
import Redirector from './Redirector'
import { messageCreation } from '../reducers/messageReducer'
import { redirect } from '../reducers/redirectReducer'

class MessageCreationForm extends React.Component {
    createMessage = async (event) => {
        event.preventDefault()

        await this.props.messageCreation({
            title: event.target.title.value,
            content: event.target.content.value
        })

        this.props.redirect('/')
    }

    render() {
        return (
            <div>
                <h3>Post a message</h3>
                <Form onSubmit={this.messageCreation}>
                    <Form.Field label="Title" name="title" control="input" />
                    <Form.Field label="Message" name="content" control="input" />
                    <Button type="submit">Edit</Button>
                </Form>
                <Redirector />
            </div>
        )
    }
}

const mapDispatchToProps = { messageCreation, redirect }

export default connect(null, mapDispatchToProps) (MessageCreationForm)

