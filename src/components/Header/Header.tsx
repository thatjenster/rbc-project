import './Header.css'; // Import CSS file for styling

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Canada</li>
          <li className="nav-item">United States</li>
          <li className="nav-item">International</li>
          <li className="nav-item">Caribbean</li>
          <li className="nav-item">About RBC</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
