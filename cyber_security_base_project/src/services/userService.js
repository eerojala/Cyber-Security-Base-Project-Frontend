import axios from 'axios'
import { getConfig } from '../util/serviceHelper'

const baseUrl = '/api/users'

const getAll = async () => {
    const response = await axios.get(baseUrl)

    return response.data
}

const create = async (content) => {
    const response = await axios.post(baseUrl, content, getConfig())
    
    return response.data
}

export default { getAll, create }