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
      {
        icon: "https://raw.githubusercontent.com/macong0420/Image/main/202411211600402.png",
        title: "奥丁",
        desc: "奥丁",
        link: "https://odin.ke.com/report/detail?report_id=113215&project_id=0",
      },
    ],
  },
  {
    title: "AI",
    items: [
      {
        title: "GPT",
        desc: "GPT",
        icon: "https://raw.githubusercontent.com/macong0420/Image/main/202411151150833.png",
        link: "https://chatgpt.com/",
      },
      {
        title: "POE",
        desc: "POE",
        icon: "https://raw.githubusercontent.com/macong0420/Image/main/202411151152026.png",
        link: "https://poe.com/",
      },
      {
        title: "gemini",
        desc: "gemini",
        icon: "https://raw.githubusercontent.com/macong0420/Image/main/202411151153963.png",
        link: "https://gemini.google.com/app",
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
        title: "NGA",
        icon: "https://raw.githubusercontent.com/macong0420/Image/main/202411151147286.png",
        desc: "NGA",
        link: "https://bbs.nga.cn/",
      },
      {
        title: "知乎",
        icon: "https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png",
        desc: "中文互联网高质量的问答社区和创作者聚集的原创内容平台",
        link: "https://zhihu.com",
      },
    ],
  },
  {
    title: "常用工具",
    items: [
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
    ],
  },

]
