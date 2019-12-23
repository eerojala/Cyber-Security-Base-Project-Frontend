import React from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import Redirector from './Redirector'
import { login } from '../reducers/loginReducer'
import { redirect } from '../reducers/redirectReducer'

class LoginForm extends React.Component {
    sendLoginCredentials = async (event) => {
        event.preventDefault()

        const credentials = {
            username: event.target.username.value,
            password: event.target.password.value
        }

        event.target.username.value = ''
        event.target.password.value = ''

        const user = await this.props.login(credentials)

        if (user !== null) {
            this.props.redirect('/')
        } else {
            alert('Login failed')
        }
    }

    render() {
        return (
            <div>
                <h2>Log in</h2>
                <Form onSubmit={this.sendLoginCredentials}>
                    <Form.Field label="Username" name="username" control="input" />
                    <Form.Field label="Password" name="password" control="input" type="password" />
                    <Button type="submit">Login</Button>
                </Form>
                <Redirector />
            </div>
        )
    }
}

const mapDispatchToProps = { login, redirect }

export default connect(null, mapDispatchToProps) (LoginForm)