import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        BlogSpace
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/create-blog">Create Blog</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register" className="register-link">
          Register
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;