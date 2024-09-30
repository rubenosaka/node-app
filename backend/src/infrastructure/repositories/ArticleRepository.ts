import { Article } from "../../domain/models/Article";

export class ArticleRepository {
  private articles: Article[] = [];

  save(article: Article): void {
    this.articles.push(article);
  }

  findAll(): Article[] {
    return this.articles;
  }
}
