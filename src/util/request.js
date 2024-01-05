//导入
import {getCookie} from '@/util/cookie'
import axios from 'axios'

// 创建axios实例
const service = axios.create({
    // 超时
    timeout: 10000,
})

//使用
service.interceptors.request.use(
    res => {
        console.log("请求拦截器:", res)
        if (res) {
            if (getCookie("token")) {
                res.headers.Authorization = getCookie("token")
            }
            return res;
        }
    },
    err => {
        return Promise.reject(err);
    }
);
