export class Article {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public author: string,
    public createdAt: Date = new Date()
  ) {}
}
