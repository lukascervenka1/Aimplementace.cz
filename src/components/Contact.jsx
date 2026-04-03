import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
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
        <section id="contact" className="section contact-section">
            <div className="container contact-container glass reveal">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2 className="contact-title">
                            Pojďme se <span className="text-gradient">bavit</span>
                        </h2>
                        <p className="contact-description">
                            Napište mi, co potřebujete — web, automatizaci, nebo kompletní rozjezd.
                            První konzultace je zdarma a bez závazků.
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <span>info@aimplementace.cz</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <span>Praha / Online</span>
                            </div>
                        </div>
                    </div>

                    {status === 'success' ? (
                        <div className="contact-success">
                            <div className="contact-success-icon">✓</div>
                            <h3>Zpráva odeslána!</h3>
                            <p>Ozvu se vám do 24 hodin. Mezitím se klidně podívejte na naše služby.</p>
                            <button className="btn btn-outline" onClick={() => setStatus('idle')}>
                                Odeslat další zprávu
                            </button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                            <label htmlFor="name">Jméno</label>
                            <input
                                id="name" name="name" type="text" required
                                value={formData.name} onChange={handleChange}
                                disabled={status === 'loading'}
                            />

                            <label htmlFor="email">E-mail</label>
                            <input
                                id="email" name="email" type="email" required
                                value={formData.email} onChange={handleChange}
                                disabled={status === 'loading'}
                            />

                            <label htmlFor="company">Firma / Projekt</label>
                            <input
                                id="company" name="company" type="text"
                                value={formData.company} onChange={handleChange}
                                disabled={status === 'loading'}
                            />

                            <label htmlFor="message">Co potřebujete?</label>
                            <textarea
                                id="message" name="message" rows="4" required
                                value={formData.message} onChange={handleChange}
                                disabled={status === 'loading'}
                                placeholder="Např. potřebuji nový web pro svou firmu, chci automatizovat odpovídání na e-maily..."
                            />

                            {status === 'error' && (
                                <p className="contact-error">
                                    Nepodařilo se odeslat zprávu. Zkuste to prosím znovu nebo napište přímo na info@aimplementace.cz
                                </p>
                            )}

                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Odesílám…' : 'Odeslat poptávku'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
