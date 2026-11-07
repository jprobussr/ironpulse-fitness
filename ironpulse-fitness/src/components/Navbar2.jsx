import './Navbar2.css';
import { Dumbbell } from 'lucide-react';

const Navbar2 = () => {
  return (
    <header className="navbar2">
      <nav
        className="navbar2__container container"
        aria-label="Main navigation"
      >
        <a href="#home" className="navbar2__brand">
          <Dumbbell className='navbar2__icon' aria-hidden="true" />
          <span className="navbar2__brand-text">
              <span className="navbar2__brand-iron">Iron</span>
              <span className="navbar2__brand-pulse">Pulse</span>
          </span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar2;
