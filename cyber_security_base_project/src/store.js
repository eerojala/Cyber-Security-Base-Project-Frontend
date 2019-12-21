import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import userReducer from './reducers/userReducer'
import messageReducer from './reducers/messageReducer'
import loginReducer from './reducers/loginReducer'
import redirectReducer from './reducers/redirectReducer'

const reducer = combineReducers({
    users: userReducer,
    messages: messageReducer,
    loggedInUser: loginReducer,
    redirect: redirectReducer
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store