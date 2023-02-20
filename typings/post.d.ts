import { MarkdownInstance } from 'astro';

export type PostProps = {
  title: string
  slug: string
  hideSide: boolean
  pubDate: string
  updatedDate: string
  pubTimestamp: number
  updatedTimestamp?: number
  isDraft: boolean
  isPages: boolean
  top: boolean
  Content: MarkdownInstance<any>['Content']
  mode?: 'indent' | 'norss'
  url: string
  _head: {
    level: number,
    title: string
  }[],
  _images: {
    name: string,
    alt: string,
    url: string,
  }[],
  _rawString: string,
  heroImage: string,
  description: string,
  filePath: string
  nextArticle?: Post
  beforeArticle?: Post
}

export type Post = {
  file: URL
} & PostProps;
