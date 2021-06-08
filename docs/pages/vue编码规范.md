* [vue lint配置](vue lint配置)
* [vue router设计规范](vue router设计规范)
* [vuex设计规范](vuex设计规范)

# 缩进风格
`必须使用2个空格`来代替tab，在项目的.vscode目录中settings.json文件中配置！！！

# 命名规范
## 属性名
小驼峰

## css class名称
烤肉串风格，例如：`user-list-container`

## css id名称
小驼峰

## 文件名
非组件文件，以小驼峰命名，组件文件：公用组件大驼峰，页面组件小驼峰<br />
图片和svg文件以烤肉串风格命名

# 结构规范
## 文件
`.vue`单文件中，html，js和css代码块的顺序为：`html > js > css` <br />
js代码块中的属性顺序：`name > model > props > data > computed > watch > render前生命周期顺序 > methods > render后生命周期顺序` <br />
`注意：单vue文件每块代码行数不要超过300行，超过的时候拆成模块。

## 文件夹规范
参考示例：
```
src
├── api
│   ├── card.js
│   ├── device.js
│   ├── factory.js
│   ├── gateway.js
│   ├── log
│   │   ├── mqttRecord.js
│   │   ├── systemLog.js
│   │   └── userActivityLog.js
│   ├── station.js
│   └── user.js
├── App.vue
├── assets
│   ├── canvas-bg.png
│   ├── iconfont
│   │   ├── iconfont.css
│   │   ├── iconfont.eot
│   │   ├── iconfont.svg
│   │   ├── iconfont.ttf
│   │   ├── iconfont.woff
│   │   └── iconfont.woff2
│   └── logo.png
├── axios
│   └── admin.js
├── components
│   ├── NavBar
│   │   ├── Avatar.vue
│   │   ├── Breadcrumb.vue
│   │   ├── Hamburger.vue
│   │   ├── Index.vue
│   │   ├── OptionBox.vue
│   │   └── Screenfull.vue
│   └── NavMenu.vue
├── constants
│   ├── common.js
│   ├── device.js
│   └── log.js
├── layout
│   └── index.vue
├── main.js
├── registerServiceWorker.js
├── route
│   ├── guard.js
│   ├── index.js
│   └── modules
│       ├── 404.js
│       ├── device.js
│       ├── factory.js
│       ├── index.js
│       ├── system.js
│       └── user.js
├── store
│   ├── getters.js
│   ├── index.js
│   ├── localStorage
│   │   ├── expiresAt.js
│   │   ├── expiresIn.js
│   │   ├── guards.js
│   │   ├── roles.js
│   │   ├── token.js
│   │   └── userData.js
│   └── modules
│       ├── app.js
│       └── user.js
├── style
│   ├── elementMenu.scss
│   └── index.scss
├── utils
│   ├── index.js
│   └── regular.js
└── views
    ├── 404
    │   └── index.vue
    ├── dashboard
    │   ├── canvasModules
    │   │   ├── bg.js
    │   │   ├── card.js
    │   │   ├── gateway.js
    │   │   └── station.js
    │   ├── index-bak.vue
    │   ├── index.vue
    │   ├── service.js
    │   └── socket.js
    ├── device
    │   ├── card
    │   │   └── list
    │   │       ├── dataTable.vue
    │   │       ├── index.vue
    │   │       └── searchForm.vue
    │   ├── gateway
    │   │   ├── config
    │   │   └── list
    │   │       ├── dataTable.vue
    │   │       ├── index.vue
    │   │       ├── location.vue
    │   │       └── searchForm.vue
    │   ├── station
    │   │   ├── config
    │   │   └── list
    │   │       ├── dataTable.vue
    │   │       ├── index.vue
    │   │       ├── location.vue
    │   │       └── searchForm.vue
    │   └── upload
    │       ├── index.vue
    │       ├── service.js
    │       ├── xmlEditor.vue
    │       ├── xmlExample.vue
    │       └── xmlUpload.vue
    ├── factory
    │   ├── add
    │   │   └── index.vue
    │   ├── edit
    │   │   └── index.vue
    │   └── list
    │       ├── dataTable.vue
    │       ├── index.vue
    │       └── searchForm.vue
    ├── system
    │   ├── crontab
    │   │   └── index.vue
    │   ├── guard
    │   │   └── index.vue
    │   ├── log
    │   │   ├── dataTable.vue
    │   │   ├── index.vue
    │   │   ├── searchForm.vue
    │   │   └── service.js
    │   └── mqtt
    │       └── log
    │           ├── dataTable.vue
    │           ├── index.vue
    │           ├── searchForm.vue
    │           └── service.js
    └── user
        ├── list
        │   └── index.vue
        ├── log
        │   ├── dataTable.vue
        │   ├── index.vue
        │   ├── searchForm.vue
        │   └── service.js
        └── login
            ├── index.vue
            └── service.js
```


