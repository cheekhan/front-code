import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import asyncRoutes from "./asyncRoutes";
//导入登录
import xkLoginPage from '../views/login/index.vue';


// 总路由
// TODO: 区分静态路由，和动态路由，将动态路由处理模块，单独区分，用以登录页使用
const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: xkLoginPage,
        meta: {
            isStatic: true
        }
    },
    asyncRoutes,
];

// 创建路由对象
const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

// 路由前置拦截
router.beforeEach((to, from) => {

})


export default router;