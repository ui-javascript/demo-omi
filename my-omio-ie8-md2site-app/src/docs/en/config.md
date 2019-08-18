## Config

```js
const config = {
  menus: {
    'zh-cn': [
      {
        title: '快速开始',
        list: [
          { name: '简介', md: 'introduction' },
          { name: '配置', md: 'config' }
        ]
      },
      {
        title: '其他版块',
        list: [
          { name: '带 REPL', md: 'other-docs', demo: './repl/index.html' }
        ]
      }
    ],
    en: [
      {
        title: 'QUICK START',
        list: [
          { name: 'Introduction', md: 'introduction' },
          { name: 'Config', md: 'config' }
        ]
      },
      {
        title: 'Other',
        list: [
          { name: 'With REPL', md: 'other-docs', demo: './repl/index.html' }
        ]
      }
    ]
  }
}

export default config
```