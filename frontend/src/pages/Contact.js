import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (no backend for now)
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: '💼', color: '#0077B5' },
    { name: 'Instagram', url: '#', icon: '📷', color: '#E4405F' },
    { name: 'Facebook', url: '#', icon: '📘', color: '#1877F2' },
    { name: 'Telegram', url: '#', icon: '✈️', color: '#0088CC' },
    { name: 'TikTok', url: '#', icon: '🎵', color: '#000000' },
    { name: 'Pinterest', url: '#', icon: '📌', color: '#BD081C' },
    { name: 'Etsy', url: '#', icon: '🛍️', color: '#F16521' },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading">Contact</h1>
            <p className="hero-description">
              Prêt(e) à débuter votre transformation ? Connectons-nous et explorons 
              ensemble comment DivineS&CO peut éclairer votre chemin.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-container divine-card">
                <h2>Envoyez-nous un message</h2>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name">Nom complet</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Votre nom et prénom"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="form-textarea"
                        placeholder="Partagez vos besoins, questions ou simplement dites bonjour..."
                      ></textarea>
                    </div>

                    <button type="submit" className="cta-button primary large">
                      <Send size={20} />
                      Envoyer le message
                    </button>
                  </form>
                ) : (
                  <div className="success-message">
                    <CheckCircle size={48} className="success-icon" />
                    <h3>Message envoyé !</h3>
                    <p>
                      Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <div className="info-container">
                <h2>Coordonnées</h2>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <Mail size={24} />
                    </div>
                    <div className="contact-text">
                      <h3>Email</h3>
                      <a href="mailto:contact@divinesandco.fr">contact@divinesandco.fr</a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <Phone size={24} />
                    </div>
                    <div className="contact-text">
                      <h3>Téléphone</h3>
                      <a href="tel:0769277888">07.69.27.78.88</a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <Globe size={24} />
                    </div>
                    <div className="contact-text">
                      <h3>Site Web</h3>
                      <a href="https://www.divinesdeesses.fr" target="_blank" rel="noopener noreferrer">
                        www.divinesdeesses.fr
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <MapPin size={24} />
                    </div>
                    <div className="contact-text">
                      <h3>Localisation</h3>
                      <span>Activité 100% en ligne</span>
                      <small>(hybridée futurement envisagée)</small>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="social-section">
                  <h3>Suivez-nous</h3>
                  <div className="social-grid">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className="social-link"
                        title={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="social-icon">{social.icon}</span>
                        <span className="social-name">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Section */}
      <section className="contact-signature section">
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
            <div className="signature-text">
              <p className="signature-quote">
                "Chaque message est une invitation à la transformation. 
                J'ai hâte de découvrir votre univers unique."
              </p>
              <p className="signature-name">— Jessica ROSE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Mention */}
      <section className="legal-mention">
        <div className="container">
          <div className="legal-content">
            <p>
              <strong>Mention légale :</strong> DivineS&CO • Micro-entreprise (APE 8690F) • 
              SIRET : 989 227 525 00015 • TVA non applicable (Art. 293 B du CGI) • 
              Hébergeur : OVH Cloud • Email : contact@divinesandco.fr
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          background: var(--color-black);
          min-height: 100vh;
        }

        .contact-hero {
          background: linear-gradient(135deg, #151515 0%, #1a1a2e 100%);
        }

        .hero-content {
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

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .form-container {
          padding: 2.5rem;
        }

        .form-container h2 {
          color: var(--color-violet);
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 2rem;
          text-align: center;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          color: var(--color-white);
          font-weight: 500;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .form-input,
        .form-textarea {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(122, 43, 242, 0.3);
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          color: var(--color-white);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--color-violet);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 2px rgba(122, 43, 242, 0.2);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: var(--color-mid-grey);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .success-message {
          text-align: center;
          padding: 2rem;
        }

        .success-icon {
          color: var(--color-gold);
          margin-bottom: 1rem;
        }

        .success-message h3 {
          color: var(--color-violet);
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .success-message p {
          color: var(--color-white);
          opacity: 0.8;
        }

        .info-container {
          padding: 2.5rem 0;
        }

        .info-container h2 {
          color: var(--color-violet);
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .contact-icon {
          background: var(--gradient-divine);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .contact-text h3 {
          color: var(--color-gold);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .contact-text a {
          color: var(--color-white);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-text a:hover {
          color: var(--color-violet);
        }

        .contact-text span {
          color: var(--color-white);
          opacity: 0.9;
        }

        .contact-text small {
          display: block;
          color: var(--color-mid-grey);
          font-size: 0.85rem;
          margin-top: 0.25rem;
        }

        .social-section h3 {
          color: var(--color-violet);
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 0.75rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(122, 43, 242, 0.2);
          border-radius: 0.5rem;
          color: var(--color-white);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.85rem;
        }

        .social-link:hover {
          background: rgba(122, 43, 242, 0.1);
          border-color: var(--color-violet);
          transform: translateY(-2px);
        }

        .social-icon {
          font-size: 1.1rem;
        }

        .contact-signature {
          background: linear-gradient(135deg, #151515 0%, #1a1a2e 100%);
          border-top: 1px solid rgba(122, 43, 242, 0.2);
        }

        .signature-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          text-align: center;
        }

        .signature-image {
          max-height: 100px;
          width: auto;
          opacity: 0.8;
        }

        .signature-quote {
          color: var(--color-white);
          opacity: 0.9;
          font-size: 1.1rem;
          font-style: italic;
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }

        .signature-name {
          color: var(--color-gold);
          font-weight: 600;
          font-size: 1rem;
        }

        .legal-mention {
          background: var(--color-black);
          border-top: 1px solid rgba(122, 43, 242, 0.1);
          padding: 2rem 0;
        }

        .legal-content {
          text-align: center;
        }

        .legal-content p {
          color: var(--color-mid-grey);
          font-size: 0.85rem;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .form-container,
          .info-container {
            padding: 2rem 1rem;
          }

          .signature-content {
            flex-direction: column;
            gap: 1rem;
          }

          .social-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;