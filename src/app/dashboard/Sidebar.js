'use client';

import Link from 'next/link';

const navItems = [
  'Banner',
  'Unlocked',
  'Podcasts',
  'Challenges',
  'Courses',
  'Suggestions',
  'Videos',
  'Trending',
];

export default function Sidebar() {
  return (
    <aside style={{
      width: '220px',
      background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ef 100%)',
      padding: '2.5rem 1.2rem',
      minHeight: '100vh',
      boxShadow: '2px 0 12px #e0e7ef',
      borderRight: '1px solid #e5e7eb',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      fontFamily: 'Poppins, Inter, sans-serif',
    }}>
      <nav style={{ width: '100%' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
          {navItems.map((item) => (
            <li
              key={item}
              style={{
                marginBottom: '1.1rem',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
                color: '#374151',
                fontWeight: 500,
              }}
              onMouseOver={e => e.currentTarget.style.background = '#e0e7ef'}
              onMouseOut={e => e.currentTarget.style.background = 'transparent'}
            >
              <Link href={`/dashboard/${item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
} 