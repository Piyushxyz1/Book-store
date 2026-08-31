import Navbar from '../components/Navbar';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome({}) {


  return (
    <div>

    
      <main
        style={{
          minHeight: 'calc(100vh - 72px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2rem',
          background: '#f5f7ff'
        }}
      >

        <div style={{ maxWidth: '650px' }}>

          <h1
            style={{
              fontSize: '4rem',
              color: '#1a1a2e',
              marginBottom: '1rem'
            }}
          >
            Welcome to ShopVibe
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              color: '#666',
              lineHeight: '1.7',
              marginBottom: '2rem'
            }}
          >
            Your simple and convenient shopping experience starts here.
            Sign in to explore our products and manage your cart.
          </p>

          <button
            onClick={() => setIsLoginOpen(true)}
            style={{
              background: '#4a6cf7',
              color: '#fff',
              border: 'none',
              padding: '0.9rem 2.2rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Get Started
          </button>

        </div>

      </main>

    </div>
  );
}

export default Welcome;