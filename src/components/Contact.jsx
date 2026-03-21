import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const subject = encodeURIComponent(`Poptávka — ${formData.company || formData.name}`);
        const body = encodeURIComponent(
            [
                `Jméno: ${formData.name}`,
                `Email: ${formData.email}`,
                `Firma / Projekt: ${formData.company}`,
                '',
                'Zpráva:',
                formData.message
            ].join('\n')
        );

        window.location.href = `mailto:info@aimplementace.cz?subject=${subject}&body=${body}`;
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
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Jméno</label>
                        <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} />

                        <label htmlFor="email">E-mail</label>
                        <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />

                        <label htmlFor="company">Firma / Projekt</label>
                        <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} />

                        <label htmlFor="message">Co potřebujete?</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Např. potřebuji nový web pro svou firmu, chci automatizovat odpovídání na e-maily..."
                        />

                        <button type="submit" className="btn btn-primary btn-block">Odeslat poptávku</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
