import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Login submitted for ${formData.email}`);
  };

  return (
    <section className="form-page">
      <form className="form-card" onSubmit={handleSubmit}>
        <p className="form-label">Welcome Back</p>

        <h1>Login to BlogSpace</h1>

        <p className="form-description">
          Enter your account details to continue.
        </p>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="form-button">
          Login
        </button>

        <p className="form-bottom-text">
          Don't have an account?{" "}
          <Link to="/register">Register here</Link>
        </p>
      </form>
    </section>
  );
}

export default Login;