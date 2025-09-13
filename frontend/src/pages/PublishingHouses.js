import React from 'react';
import { ArrowRight, BookOpen, Palette } from 'lucide-react';
import { publishingHouses } from '../mock';

const PublishingHouses = () => {
  return (
    <div className="publishing-page">
      {/* Hero Section */}
      <section className="publishing-hero section">
        <div className="parchment-background"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading">Maisons d'Édition</h1>
            <p className="hero-description">
              Nos publications holistiques et créatives pour nourrir votre âme et 
              éveiller votre conscience. Chaque livre, guide ou support est une porte 
              vers votre transformation intérieure.
            </p>
          </div>
        </div>
      </section>

      {/* Publishing Houses Grid */}
      <section className="publishing-grid section">
        <div className="container">
          <div className="houses-grid">
            {publishingHouses.map((house, index) => (
              <div 
                key={house.id} 
                className={`house-card divine-card halo-effect ${house.id}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="house-header">
                  <div className={`house-icon ${house.color}`}>
                    {house.id === 'eclairames' ? <BookOpen size={32} /> : <Palette size={32} />}
                  </div>
                  <div className="house-glow"></div>
                </div>
                
                <div className="house-content">
                  <h2 className="house-title">{house.name}</h2>
                  <p className="house-description">{house.description}</p>
                  
                  <div className="specialties">
                    <h3>Spécialités :</h3>
                    <ul className="specialty-list">
                      {house.specialties.map((specialty, idx) => (
                        <li key={idx} className="specialty-item">
                          <span className={`service-tag ${house.color}`}>
                            {specialty}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="house-actions">
                  <button className="cta-button primary">
                    {house.id === 'eclairames' ? 'Explorer' : 'Découvrir'}
                    <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="publishing-info">
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">
                  <BookOpen size={32} />
                </div>
                <h3>Éclair'Âmes Édition</h3>
                <p>
                  Notre maison phare dédiée aux ouvrages de développement personnel, 
                  spiritualité et bien-être holistique. Chaque publication illumine 
                  le chemin de la conscience et de l'éveil.
                </p>
                <div className="info-features">
                  <span>📖 E-books interactifs</span>
                  <span>📚 Guides pratiques</span>
                  <span>✨ Contenus transformateurs</span>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <Palette size={32} />
                </div>
                <h3>DivineS Color Édition</h3>
                <p>
                  Spécialisée dans la chromobiothérapie et l'art-thérapie, cette maison 
                  propose des supports créatifs uniques pour explorer votre univers 
                  chromatique et libérer votre potentiel artistique.
                </p>
                <div className="info-features">
                  <span>🎨 Flipbooks couleur</span>
                  <span>📓 Journaux créatifs</span>
                  <span>🌈 Outils chromothérapie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .publishing-page {
          background: var(--color-black);
          min-height: 100vh;
        }

        .publishing-hero {
          background: linear-gradient(135deg, #151515 0%, #2c1810 100%);
          position: relative;
          overflow: hidden;
        }

        .parchment-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(ellipse at 30% 20%, rgba(217, 164, 65, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(255, 90, 200, 0.05) 0%, transparent 50%);
          animation: parchment-glow 10s ease-in-out infinite;
        }

        .parchment-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 100px,
            rgba(217, 164, 65, 0.02) 102px
          );
        }

        @keyframes parchment-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .hero-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--color-white);
          opacity: 0.9;
          margin-top: 1.5rem;
          line-height: 1.6;
        }

        .publishing-grid {
          background: var(--color-black);
        }

        .houses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .house-card {
          position: relative;
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(40px);
          min-height: 500px;
        }

        .house-card.eclairames {
          background: linear-gradient(135deg, rgba(217, 164, 65, 0.1) 0%, rgba(217, 164, 65, 0.05) 100%);
          border-color: var(--color-gold);
        }

        .house-card.coloredition {
          background: linear-gradient(135deg, rgba(255, 90, 200, 0.1) 0%, rgba(255, 90, 200, 0.05) 100%);
          border-color: var(--color-fuchsia);
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .house-header {
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
        }

        .house-icon {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          position: relative;
          z-index: 2;
        }

        .house-icon.gold {
          background: var(--gradient-gold);
          color: var(--color-black);
        }

        .house-icon.fuchsia {
          background: linear-gradient(135deg, var(--color-fuchsia), var(--color-magenta));
          color: white;
        }

        .house-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          background: inherit;
          border-radius: 50%;
          opacity: 0.3;
          animation: halo-pulse 3s ease-in-out infinite;
        }

        .house-title {
          color: var(--color-white);
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-align: center;
        }

        .house-description {
          color: var(--color-white);
          opacity: 0.8;
          line-height: 1.6;
          margin-bottom: 2rem;
          text-align: center;
        }

        .specialties {
          margin-bottom: 2rem;
        }

        .specialties h3 {
          color: var(--color-violet);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .specialty-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .specialty-item {
          margin: 0;
        }

        .house-actions {
          text-align: center;
        }

        .publishing-info {
          margin-top: 4rem;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(122, 43, 242, 0.2);
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
        }

        .info-icon {
          width: 80px;
          height: 80px;
          background: var(--gradient-divine);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
        }

        .info-card h3 {
          color: var(--color-violet);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .info-card p {
          color: var(--color-white);
          opacity: 0.8;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .info-features {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
        }

        .info-features span {
          background: rgba(122, 43, 242, 0.1);
          color: var(--color-white);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .houses-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .house-card {
            min-height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default PublishingHouses;