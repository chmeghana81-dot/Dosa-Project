import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, User, Phone, CheckCircle } from 'lucide-react';

const BookTable = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="watermark-bg"></div>
      
      <section style={{ paddingTop: '180px', paddingBottom: '100px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px', padding: '0 5%' }}
        >
          <div className="text-eyebrow" style={{ color: '#A0B3A6', letterSpacing: '0.2em', fontSize: '14px', marginBottom: '16px' }}>RESERVE YOUR SEAT</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: '1.1', color: '#F4F4F4', fontWeight: '600', marginBottom: '20px' }}>
            Book a <span style={{ color: 'var(--color-tiger-gold)', fontStyle: 'italic' }}>Table</span>
          </h1>
          <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-tiger-gold)', margin: '0 auto', opacity: 0.5 }}></div>
        </motion.div>

        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ backgroundColor: 'rgba(16, 63, 34, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid var(--color-tiger-gold)', padding: '60px', borderRadius: '20px', textAlign: 'center', maxWidth: '500px', width: '90%', zIndex: 10 }}
          >
            <CheckCircle size={60} color="var(--color-tiger-gold)" style={{ margin: '0 auto 20px' }} />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', color: '#FFF', marginBottom: '16px' }}>Reservation Confirmed</h2>
            <p style={{ color: '#A0B3A6', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
              Your table at Kadappa Café has been successfully booked. We look forward to serving you authentic South Indian flavours!
            </p>
            <button className="btn-primary" onClick={() => setIsSubmitted(false)}>BOOK ANOTHER</button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ width: '100%', maxWidth: '800px', padding: '0 5%', zIndex: 10 }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', backgroundColor: 'rgba(16, 63, 34, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 193, 7, 0.3)', padding: 'clamp(20px, 5vw, 50px)', borderRadius: '24px' }}>
              
              <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ color: 'var(--color-tiger-gold)', fontSize: '12px', letterSpacing: '0.1em', fontWeight: '500' }}>FULL NAME</label>
                <div style={{ position: 'relative' }}>
                  <User size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#A0B3A6' }} />
                  <input required type="text" placeholder="John Doe" style={{ width: '100%', boxSizing: 'border-box', padding: '16px 16px 16px 45px', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#FFF', fontSize: '16px', outline: 'none', transition: 'border 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-tiger-gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ color: 'var(--color-tiger-gold)', fontSize: '12px', letterSpacing: '0.1em', fontWeight: '500' }}>PHONE NUMBER</label>
                <div style={{ position: 'relative' }}>
                  <Phone size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#A0B3A6' }} />
                  <input required type="tel" placeholder="+91 98765 43210" style={{ width: '100%', boxSizing: 'border-box', padding: '16px 16px 16px 45px', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#FFF', fontSize: '16px', outline: 'none', transition: 'border 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-tiger-gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ color: 'var(--color-tiger-gold)', fontSize: '12px', letterSpacing: '0.1em', fontWeight: '500' }}>GUESTS</label>
                <div style={{ position: 'relative' }}>
                  <Users size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#A0B3A6' }} />
                  <select required style={{ width: '100%', boxSizing: 'border-box', padding: '16px 16px 16px 45px', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#FFF', fontSize: '16px', outline: 'none', appearance: 'none', transition: 'border 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-tiger-gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}>
                    <option value="1" style={{backgroundColor: '#11421b'}}>1 Person</option>
                    <option value="2" style={{backgroundColor: '#11421b'}}>2 People</option>
                    <option value="3" style={{backgroundColor: '#11421b'}}>3 People</option>
                    <option value="4" style={{backgroundColor: '#11421b'}}>4 People</option>
                    <option value="5" style={{backgroundColor: '#11421b'}}>5+ People</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ color: 'var(--color-tiger-gold)', fontSize: '12px', letterSpacing: '0.1em', fontWeight: '500' }}>DATE</label>
                <div style={{ position: 'relative' }}>
                  <Calendar size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#A0B3A6' }} />
                  <input required type="date" style={{ width: '100%', boxSizing: 'border-box', padding: '16px 16px 16px 45px', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#FFF', fontSize: '16px', outline: 'none', transition: 'border 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-tiger-gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ color: 'var(--color-tiger-gold)', fontSize: '12px', letterSpacing: '0.1em', fontWeight: '500' }}>TIME</label>
                <div style={{ position: 'relative' }}>
                  <Clock size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#A0B3A6' }} />
                  <input required type="time" style={{ width: '100%', boxSizing: 'border-box', padding: '16px 16px 16px 45px', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#FFF', fontSize: '16px', outline: 'none', transition: 'border 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-tiger-gold)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                </div>
              </div>

              <div style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '18px', fontSize: '16px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                  CONFIRM RESERVATION
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </section>
    </>
  );
};

export default BookTable;
