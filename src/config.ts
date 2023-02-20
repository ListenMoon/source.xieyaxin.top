// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

const { MODE } = import.meta.env;
export const isDev = MODE === 'development';
export const isProd = MODE === 'production';

export const SITE_LANG = "zh-cn"
export const SITE_TITLE = 'PureO2';
export const SITE_DESCRIPTION = 'PureO2 Blog';

/**
 * 左侧文件夹标题
 */
export const TreeTitle = "文章"

/**
 * 左侧文件夹打开遵循方式
 * always: 总是打开文件夹
 * dir:    只打开子文件全是文件夹的文件夹
 */
export const expandTreeType: "always" | "dir" = "dir"

/**
 * true: 如果没有头图且文章中存在图片，则显示第一个图片替代头图
 */
export const showArticleHeroImage = false

export const FooterAuthor = 'NPMRUN';
export const FooterName = 'PureO2';
export const FooterRepo = 'https://github.com/npmrun/PureO2';

// 远程地址，可自行修改对应的操作
export const enableRemote = true // 是否显示远程编辑按钮
const githubEditURL = 'https://github.com/npmrun/PureO2/edit/master__placeholder__'
const githubNewURL = 'https://github.com/npmrun/PureO2/new/master__placeholder__'
export function getEditURL(url: string) {
    return githubEditURL.replace("__placeholder__", url)
}
export function getNewURL(url: string) {
    return githubNewURL.replace("__placeholder__", url)
}
