import "./NavBar.css";

export function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#">About</a>
        </li>
        <li className="navbar-item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}