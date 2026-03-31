import { useState, useEffect } from 'react';

export default function Theme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'relative',
        width: '80px',
        height: '40px',
        backgroundColor: isDark ? '#1e293b' : '#dbeafe',
        borderRadius: '50px',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: isDark 
          ? '0 4px 14px 0 rgba(0, 0, 0, 0.4)' 
          : '0 4px 14px 0 rgba(59, 130, 246, 0.3)',
        overflow: 'hidden'
      }}
      aria-label="Toggle theme"
    >
      {/* Background Sky */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isDark
            ? 'linear-gradient(to bottom, #0f172a, #1e293b)'
            : 'linear-gradient(to bottom, #60a5fa, #93c5fd)',
          transition: 'all 0.5s ease'
        }}
      />

      {/* Stars (visible in dark mode) */}
      {isDark && (
        <>
          <div
            style={{
              position: 'absolute',
              top: '8px',
              left: '15px',
              width: '2px',
              height: '2px',
              backgroundColor: 'white',
              borderRadius: '50%',
              boxShadow: '0 0 4px white',
              animation: 'twinkle 2s infinite'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '25px',
              width: '1.5px',
              height: '1.5px',
              backgroundColor: 'white',
              borderRadius: '50%',
              boxShadow: '0 0 3px white',
              animation: 'twinkle 3s infinite 0.5s'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '18px',
              width: '1px',
              height: '1px',
              backgroundColor: 'white',
              borderRadius: '50%',
              boxShadow: '0 0 2px white',
              animation: 'twinkle 2.5s infinite 1s'
            }}
          />
        </>
      )}

      {/* Clouds (visible in light mode) */}
      {!isDark && (
        <>
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              width: '12px',
              height: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '10px',
              transition: 'all 0.5s ease'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '22px',
              left: '20px',
              width: '10px',
              height: '5px',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '10px',
              transition: 'all 0.5s ease'
            }}
          />
        </>
      )}

      {/* Toggle Circle (Sun/Moon) */}
      <div
        style={{
          position: 'absolute',
          top: '4px',
          left: isDark ? '44px' : '4px',
          width: '32px',
          height: '32px',
          backgroundColor: isDark ? '#f1f5f9' : '#fbbf24',
          borderRadius: '50%',
          transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          boxShadow: isDark
            ? '0 0 10px rgba(241, 245, 249, 0.5), inset -3px -3px 6px rgba(0, 0, 0, 0.2)'
            : '0 0 20px rgba(251, 191, 36, 0.6), inset -2px -2px 4px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Moon Craters (visible in dark mode) */}
        {isDark && (
          <>
            <div
              style={{
                position: 'absolute',
                top: '8px',
                left: '10px',
                width: '4px',
                height: '4px',
                backgroundColor: '#cbd5e1',
                borderRadius: '50%',
                boxShadow: 'inset 1px 1px 2px rgba(0, 0, 0, 0.3)'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '18px',
                width: '3px',
                height: '3px',
                backgroundColor: '#cbd5e1',
                borderRadius: '50%',
                boxShadow: 'inset 1px 1px 2px rgba(0, 0, 0, 0.3)'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '8px',
                width: '5px',
                height: '5px',
                backgroundColor: '#cbd5e1',
                borderRadius: '50%',
                boxShadow: 'inset 1px 1px 2px rgba(0, 0, 0, 0.3)'
              }}
            />
          </>
        )}

        {/* Sun Rays (visible in light mode) */}
        {!isDark && (
          <>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
              <div
                key={angle}
                style={{
                  position: 'absolute',
                  width: '2px',
                  height: '6px',
                  backgroundColor: '#fbbf24',
                  borderRadius: '2px',
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-14px)`,
                  opacity: 0.8,
                  animation: `sunRay 2s infinite ${index * 0.1}s`
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Inline Keyframe Animations */}
      <style>
        {`
          @keyframes twinkle {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.3;
              transform: scale(0.8);
            }
          }

          @keyframes sunRay {
            0%, 100% {
              opacity: 0.8;
              transform: translate(-50%, -50%) rotate(var(--rotation)) translateY(-14px) scale(1);
            }
            50% {
              opacity: 1;
              transform: translate(-50%, -50%) rotate(var(--rotation)) translateY(-16px) scale(1.1);
            }
          }
        `}
      </style>
    </button>
  );
}