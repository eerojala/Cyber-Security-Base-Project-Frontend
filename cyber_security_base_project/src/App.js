import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { userInit } from './reducers/userReducer'
import { messageInit } from './reducers/messageReducer'

// Component imports here

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
                        
                    </div>
                </Router>
            </Container>
        )
    }
}

const mapDispatchToProps = { userInit, messageInit }

export default connect(null, mapDispatchToProps) (App)
