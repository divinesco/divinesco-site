import React from 'react';
import { ExternalLink, Heart, Sparkles, Target, Compass } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target size={32} />,
      title: 'Alignement',
      description: 'Harmonie entre être intérieur et expression extérieure'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Transmutation',
      description: 'Transformation consciente des énergies et des situations'
    },
    {
      icon: <Heart size={32} />,
      title: 'Cohérence',
      description: 'Unité entre pensées, émotions et actions'
    },
    {
      icon: <Compass size={32} />,
      title: 'Création',
      description: 'Manifestation consciente de sa réalité désirée'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Naissance de la Vision',
      description: 'Création du concept DivineS - Union entre spiritualité et entrepreneuriat'
    },
    {
      year: '2021',
      title: 'Formation de la Matrice',
      description: 'Développement de DivineS&CO comme centre créateur de l\'écosystème'
    },
    {
      year: '2022',
      title: 'Expansion des Pôles',
      description: 'Lancement des premiers pôles : ChromoBio-Institute et CBI Académie'
    },
    {
      year: '2023',
      title: 'Écosystème Complet',
      description: 'Intégration de tous les pôles et lancement de KrIsTal Box'
    },
    {
      year: '2024',
      title: 'Réseau Mondial',
      description: 'Développement du réseau d\'affiliées et partenaires internationaux'
    },
    {
      year: '2025',
      title: 'Futur Hybride',
      description: 'Vision d\'une activité hybridée alliant digital et présentiel'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero section">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-heading">Jessica ROSE</h1>
              <p className="hero-subtitle">Fondatrice de DivineS&CO</p>
              <p className="hero-role">
                Créatrice & Architecte de projets pédagogiques de l'écosystème holistique DivineS
                <br />
                Coach de vie & Praticienne spécialisée en Chromobiothérapie holistique intégrative
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section">
        <div className="container">
          <div className="mission-content">
            <h2 className="section-heading">Mission</h2>
            <div className="mission-text">
              <p className="mission-main">
                Unir beauté, bien-être, développement personnel et professionnel avec les couleurs 
                et les énergies subtiles pour créer une vie pleinement alignée et rayonnante.
              </p>
              <p className="mission-secondary">
                À travers DivineS&CO, je guide les âmes en quête de sens vers leur quintessence, 
                en utilisant la puissance transformatrice des couleurs et une approche holistique 
                unique qui harmonise tous les aspects de l'être.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section bg-filigree">
        <div className="container">
          <h2 className="section-heading">Valeurs Fondamentales</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="value-card divine-card halo-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section section">
        <div className="container">
          <h2 className="section-heading">Évolution de l'Écosystème</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div 
                key={item.year} 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
                <div className="timeline-marker"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section section">
        <div className="container">
          <div className="vision-content">
            <h2 className="section-heading">Vision d'Avenir</h2>
            <div className="vision-text">
              <p>
                Créer un réseau mondial de transformation consciente où chaque être humain 
                peut révéler sa quintessence unique et rayonner son potentiel authentique.
              </p>
              <p>
                DivineS&CO aspire à devenir la référence mondiale en matière d'accompagnement 
                holistique, fusionnant innovation digitale et sagesse ancestrale pour 
                accompagner l'évolution de conscience de l'humanité.
              </p>
            </div>
            
            <div className="vision-cta">
              <h3>L'Aventure continue...</h3>
              <p>Découvrez l'univers complet de Jessica ROSE et plongez dans Quintessence DivineS</p>
              <a 
                href="https://sites.google.com/view/quintessencedivines/accueil"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button large primary"
              >
                Explorer Quintessence DivineS
                <ExternalLink size={20} style={{ marginLeft: '0.5rem' }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Section */}
      <section className="signature-section">
        <div className="container">
          <div className="signature-content">
            <img 
              src="/images/signature-electrique-contact.png" 
              alt="Signature électrique Jessica ROSE" 
              className="signature-image"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <p className="signature-text">
              "Révélez votre quintessence, rayonnez votre authenticité"
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
          background: var(--color-black);
          min-height: 100vh;
        }

        .about-hero {
          background: linear-gradient(135deg, #151515 0%, #1a1a2e 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 20%, rgba(122, 43, 242, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(217, 164, 65, 0.1) 0%, transparent 50%);
          animation: ethereal-float 12s ease-in-out infinite;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--color-gold);
          margin: 1rem 0;
          font-weight: 500;
        }

        .hero-role {
          font-size: 1.1rem;
          color: var(--color-white);
          opacity: 0.9;
          line-height: 1.6;
          margin-top: 2rem;
        }

        .mission-section {
          background: var(--color-black);
        }

        .mission-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .mission-text {
          margin-top: 2rem;
        }

        .mission-main {
          font-size: 1.3rem;
          color: var(--color-white);
          line-height: 1.6;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .mission-secondary {
          font-size: 1.1rem;
          color: var(--color-white);
          opacity: 0.85;
          line-height: 1.7;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .value-card {
          text-align: center;
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

        .value-icon {
          color: var(--color-violet);
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
        }

        .value-title {
          color: var(--color-gold);
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .value-description {
          color: var(--color-white);
          opacity: 0.8;
          line-height: 1.6;
        }

        .timeline-section {
          background: linear-gradient(135deg, #151515 0%, #1a1a2e 100%);
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--gradient-divine);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        .timeline-item.left .timeline-content {
          margin-right: 60%;
          text-align: right;
        }

        .timeline-item.right .timeline-content {
          margin-left: 60%;
          text-align: left;
        }

        .timeline-content {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(122, 43, 242, 0.2);
          border-radius: 1rem;
          padding: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .timeline-year {
          color: var(--color-gold);
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .timeline-title {
          color: var(--color-violet);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .timeline-description {
          color: var(--color-white);
          opacity: 0.8;
          line-height: 1.5;
        }

        .timeline-marker {
          position: absolute;
          left: 50%;
          top: 1.5rem;
          width: 16px;
          height: 16px;
          background: var(--gradient-divine);
          border-radius: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 0 4px var(--color-black);
        }

        .vision-section {
          background: var(--color-black);
        }

        .vision-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .vision-text {
          margin: 2rem 0;
        }

        .vision-text p {
          font-size: 1.1rem;
          color: var(--color-white);
          opacity: 0.9;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .vision-cta {
          background: var(--gradient-divine);
          border-radius: 2rem;
          padding: 3rem 2rem;
          margin-top: 3rem;
          position: relative;
          overflow: hidden;
        }

        .vision-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(5px);
        }

        .vision-cta > * {
          position: relative;
          z-index: 2;
        }

        .vision-cta h3 {
          color: white;
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

        .vision-cta p {
          color: white;
          opacity: 0.9;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .signature-section {
          background: linear-gradient(135deg, #151515 0%, #1a1a2e 100%);
          padding: 3rem 0;
          border-top: 1px solid rgba(122, 43, 242, 0.2);
        }

        .signature-content {
          text-align: center;
        }

        .signature-image {
          max-height: 120px;
          width: auto;
          margin-bottom: 1rem;
          opacity: 0.8;
        }

        .signature-text {
          color: var(--color-gold);
          font-size: 1.2rem;
          font-style: italic;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .values-grid {
            grid-template-columns: 1fr;
          }

          .timeline::before {
            left: 2rem;
          }

          .timeline-item.left .timeline-content,
          .timeline-item.right .timeline-content {
            margin-left: 4rem;
            margin-right: 0;
            text-align: left;
          }

          .timeline-marker {
            left: 2rem;
          }

          .vision-cta {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;