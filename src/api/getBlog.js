import axios from './request'

/**
 * 所有博客分类
 * @returns 返回一个Promise
 */
export async function getBlogtype() {
    return await axios.get('/api/blogtype');
}

/**
 * 分页获取博客
 * @param {Number} page 页码数，默认为1
 * @param {Number} limit 页容量，默认为10
 * @param {Number} categoryid 分类id，默认为-1，表示全部
 * @returns 返回一个Promise
 */
export async function getBlog(page = 1, limit = 10, categoryid = -1, keyword = ' ') {
    return await axios.get('/api/blog', {
        params: {
            page,
            limit,
            categoryid,
            keyword
        }
    });
}

/**
 * 获取单个博客
 * @param {Number} id 博客id
 * @returns 返回一个Promise
 */
export async function getBlogById(id) {
    return await axios.get(`/api/blog/${id}`);
}

/**
 * 提交评论
 * @param {Object} options post请求配置对象
 * @returns 返回一个Promise
 */
export async function addComment(options) {
    return await axios.post(`/api/comment`, options);
}


/**
 * 分页获取评论
 * @param {Number} page 页码数，默认为1
 * @param {Number} limit 页容量，默认为10
 * @param {Number} blogid 文章id，默认为-1，表示全部
 * @returns 返回一个Promise
 */
export async function getComment(page = 1, limit = 10, blogid = -1) {
    return await axios.get(`/api/comment`, {
        params: {
            page,
            limit,
            blogid
        }
    });
}

