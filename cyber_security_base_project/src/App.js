import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { userInit } from './reducers/userReducer'
import { messageInit } from './reducers/messageReducer'

import LoginForm from './components/LoginForm'
import MessageEditForm from './components/MessageEditForm'
import MessagesView from './components/MessagesView'
import MessageView from './components/MessageView'
import NavigationBar from './components/NavigationBar'
import RegistrationForm from './components/RegistrationForm'

class App extends React.Component {
    componentDidMount() {
        this.props.userInit()
        this.props.messageInit()
    }

    render() {
        return (
            <Container>
                <Router>
                    <div>
                        <h1>
                            <Link to="/">Message board</Link>
                        </h1>
                        <NavigationBar />
                        <Route exact path="/" render={() => <MessagesView />} />
                        <Route exact path="/login" render={() => <LoginForm />} />
                        <Route exact path="/messages" render={() => <MessagesView />} />
                        <Route exact path="/messages/:id" render={({ match }) => <MessageView messageId={match.params.id} />} />
                        <Route exact path="/messages/:id/edit" render={({ match }) => <MessageEditForm messageId={match.params.id} />} />
                        <Route exact path="/register" render={() => <RegistrationForm />} />
                    </div>
                </Router>
            </Container>
        )
    }
}

const mapDispatchToProps = { userInit, messageInit }

export default connect(null, mapDispatchToProps) (App)
