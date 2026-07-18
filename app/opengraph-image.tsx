import { ImageResponse } from 'next/og';

// Dynamically generated social-share image. Replaces the previously referenced
// but non-existent /og-image.png so link unfurls (LinkedIn, X, Slack, WhatsApp)
// render a branded card instead of a broken image.
export const alt = 'ETC — the institutional platform for energy transactions';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#09090B',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Brand mark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <svg width="70" height="57" viewBox="0 0 200 162" aria-hidden="true">
            <path d="M21 62C27 29 54 10 90 10h91c8 0 14 6 14 14s-6 14-14 14H90c-19 0-34 8-40 24H21Z" fill="#00E676" />
            <rect x="73" y="66" width="111" height="27" rx="14" fill="#00E676" />
            <path d="M21 98h29c6 17 22 26 43 26h88c8 0 14 6 14 14s-6 14-14 14H93c-38 0-66-20-72-54Z" fill="#00E676" />
          </svg>
          <div style={{ fontSize: '44px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-1px' }}>
            ETC
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '76px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.05, letterSpacing: '-2px' }}>
            The institutional platform
          </div>
          <div style={{ fontSize: '76px', fontWeight: 800, color: '#00E676', lineHeight: 1.05, letterSpacing: '-2px' }}>
            for energy transactions
          </div>
        </div>

        {/* Footer strip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '99px', background: '#00E676' }} />
          <div style={{ fontSize: '26px', color: '#8B91A3', letterSpacing: '1px' }}>
            Focused in GB · Active in Europe
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
