import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress within the combined Hero + About container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"]
  });

  // Map scroll progress (0 to 1) to x, y, scale, and rotation values
  const dosaX = useTransform(scrollYProgress, [0, 0.45, 1], ["15%", "-105%", "-105%"]);
  const dosaY = useTransform(scrollYProgress, [0, 0.45, 1], ["0%", "-15%", "-15%"]);
  const dosaScale = useTransform(scrollYProgress, [0, 0.45, 1], [1, 0.85, 0.85]);
  const dosaRotate = useTransform(scrollYProgress, [0, 0.45, 1], [0, -10, -10]);

  return (
    <>
      <div className="watermark-bg"></div>
      
      {/* Scroll Animation Wrapper */}
      <div ref={containerRef} style={{ position: 'relative' }}>
        
        {/* Absolute wrapper to prevent layout shift while giving physical height to the sticky container so it naturally stops at the boundary */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 10 }}>
          <div style={{ position: 'sticky', top: '15vh', height: '600px', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', overflow: 'visible', width: '100%', maxWidth: '1440px', margin: '0 auto', paddingLeft: '5%', paddingRight: '5%' }}>
            <motion.img 
              src="/dosa.png" 
              alt="Kadappa Cafe Dosa"
              style={{ 
                width: '110%', 
                maxWidth: '700px', 
                height: 'auto', 
                filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.8))',
                x: dosaX,
                y: dosaY,
                scale: dosaScale,
                rotate: dosaRotate
              }} 
            />
          </div>
        </div>

        <section className="hero-poster" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', paddingTop: '130px', paddingBottom: '60px', paddingLeft: '5%', paddingRight: '5%', maxWidth: '1440px', margin: '0 auto', gap: '40px', minHeight: '90vh' }}>
          
          {/* Left Side: Elegant Typography */}
          <div style={{ paddingRight: '20px', zIndex: 2 }}>
            <div className="text-eyebrow" style={{ color: '#A0B3A6', letterSpacing: '0.2em', fontSize: '13px', marginBottom: '24px' }}>AUTHENTIC SOUTH INDIAN FLAVOURS</div>
            
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(50px, 6.5vw, 90px)', lineHeight: '1.1', color: '#F4F4F4', marginBottom: '20px', fontWeight: '600' }}>
              Traditional<br/>
              Taste, <span style={{ color: 'var(--color-tiger-gold)', fontStyle: 'italic' }}>Always Fresh</span>
            </h1>
            
            <p style={{ fontFamily: "system-ui, sans-serif", color: '#A0B3A6', fontSize: '17px', lineHeight: '1.6', marginBottom: '24px', maxWidth: '480px' }}>
              Crispy dosas, soft idlis, flavourful vadas and more - made with fresh ingredients and served with authentic South Indian taste.
            </p>
            
            <button className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', borderRadius: '30px', padding: '12px 28px', fontSize: '14px', pointerEvents: 'auto' }}>
              EXPLORE MENU <span style={{fontSize: '16px'}}>→</span>
            </button>
          </div>

          {/* Right Side: Empty placeholder for sticky Dosa */}
          <div style={{ minHeight: '600px' }}></div>
        </section>

        <div className="poster-section" style={{paddingTop: '0', paddingBottom: '0'}}>
          <div className="dotted-divider"></div>
        </div>

        <section className="poster-section" style={{ padding: '80px 5%', maxWidth: '1440px', margin: '0 auto', minHeight: '90vh' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            
            {/* Left Side: Empty placeholder for sticky Dosa */}
            <div style={{ minHeight: '500px' }}></div>

            {/* Right Side: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ paddingRight: '40px' }}
            >
              <div className="text-eyebrow" style={{ color: '#A0B3A6', letterSpacing: '0.2em', fontSize: '13px', marginBottom: '16px' }}>
                AUTHENTIC SOUTH INDIAN FLAVOURS
              </div>
              
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: '1.2', color: '#FFFFFF', marginBottom: '30px', fontWeight: '600' }}>
                A Taste of South India, <span style={{ color: 'var(--color-tiger-gold)', fontStyle: 'italic' }}>Made Fresh.</span>
              </h2>
              
              <p style={{ fontFamily: "system-ui, sans-serif", color: '#E0E0E0', fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                At Kadappa Café, we bring the authentic flavours of South India to your table. From crispy golden dosas and soft idlis to flavourful vadas, wholesome thalis, and traditional filter coffee, every bite celebrates the comfort of South Indian cuisine.
              </p>
              
              <p style={{ fontFamily: "system-ui, sans-serif", color: '#E0E0E0', fontSize: '16px', lineHeight: '1.8', marginBottom: '30px' }}>
                <strong style={{ color: '#FFFFFF' }}>Established in 2026</strong>, we're here to serve delicious food, warm hospitality, and a memorable dining experience.
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-tiger-gold)', marginBottom: '40px', fontSize: '16px', fontWeight: '500' }}>
                📍 <span style={{ color: '#FFFFFF' }}>Kalinganagar, Bhubaneswar, Odisha</span>
              </div>
              
              <button className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', borderRadius: '30px', padding: '16px 32px', fontSize: '15px' }}>
                Discover Our Menu <span style={{fontSize: '18px'}}>→</span>
              </button>
            </motion.div>

          </div>
        </section>
      </div>

      <div className="poster-section" style={{paddingTop: '0', paddingBottom: '0'}}>
        <div className="dotted-divider"></div>
      </div>

      <section className="poster-section" style={{textAlign: 'center'}}>
        <h2 className="text-display" style={{fontSize: 'clamp(50px, 8vw, 100px)', marginBottom: '40px'}}>WATCH US</h2>
        <div style={{display: 'flex', gap: '50px', justifyContent: 'center', flexWrap: 'wrap'}}>
          {[
            "https://res.cloudinary.com/asqkllni/video/upload/v1791570798/Video-68969.mp4",
            "https://res.cloudinary.com/asqkllni/video/upload/v1791570982/Video-87756.mp4",
            "https://res.cloudinary.com/asqkllni/video/upload/v1791571009/Video-12119.mp4",
            "https://res.cloudinary.com/asqkllni/video/upload/v1791571071/Video-20911.mp4"
          ].map((src, idx) => (
            <div key={idx} className="surface-card" style={{width: '260px', height: '460px', padding: '0', overflow: 'hidden', position: 'relative', borderRadius: '16px'}}>
              <video 
                src={src} 
                autoPlay 
                muted 
                loop 
                playsInline
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </div>
          ))}
        </div>
      </section>

      <div className="poster-section" style={{paddingTop: '0', paddingBottom: '0'}}>
        <div className="dotted-divider"></div>
      </div>

      <section className="poster-section" style={{textAlign: 'center', paddingBottom: '100px'}}>
        <h2 className="text-display" style={{fontSize: 'clamp(50px, 8vw, 100px)', marginBottom: '80px'}}>MUST TRY</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', alignItems: 'center'}}>
          {[
            { img: "/filtercoffe.png", title: "Filter Coffee", desc: "Aromatic & Strong" },
            { img: "/thali.png", title: "South Thali", desc: "Authentic Meals" },
            { img: "/dosaSecond.png", title: "Special Dosa", desc: "Crispy & Golden" },
            { img: "/idli.png", title: "Soft Idli", desc: "Soft & Fluffy" },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ textAlign: 'center', cursor: 'pointer', padding: '10px', transition: 'all 0.3s ease' }}
            >
              {/* Circular Background Wrapper */}
              <div style={{ width: '240px', height: '240px', borderRadius: '50%', backgroundColor: '#185926', margin: '0 auto 30px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <img src={item.img} alt={item.title} style={{width: '120%', height: '120%', objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.7))', position: 'absolute' }} />
              </div>
              
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', color: '#FFFFFF', marginBottom: '12px', fontWeight: '600' }}>
                {item.title}
              </h3>
              
              <p style={{ fontFamily: "system-ui, sans-serif", color: 'var(--color-tiger-gold)', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '500' }}>
                {item.desc}
              </p>
              
              {/* Arrow Button */}
              <div style={{ width: '36px', height: '36px', border: '1px solid var(--color-tiger-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '24px auto 0', color: 'var(--color-tiger-gold)', fontSize: '18px', transition: 'all 0.3s ease' }} className="card-arrow">
                →
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
