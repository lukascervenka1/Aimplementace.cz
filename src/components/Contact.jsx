import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact">
      <div className="section-inner">
        <div className="contact-card reveal">
          <div className="contact-grid">

            {/* Info column */}
            <div className="contact-info">
              <div className="section-label" style={{ marginBottom: '24px' }}>Kontakt</div>
              <h2 className="contact-heading">
                Pojďme se<br /><span className="contact-heading-accent">bavit</span>
              </h2>
              <p className="contact-description">
                Napište mi, co potřebujete: web, AI automatizaci nebo kompletní rozjezd firmy.
                První konzultace je zdarma a bez závazků.
              </p>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <span className="contact-detail-label">E-MAIL</span>
                  <a href="mailto:info@aimplementace.cz" className="contact-detail-value">
                    info@aimplementace.cz
                  </a>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-detail-label">LOKALITA</span>
                  <span className="contact-detail-value">Praha / Online celá ČR</span>
                </div>
              </div>
            </div>

            {/* Form column */}
            <div className="contact-form-col">
              {status === 'success' ? (
                <div className="contact-success">
                  <div className="contact-success-icon">✓</div>
                  <h3>Zpráva odeslána!</h3>
                  <p>Ozvu se vám do 24 hodin. Mezitím se klidně podívejte na naše služby.</p>
                  <button className="contact-btn-outline" onClick={() => setStatus('idle')}>
                    Odeslat další zprávu
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-field">
                    <label htmlFor="name" className="form-label">JMÉNO</label>
                    <input
                      id="name" name="name" type="text" required
                      className="form-input"
                      value={formData.name} onChange={handleChange}
                      disabled={status === 'loading'}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email" className="form-label">E-MAIL</label>
                    <input
                      id="email" name="email" type="email" required
                      className="form-input"
                      value={formData.email} onChange={handleChange}
                      disabled={status === 'loading'}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="company" className="form-label">FIRMA / PROJEKT</label>
                    <input
                      id="company" name="company" type="text"
                      className="form-input"
                      value={formData.company} onChange={handleChange}
                      disabled={status === 'loading'}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="message" className="form-label">CO POTŘEBUJETE?</label>
                    <textarea
                      id="message" name="message" rows="4" required
                      className="form-input form-textarea"
                      value={formData.message} onChange={handleChange}
                      disabled={status === 'loading'}
                      placeholder="Např. potřebuji nový web pro svou firmu, chci automatizovat odpovídání na e-maily…"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="contact-error">
                      Nepodařilo se odeslat zprávu. Zkuste to prosím znovu nebo napište přímo na{' '}
                      <a href="mailto:info@aimplementace.cz">info@aimplementace.cz</a>
                    </p>
                  )}

                  <button
                    type="submit"
                    className="contact-btn-primary"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Odesílám…' : 'Odeslat poptávku'}
                    {status !== 'loading' && (
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
