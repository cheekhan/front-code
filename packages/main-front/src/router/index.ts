import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

//导入页面
import xkLoginPage from '../views/login/index..vue';
//素材管理相关页面
import materialContainer from '../views/material/index.vue';
import materialArticleList from '../views/material/articleMaterial/articleList.vue';

//组件示例
import ExampleCropper from "../views/example/cropper.vue"
import ExampleCrypto from "../views/example/Crypto.vue"

// 系统管理
import systemConfigUserInfo from "../views/systemConfig/userConfig.vue"

//未来会拓展的动态路由
const asyncRoute: RouteRecordRaw[] = [
    {path: '/', redirect: '/material'},
    { // 素材管理
        path: '/material',
        component: materialContainer,
        children: [
            {path: '', redirect: '/material/articleList'},
            {path: 'articleList', component: materialArticleList},
        ],
    },
    { // 组件示例
        path: "/example",
        component: materialContainer,
        children: [
            {path: "", redirect: "/example/cropper"},
            {path: "cropper", component: ExampleCropper},
            {path: "crypto", component: ExampleCrypto}
        ]
    },
    { // 系统配置
        path: "/systemConfig",
        component: materialContainer,
        children: [
            {path: "", redirect: "/systemConfig/userinfo"},
            {path: "userinfo", component: systemConfigUserInfo}
        ]
    }
];

// 总路由
const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: xkLoginPage,
    },
    ...asyncRoute,

];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});


export default router;