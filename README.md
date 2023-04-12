<div align="center">
<p><img width="150" src="https://avatars0.githubusercontent.com/u/25151659?s=460&v=4"></p>

<h1>uniapp-cli</h1>

<p>
   <strong>vue2+uview2 脚手架，开箱即用</strong>
</p>

<p>
  <sub>Made with ❤︎ by
    <a href="https://github.com/Ikarows">Ikarows</a>
  </sub>
</p>

<img src="https://shields.io/badge/node-%3E%3D%2016.0.0-brightgreen">
<img src="https://img.shields.io/badge/axios-0.22.0-brightgreen">
<img src="https://img.shields.io/badge/uView-2.0-brightgreen">
<img src="https://img.shields.io/badge/eslint-8.27.0-brightgreen">
</div>

<br>
<br>

## 项目地址

```shell
git clone https://github.com/Ikarows/uniapp-cli.git
```

<br />

## `node` 版本推荐

 大于 `v16.0.0` 即可。
<br />

## 技术栈

- Vue2
- Axios
- Vuex
- Eslint
- uView2

## 开发

```bash

# install cnpm
npm install cnpm -g --registry=https://registry.npm.taobao.org;

# install dependencies
cnpm i

## strat  ##
请放到 Hbuildx 中运行

# eslint
npm run lint
```

## 项目目录

```bash
├── .hbuilderx         # hbuilderx配置
├── src                # 项目文件夹
│   ├── api            # API接口
│   ├── components     # 公用组件
│   ├── config         # 配置文件
│   │   └── http.ts    # axios 封装
│   ├── pages          # 页面目录
│   ├── static         # 资源文件夹
│   │   ├── img        # 图库
│   │   ├── js         # 脚本
│   │   └── css        # 样式（scss, css, less）
│   ├── store          # Vuex 目录
│   ├── utils          # 公用函数目录
│   ├── App.vue        # vue 根文件
│   ├── main.ts        # vue 入口js
│   ├── manifest.json  # hubildx项目打包配置
│   ├── pages.json     # 路由配置
│   └── uni.scss       # 默认样式
│
├── .eslintignore      # eslint忽略文件
├── .eslintrc.js       # eslint配置
├── .gitignore         # git忽略文件
├── .prettierignore    # prettier忽略文件
├── .prettierrc        # prettier风格配置
├── index.html         # 首页入口文件
├── package.json       # 依赖包
├── README.md          # 项目说明
├── upload.mjs         # 自动化部署
└── vue.config.ts     # vue配置文件
```

## 分包

已开启分包，请在`pages.json`配置`subPackages`即可

```bash
"subPackages": [
    {
      "root": "pages/users",
      "pages": [
        {
          "path": "user_info/index",
          "style": {
            "navigationBarTitleText": "用户信息"
          }
        }
      ]
    }
  ]
```
