import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <img src="/logo.png" alt="logo" className="logo" />
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default Navbar;