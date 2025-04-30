import { IArticle } from "./type";

const Article = async ({ params, searchParams }: IArticle) => {
  const { articleId } = await params;
  const { lang } = await searchParams;
  return (
    <div>
      <h1>Welcome to the Article Page</h1>

      <h3>This is my Article ID: {articleId}</h3>
      <h3>This is my Article Language {lang}</h3>
    </div>
  );
};

export default Article;
