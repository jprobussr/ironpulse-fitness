import { useState } from 'react';
import './Navbar2.css';
import { Dumbbell, Menu, X } from 'lucide-react';

const navLinks = [
  { id: 1, label: 'Home', href: '#home' },
  { id: 2, label: 'Memberships', href: '#memberships' },
  { id: 3, label: 'Classes', href: '#classes' },
  { id: 4, label: 'Trainers', href: '#trainers' },
];

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevMenu) => !prevMenu);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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

        <button
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open Navigation menu'
          }
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          type="button"
          onClick={toggleMenu}
          className="navbar2__toggle"
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <ul
          id="primary-navigation"
          className={`navbar2__links ${isMenuOpen ? 'navbar2__links--open' : ''}`}
        >
          {navLinks.map((link) => {
            return (
              <li className="navbar2__item" key={link.id}>
                <a
                  href={link.href}
                  className="navbar2__link"
                  onClick={closeMenu}
                >
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
