import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import MessageCreationForm from './MessageCreationForm'

class MessagesView extends React.Component {
    form = () => {
        if (this.props.loggedInUser === null || this.props.loggedInUser === undefined) {
            return null
        } else {
            return <MessageCreationForm />
        }
    }
    
    render() {
        return (
            <div>
                <h2>Messages</h2>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Poster</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.messages.map(message => <Table.Row key={message.id}>
                            <Table.Cell><Link to={`/messages/${message.id}`}>{message.title}</Link></Table.Cell>
                            <Table.Cell>{message.user.username}</Table.Cell>
                        </Table.Row>)}
                    </Table.Body>
                </Table>
                {this.form()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { messages: state.messages, loggedInUser: state.loggedInUser }
}

export default connect(mapStateToProps) (MessagesView)