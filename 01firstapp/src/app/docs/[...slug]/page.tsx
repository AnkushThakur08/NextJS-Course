import { IDocument } from "./type";

const Document = async ({ params }: IDocument) => {
  const { slug } = await params;
  return (
    <div>
      {slug?.length === 2 && (
        <h1>
          Welcome to Document Feature {slug[0]} and its concept {slug[1]}
        </h1>
      )}

      {slug.length === 1 && <h1>Welcome to Document Feature {slug[0]}</h1>}
    </div>
  );
};

export default Document;
