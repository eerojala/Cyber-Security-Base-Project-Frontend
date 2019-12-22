import React from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'
import { Redirector } from './Redirector'
import { userCreation } from '../reducers/userReducer'
import { redirect } from '../reducers/redirectReducer'

class UserRegistrationForm extends React.Component {
    createUser = async (event) => {
        event.preventDefault()

        const user = await this.props.userCreation({ 
            username: event.target.username.value, 
            password: event.target.password.value
        })

        if (user) {
            alert('New user created successfully, you may now login with your credentials')
            this.props.redirect('/login')
        } else {
            alert('Account registration failed, probably because you attempted to create a duplicate user')
        }
    }

    render() {
        return (
            <div>
                <h3>Register a new account</h3>
                <Form onSubmit={this.createUser}>
                    <Form.Field label="Username" name="Username" control="input" />
                    <Form.Field label="Password" name="Password" control="input" type="password" />
                    <Button type="submit">Register</Button>
                </Form>
                <Redirector />
            </div>
        )
    }
}

const mapDispatchToProps = { userCreation, redirect } 

export default connect(null, mapDispatchToProps) (UserRegistrationForm)