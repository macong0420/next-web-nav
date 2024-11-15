export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "前端导航",
  description: "基于 Next.js 的前端导航网站",
  mainNav: [],
  links: {
    twitter: "https://twitter.com/liwenka1",
    github: "https://github.com/liwenka1/next-web-nav",
  },
}

export interface NavLink {
  /** 站点图标 */
  icon?: string
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc?: string
  /** 站点链接 */
  link: string
}

type NavData = {
  title: string
  items: NavLink[]
}

export const NavData: NavData[] = [
  {
    title: "工作相关",
    items: [
      {
        icon: "https://raw.githubusercontent.com/macong0420/Image/main/202411151135283.png",
        title: "gerrit",
        desc: "代码提交",
        link: "http://gerrit.lianjia.com/#/dashboard/self",
      },
      {
        icon: "https://raw.githubusercontent.com/macong0420/Image/main/202411151134074.png",
        title: "ones",
        desc: "ones",
        link: "https://ones.ke.com",
      },
      {
        icon: "https://raw.githubusercontent.com/macong0420/Image/main/202411151136035.png",
        title: "贝拉",
        desc: "beila",
        link: "https://bella.ke.com/#/mainArch/%5Bobject%20Object%5D",
      },
      {
        icon: "https://raw.githubusercontent.com/macong0420/Image/main/202411151137484.png",
        title: "海神",
        desc: "海神",
        link: "http://poseidon.bugly.ke.com/page/homePage?app_id=1&app_identifier=com.lianjia.beike&platform=ios",
      },
      {
        icon: "https://raw.githubusercontent.com/macong0420/Image/main/202411151138353.png",
        title: "会议室",
        desc: "会议室",
        link: "https://new-meeting.ke.com/roomBoard",
      },
      {
        icon: "https://raw.githubusercontent.com/macong0420/Image/main/202411151138353.png",
        title: "珊瑚代客",
        desc: "珊瑚代客",
        link: "https://s.a.ke.com/page/home",
      },
      {
        icon: "https://raw.githubusercontent.com/macong0420/Image/main/202411151138353.png",
        title: "周会",
        desc: "周会",
        link: "https://wiki.lianjia.com/pages/viewpage.action?pageId=1338487367",
      },
    ],
  },
  {
    title: "常用工具",
    items: [
      {
        icon: "https://caniuse.com/img/favicon-128.png",
        title: "Can I use",
        desc: "前端 API 兼容性查询",
        link: "https://caniuse.com",
      },
      {
        icon: "https://tinypng.com/images/apple-touch-icon.png",
        title: "TinyPNG",
        desc: "在线图片压缩工具",
        link: "https://tinypng.com",
      },
      {
        icon: "https://tool.lu/favicon.ico",
        title: "在线工具",
        desc: "开发人员的工具箱",
        link: "https://tool.lu",
      },
      {
        icon: "https://processon.com/favicon.ico",
        title: "ProcessOn",
        desc: "免费在线流程图思维导图",
        link: "https://processon.com/",
      },
      {
        icon: "/icons/json-cn.ico",
        title: "Json 中文网",
        desc: "JSON 在线解析及格式化验证",
        link: "https://www.json.cn",
      },
      {
        icon: "https://www.terminalgif.com/favicon.ico",
        title: "Terminal Gif Maker",
        desc: "在线生成 Terminal GIF",
        link: "https://www.terminalgif.com",
      },
      {
        icon: "https://astexplorer.net/favicon.png",
        title: "AST Explorer",
        desc: "一个 Web 工具，用于探索由各种解析器生成的 AST 语法树",
        link: "https://astexplorer.net/",
      },
      {
        icon: "https://transform.tools/static/favicon.png",
        title: "transform",
        desc: "各类数据格式与对象转换",
        link: "https://transform.tools",
      },
      {
        icon: "/icons/hoppscotch.png",
        title: "Hoppscotch",
        desc: "开源 API 开发生态系统",
        link: "https://hoppscotch.io/",
      },
      {
        icon: "/icons/apifox.png",
        title: "Apifox",
        desc: "API 文档、API 调试、API Mock、API 自动化测试",
        link: "https://www.apifox.cn/",
      },
    ],
  },

  {
    title: "React",
    items: [
      {
        icon: "https://zh-hans.reactjs.org/favicon.ico",
        title: "React",
        desc: "用于构建用户界面的 JavaScript 库",
        link: "https://zh-hans.reactjs.org",
      },
      {
        icon: "https://reactrouter.com/favicon-light.png",
        title: "React Router",
        desc: "React 的声明式路由",
        link: "https://reactrouter.com",
      },
      {
        icon: "https://nextjs.org/static/favicon/safari-pinned-tab.svg",
        title: "Next.js",
        desc: "一个用于 Web 的 React 框架",
        link: "https://nextjs.org",
      },
      {
        icon: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
        title: "UmiJS",
        desc: "插件化的企业级前端应用框架",
        link: "https://umijs.org",
      },
      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
        title: "Ant Design",
        desc: "一套企业级 UI 设计语言和 React 组件库",
        link: "https://ant.design",
      },
      {
        icon: "https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg",
        title: "Ant Design Mobile",
        desc: "构建移动 WEB 应用程序的 React 组件库",
        link: "https://mobile.ant.design",
      },
      {
        icon: "https://docs.pmnd.rs/apple-touch-icon.png",
        title: "Zustand",
        desc: "一个小型、快速、可扩展的 React 状态管理解决方案",
        link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
      },
      {
        icon: "https://valtio.pmnd.rs/favicon.ico",
        title: "Valtio",
        desc: "makes proxy-state simple for React and Vanilla",
        link: "https://valtio.pmnd.rs",
      },
      {
        icon: "https://jotai.org/favicon.svg",
        title: "Jotai",
        desc: "primitive and flexible state management for React",
        link: "https://jotai.org",
      },
      {
        icon: "https://cn.redux.js.org/img/redux.svg",
        title: "Redux",
        desc: "JavaScript 应用的状态容器，提供可预测的状态管理",
        link: "https://cn.redux.js.org",
      },
      {
        icon: "https://recoiljs.org/zh-hans/img/favicon.png",
        title: "recoil",
        desc: "Recoil is an experimental state management framework for React.",
        link: "https://recoiljs.org/zh-hans/",
      },
      {
        icon: "https://zh.mobx.js.org/assets/mobx.png",
        title: "MobX",
        desc: "一个小型、快速、可扩展的 React 状态管理解决方案",
        link: "https://zh.mobx.js.org",
      },
      {
        icon: "https://ahooks.js.org/simple-logo.svg",
        title: "ahooks",
        desc: "一套高质量可靠的 React Hooks 库",
        link: "https://ahooks.js.org/zh-CN",
      },
    ],
  },
  {
    title: "UI设计",
    items: [
      {
        title: "Mastergo",
        desc: "面向团队的专业 UI/UX 设计工具，多人同时编辑、随时在线评审、设计一键交付，让想法更快实现",
        icon: "https://mastergo.com/favicon.ico",
        link: "https://mastergo.com/",
      },
      {
        title: "即时设计",
        desc: "可云端编辑的专业级 UI 设计工具，为中国设计师量身打造，Windows 也能用的「协作版 Sketch」",
        icon: "https://img.js.design/assets/webImg/favicon.ico",
        link: "https://js.design/",
      },
      {
        title: "Figma",
        desc: "Figma 是为 UI 设计而生的设计工具，除了有和 Sketch 一样基本的操作和功能，还有许多专为 UI 设计而生的强大功能。",
        icon: "/icons/figma.png",
        link: "https://www.figma.com/",
      },
      {
        title: "Pixso",
        desc: "一站式完成原型、设计、交互与交付，为数字化团队协作提效",
        icon: "https://cms.pixso.cn/images/logo.svg",
        link: "https://pixso.cn/",
      },
      {
        title: "AIDesign",
        desc: "10秒创建您的LOGO！",
        icon: "https://ailogo.qq.com//favicon.ico?v=1.1",
        link: "https://ailogo.qq.com/",
      },
    ],
  },
  {
    title: "字体图标",
    items: [
      {
        title: "iconify",
        desc: "数千个图标，一个统一的框架",
        icon: "https://icon-sets.iconify.design/favicon.ico",
        link: "https://icon-sets.iconify.design/",
      },
      {
        title: "icones",
        desc: "Icon Explorer with Instant searching, powered by Iconify",
        icon: "https://icones.js.org/favicon.svg",
        link: "https://icones.js.org/",
      },
      {
        title: "iconfont",
        desc: "iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能",
        icon: "https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg",
        link: "https://www.iconfont.cn/",
      },
      {
        title: "feathericons",
        desc: "简单美丽的开源图标",
        icon: "https://feathericons.com/favicon.ico",
        link: "https://feathericons.com/",
      },
      {
        title: "undraw",
        desc: "一个不断更新的设计项目与美丽的SVG图像，使用完全免费",
        icon: "https://undraw.co/apple-touch-icon.png",
        link: "https://undraw.co/",
      },
      {
        title: "igoutu",
        desc: "图标、插图、照片、音乐和设计工具",
        icon: "/icons/igoutu.png",
        link: "https://igoutu.cn/",
      },
      {
        title: "Emojiall",
        desc: "Emoji表情大全",
        icon: "https://www.emojiall.com/apple-touch-icon.png",
        link: "https://www.emojiall.com/zh-hans",
      },
      {
        title: "渐变色网站",
        desc: "数百万个自动生成的渐变的网站",
        icon: "https://gradihunt.com/favicon.ico",
        link: "https://gradihunt.com/",
      },
      {
        title: "谷歌字体",
        desc: "一个生成渐变色背景的网站",
        icon: "/icons/google_fonts.ico",
        link: "https://googlefonts.cn/",
      },
      {
        title: "Typing SVG",
        desc: "一个动态生成的可自定义 SVG 打字效果",
        icon: "/icons/typing-svg.png",
        link: "https://readme-typing-svg.herokuapp.com/demo/",
      },
    ],
  },
  {
    title: "跨平台",
    items: [
      {
        title: "Electron",
        desc: "使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序",
        icon: "/icons/electron.ico",
        link: "https://www.electronjs.org/",
      },
      {
        title: "Tauri",
        desc: "Tauri是一个框架，用于为所有主要桌面平台构建小巧、快速的二进制文件",
        icon: "https://tauri.app/meta/favicon-96x96.png",
        link: "https://tauri.app/",
      },
      {
        title: "Flutter",
        desc: "Flutter 是 Google 开源的应用开发框架，仅通过一套代码库，就能构建精美的、原生平台编译的多平台应用",
        icon: "https://flutter.cn/assets/images/cn/flutter-icon.png",
        link: "https://flutter.cn/",
      },
      {
        title: "Uni-app",
        desc: "uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/快手/钉钉/淘宝）、快应用等多个平台",
        icon: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/d23e842c-58fc-4574-998d-17fdc7811cc3.png",
        link: "https://uniapp.dcloud.io/",
      },
      {
        title: "Taro",
        desc: "Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用",
        icon: "/icons/taro.png",
        link: "https://taro.jd.com",
      },
    ],
  },
  {
    title: "代码托管",
    items: [
      {
        title: "Github",
        icon: "/icons/github.ico",
        desc: "一个面向开源及私有软件项目的托管平台",
        link: "https://github.com",
      },
      {
        title: "Gitee",
        desc: "Gitee 是中国领先的基于 Git 的代码托管平台，类似于全球知名的 GitHub",
        icon: "/icons/gitee.ico",
        link: "https://gitee.com/",
      },
      {
        title: "Gitlab",
        desc: "更快地交付安全代码，部署到任何云，并推动业务成果",
        icon: "https://gitlab.com/uploads/-/system/group/avatar/6543/logo-extra-whitespace.png?width=64",
        link: "https://gitlab.com/",
      },
      {
        title: "Gitea",
        desc: "Gitea 是一个开源社区驱动的轻量级代码托管解决方案，后端采用 Go 编写，采用 MIT 许可证.",
        icon: "https://gitea.io/images/favicon.png",
        link: "https://gitea.io/",
      },
      {
        title: "Coding",
        desc: "提供一站式研发管理平台及云原生开发工具，让软件研发如同工业生产般简单高效，助力企业提升研发管理效能",
        icon: "/icons/coding.png",
        link: "https://coding.net/",
      },
    ],
  },
  {
    title: "网站托管",
    items: [
      {
        title: "Vercel",
        desc: "Vercel将最好的开发人员体验与对最终用户性能的执着关注相结合",
        icon: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png",
        link: "https://vercel.com",
      },
      {
        title: "Netlify",
        desc: "Netlify 是一家提供静态网站托管的云平台，支持从 Github, GitLab, Bitbucket 等代码仓库中自动拉取代码 然后进行项目打包和部署等功能",
        icon: "/icons/netlify.png",
        link: "https://www.netlify.com",
      },
      {
        title: "Coolify",
        desc: "一个开源和自我托管的 Heroku/Netlify 替代品",
        icon: "/icons/coolify.png",
        link: "https://coolify.io",
      },
      {
        title: "GitHub Codespace",
        desc: "全球最大的软件项目托管平台，发现优质开源项目",
        icon: "https://github.githubassets.com/favicons/favicon.svg",
        link: "https://github.com/codespaces",
      },
      {
        title: "Railway",
        desc: "带上你的代码，剩下交给我们 ",
        icon: "/icons/railway.png",
        link: "https://railway.app/",
      },
      {
        title: "Supabase",
        desc: "Supabase 是一个开源的后端即服务（BaaS）平台，它可以帮助开发者快速构建应用程序，无需编写后端代码。",
        icon: "/icons/supabase.png",
        link: "https://supabase.com/",
      },
    ],
  },
  {
    title: "社区",
    items: [
      {
        icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
        title: "Stack Overflow",
        desc: "全球最大的技术问答网站",
        link: "https://stackoverflow.com",
      },
      {
        title: "稀土掘金",
        icon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png",
        desc: "面向全球中文开发者的技术内容分享与交流平台",
        link: "https://juejin.cn",
      },
      {
        title: "V2EX",
        icon: "https://www.v2ex.com/static/icon-192.png",
        desc: "一个关于分享和探索的地方",
        link: "https://www.v2ex.com",
      },
      {
        title: "SegmentFault 思否",
        icon: "https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png",
        desc: "技术问答开发者社区",
        link: "https://segmentfault.com",
      },
      {
        title: "博客园",
        icon: "/icons/cnblogs.svg",
        desc: "博客园是一个面向开发者的知识分享社区",
        link: "https://www.cnblogs.com",
      },
      {
        title: "知乎",
        icon: "https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png",
        desc: "中文互联网高质量的问答社区和创作者聚集的原创内容平台",
        link: "https://zhihu.com",
      },
    ],
  },
]
