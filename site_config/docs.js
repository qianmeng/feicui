export default {
  'en-us': {
    sidemenu: [
      {
        title: 'header title',
        children: [
          {
            title: 'demo1',
            link: '/en-us/docs/demo1.html',
          },
          {
            title: 'demo2',
            link: '/en-us/docs/demo2.html',
          },
          {
            title: 'dir',
            opened: true,
            children: [
              {
                title: 'demo3',
                link: '/en-us/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: '翡翠分类',
        children: [ 
          {
            title: '吊坠',
            opened: true,
            children: [
              {
                title: '平安扣',
                link: '/zh-cn/docs/dir/demo3.html',
              },
              {
                title: '佛公',
                link: '/zh-cn/docs/demo1.html',
              },
              {
                title: '观音',
                link: '/zh-cn/docs/demo2.html',
              },
            ],
          },
          {
            title: '手镯',
            opened: true,
            children: [
              {
                title: '贵妃手镯',
                link: '/zh-cn/docs/dir/demo3.html',
              },
              {
                title: '标准手镯',
                link: '/zh-cn/docs/demo1.html',
              }
            ],
          },
        ],
      },
      {
        title: '公司介绍',
        children: [
          {
            title: '关于我们',
            link: '/zh-cn/docs/aboutcompany.html',
          },
          {
            title: '关于网站',
            link: '/zh-cn/docs/aboutsite.html',
          }, 
          {
            title: '关于翡翠',
            link: '/zh-cn/docs/aboutfeicui.html',
          }, 
        ],
      },
    ],
    barText: '精选翡翠',
  },
};
