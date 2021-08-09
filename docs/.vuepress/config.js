module.exports = {
    title: 'TechnicalStandard',
    description: '源江科技研发技术标准',
    themeConfig: {
        logo: '/icon.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/home' },
            { text: 'External', link: 'https://google.com' },
        ],
        // displayAllHeaders: true,
        sidebar: [
            ['/pages/home', '导航'],
            '/pages/程序变量命名的几种叫法',
            '/pages/代码提交规范',
            '/pages/Code-English',
            '/pages/dbdocs设计规范',
            '/pages/Git流程规范',
            '/pages/nestjs编码规范',
            '/pages/nestjs接口开发规范',
            '/pages/Postgresql-数据库设计规范',
            '/pages/Postgresql关联表设计规范',
            '/pages/restful-API-规范',
            '/pages/uuid和id的设计依据',
            '/pages/vscode配置',
            '/pages/vue-lint配置',
            '/pages/vue-router设计规范',
            '/pages/vue编码规范',
            '/pages/vuex设计规范',
            
        ]
    }
}