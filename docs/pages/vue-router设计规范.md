# Vue-Router实际开发痛点
实例化Router的时候需要传入routes这个所有路由组成的数组，当一个项目页面过多的时候，这个数组就会非常巨大，查找一个路由很不方便。<br />
我们使用JavaScript中数组的concat方法来达到模块化的目的。

# route目录示例
```
route
├── guard.js
├── index.js
└── modules
    ├── 404.js
    ├── index.js
    ├── system.js
    └── user.js
```

# 代码示例
* route/index.js
```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
import indexRouter from './modules/index';
import userRouter from './modules/user';
import systemRouter from './modules/system';
import notFoundRouter from './modules/404';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: indexRouter.concat(userRouter, systemRouter).concat(notFoundRouter)
})
```
`notFoundRouter`必须写在最后！！！<br />

* route/modules/system.js
```javascript
export default [
    {
        path: '/system',
        name: 'system',
        meta: { title: '系统管理', icon: 'el-exp-xitong', layout: true },
        redirect: '/system/log/list',
    },
    {
        path: '/system/guard',
        name: 'guard',
        meta: { title: '权限管理', icon: 'el-exp-fuwuquanxianguanli', layout: true, parentMenu: 'system' },
        component: () => import('../../views/system/guard/index.vue')
    },
    {
        path: '/system/log/list',
        name: 'systemLogList',
        meta: { title: '系统日志', icon: 'el-exp-xitongrizhi', layout: true, parentMenu: 'system' },
        component: () => import('../../views/system/log/index.vue')
    },
    {
        path: '/system/userActivityLog/list',
        name: 'systemUserActivityLogList',
        meta: { title: '用户活动日志', icon: 'el-exp-yonghurizhi', layout: true, parentMenu: 'system' },
        component: () => import('../../views/user/log/index.vue')
    },
    {
        path: '/system/crontab/list',
        name: 'systemCrontabList',
        meta: { title: '计划任务', icon: 'el-exp-navicon-jhtx', layout: true, parentMenu: 'system' },
        component: () => import('../../views/system/crontab/index.vue')
    },
]
```
