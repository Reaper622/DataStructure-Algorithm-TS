module.exports = {
    title: '数据结构和算法',
    dest: './ds-al',
    base: '/ds-al/',
    repo: 'https://github.com/Reaper622/DataStructure-Algorithm-TS',
    themeConfig: {
        // 添加导航栏
        nav: [
            {text: '数据结构', link: '/ds/'},
            {text: '算法', link: '/al/'},
            {text: '设计模式', link: 'https://reaperlee.cn/dp/'},
            {text: '博客', link: 'https://reaperlee.cn'},
        ],
        // 为以下路由添加侧边栏
        sidebar: ['/', '/ds/', '/al/']
    }
}