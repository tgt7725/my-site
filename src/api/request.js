import axios from 'axios'
import showMessage from "../utils/showMessage";

const ins = axios.create(); // 创建一个axios的实例
ins.interceptors.response.use(resp => {
    if(resp.data.code !== 0) {
        showMessage({
            message: resp.data.msg
        });
        return null;
    }
    return resp.data.data;
});

export default ins