import messageService from '../services/messageService'

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_MESSAGES':
            return action.data
        case 'NEW_MESSAGE':
            return state.concat(action.data)
        case 'EDIT_MESSAGE':
            const messages = state.filter(message => message.id !== action.data.id)
            return messages.concat(action.data.updatedMessage)
        default:
            return state
    }
}

export const messageInit = (data) => {
    return async (dispatch) => {
        const messages = await messageService.getAll()

        dispatch({
            type: 'INIT_MESSAGES',
            data: messages
        })
    }
}

export const messageCreation = (content) => {
    return async (dispatch) => {
        try {
            const newMessage = await messageService.create(content)
            
            dispatch({
                type: 'NEW_MESSAGE',
                data: newMessage
            }) 

            return newMessage
        } catch (exception) {
            console.log(exception) // check how detailed the error messages are
            return null
        }
    }
}

export const messageEdit = (id, content) => {
    return async (dispatch) => {
        try {
            const updatedMessage = await messageService.update(id, content)

            dispatch({
                type: 'EDIT_MESSAGE',
                data:  { 
                    updatedMessage,
                    id
                }
            })

            return updatedMessage
        } catch (exception) {
            console.log(exception)
            return null
        }
    }
}

export default messageReducer