import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shuffle, Copy, Download, History, ExternalLink } from 'lucide-react';
import { oracleColors } from '../mock';

const Oracle = () => {
  const [currentCard, setCurrentCard] = useState(null);
  const [cardHistory, setCardHistory] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  // Load history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('oracle-history');
    if (savedHistory) {
      setCardHistory(JSON.parse(savedHistory).slice(0, 7)); // Keep only last 7
    }
  }, []);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    if (cardHistory.length > 0) {
      localStorage.setItem('oracle-history', JSON.stringify(cardHistory));
    }
  }, [cardHistory]);

  const drawCard = () => {
    if (isDrawing) return;
    
    setIsDrawing(true);
    
    // Animation delay
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * oracleColors.length);
      const selectedColor = oracleColors[randomIndex];
      const randomRitual = selectedColor.rituals[Math.floor(Math.random() * selectedColor.rituals.length)];
      
      const card = {
        ...selectedColor,
        selectedRitual: randomRitual,
        timestamp: new Date().toISOString(),
        id: Date.now()
      };
      
      setCurrentCard(card);
      
      // Add to history (max 7 items)
      setCardHistory(prev => {
        const newHistory = [card, ...prev.filter(c => c.id !== card.id)];
        return newHistory.slice(0, 7);
      });
      
      setIsDrawing(false);
    }, 1500);
  };

  const copyToClipboard = () => {
    if (!currentCard) return;
    
    const text = `🎨 Oracle Couleur DivineS&CO
    
Couleur: ${currentCard.name} (${currentCard.hex})
Signification: ${currentCard.meaning}
Rituel: ${currentCard.selectedRitual}
Affirmation: "${currentCard.affirmation}"

✨ Tiré le ${new Date(currentCard.timestamp).toLocaleDateString('fr-FR')}
🌐 Découvrez plus sur divinesandco.fr`;

    navigator.clipboard.writeText(text).then(() => {
      alert('Tirage copié dans le presse-papiers !');
    });
  };

  const downloadCard = () => {
    if (!currentCard) return;
    
    const text = `Oracle Couleur DivineS&CO
    
Couleur: ${currentCard.name}
Code couleur: ${currentCard.hex}
Signification: ${currentCard.meaning}
Rituel du moment: ${currentCard.selectedRitual}
Affirmation: ${currentCard.affirmation}

Date: ${new Date(currentCard.timestamp).toLocaleDateString('fr-FR')}
Heure: ${new Date(currentCard.timestamp).toLocaleTimeString('fr-FR')}

---
DivineS&CO - La Matrice Mère
www.divinesandco.fr`;

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `oracle-${currentCard.name.toLowerCase()}-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const selectHistoryCard = (card) => {
    setCurrentCard(card);
    setShowHistory(false);
  };

  return (
    <div className="oracle-page">
      {/* Hero Section */}
      <section className="oracle-hero section">
        <div className="mystical-background"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading">Oracle Couleur</h1>
            <p className="hero-description">
              Laisse les couleurs guider ton chemin. Tire une carte pour recevoir 
              ton message du jour et découvrir ton rituel personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* Oracle Interface */}
      <section className="oracle-interface section">
        <div className="container">
          <div className="oracle-content">
            
            {/* Draw Button */}
            <div className="draw-section">
              <button 
                onClick={drawCard}
                disabled={isDrawing}
                className={`draw-button cta-button large primary ${isDrawing ? 'drawing' : ''}`}
              >
                {isDrawing ? (
                  <>
                    <div className="spinner"></div>
                    Connexion aux énergies...
                  </>
                ) : (
                  <>
                    <Shuffle size={24} />
                    Tirer une carte
                  </>
                )}
              </button>
            </div>

            {/* Current Card Display */}
            {currentCard && (
              <div className="card-display">
                <div className="oracle-card" style={{ borderColor: currentCard.hex }}>
                  <div className="card-header">
                    <div 
                      className="color-circle" 
                      style={{ backgroundColor: currentCard.hex }}
                    ></div>
                    <div className="card-info">
                      <h2 className="card-name">{currentCard.name}</h2>
                      <p className="card-hex">{currentCard.hex}</p>
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <div className="card-meaning">
                      <h3>Signification</h3>
                      <p>{currentCard.meaning}</p>
                    </div>
                    
                    <div className="card-ritual">
                      <h3>Rituel Minute</h3>
                      <p>{currentCard.selectedRitual}</p>
                    </div>
                    
                    <div className="card-affirmation">
                      <h3>Affirmation</h3>
                      <p>"{currentCard.affirmation}"</p>
                    </div>
                  </div>

                  <div className="card-actions">
                    <button onClick={drawCard} className="cta-button">
                      <Shuffle size={16} />
                      Retirer
                    </button>
                    <button onClick={copyToClipboard} className="cta-button">
                      <Copy size={16} />
                      Partager
                    </button>
                    <button onClick={downloadCard} className="cta-button">
                      <Download size={16} />
                      Télécharger
                    </button>
                  </div>
                </div>

                {/* CTA to KrIsTal Box */}
                <div className="oracle-cta">
                  <p>Envie d'approfondir votre connexion aux couleurs ?</p>
                  <Link to="/services" className="cta-button primary">
                    Approfondir avec un Passeport dans KrIsTal Box
                    <ExternalLink size={16} style={{ marginLeft: '0.5rem' }} />
                  </Link>
                </div>
              </div>
            )}

            {/* History Section */}
            <div className="history-section">
              <div className="history-header">
                <button 
                  onClick={() => setShowHistory(!showHistory)}
                  className="cta-button"
                >
                  <History size={16} />
                  Historique ({cardHistory.length})
                </button>
              </div>

              {showHistory && cardHistory.length > 0 && (
                <div className="history-grid">
                  {cardHistory.map((card) => (
                    <div 
                      key={card.id}
                      className="history-card"
                      onClick={() => selectHistoryCard(card)}
                      style={{ borderColor: card.hex }}
                    >
                      <div 
                        className="history-color" 
                        style={{ backgroundColor: card.hex }}
                      ></div>
                      <div className="history-info">
                        <span className="history-name">{card.name}</span>
                        <span className="history-date">
                          {new Date(card.timestamp).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .oracle-page {
          background: var(--color-black);
          min-height: 100vh;
        }

        .oracle-hero {
          background: linear-gradient(135deg, #151515 0%, #1a1a2e 100%);
          position: relative;
          overflow: hidden;
        }

        .mystical-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 25% 25%, rgba(122, 43, 242, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(224, 25, 169, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 90, 200, 0.05) 0%, transparent 50%);
          animation: mystical-pulse 8s ease-in-out infinite;
        }

        @keyframes mystical-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        .hero-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .draw-section {
          text-align: center;
          margin-bottom: 3rem;
        }

        .draw-button {
          min-width: 250px;
          transition: all 0.3s ease;
        }

        .draw-button.drawing {
          background: var(--color-dark-grey);
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 0.5rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .card-display {
          max-width: 600px;
          margin: 0 auto;
        }

        .oracle-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 2px solid;
          border-radius: 1.5rem;
          padding: 2rem;
          margin-bottom: 2rem;
          animation: cardAppear 0.6s ease-out;
        }

        @keyframes cardAppear {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .color-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }

        .card-name {
          color: var(--color-white);
          font-size: 1.8rem;
          font-weight: 600;
          margin: 0;
        }

        .card-hex {
          color: var(--color-mid-grey);
          font-family: monospace;
          font-size: 1rem;
          margin: 0;
        }

        .card-content {
          margin-bottom: 2rem;
        }

        .card-content > div {
          margin-bottom: 1.5rem;
        }

        .card-content h3 {
          color: var(--color-violet);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .card-content p {
          color: var(--color-white);
          opacity: 0.9;
          line-height: 1.6;
        }

        .card-affirmation p {
          font-style: italic;
          font-size: 1.1rem;
          color: var(--color-gold);
        }

        .card-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .oracle-cta {
          text-align: center;
          padding: 2rem;
          background: rgba(122, 43, 242, 0.1);
          border-radius: 1rem;
          margin-bottom: 2rem;
        }

        .oracle-cta p {
          color: var(--color-white);
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .history-section {
          margin-top: 3rem;
        }

        .history-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .history-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          animation: historyAppear 0.4s ease-out;
        }

        @keyframes historyAppear {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .history-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .history-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .history-color {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .history-info {
          display: flex;
          flex-direction: column;
        }

        .history-name {
          color: var(--color-white);
          font-weight: 500;
          font-size: 0.9rem;
        }

        .history-date {
          color: var(--color-mid-grey);
          font-size: 0.8rem;
        }

        @media (max-width: 768px) {
          .oracle-card {
            padding: 1.5rem;
          }

          .card-header {
            flex-direction: column;
            text-align: center;
          }

          .card-actions {
            flex-direction: column;
          }

          .history-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Oracle;