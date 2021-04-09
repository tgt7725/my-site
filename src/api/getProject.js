import axios from './request'

export async function getProject() {
    return await axios.get('/api/project');
}
