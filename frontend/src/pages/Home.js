import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="brand-display">
                DivineS&CO
              </h1>
              <p className="hero-subtitle">— La Matrice Mère —</p>
              <p className="hero-baseline">
                Active ton pouvoir créateur, explore ton univers, révèle ta quintessence.
              </p>
              
              {/* Three Doors */}
              <div className="divine-doors">
                <Link to="/ecosystem" className="divine-door halo-effect">
                  <div className="door-icon">
                    <Sparkles size={24} />
                  </div>
                  <span className="door-title">Écosystème</span>
                  <span className="door-description">Découvre nos pôles d'expertise</span>
                </Link>
                
                <Link to="/publishing" className="divine-door halo-effect">
                  <div className="door-icon">
                    <Heart size={24} />
                  </div>
                  <span className="door-title">Maisons d'Édition</span>
                  <span className="door-description">Explore nos publications</span>
                </Link>
                
                <Link to="/network" className="divine-door halo-effect">
                  <div className="door-icon">
                    <Zap size={24} />
                  </div>
                  <span className="door-title">Réseau</span>
                  <span className="door-description">Rejoins notre communauté</span>
                </Link>
              </div>

              <div className="hero-actions">
                <Link to="/oracle" className="cta-button primary large">
                  Tirage Oracle Couleur
                  <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                </Link>
                <Link to="/about" className="cta-button large">
                  Découvrir Jessica ROSE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Matrix Section */}
      <section className="matrix-section section">
        <div className="container">
          <div className="matrix-content">
            <h2 className="section-heading">Pourquoi la Matrice ?</h2>
            <div className="matrix-explanation">
              <div className="matrix-item">
                <h3>🌟 Rôle</h3>
                <p>
                  DivineS&CO incarne le cœur créateur de l'écosystème holistique DivineS. 
                  Elle centralise, organise et anime tous les pôles de transformation.
                </p>
              </div>
              <div className="matrix-item">
                <h3>🎯 Mission</h3>
                <p>
                  Unir beauté, bien-être, développement personnel et professionnel 
                  à travers les couleurs et les énergies subtiles pour une vie alignée.
                </p>
              </div>
              <div className="matrix-item">
                <h3>🔮 Vision</h3>
                <p>
                  Créer un réseau mondial de transformation consciente où chaque être 
                  révèle sa quintessence et rayonne son potentiel unique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="quick-access section bg-filigree">
        <div className="container">
          <h2 className="section-heading">Accès Rapide</h2>
          <div className="quick-grid">
            <Link to="/services" className="quick-card divine-card">
              <div className="quick-icon">💎</div>
              <h3>Services & Offres</h3>
              <p>Passeports, études, coaching, formations...</p>
              <span className="service-tag gold">KrIsTal Box</span>
            </Link>
            
            <Link to="/oracle" className="quick-card divine-card">
              <div className="quick-icon">🎲</div>
              <h3>Oracle Couleur</h3>
              <p>Tirage de cartes interactif et guidage quotidien</p>
              <span className="service-tag fuchsia">Gratuit</span>
            </Link>
            
            <a href="https://sites.google.com/view/quintessencedivines/accueil" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="quick-card divine-card">
              <div className="quick-icon">✨</div>
              <h3>Quintessence DivineS</h3>
              <p>Plateforme complète de transformation</p>
              <span className="service-tag violet">Explorer</span>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-page {
          background: var(--color-black);
        }

        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 30%, rgba(122, 43, 242, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 80% 70%, rgba(224, 25, 169, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 50% 50%, rgba(217, 164, 65, 0.1) 0%, transparent 60%);
          animation: ethereal-float 12s ease-in-out infinite;
        }

        @keyframes ethereal-float {
          0%, 100% { transform: rotate(0deg) scale(1); }
          33% { transform: rotate(1deg) scale(1.02); }
          66% { transform: rotate(-1deg) scale(0.98); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--color-gold);
          margin: 1rem 0;
          font-weight: 400;
        }

        .hero-baseline {
          font-size: 1.2rem;
          color: var(--color-white);
          margin: 2rem 0;
          opacity: 0.9;
          font-style: italic;
        }

        .divine-doors {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .divine-door {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(122, 43, 242, 0.3);
          border-radius: 1rem;
          text-decoration: none;
          color: var(--color-white);
          transition: all 0.3s ease;
          position: relative;
        }

        .divine-door:hover {
          transform: translateY(-5px);
          background: rgba(122, 43, 242, 0.1);
          border-color: var(--color-violet);
        }

        .door-icon {
          background: var(--gradient-divine);
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          color: white;
        }

        .door-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--color-violet);
        }

        .door-description {
          font-size: 0.9rem;
          opacity: 0.8;
          text-align: center;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 3rem;
          flex-wrap: wrap;
        }

        .matrix-section {
          background: linear-gradient(135deg, #151515 0%, #1a1a2e 100%);
        }

        .matrix-explanation {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .matrix-item {
          background: rgba(122, 43, 242, 0.05);
          border: 1px solid rgba(122, 43, 242, 0.2);
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
        }

        .matrix-item h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: var(--color-violet);
        }

        .matrix-item p {
          color: var(--color-white);
          opacity: 0.9;
          line-height: 1.6;
        }

        .quick-access {
          background: var(--color-black);
        }

        .quick-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .quick-card {
          text-decoration: none;
          color: inherit;
          text-align: center;
          position: relative;
        }

        .quick-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .quick-card h3 {
          color: var(--color-violet);
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .quick-card p {
          color: var(--color-white);
          opacity: 0.8;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .divine-doors {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .matrix-explanation {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;