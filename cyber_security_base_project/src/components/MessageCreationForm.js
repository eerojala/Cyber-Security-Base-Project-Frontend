import React from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import { messageCreation } from '../reducers/messageReducer'

class MessageCreationForm extends React.Component {
    createMessage = async (event) => {
        event.preventDefault()

        const formContent = {
            title: event.target.title.value,
            content: event.target.content.value
        }

        event.target.title.value = ""
        event.target.content.value = ""
 
        await this.props.messageCreation(formContent)
    }

    render() {
        return (
            <div>
                <h3>Post a message</h3>
                <Form onSubmit={this.createMessage}>
                    <Form.Field label="Title" name="title" control="input" />
                    <Form.Field label="Message" name="content" control="input" />
                    <Button type="submit">Post</Button>
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = { messageCreation }

export default connect(null, mapDispatchToProps) (MessageCreationForm)