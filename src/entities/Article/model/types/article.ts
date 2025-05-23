import { User } from '@/entities/User';
import { ArticleType } from '../const/const';

export type ArticleBlockType = 'CODE' | 'TEXT' | 'IMAGE';

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: 'CODE';
  code: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: 'TEXT';
  title?: string;
  paragraphs: string[];
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: 'IMAGE';
  src: string;
  title: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export interface Article {
  _id: string;
  title: string;
  user: User;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  userId?: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
