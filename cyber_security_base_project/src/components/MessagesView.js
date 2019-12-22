import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { MessageCreationForm } from './MessageCreationForm'

class MessagesView extends React.Component {
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
                <MessageCreationForm />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { messages: state.messages }
}

export default connect(mapStateToProps) (MessageTable)