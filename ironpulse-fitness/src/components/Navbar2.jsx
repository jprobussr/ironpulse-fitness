import './Navbar2.css';
import { Dumbbell } from 'lucide-react';

const navLinks = [
  { id: 1, label: 'Home', href: '#home' },
  { id: 2, label: 'Memberships', href: '#memberships' },
  { id: 3, label: 'Classes', href: '#classes' },
  { id: 4, label: 'Trainers', href: '#trainers' },
];

const Navbar2 = () => {
  return (
    <header className="navbar2">
      <nav
        className="navbar2__container container"
        aria-label="Main navigation"
      >
        <a href="#home" className="navbar2__brand">
          <Dumbbell className="navbar2__icon" aria-hidden="true" />
          <span className="navbar2__brand-text">
            <span className="navbar2__brand-iron">Iron</span>
            <span className="navbar2__brand-pulse">Pulse</span>
          </span>
        </a>

        <ul className="navbar2__links">
          {navLinks.map((link) => {
            return (
              <li className="navbar2__item" key={link.id}>
                <a href={link.href} className="navbar2__link">
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <a href="#register" className="navbar2__cta">
          Join Now
        </a>
      </nav>
    </header>
  );
};

export default Navbar2;
