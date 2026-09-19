import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPosition, setFollowerPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let animId;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    // Hover detection on interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('glass-card') ||
        target.classList.contains('btn') ||
        target.classList.contains('action-icon-btn') ||
        target.classList.contains('nav-link')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    // Smooth Lerp loop for follower ring
    let currentX = -100;
    let currentY = -100;

    const loop = () => {
      currentX += (position.x - currentX) * 0.18;
      currentY += (position.y - currentY) * 0.18;
      setFollowerPosition({ x: currentX, y: currentY });
      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, [position.x, position.y]);

  return (
    <>
      {/* Small Dot Cursor */}
      <div 
        className={`cursor-dot ${isClicked ? 'clicked' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />

      {/* Outer Follower Ring */}
      <div 
        className={`cursor-follower ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
        style={{ left: `${followerPosition.x}px`, top: `${followerPosition.y}px` }}
      />

      <style>{`
        .cursor-dot {
          position: fixed;
          width: 8px;
          height: 8px;
          background-color: var(--accent-primary);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: transform 0.1s ease;
          box-shadow: 0 0 10px var(--accent-primary);
        }

        .cursor-dot.clicked {
          transform: translate(-50%, -50%) scale(1.8);
        }

        .cursor-follower {
          position: fixed;
          width: 36px;
          height: 36px;
          border: 1.5px solid var(--accent-primary);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9998;
          transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), 
                      height 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), 
                      background-color 0.3s ease,
                      border-color 0.3s ease;
          background: rgba(99, 102, 241, 0.05);
        }

        .cursor-follower.hovered {
          width: 54px;
          height: 54px;
          background: rgba(99, 102, 241, 0.15);
          border-color: #ec4899;
          box-shadow: 0 0 20px rgba(236, 72, 153, 0.4);
        }

        .cursor-follower.clicked {
          transform: translate(-50%, -50%) scale(0.85);
        }

        @media (max-width: 768px) {
          .cursor-dot, .cursor-follower {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
