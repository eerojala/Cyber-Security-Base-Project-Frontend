const redirectReducer = (state = null, action) => {
    switch (action.type) {
        case 'REDIRECT':
            return action.data
        case 'NULLIFY_REDIRECT':
            return null
        default:
            return state
    }
}

export const redirect = (path) => {
    return async (dispatch) => {
        dispatch({
            type: 'REDIRECT',
            data: path
        })

        setTimeout(() => {
            dispatch({
                type: 'NULLIFY_REDIRECT'
            }, 100)
        })
    }
}

export default redirectReducer