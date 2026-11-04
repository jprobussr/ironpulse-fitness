import './Navbar.css';

const navLinks = [
  { id: 1, label: 'Home', href: '#home' },
  { id: 2, label: 'Memberships', href: '#memberships' },
  { id: 3, label: 'Classes', href: '#classes' },
  { id: 4, label: 'Trainers', href: '#trainers' },
];

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__container container" aria-label="Main navigation">
        <a href="#home" className="navbar__brand">
          IRONPULSE
        </a>
        <ul className="navbar__links">
          {navLinks.map((link) => {
            return (
              <li className="navbar__item" key={link.id}>
                <a href={link.href} className="navbar__link">
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <a href="#register" className="navbar__cta">
          Join Now
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
