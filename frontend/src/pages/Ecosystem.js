import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ecosystemData } from '../mock';

const Ecosystem = () => {
  return (
    <div className="ecosystem-page">
      {/* Hero Section */}
      <section className="ecosystem-hero section">
        <div className="globe-background"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading">L'Écosystème DivineS</h1>
            <p className="hero-description">
              Un réseau interconnecté de pôles d'expertise pour votre transformation holistique. 
              Chaque élément s'harmonise dans la matrice créatrice de DivineS&CO.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Grid */}
      <section className="ecosystem-grid section">
        <div className="container">
          <div className="poles-grid">
            {ecosystemData.map((pole, index) => (
              <div 
                key={pole.id} 
                className={`pole-card divine-card halo-effect ${pole.featured ? 'featured' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="pole-header">
                  <div className={`pole-icon ${pole.color}`}>
                    <span>{pole.icon}</span>
                  </div>
                  <span className={`service-tag ${pole.color}`}>
                    {pole.category}
                  </span>
                </div>
                
                <div className="pole-content">
                  <h3 className="pole-title">{pole.name}</h3>
                  <p className="pole-description">{pole.description}</p>
                </div>

                <div className="pole-actions">
                  {pole.featured ? (
                    <button className="cta-button primary">
                      Accéder à KrIsTal Box
                      <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                    </button>
                  ) : (
                    <button className="cta-button">
                      Découvrir
                      <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                    </button>
                  )}
                </div>

                {pole.featured && (
                  <div className="featured-badge">
                    <span>⭐ Boutique Officielle</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="ecosystem-cta">
            <div className="cta-content">
              <h2>Explorez l'écosystème complet</h2>
              <p>Découvrez tous nos pôles et leurs interconnexions sur la plateforme DivineDS</p>
              <a 
                href="https://www.divinesdeesses.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button large primary"
              >
                Voir l'écosystème complet sur DivineDS
                <ExternalLink size={20} style={{ marginLeft: '0.5rem' }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .ecosystem-page {
          background: var(--color-black);
          min-height: 100vh;
        }

        .ecosystem-hero {
          position: relative;
          background: linear-gradient(135deg, #151515 0%, #1a1a2e 100%);
          overflow: hidden;
        }

        .globe-background {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(
            circle at center,
            rgba(122, 43, 242, 0.1) 0%,
            rgba(224, 25, 169, 0.05) 30%,
            transparent 70%
          );
          border-radius: 50%;
          animation: globe-rotate 20s linear infinite;
          opacity: 0.6;
        }

        .globe-background::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 400px;
          height: 400px;
          background: repeating-conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(122, 43, 242, 0.1) 2deg,
            transparent 4deg
          );
          border-radius: 50%;
          animation: globe-rotate 15s linear infinite reverse;
        }

        @keyframes globe-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--color-white);
          opacity: 0.9;
          margin-top: 1.5rem;
          line-height: 1.6;
        }

        .ecosystem-grid {
          background: var(--color-black);
        }

        .poles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .pole-card {
          position: relative;
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        .pole-card.featured {
          border: 2px solid var(--color-gold);
          background: rgba(217, 164, 65, 0.05);
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pole-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .pole-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .pole-icon.violet { background: var(--gradient-divine); }
        .pole-icon.magenta { background: linear-gradient(135deg, var(--color-magenta), var(--color-fuchsia)); }
        .pole-icon.fuchsia { background: linear-gradient(135deg, var(--color-fuchsia), var(--color-magenta)); }
        .pole-icon.gold { background: var(--gradient-gold); }

        .pole-content {
          margin-bottom: 2rem;
        }

        .pole-title {
          color: var(--color-violet);
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .pole-description {
          color: var(--color-white);
          opacity: 0.8;
          line-height: 1.6;
        }

        .pole-actions {
          display: flex;
          justify-content: center;
        }

        .featured-badge {
          position: absolute;
          top: -10px;
          right: -10px;
          background: var(--gradient-gold);
          color: var(--color-black);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          transform: rotate(15deg);
          box-shadow: 0 4px 15px rgba(217, 164, 65, 0.3);
        }

        .ecosystem-cta {
          background: var(--gradient-divine);
          border-radius: 2rem;
          padding: 3rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .ecosystem-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(5px);
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-content h2 {
          color: white;
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .cta-content p {
          color: white;
          opacity: 0.9;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .poles-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .ecosystem-cta {
            padding: 2rem;
          }

          .cta-content h2 {
            font-size: 1.5rem;
          }

          .globe-background {
            width: 600px;
            height: 600px;
          }
        }
      `}</style>
    </div>
  );
};

export default Ecosystem;