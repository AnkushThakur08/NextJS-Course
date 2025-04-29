const BlogDetails = async ({ params }: any) => {
  const { slug } = await params;

  const getJokes = async () => {
    const res = await fetch(
      "https://api.freeapi.app/api/v1/public/quotes/quote/random"
    );
    return res.json();
  };

  const data = await getJokes();
  console.log("data", data);

  return (
    <div>
      <h2>Blog Details: {slug}</h2>
      {data?.data?.content}
    </div>
  );
};

export default BlogDetails;
