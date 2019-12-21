import React from 'react'
import { connect } from 'react-redux'
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
            this.props.redirect('')
        } else {
            alert('Login failed')
        }
    }

    render() {
        return (
            <div>
                <h2>Log in</h2>
                <form onSubmit={this.sendLoginCredentials}>
                    <div>
                        Username: <input name="username" />
                    </div>
                    <div>
                        Password: <input name="password" type="password" />
                    </div>
                </form>
                <Redirector />
            </div>
        )
    }
}

const mapDispatchToProps = { login, redirect }

export default connect(null, mapDispatchToProps) (LoginForm)