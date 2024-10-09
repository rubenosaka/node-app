import { describe, expect } from 'vitest';
import { ArticleRepository } from '@infrastructure/repositories/ArticleRepository';
import { Article } from '@domain/models/Article';

describe('Infraestructure > Repositories > ArticleRepository', () => {
  test('should save an article', () => {
    const articleRepo = new ArticleRepository();
    const article = new Article('1', 'Test Title', 'Test Content', 'Author');

    articleRepo.save(article);

    const allArticles = articleRepo.findAll();
    expect(allArticles).toContain(article);
  });

  test('should return all articles', () => {
    const articleRepo = new ArticleRepository();
    const article1 = new Article('1', 'Title 1', 'Content 1', 'Author 1');
    const article2 = new Article('2', 'Title 2', 'Content 2', 'Author 2');

    articleRepo.save(article1);
    articleRepo.save(article2);

    const allArticles = articleRepo.findAll();
    expect(allArticles).toEqual([article1, article2]);
  });
});
