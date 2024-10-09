import { ArticleDto } from '@application/dtos/ArticleDto';
import { ArticleService } from '@application/services/ArticleService';

describe('Application > Services > ArticleService', () => {
  let articleService: ArticleService;

  beforeEach(() => {
    articleService = new ArticleService();
  });

  test('should create a new article', () => {
    const articleDto: ArticleDto = {
      title: 'Test Article',
      content: 'This is a test article',
      author: 'Test Author',
    };

    const newArticle = articleService.createArticle(articleDto);

    expect(newArticle).toHaveProperty('id');
    expect(newArticle.title).toBe('Test Article');
    expect(newArticle.content).toBe('This is a test article');
    expect(newArticle.author).toBe('Test Author');
  });

  test('should return all articles', () => {
    const articleDto1: ArticleDto = {
      title: 'First Article',
      content: 'Content of first article',
      author: 'Author 1',
    };

    const articleDto2: ArticleDto = {
      title: 'Second Article',
      content: 'Content of second article',
      author: 'Author 2',
    };

    articleService.createArticle(articleDto1);
    articleService.createArticle(articleDto2);

    const articles = articleService.getAllArticles();

    expect(articles.length).toBe(2);
    expect(articles[0].title).toBe('First Article');
    expect(articles[1].title).toBe('Second Article');
  });
});
