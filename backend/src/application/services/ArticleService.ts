import { Article } from '../../domain/models/Article';
import { ArticleDto } from '../dtos/ArticleDto';

export class ArticleService {
  private articles: Article[] = [];

  createArticle(articleDto: ArticleDto): Article {
    const newArticle = new Article(
      Date.now().toString(),
      articleDto.title,
      articleDto.content,
      articleDto.author
    );
    this.articles.push(newArticle);
    return newArticle;
  }

  getAllArticles(): Article[] {
    return this.articles;
  }
}
