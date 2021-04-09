import axios from './request'

export async function getAbout() {
    return await axios.get('/api/about');
}
