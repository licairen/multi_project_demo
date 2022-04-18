/*
 * @Autor: 李建鹏
 * @Date: 2021-05-19 15:33:26
 * @LastEditTime: 2022-04-17 17:25:32
 * @Description: 
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "./page/Home.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home

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
