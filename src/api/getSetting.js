import axios from './request'

/**
 * 获取全局设置
 * @returns 返回一个Promise
 */
export async function getSetting() {
    return await axios.get('/api/setting');
}
