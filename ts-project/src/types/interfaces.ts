export interface IArticle {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: Array<any>;
  events: Array<any>;
}

export interface IArticleProps {
  article: IArticle;
}

export interface IArticleDetailProps {
  id: number;
}
