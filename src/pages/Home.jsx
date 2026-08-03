import BlogCard from "../components/BlogCard";

function Home() {
  const blogs = [
    {
      id: 1,
      title: "React Basics",
      description: "Learn the fundamentals of React.js.",
    },
    {
      id: 2,
      title: "JavaScript ES6",
      description: "Understand modern JavaScript features.",
    },
    {
      id: 3,
      title: "CSS Flexbox",
      description: "Master responsive layouts using Flexbox.",
    },
  ];

  return (
    <div className="home">
      <h1>Welcome to BlogSpace</h1>
      <p>Read the latest blogs on Web Development.</p>

      <div className="blog-container">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;