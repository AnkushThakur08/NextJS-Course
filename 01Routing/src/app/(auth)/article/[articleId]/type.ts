interface IParams {
  articleId: string;
}
interface ISearch {
  lang: string;
}

export interface IArticle {
  params: Promise<IParams>;
  searchParams: Promise<ISearch>;
}
