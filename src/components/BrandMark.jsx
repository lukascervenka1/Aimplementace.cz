import React from 'react';
import './BrandMark.css';

const BrandMark = ({ className = '', showTagline = false }) => {
    return (
        <span className={`brand-mark ${className}`.trim()}>
            <span className="brand-symbol" aria-hidden="true">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-icon">
                    {/* Abstract A with dot = Ai */}
                    <path
                        d="M10 27 L18 9 L26 27"
                        stroke="url(#brandGrad)"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                    <line x1="13" y1="21" x2="23" y2="21" stroke="url(#brandGrad)" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="18" cy="5.5" r="2" fill="#f6bc7c" />
                    <defs>
                        <linearGradient id="brandGrad" x1="10" y1="27" x2="26" y2="9">
                            <stop offset="0%" stopColor="#d9eafa" />
                            <stop offset="100%" stopColor="#f6bc7c" />
                        </linearGradient>
                    </defs>
                </svg>
            </span>
            <span className="brand-wordmark">
                <span className="brand-name">
                    <span className="brand-ai">AI</span>
                    <span className="brand-rest">mplementace</span>
                    <span className="brand-tld">.cz</span>
                </span>
                {showTagline && <span className="brand-tagline">weby & automatizace</span>}
            </span>
        </span>
    );
};

export default BrandMark;
