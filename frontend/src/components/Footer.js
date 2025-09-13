import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'Facebook', url: '#', icon: '📘' },
    { name: 'Telegram', url: '#', icon: '✈️' },
    { name: 'TikTok', url: '#', icon: '🎵' },
    { name: 'Pinterest', url: '#', icon: '📌' },
    { name: 'Etsy', url: '#', icon: '🛍️' },
  ];

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: "L'Écosystème", href: '/ecosystem' },
    { name: "Maisons d'Édition", href: '/publishing' },
    { name: 'Réseau', href: '/network' },
    { name: 'Services & Offres', href: '/services' },
    { name: 'Tirage de cartes', href: '/oracle' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-section">
            <img 
              src="/assets/logo-divinesco.png" 
              alt="DivineS&CO Logo" 
              className="h-16 mx-auto"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80"><text x="10" y="45" font-family="Poppins,sans-serif" font-size="24" font-weight="700" fill="%237A2BF2">DivineS%26CO</text></svg>';
              }}
            />
            <p className="footer-tagline">
              La Matrice Mère de l'écosystème holistique DivineS
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Navigation</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <a href="mailto:contact@divinesandco.fr">contact@divinesandco.fr</a>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <a href="tel:0769277888">07.69.27.78.88</a>
              </div>
              <div className="contact-item">
                <Globe size={16} />
                <a href="https://www.divinesdeesses.fr" target="_blank" rel="noopener noreferrer">
                  www.divinesdeesses.fr
                </a>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Activité 100% en ligne</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h3 className="footer-title">Réseaux Sociaux</h3>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="footer-signature">
          <img 
            src="/images/signature-electrique-contact.png" 
            alt="Signature Jessica ROSE" 
            className="signature-image"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Legal Section */}
        <div className="footer-legal">
          <div className="legal-info">
            <p>
              <strong>DivineS&CO</strong> • Micro-entreprise (APE 8690F) • 
              SIRET : 989 227 525 00015 • TVA non applicable (Art. 293 B du CGI)
            </p>
            <p>Hébergeur : OVH Cloud • Email : contact@divinesandco.fr</p>
          </div>
          <div className="copyright">
            <p>&copy; 2025 DivineS&CO. Tous droits réservés.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #151515 0%, #1a1a2e 100%);
          border-top: 1px solid rgba(122, 43, 242, 0.2);
          padding: 3rem 0 1rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3.footer-title {
          color: var(--color-violet);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .footer-logo {
          height: 4rem;
          width: auto;
          margin: 0 auto 1rem;
          transition: transform 0.3s ease;
        }
        
        .footer-logo:hover {
          transform: scale(1.05);
        }

        .footer-tagline {
          color: var(--color-mid-grey);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 0.5rem;
        }

        .footer-link {
          color: var(--color-white);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: var(--color-violet);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-white);
          font-size: 0.9rem;
        }

        .contact-item a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: var(--color-violet);
        }

        .social-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(122, 43, 242, 0.1);
          border-radius: 50%;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1.2rem;
        }

        .social-link:hover {
          background: var(--color-violet);
          transform: translateY(-2px);
        }

        .footer-signature {
          text-align: center;
          margin: 2rem 0;
          padding: 2rem 0;
          border-top: 1px solid rgba(122, 43, 242, 0.1);
          border-bottom: 1px solid rgba(122, 43, 242, 0.1);
        }

        .signature-image {
          max-height: 80px;
          width: auto;
          opacity: 0.8;
        }

        .footer-legal {
          text-align: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(122, 43, 242, 0.1);
        }

        .legal-info {
          margin-bottom: 0.5rem;
        }

        .legal-info p {
          color: var(--color-mid-grey);
          font-size: 0.8rem;
          line-height: 1.4;
          margin-bottom: 0.25rem;
        }

        .copyright p {
          color: var(--color-dark-grey);
          font-size: 0.8rem;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;