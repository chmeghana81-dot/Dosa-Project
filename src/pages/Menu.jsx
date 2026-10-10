import React, { useState, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react'; // Import arrows

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref} style={{backgroundColor: 'var(--color-charred-clove)', overflow: 'hidden', boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)'}}>
      {props.image ? (
        <img src={props.image} alt={`Menu Page`} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
      ) : (
        <div style={{width: '100%', height: '100%', backgroundColor: 'var(--color-charred-clove)'}}></div>
      )}
    </div>
  );
});

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const flipBookRef = useRef(null); // Reference to programmatically control the book

  const handlePageChange = (e) => {
    setCurrentPage(e.data);
    // If the book is on page 0 (cover), it is closed. Otherwise, it is open.
    if (e.data === 0) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const closeMenu = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flip(0);
    }
  };

  const flipNext = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const flipPrev = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  return (
    <>
      <div className="watermark-bg"></div>
      
      <section className="poster-section" style={{paddingTop: '100px', paddingBottom: '20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div className="text-eyebrow" style={{marginBottom: '5px'}}>Explore our offerings</div>
        <h1 className="text-display" style={{marginBottom: '30px', paddingTop: '5px', lineHeight: '1', fontSize: 'clamp(40px, 6vw, 70px)'}}>
          THE MENU
        </h1>

        {/* Relative Wrapper for absolute positioning of book */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', height: '540px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          {/* Menu Book Container */}
          <motion.div 
            animate={{ 
              x: isOpen ? 0 : -320, // Pushed further left from center to ensure it doesn't overlap the text
              y: isOpen ? 0 : -20, 
              scale: isOpen ? 1 : 0.88 
            }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
            style={{ 
              position: 'absolute',
              left: '50%',
              marginLeft: '-400px', // Center the 800px container
              width: '800px',
              height: '540px', 
              filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.8))',
              zIndex: 10,
              cursor: isOpen ? 'default' : 'pointer'
            }}
          >
            {/* Elegant Floating "Click to Open" Badge */}
            <AnimatePresence>
              {!isOpen && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, x: '-50%' }}
                  animate={{ opacity: 1, scale: 1, x: '-50%' }}
                  exit={{ opacity: 0, scale: 0.8, x: '-50%' }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    left: '75%', // Centered horizontally on the right half cover
                    bottom: '30px', 
                    zIndex: 20,
                    pointerEvents: 'none', 
                    backgroundColor: 'var(--color-tiger-gold)',
                    color: '#0A2911',
                    padding: '6px 12px', 
                    borderRadius: '30px',
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: '10px', 
                    fontWeight: '800',
                    letterSpacing: '0.1em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.4)' 
                  }}
                >
                  <motion.div 
                    animate={{ x: [0, 4, 0] }} 
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.div>
                  CLICK TO OPEN
                </motion.div>
              )}
            </AnimatePresence>

            {/* Close Menu Button (Appears only when open) */}
            <AnimatePresence>
              {isOpen && (
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onClick={closeMenu}
                  style={{
                    position: 'absolute',
                    top: '-50px', 
                    right: '0',
                    zIndex: 30,
                    backgroundColor: 'rgba(255, 193, 7, 0.1)',
                    border: '1px solid rgba(255, 193, 7, 0.3)',
                    color: 'var(--color-tiger-gold)',
                    padding: '6px 14px', // Reduced padding
                    borderRadius: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px', // Reduced gap
                    cursor: 'pointer',
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: '10px', // Reduced font size
                    fontWeight: '800',
                    letterSpacing: '0.15em',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.3)', // Softer shadow for smaller button
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-tiger-gold)'; e.currentTarget.style.color = '#000'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 193, 7, 0.1)'; e.currentTarget.style.color = 'var(--color-tiger-gold)'; }}
                >
                  <X size={14} /> {/* Smaller icon */}
                  CLOSE MENU
                </motion.button>
              )}
            </AnimatePresence>

            {/* Next Page Arrow */}
            <AnimatePresence>
              {isOpen && currentPage < 4 && (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  onClick={flipNext}
                  style={{
                    position: 'absolute',
                    right: '-70px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 30,
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'rgba(255,255,255,0.3)',
                    cursor: 'pointer',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-tiger-gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
                >
                  <ChevronRight size={50} strokeWidth={1.5} />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Prev Page Arrow */}
            <AnimatePresence>
              {isOpen && (
                <motion.button
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  onClick={flipPrev}
                  style={{
                    position: 'absolute',
                    left: '-70px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 30,
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'rgba(255,255,255,0.3)', 
                    cursor: 'pointer',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-tiger-gold)'} 
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
                >
                  <ChevronLeft size={50} strokeWidth={1.5} />
                </motion.button>
              )}
            </AnimatePresence>

            <HTMLFlipBook 
              ref={flipBookRef}
              width={400} 
              height={540} 
              size="stretch"
              minWidth={300}
              maxWidth={400}
              minHeight={400}
              maxHeight={540}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              className="menu-flipbook"
              onFlip={handlePageChange}
            >
              <Page image="/Menu/1.png" />
              <Page image="/Menu/2.png" />
              <Page image="/Menu/3.png" />
              <Page image="/Menu/4.png" />
              <Page image="/Menu/5.png" />
              <Page image="" />
            </HTMLFlipBook>
          </motion.div>
          
          {/* Right Side Redesigned Features List */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{ position: 'absolute', right: '2%', width: '500px', zIndex: 1 }}
              >
                <div style={{ display: 'inline-block', border: '1px solid rgba(255,193,7,0.3)', borderRadius: '30px', padding: '6px 16px', marginBottom: '20px', backgroundColor: 'rgba(255,193,7,0.05)' }}>
                  <div style={{ fontFamily: 'system-ui, sans-serif', color: 'var(--color-tiger-gold)', letterSpacing: '0.2em', fontSize: '11px', fontWeight: '600' }}>
                    ✦ A SENSORY JOURNEY
                  </div>
                </div>
                
                <h2 style={{ fontFamily: "var(--font-salmond)", fontSize: 'clamp(50px, 6vw, 75px)', color: '#FFF', marginBottom: '16px', fontWeight: '700', textTransform: 'uppercase', lineHeight: '1' }}>
                  Culinary<br/>
                  <span style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-tiger-gold)', fontStyle: 'italic', textTransform: 'none', fontWeight: '600', fontSize: 'clamp(40px, 5vw, 60px)' }}>Masterpieces.</span>
                </h2>
                
                <p style={{ color: '#A0B3A6', fontFamily: "system-ui, sans-serif", fontSize: '15px', lineHeight: '1.6', marginBottom: '30px' }}>
                  Turn the pages to explore our handcrafted dishes. From crisp, golden dosas to rich, aromatic filter coffee—every recipe is a tribute to authentic South Indian heritage.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div>
                    <div style={{ color: 'var(--color-tiger-gold)', fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: '600', marginBottom: '6px' }}>Signature Dosas</div>
                    <div style={{ color: '#A0B3A6', fontSize: '13px', lineHeight: '1.5' }}>Crisp, golden perfection served with homemade chutneys.</div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--color-tiger-gold)', fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: '600', marginBottom: '6px' }}>Traditional Thalis</div>
                    <div style={{ color: '#A0B3A6', fontSize: '13px', lineHeight: '1.5' }}>A grand feast featuring 12 authentic, freshly prepared items.</div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--color-tiger-gold)', fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: '600', marginBottom: '6px' }}>Fluffy Idlis</div>
                    <div style={{ color: '#A0B3A6', fontSize: '13px', lineHeight: '1.5' }}>Melt-in-your-mouth steamed classics, served piping hot.</div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--color-tiger-gold)', fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: '600', marginBottom: '6px' }}>Filter Coffee</div>
                    <div style={{ color: '#A0B3A6', fontSize: '13px', lineHeight: '1.5' }}>Strong, aromatic coffee to awaken your senses.</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Menu;
