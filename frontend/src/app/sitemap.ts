import { MetadataRoute } from 'next'

/**
 * Next.js 动态站点地图配置
 * 作用：自动生成 sitemap.xml，列出站点所有可被索引的 URL
 * 优势：当你在 app 目录下增加新工具页面时，可以在此处手动增加或通过逻辑自动扫描
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://excel.axpz.org'

  // 定义你的工具页面
  // 随着你工具的增加，只需在这个数组里添加路径即可
  const routes = [
    '',                       // 首页
    '/image-to-excel',        // 图片转Excel工具
    '/text-cleaner',          // 文本清洗工具
    '/formula-generator',     // 公式生成器
    '/vlookup-helper',        // VLOOKUP 助手
    '/format-converter',      // 格式转换器
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const, // 工具站通常每周更新或稳定不变
    priority: route === '' ? 1.0 : 0.8, // 首页权重最高，子工具页次之
  }))
}