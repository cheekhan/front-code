/**
 * 和用户相关的所有请求
 *
 */
import {fetchHttp} from "@cheekhan/api"

//用户登录

export function userLogin() {
    return fetchHttp.get('/login', {})
}

//修改用户信息