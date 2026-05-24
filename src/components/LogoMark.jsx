import React, { useId } from 'react';

/**
 * Standalone logo mark — just the hexagon SVG, no text, no GSAP.
 * Safe to use multiple times on the same page (unique gradient IDs via useId).
 */
const LogoMark = ({ size = 28, className = '' }) => {
  const uid = useId();
  const gradId = `lmg-${uid}`.replace(/:/g, '');

  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      {/* Hexagon outline */}
      <path
        d="M 20 4 L 34 12 L 34 28 L 20 36 L 6 28 L 6 12 Z"
        stroke={`url(#${gradId})`}
        strokeWidth="1.5"
        fill="none"
      />
      {/* A legs */}
      <path
        d="M 6 28 L 20 4 L 34 28"
        stroke={`url(#${gradId})`}
        strokeWidth="2"
        fill="none"
      />
      {/* Crossbar */}
      <line x1="13" y1="20" x2="27" y2="20" stroke={`url(#${gradId})`} strokeWidth="1.5" />
      {/* Vertical axis */}
      <line x1="20" y1="4" x2="20" y2="36" stroke={`url(#${gradId})`} strokeWidth="1.5" />

      {/* Nodes */}
      <circle cx="20" cy="4"  r="2.5" fill="#06b6d4" />
      <circle cx="6"  cy="28" r="2.5" fill="#8b5cf6" />
      <circle cx="34" cy="28" r="2.5" fill="#8b5cf6" />
      <circle cx="20" cy="36" r="2.5" fill="#06b6d4" />
      <circle cx="13" cy="20" r="2"   fill="#8b5cf6" />
      <circle cx="27" cy="20" r="2"   fill="#8b5cf6" />
      <circle cx="20" cy="20" r="2"   fill="#06b6d4" />
    </svg>
  );
};

export default LogoMark;
