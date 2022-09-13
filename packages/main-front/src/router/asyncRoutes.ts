import {RouteRecordRaw} from "vue-router"
// 导入布局组件
import Layout from "../components/layout/index.vue"
// 导入容器组件
import EmptyContainer from "../views/EmptyContainer.vue"
// 导入无权限页面
import handleErrorPage from "../views/handleErrorPage.vue"
// 权限控制相关
import AuthDeptConfig from "../views/AuthConfig/deptConfig.vue";
import AuthRoleConfig from "../views/AuthConfig/roleConfig.vue";
import AuthUserConfig from "../views/AuthConfig/userConfig.vue";

// 系统配置相关
import SysDictConfig from "../views/systemConfig/dictConfig.vue";
import SysLogConfig from "../views/systemConfig/logConfig.vue";
import SysMenuConfig from "../views/systemConfig/menuConfig.vue";


//组件示例
import ExampleCropper from "../views/example/cropper.vue"
import ExampleUploadRef from "../views/example/uploadRef.vue"

const route: RouteRecordRaw =
    {
        path: "/",
        component: Layout,
        children: [
            {path: "", redirect: '/example'},
            { // 组件示例
                path: "/example",
                component: EmptyContainer,
                children: [
                    {path: "", redirect: "/example/cropper"},
                    {path: "cropper", component: ExampleCropper, name: "example-cropper"},
                    {path: "uploadRef", component: ExampleUploadRef, name: "example-upload-ref"},
                ]
            },
            { // 系统配置相关
                path: "/system",
                component: EmptyContainer,
                children: [
                    {path: "", redirect: "/system/dict"},
                    {path: "dict", component: SysDictConfig, name: "system-dict"},
                    {path: "log", component: SysLogConfig, name: "system-log"},
                    {path: "menu", component: SysMenuConfig, name: "system-menu"},
                ]
            },
            { // 权限管理
                path: "/auth",
                component: EmptyContainer,
                children: [
                    {path: "", redirect: "/auth/dept"},
                    {path: "dept", component: AuthDeptConfig, name: "auth-dept"},
                    {path: "user", component: AuthUserConfig, name: "auth-user"},
                    {path: "role", component: AuthRoleConfig, name: "auth-role"},
                ]
            },
            { // 静态部分：异常捕捉页面
                path: "/:handleErr(.*)",
                component: handleErrorPage,
                meta: {
                    isStatic: true
                }
            }
        ]
    };

export default route
