// nav
module.exports = [
    {text: '首页', link: '/'},
    {
        text: '开始使用🔥',
        link: '/guide/',
        items: [
            {
                text: '快速开始',
                items: [
                    {text: 'k8s环境搭建', link: '/quickstart/k8s/'},
                    {text: 'golang微服务版本', link: '/quickstart/golang/'},
                    {text: 'php环境搭建', link: '/quickstart/php/'},
                    {text: 'vue前端技术说明', link: '/quickstart/front/'},
                    {text: 'uniapp混合开发介绍', link: '/quickstart/uniapp/'},
                    {text: '压测报告', link: '/quickstart/report/'},
                    {text: '错误代码', link: '/quickstart/error_code/'}
                ],
            },
            {
                text: 'IM服务',
                items: [
                    {link: '/im/', text: '简介'},
                    {link: '/im/quickstart/', text: '快速开始'},
                    {link: '/im/error_code/', text: '错误代码'},
                ],
            },
            {
                text: '流媒体服务',
                items: [
                    {link: '/rtp/', text: '简介'},
                    {link: '/rtp/quickstart/', text: '快速开始'},
                    {link: '/rtp/error_code/', text: '错误代码'},
                ],
            },
        ],
    },
    {
        text: '教程',
        link: '/blog/tutorials/'
    },
    {
        text: '案例演示',
        link: '/demo/',
        items: [
            {link: '/demo/ids-demo/', text: '01.直播app演示'},
            {link: '/demo/front-end-and-backend/', text: '02.陪玩语聊app演示'},
            {link: '/demo/springboot/', text: '03.IM聊天交友app演示'},
        ],
    },
    {
        text: 'api文档',
        link: '/api/',
        items: [
            {link: '/api/php/',text:'php接口文档'},
            {link: '/api/golang/', text: 'golang接口文档'},
            {link: '/api/im/', text: 'IM接口文档'},
            {link: '/api/im/', text: '流媒体接口文档'},
            {link: '/api/backend/', text: '源站接口文档'},
        ],
    },
    {
        text: '常见问题',
        items: [
            {link: '/qa/feedback/', text: '问题反馈'},
            {link: '/qa/project/', text: '项目问题'},
            {link: '/qa/error/', text: '异常问题'},
            {link: '/qa/func/', text: '功能问题'},
            {link: '/qa/explain/',text: '名词解释'},
        ],
    },
    {
        text: '源码商城',
        link: 'https://wx.onionnews.cn',

    },
    {
        text: '关于',
        items: [
            {text: '关于', link: '/about/me/'},
            {text: '谁在用', link: '/about/friends/'},
            {text: '捐赠列表', link: '/about/donate/'},
            {text: '更新记录', link: '/about/update/'},
        ],
    },
]
