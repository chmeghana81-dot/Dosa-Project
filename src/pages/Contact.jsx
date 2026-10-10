import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <div className="watermark-bg"></div>
      
      <section style={{ 
        paddingTop: '160px', 
        paddingBottom: '120px', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Elegant Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: 'center', marginBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-tiger-gold)', fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>
            <Sparkles size={16} />
            WE ARE HERE FOR YOU
          </div>
          <h1 className="text-display" style={{ fontSize: 'clamp(50px, 8vw, 90px)', lineHeight: '0.9', color: '#FFF' }}>
            LET'S <span style={{ color: 'var(--color-tiger-gold)' }}>TALK</span>
          </h1>
        </motion.div>

        <div style={{ 
          width: '100%', 
          maxWidth: '1100px', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '80px',
          alignItems: 'start'
        }}>
          
          {/* Left Column: Clean Minimalist Details List */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {[
              { icon: <MapPin size={24} strokeWidth={1.5} />, title: "VISIT US", details: "123 Kadappa Street, Anna Nagar\nChennai, Tamil Nadu 600040" },
              { icon: <Phone size={24} strokeWidth={1.5} />, title: "CALL US", details: "+91 98765 43210\n+91 44 2345 6789" },
              { icon: <Mail size={24} strokeWidth={1.5} />, title: "EMAIL US", details: "hello@kadappacafe.com\nreservations@kadappacafe.com" },
              { icon: <Clock size={24} strokeWidth={1.5} />, title: "OPENING HOURS", details: "Mon - Sun: 7:00 AM - 11:00 PM\nFilter Coffee starts at 6:00 AM" }
            ].map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  gap: '24px', 
                  padding: '30px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  alignItems: 'flex-start'
                }}
              >
                <div style={{ 
                  color: 'var(--color-tiger-gold)', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '4px'
                }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-display" style={{ fontSize: '24px', color: '#FFF', marginBottom: '8px', letterSpacing: '0.05em' }}>{item.title}</h3>
                  <p style={{ fontFamily: "system-ui, sans-serif", color: '#A0B3A6', fontSize: '15px', lineHeight: '1.6', whiteSpace: 'pre-line', margin: 0 }}>
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Premium Light Glass Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.02)', 
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '50px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '35px'
            }}
          >
            <div>
              <h2 className="text-display" style={{ fontSize: '36px', color: '#FFF', marginBottom: '8px' }}>SEND A MESSAGE</h2>
              <p style={{ color: '#A0B3A6', fontFamily: 'system-ui, sans-serif', fontSize: '14px' }}>We typically reply within a few hours.</p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: 'var(--color-tiger-gold)', fontFamily: 'system-ui, sans-serif', fontSize: '11px', fontWeight: '700', letterSpacing: '0.15em' }}>YOUR NAME</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                style={{ 
                  width: '100%', 
                  backgroundColor: 'transparent', 
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.15)', 
                  padding: '10px 0', 
                  color: '#FFF', 
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-tiger-gold)'}
                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: 'var(--color-tiger-gold)', fontFamily: 'system-ui, sans-serif', fontSize: '11px', fontWeight: '700', letterSpacing: '0.15em' }}>EMAIL ADDRESS</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                style={{ 
                  width: '100%', 
                  backgroundColor: 'transparent', 
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.15)', 
                  padding: '10px 0', 
                  color: '#FFF', 
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-tiger-gold)'}
                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: 'var(--color-tiger-gold)', fontFamily: 'system-ui, sans-serif', fontSize: '11px', fontWeight: '700', letterSpacing: '0.15em' }}>MESSAGE</label>
              <textarea 
                placeholder="How can we help you?" 
                rows="3"
                style={{ 
                  width: '100%', 
                  backgroundColor: 'transparent', 
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.15)', 
                  padding: '10px 0', 
                  color: '#FFF', 
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: '16px',
                  outline: 'none',
                  resize: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-tiger-gold)'}
                onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)'}
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-display"
              style={{
                width: '100%',
                backgroundColor: 'var(--color-tiger-gold)',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                padding: '18px',
                fontSize: '22px',
                cursor: 'pointer',
                marginTop: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                transition: 'background-color 0.3s ease'
              }}
            >
              SEND ENQUIRY <Send size={20} />
            </motion.button>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Contact;
