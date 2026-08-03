import { useState } from "react";

function CreateBlog() {
  const [blog, setBlog] = useState({
    title: "",
    category: "",
    content: "",
  });

  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Blog Created Successfully!");
  };

  return (
    <section className="create-blog">
      <div className="create-card">
        <h1>Create New Blog</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Blog Title</label>

            <input
              type="text"
              name="title"
              placeholder="Enter blog title"
              value={blog.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>

            <input
              type="text"
              name="category"
              placeholder="React / JavaScript / CSS"
              value={blog.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Content</label>

            <textarea
              name="content"
              rows="8"
              placeholder="Write your blog..."
              value={blog.content}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button className="form-button">
            Publish Blog
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreateBlog;