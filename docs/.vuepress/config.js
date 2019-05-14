const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  base: '/leyuan/',
  configureWebpack: {
    resolve: {
      alias: {
        '@error': path.resolve(__dirname, 'public/images/error'),
        '@appConfig': path.resolve(__dirname, 'public/images/appConfig')
      }
    }
  },
  //dest: '../../vuepress', // vuepress build 输出目录
  locales: {
    // '/': {
    //   lang: 'en-US',
    //   title: 'VuePress 1.x',
    //   description: 'Vue-powered Static Site Generator'
    // },
    '/': {
      lang: 'zh-CN',
      title: '蓝今项目跟踪',
      description: '问题记录'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  //theme: '@vuepress/vue',
  themeConfig: {
   // repo: 'vuejs/vuepress',
    editLinks: true,
    docsDir: 'packages/docs/docs',
    // #697 Provided by the official algolia team.
    // algolia: ctx.isProd ? ({
    //   apiKey: '3a539aab83105f01761a137c61004d85',
    //   indexName: 'vuepress'
    // }) : null,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        //editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/zh/inside/': getInsideSidebar('MES', '徐州乐园'),
          '/zh/customer/leyuan/': getCustomerSidebar('操作说明'),
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    //['@vuepress/pwa', {
     // serviceWorker: true,
      //updatePopup: true
    //}],
    ['@vuepress/medium-zoom', true],
    // ['@vuepress/google-analytics', {
    //   ga: 'UA-128189152-1'
    // }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>',
    }],
  ],
  extraWatchFiles: [
    //'.vuepress/nav/en.js',
    '.vuepress/nav/zh.js'
  ]

})

// 对内
function getInsideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        'env'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
       'leyuan'
      ]
    }
  ]
}

// const officalPlugins = fs
//   .readdirSync(path.resolve(__dirname, '../plugin/official'))
//   .map(filename => 'official/' + filename.slice(0, -3))
//   .sort()
// 对外
function getCustomerSidebar (customer) {
  return [
    {
      title: customer,
      collapsable: false,
      children: [
        'leyuan'
      ]
    }
  ]
}

function getThemeSidebar (groupA, introductionA) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['', introductionA],
        'using-a-theme',
        'writing-a-theme',
        'option-api',
        'default-theme-config',
        'inheritance'
      ]
    },
  ]
}


