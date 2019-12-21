let config = null

export const setConfig = (newToken) => {
    config = { headers: {'Authorization': `bearer ${newToken}`} }
}

export const getConfig = () => {
    return config
}