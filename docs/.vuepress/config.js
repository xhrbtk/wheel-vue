module.exports = {
  base: '/wheel-vue/',
  title: 'Wheel-Vue',
  description: '一个好用的ui组件库',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '交流', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ] 
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/input',
          '/components/popover',
          '/components/tabs',
          '/components/toast',
          '/components/collapse'
        ]
      },
    ]
  }
}