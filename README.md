# PureO2![](https://img.shields.io/github/stars/npmrun/PureO2.svg?style=flat&label=Star)

一个简单展示文章的界面。

## 使用

文章可以直接在`article`下写，`article/drafts`目录下的是草稿，不会发布在正式版中，但会显示在开发版中。

需要使用在Github新增或编辑功能的需要在`src/config.ts`自行配置Github相关。

> 最好不要取有特殊字符的标题

## 开发注意

不要在`.astro`文件中使用 `<style></style>` 这种作用域样式，可以在上面加上`is:global`变成全局样式。否则的话会生成`:where`选择器，导致低版本浏览器不兼容而导致样式错乱（例如微信浏览器）

## 部署
[![](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/npmrun/PureO2)

## 推荐
推荐Fork之后使用 https://stackblitz.com 写博客，此方式的缺点是图片需要自行上传再粘贴，同时需注意的是未Commit之前，网页一旦刷新，本地的数据就没了，这个需时刻注意。
网速可以的话推荐直接用Github写，别和stackblitz一起用就行，可能会导致stackblitz的不是最新代码而提交不上去。

## Demo
https://pure-o2.netlify.app/

## 致谢开源项目

致谢所有我使用过的库，感谢，如有侵犯，请联系我。
