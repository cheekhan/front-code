/**
 * 发送登录请求，并且添加权限
 */
import {userLogin} from "../../api/user"
import router from "../../router/index"

export default async function () {
    const userInfo = await userLogin();
    router.addRoute({path:'/sss',component})
}