import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { servicesData } from '../mock';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading">Services & Offres</h1>
            <p className="hero-description">
              Découvrez notre gamme complète de services holistiques centralisés 
              dans KrIsTal Box, votre boutique digitale officielle pour la transformation personnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid section">
        <div className="container">
          <div className="services-intro">
            <div className="kristal-box-highlight">
              <div className="kristal-icon">💎</div>
              <h2>KrIsTal Box</h2>
              <p>Votre Boutique Digitale Officielle</p>
              <p className="kristal-description">
                Tous nos services, formations, études et outils de transformation 
                réunis en un lieu unique et sécurisé.
              </p>
            </div>
          </div>

          <div className="services-list">
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                className={`service-card divine-card halo-effect`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-header">
                  <div className={`service-icon ${service.color}`}>
                    <span>{service.icon}</span>
                  </div>
                  <div className="service-title-section">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
                
                <div className="service-items">
                  <ul className="items-list">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="service-item">
                        <span className="item-bullet">✨</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-actions">
                  <button className="cta-button primary">
                    Découvrir dans KrIsTal Box
                    <ExternalLink size={16} style={{ marginLeft: '0.5rem' }} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="services-cta">
            <div className="cta-card">
              <div className="cta-header">
                <div className="cta-icon">
                  <div className="diamond-icon">💎</div>
                </div>
                <h2>Prêt(e) à transformer votre vie ?</h2>
                <p>
                  Explorez KrIsTal Box et découvrez le service parfait pour votre 
                  voyage de transformation personnelle et professionnelle.
                </p>
              </div>
              
              <div className="cta-benefits">
                <div className="benefit">
                  <span className="benefit-icon">🎯</span>
                  <span>Accompagnement personnalisé</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">🌈</span>
                  <span>Approche holistique unique</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">⚡</span>
                  <span>Résultats durables</span>
                </div>
              </div>

              <div className="cta-actions">
                <button className="cta-button large primary">
                  Accéder à KrIsTal Box
                  <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                </button>
                <a 
                  href="https://sites.google.com/view/quintessencedivines/accueil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button large"
                >
                  Explorer Quintessence DivineS
                  <ExternalLink size={20} style={{ marginLeft: '0.5rem' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-page {
          background: var(--color-black);
          min-height: 100vh;
        }

        .services-hero {
          background: linear-gradient(135deg, #151515 0%, #1a1a2e 100%);
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--color-white);
          opacity: 0.9;
          margin-top: 1.5rem;
          line-height: 1.6;
        }

        .services-intro {
          text-align: center;
          margin-bottom: 4rem;
        }

        .kristal-box-highlight {
          background: var(--gradient-gold);
          border-radius: 2rem;
          padding: 3rem 2rem;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        .kristal-box-highlight::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(5px);
        }

        .kristal-box-highlight > * {
          position: relative;
          z-index: 2;
        }

        .kristal-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .kristal-box-highlight h2 {
          color: var(--color-black);
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .kristal-box-highlight > p {
          color: var(--color-black);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .kristal-description {
          color: var(--color-black);
          opacity: 0.8;
          font-size: 1rem;
          line-height: 1.6;
        }

        .services-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .service-card {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-header {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          align-items: flex-start;
        }

        .service-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .service-icon.violet { background: var(--gradient-divine); color: white; }
        .service-icon.magenta { background: linear-gradient(135deg, var(--color-magenta), var(--color-fuchsia)); color: white; }
        .service-icon.fuchsia { background: linear-gradient(135deg, var(--color-fuchsia), var(--color-magenta)); color: white; }
        .service-icon.gold { background: var(--gradient-gold); color: var(--color-black); }

        .service-title-section {
          flex: 1;
        }

        .service-title {
          color: var(--color-violet);
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .service-description {
          color: var(--color-white);
          opacity: 0.8;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .service-items {
          margin-bottom: 2rem;
        }

        .items-list {
          list-style: none;
          padding: 0;
        }

        .service-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          color: var(--color-white);
          opacity: 0.9;
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .item-bullet {
          color: var(--color-gold);
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .service-actions {
          text-align: center;
        }

        .services-cta {
          margin-top: 4rem;
        }

        .cta-card {
          background: var(--gradient-divine);
          border-radius: 2rem;
          padding: 3rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(5px);
        }

        .cta-card > * {
          position: relative;
          z-index: 2;
        }

        .cta-header {
          margin-bottom: 2rem;
        }

        .cta-icon {
          margin-bottom: 1rem;
        }

        .diamond-icon {
          font-size: 3rem;
        }

        .cta-card h2 {
          color: white;
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .cta-card > .cta-header > p {
          color: white;
          opacity: 0.9;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .cta-benefits {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          font-weight: 500;
        }

        .benefit-icon {
          font-size: 1.2rem;
        }

        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .services-list {
            grid-template-columns: 1fr;
          }

          .service-header {
            flex-direction: column;
            text-align: center;
          }

          .kristal-box-highlight {
            padding: 2rem 1rem;
          }

          .cta-card {
            padding: 2rem;
          }

          .cta-benefits {
            flex-direction: column;
            gap: 1rem;
          }

          .cta-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;