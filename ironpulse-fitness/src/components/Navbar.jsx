import { useState } from 'react';
import './Navbar.css';
import { Dumbbell, Menu, X } from 'lucide-react';

const navLinks = [
  { id: 1, label: 'Home', href: '#home' },
  { id: 2, label: 'Memberships', href: '#memberships' },
  { id: 3, label: 'Classes', href: '#classes' },
  { id: 4, label: 'Trainers', href: '#trainers' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevMenu) => !prevMenu);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="navbar__container container" aria-label="Main navigation">
        <a href="#home" className="navbar__brand">
          <Dumbbell className="navbar__icon" aria-hidden="true" />
          <span className="navbar__brand-text">
            <span className="navbar__brand-iron">Iron</span>
            <span className="navbar__brand-pulse">Pulse</span>
          </span>
        </a>
        <button
          type="button"
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <ul
          className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}
          id="primary-navigation"
        >
          {navLinks.map((link) => {
            return (
              <li className="navbar__item" key={link.id}>
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={closeMenu}
                >
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
