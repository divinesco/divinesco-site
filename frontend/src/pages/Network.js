import React from 'react';
import { ArrowRight, Users, Briefcase, Heart } from 'lucide-react';
import { networkRoles } from '../mock';

const Network = () => {
  return (
    <div className="network-page">
      {/* Hero Section */}
      <section className="network-hero section">
        <div className="constellation-background"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading">Réseau DivineS</h1>
            <p className="hero-description">
              Rejoignez notre communauté de transformation consciente. Ensemble, 
              créons un réseau mondial d'âmes éveillées et d'entrepreneurs holistiques.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliates Section */}
      <section className="affiliates-section section">
        <div className="container">
          <div className="section-header">
            <Users size={40} className="section-icon" />
            <h2 className="section-heading">Affilié·e·s & Ambassadrices</h2>
            <p className="section-description">
              Devenez acteur de la transformation en rejoignant nos rangs d'experts passionnés
            </p>
          </div>

          <div className="roles-grid">
            {networkRoles.affiliates.map((role, index) => (
              <div 
                key={role.id} 
                className="role-card divine-card halo-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="role-header">
                  <div className={`badge ${role.badge.toLowerCase()}`}>
                    {role.badge}
                  </div>
                </div>
                
                <div className="role-content">
                  <h3 className="role-title">{role.title}</h3>
                  <p className="role-description">{role.description}</p>
                  <div className="role-requirements">
                    <strong>Prérequis :</strong> {role.requirements}
                  </div>
                </div>

                <div className="role-actions">
                  <button className="cta-button primary">
                    Postuler
                    <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section section bg-filigree">
        <div className="container">
          <div className="section-header">
            <Briefcase size={40} className="section-icon" />
            <h2 className="section-heading">Partenaires</h2>
            <p className="section-description">
              Développons ensemble des synergies créatives et innovantes
            </p>
          </div>

          <div className="partners-grid">
            {networkRoles.partners.map((partner, index) => (
              <div 
                key={partner.id} 
                className="partner-card divine-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="partner-header">
                  <div className="partner-icon">
                    {partner.id === 'pedagogiques' && <Heart size={32} />}
                    {partner.id === 'operationnels' && <Briefcase size={32} />}
                    {partner.id === 'prestataires' && <Users size={32} />}
                  </div>
                  <h3 className="partner-category">{partner.category}</h3>
                </div>
                
                <div className="partner-content">
                  <p className="partner-description">{partner.description}</p>
                  
                  <div className="partner-types">
                    {partner.types.map((type, idx) => (
                      <span key={idx} className="service-tag violet">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="partner-actions">
                  <button className="cta-button">
                    Collaborer
                    <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="network-cta section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-header">
              <h2>Prêt(e) à rejoindre la famille DivineS ?</h2>
              <p>
                Que vous soyez thérapeute, coach, formateur, entrepreneur ou créatif, 
                il y a une place pour vous dans notre écosystème holistique.
              </p>
            </div>
            
            <div className="cta-benefits">
              <div className="benefit-item">
                <span className="benefit-icon">🌟</span>
                <span>Développement personnel continu</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🤝</span>
                <span>Réseau bienveillant et inspirant</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">💎</span>
                <span>Opportunités de croissance</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✨</span>
                <span>Impact positif sur le monde</span>
              </div>
            </div>

            <div className="cta-actions">
              <a href="mailto:contact@divinesandco.fr" className="cta-button large primary">
                Rejoindre le réseau
                <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
              </a>
              <a href="/contact" className="cta-button large">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .network-page {
          background: var(--color-black);
          min-height: 100vh;
        }

        .network-hero {
          background: linear-gradient(135deg, #151515 0%, #0f0f23 100%);
          position: relative;
          overflow: hidden;
        }

        .constellation-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(2px 2px at 20% 30%, rgba(122, 43, 242, 0.5), transparent),
            radial-gradient(2px 2px at 40% 70%, rgba(224, 25, 169, 0.5), transparent),
            radial-gradient(1px 1px at 90% 40%, rgba(255, 90, 200, 0.5), transparent),
            radial-gradient(1px 1px at 10% 90%, rgba(217, 164, 65, 0.5), transparent);
          background-size: 200px 200px, 300px 300px, 150px 150px, 250px 250px;
          animation: constellation-twinkle 8s ease-in-out infinite;
        }

        .constellation-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 100px,
            rgba(122, 43, 242, 0.02) 102px
          );
        }

        @keyframes constellation-twinkle {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
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

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-icon {
          color: var(--color-violet);
          margin-bottom: 1rem;
        }

        .section-description {
          color: var(--color-white);
          opacity: 0.8;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .roles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .role-card {
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

        .role-header {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .badge {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .badge.élite { background: var(--gradient-gold); color: var(--color-black); }
        .badge.influence { background: var(--gradient-divine); color: white; }
        .badge.expertise { background: linear-gradient(135deg, var(--color-magenta), var(--color-fuchsia)); color: white; }
        .badge.créativité { background: linear-gradient(135deg, var(--color-fuchsia), var(--color-magenta)); color: white; }
        .badge.stratégie { background: var(--gradient-divine); color: white; }
        .badge.mystique { background: var(--gradient-gold); color: var(--color-black); }

        .role-content {
          text-align: center;
          margin-bottom: 2rem;
        }

        .role-title {
          color: var(--color-violet);
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .role-description {
          color: var(--color-white);
          opacity: 0.8;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .role-requirements {
          color: var(--color-gold);
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .role-actions {
          text-align: center;
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .partner-card {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        .partner-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .partner-icon {
          width: 60px;
          height: 60px;
          background: var(--gradient-divine);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .partner-category {
          color: var(--color-violet);
          font-size: 1.3rem;
          font-weight: 600;
        }

        .partner-content {
          margin-bottom: 2rem;
        }

        .partner-description {
          color: var(--color-white);
          opacity: 0.8;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .partner-types {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .partner-actions {
          text-align: center;
        }

        .network-cta {
          background: var(--gradient-divine);
          position: relative;
          overflow: hidden;
        }

        .network-cta::before {
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
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-header h2 {
          color: white;
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .cta-header p {
          color: white;
          opacity: 0.9;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .cta-benefits {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          font-weight: 500;
          justify-content: center;
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
          .roles-grid,
          .partners-grid {
            grid-template-columns: 1fr;
          }

          .cta-benefits {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .cta-actions {
            flex-direction: column;
          }

          .partner-header {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Network;