import Http from "./http";
import {HttpConfig} from "./type";

const http = Http({
    baseUrl: "/test",
    timeout: 1000,
    headers: {
        "xk-token": "test-id-001"
    }
})

/**
 * 标准响应处理
 *   HTTP状态码200: 修改/删除成功。
 *   HTTP状态码201: 创建成功。
 *   HTTP状态码400: 请求失败，原因是参数错误或者业务逻辑较验不满足，解决办法是通过修改请求参数可以解决。
 *   HTTP状态码401: 认证无效，需要认证。
 *   HTTP状态码403: 用户经过了正常的身份验证，但没有访问资源所需的权限。未授权。
 *   HTTP状态码500: 请求失败，原因是服务端依赖资源异常或者数据完整性与预期不符，解决办法是服务端服务恢复，不可以通过修改请求参数来解决
 */
http.after((res) => {
    console.log('响应拦截器')
    if (res.status < 4000) {
        return res
    } else if (res.status === 401) {
        throw new Error("未登陆");
    } else if (res.status === 403) {
        throw new Error("无权限进行访问")
    } else {
        throw new Error("服务端其他错误")
    }
})


export function create(obj: HttpConfig) {
    return Http(obj)
}

export default http