function Dashboard() {
  const blogs = [
    {
      id: 1,
      title: "React Basics",
      category: "React",
      date: "03 Aug 2026",
    },
    {
      id: 2,
      title: "JavaScript ES6",
      category: "JavaScript",
      date: "02 Aug 2026",
    },
    {
      id: 3,
      title: "CSS Flexbox",
      category: "CSS",
      date: "01 Aug 2026",
    },
  ];

  return (
    <section className="dashboard">
      <h1>My Dashboard</h1>

      <p>Manage all your blog posts.</p>

      <table className="blog-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.title}</td>
              <td>{blog.category}</td>
              <td>{blog.date}</td>

              <td>
                <button>Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Dashboard;