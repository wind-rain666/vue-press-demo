# Vuex使用特点
我们使用Vuex仅仅是作为数据通信的一种辅助工具，网上很多教程都会把逻辑写到actions代码块中。<br />
例如：登录逻辑就是在actions代码块中发起http请求，之后将token存到vuex中。我们并不这样做，逻辑代码都写到页面中。
`注意：`之前的代码`mapGetter`使用不正确，getter相当于vue的计算属性，应该使用`mapState`，什么时候需要使用mapGetter，参考vue的计算属性。

# 文件夹示例
```
store
├── getters.js
├── index.js
├── localStorage
│   ├── expiresAt.js
│   ├── expiresIn.js
│   ├── guards.js
│   ├── roles.js
│   ├── token.js
│   └── userData.js
└── modules
    ├── app.js
    └── user.js
```

# 文件示例
* store/index.js
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user
  },
  getters
})
```

* store/modules/user.js
```
import { getToken, setToken, removeToken } from '../localStorage/token.js';
import { getRoles, setRoles, removeRoles } from '../localStorage/roles.js';
import { getGuards, setGuards, removeGuards } from '../localStorage/guards.js';
import { getExpiresIn, setExpiresIn, removeExpiresIn } from '../localStorage/expiresIn.js';
import { getExpiresAt, setExpiresAt, removeExpiresAt } from '../localStorage/expiresAt.js';
import { getUserData, setUserData, removeUserData } from '../localStorage/userData.js';

export default {
    state: {
        token: getToken() || '',     //用户Token信息
        expiresIn: getExpiresIn() || null,  //token有效期，单位：毫秒
        expiresAt: getExpiresAt() || null,  //token过期时间，精确到毫秒
        roles: getRoles() || [],        //用户角色列表
        guards: getGuards() || [],   //用户权限列表
        userData: getUserData() || null //用户信息
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
            setToken(token);
        },
        SET_EXPIRES_IN: (state, expiresIn) => {
            state.expiresIn = expiresIn;
            setExpiresIn(expiresIn)
        },
        SET_EXPIRES_AT: (state, expiresAt) => {
            state.expiresAt = expiresAt;
            setExpiresAt(expiresAt);
        },
        EXTEND_TOKEN_EXPIRES_AT: (state) => {
            state.expiresAt = Date.now() + state.expiresIn;
            setExpiresAt(state.expiresAt)
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
            setRoles(roles);
        },
        SET_GUARDS: (state, guards) => {
            state.guards = guards;
            setGuards(guards);
        },
        SET_USER_DATA: (state, userData) => {
            state.userData = userData;
            setUserData(userData);
        },
        LOGOUT: (state) => {
            state.token = '';
            state.expiresIn = null;
            state.expiresAt = null;
            state.roles = [];
            state.guards = [];
            state.userData = null;
            removeToken();
            removeExpiresIn();
            removeExpiresAt();
            removeRoles();
            removeGuards();
            removeUserData();
        }
    },
    actions: {
        setToken({ commit }, token) {
            commit('SET_TOKEN', token)
        },
        setExpiresIn({ commit }, expiresIn) {
            commit('SET_EXPIRES_IN', expiresIn)
        },
        setExpiresAt({ commit }, expiresAt) {
            commit('SET_EXPIRES_AT', expiresAt)
        },
        extendTokenExpiresAt({ commit }) {
            commit('EXTEND_TOKEN_EXPIRES_AT')
        },
        setRoles({ commit }, roles) {
            commit('SET_ROLES', roles)
        },
        setGuards({ commit }, guards) {
            commit('SET_GUARDS', guards)
        },
        setUserData({ commit }, userData) {
            commit('SET_USER_DATA', userData)
        },
        logout({ commit }) {
            commit('LOGOUT')
        }
    }
}
```