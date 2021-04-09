import axios from './request'

/**
 * 提交留言
 * @param {Object} options post请求配置对象
 * @returns 返回一个Promise
 */
export async function addMessage(options) {
    return await axios.post(`/api/message`, options);
}


/**
 * 分页获取留言
 * @param {Number} page 页码数，默认为1
 * @param {Number} limit 页容量，默认为10
 * @returns 返回一个Promise
 */
export async function getMessage(page = 1, limit = 10, keyword = '') {
    return await axios.get(`/api/message`, {
        params: {
            page,
            limit,
            keyword
        }
    });
}

