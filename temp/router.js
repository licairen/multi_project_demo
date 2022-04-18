/*
 * @Autor: 李建鹏
 * @Date: 2021-05-19 15:33:26
 * @LastEditTime: 2022-04-15 10:51:20
 * @Description: 
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "./page/Home.vue";
console.log('projedtA 路由模块')
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home

        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ "./page/About.vue")
        },
        {
            name:'404',
            path:'/404.html',
            component: resolve => require(['@/components/404.vue'], resolve),
        },
        {
             path:'*',
             redirect:{
                 name:"404"
             }
        }
    ]
});
