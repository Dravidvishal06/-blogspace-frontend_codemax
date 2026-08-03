function BlogCard({ title, description }) {
  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <p>{description}</p>

      <button>Read More</button>
    </div>
  );
}

export default BlogCard;