import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: "L'Écosystème", href: '/ecosystem' },
    { name: "Maisons d'Édition", href: '/publishing' },
    { name: 'Réseau', href: '/network' },
    { name: 'Services & Offres', href: '/services' },
    { name: 'Tirage de cartes', href: '/oracle' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="header-sticky">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo-link">
            <img 
              src="/assets/logo-divinesco.png" 
              alt="DivineS&CO Logo" 
              className="h-12 w-auto"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="10" y="35" font-family="Poppins,sans-serif" font-size="20" font-weight="700" fill="%237A2BF2">DivineS%26CO</text></svg>';
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="nav-mobile">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link-mobile ${location.pathname === item.href ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>

      <style jsx>{`
        .header-sticky {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(21, 21, 21, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(122, 43, 242, 0.2);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .logo-link {
          text-decoration: none;
        }

        .header-logo {
          height: 3rem;
          width: auto;
          transition: transform 0.3s ease;
        }

        .header-logo:hover {
          transform: scale(1.05);
        }

        .nav-desktop {
          display: none;
          align-items: center;
          gap: 2rem;
        }

        @media (min-width: 1024px) {
          .nav-desktop {
            display: flex;
          }
        }

        .nav-link {
          color: var(--color-white);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 400;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--color-violet);
        }

        .nav-link.active {
          color: var(--color-violet);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--gradient-divine);
          border-radius: 1px;
        }

        .menu-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: var(--color-white);
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .menu-toggle:hover {
          color: var(--color-violet);
        }

        @media (min-width: 1024px) {
          .menu-toggle {
            display: none;
          }
        }

        .nav-mobile {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem 0;
          border-top: 1px solid rgba(122, 43, 242, 0.2);
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-link-mobile {
          color: var(--color-white);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 400;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
        }

        .nav-link-mobile:hover,
        .nav-link-mobile.active {
          color: var(--color-violet);
          padding-left: 1rem;
        }
      `}</style>
    </header>
  );
};

export default Header;