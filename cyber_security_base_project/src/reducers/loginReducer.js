import loginService from '../services/loginService'
import { setConfig } from '../util/serviceHelper'

const loginReducer = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.user
        case 'LOGOUT':
            return null
        default:
            return state
    }
}

export const login = (credentials) => {
    return async (dispatch) => {
        try {
            const user = await loginService.login(credentials)

            window.localStorage.setItem('loggedInUser', JSON.stringify(user))
            setConfig(user.token)
            console.log('Successfully logged in!')

            dispatch({
                type: 'LOGIN',
                user: user
            })

            return user
        } catch (exception) {
            console.log(exception)
            return null
        }
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: 'LOGOUT'
        })
    }
}

export default loginReducer