import { describe, expect, vi } from 'vitest';
import { Request, Response } from 'express';
import { ArticleController } from '@interfaces/controllers/ArticleController';
import { ArticleService } from '@application/services/ArticleService';
import { Article } from '@domain/models/Article';

vi.mock('../../application/services/ArticleService');

describe('Interfaces > Controllers > ArticleControllers', () => {
  test('should create an article and return it with status 201', () => {
    const req = {
      body: {
        title: 'Test Title',
        content: 'Test Content',
        author: 'Test Author',
      },
    } as Request;

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;

    const mockArticle = new Article(
      '1',
      'Test Title',
      'Test Content',
      'Test Author'
    );
    const mockCreateArticle = vi
      .spyOn(ArticleService.prototype, 'createArticle')
      .mockReturnValue(mockArticle);

    ArticleController.create(req, res);

    expect(mockCreateArticle).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockArticle);
  });

  test('should return all articles', () => {
    const req = {} as Request;
    const res = {
      json: vi.fn(),
    } as unknown as Response;

    const mockArticles = [
      new Article('1', 'Title 1', 'Content 1', 'Author 1'),
      new Article('2', 'Title 2', 'Content 2', 'Author 2'),
    ];
    const mockGetAllArticles = vi
      .spyOn(ArticleService.prototype, 'getAllArticles')
      .mockReturnValue(mockArticles);

    ArticleController.getAll(req, res);

    expect(mockGetAllArticles).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(mockArticles);
  });
});
