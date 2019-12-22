import React from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { logout } from '../reducers/loginReducer'

class NavigationBar extends React.Component {
    userLoggedIn = () => {
        return this.props.loggedInUser !== null && this.props.loggedInUser !== undefined
    }

    loginMenuItem = () => {
        return !this.userLoggedIn() ?
            <Menu.Item link>
                <Link to="/login">Login</Link>
            </Menu.Item>:
            null
    }
    
    registerMenuItem = () => {
        return !this.userLoggedIn() ?
            <Menu.Item>
                <Link to="/register">Register</Link>
            </Menu.Item>:
            null
    }

    logoutMenuItem = () => {
        return this.userLoggedIn() ?
            <Menu.Item onClick={this.props.logout}>Logout></Menu.Item>:
            null
    }

    render () {
        return (
            <Menu inverted>
                <Menu.Item link>
                    <Link to="/">Messages</Link>
                    {this.loginMenuItem()}
                    {this.registerMenuItem()}
                    {this.logoutMenuItem()}
                </Menu.Item>
            </Menu>
        )
    }
}

const mapStateToProps = (state, props) => {
    return { loggedInUser: state.loggedInUser }
}

const mapDispatchToProps = { logout }

export default connect(mapStateToProps, mapDispatchToProps) (NavigationBar)