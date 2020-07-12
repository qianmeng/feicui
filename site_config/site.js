// 全局的一些配置
export default {
  rootPath: '/feicui', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  domain: 'dubbo.apache.org', // 站点部署域名，无需协议和path等
  defaultSearch: 'baidu', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'zh-cn',
  'en-us': {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/en-us/docs/demo1.html',
      },
      {
        key: 'blog',
        text: 'BLOG',
        link: '/en-us/blog/index.html',
      },
      {
        key: 'community',
        text: 'COMMUNITY',
        link: '/en-us/community/index.html',
      },
    ],
    disclaimer: {
      title: 'Disclaimer',
      content: 'the disclaimer content',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Overview',
          link: '/en-us/docs/demo1.html',
        },
        {
          text: 'Quick start',
          link: '/en-us/docs/demo2.html',
        },
        {
          text: 'Developer guide',
          link: '/en-us/docs/dir/demo3.html',
        },
      ],
    },
    resources: {
      title: 'Resources',
      list: [
        {
          text: 'Blog',
          link: '/en-us/blog/index.html',
        },
        {
          text: 'Community',
          link: '/en-us/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2018 江苏省翡翠大观园',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '精选翡翠',
        link: '/zh-cn/docs/aboutfeicui.html',
      },
      {
        key: 'blog',
        text: '翡翠美文',
        link: '/zh-cn/blog/index.html',
      },
      {
        key: 'community',
        text: '大观园社区',
        link: '/zh-cn/community/index.html',
      },
    ],
    disclaimer: {
      title: '免责声明',
      content: '未经允许，禁止盗用本网站任何网页元素',
    },
    documentation: {
      title: '快速导航',
      list: [
        {
          text: '关于网站',
          link: '/zh-cn/docs/aboutsite.html',
        },
        {
          text: '关于我们',
          link: '/zh-cn/docs/aboutcompany.html',
        },
        {
          text: '关于翡翠',
          link: '/zh-cn/docs/aboutfeicui.html',
        }
      ],
    },
    resources: {
      title: '资源',
      list: [
        {
          text: '精选翡翠',
          link: '/zh-cn/docs/aboutfeicui.html',
        },
        {
          text: '翡翠美文',
          link: '/zh-cn/blog/index.html',
        },
        {
          text: '翡翠社区',
          link: '/zh-cn/community/index.html',
        }
      ],
    },
    copyright: 'Copyright © 2020 江苏省翡翠大观园',
  },
};
