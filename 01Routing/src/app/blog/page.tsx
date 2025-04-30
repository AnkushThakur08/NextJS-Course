const Blog = async () => {
  await new Promise(() => {
    setTimeout((resolve) => {
      resolve("With a delay");
    }, 2000);
  });
  return (
    <div>
      <h1>Blog Page</h1>
    </div>
  );
};

export default Blog;
