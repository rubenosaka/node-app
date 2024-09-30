import { Request, Response } from "express";
import { ArticleService } from "../../application/services/ArticleService";
import { ArticleDto } from "../../application/dtos/ArticleDto";

const articleService = new ArticleService();

export class ArticleController {
  static create(req: Request, res: Response): void {
    const articleDto: ArticleDto = req.body;
    const article = articleService.createArticle(articleDto);
    res.status(201).json(article);
  }

  static getAll(req: Request, res: Response): void {
    const articles = articleService.getAllArticles();
    res.json(articles);
  }
}
