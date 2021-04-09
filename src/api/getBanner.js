import axios from './request'

/**
 * 获取banner区域的数据
 * @returns 返回一个Promise
 */
export async function getBanner() {
    return await axios.get('/api/banner');
}

// getBanner().then(d => {
//     console.log(d);
// })