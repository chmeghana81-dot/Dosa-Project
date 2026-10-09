import React from 'react';
import HTMLFlipBook from 'react-pageflip';

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
  return (
    <>
      <div className="watermark-bg"></div>
      
      <section className="poster-section" style={{paddingTop: '100px', paddingBottom: '40px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div className="text-eyebrow" style={{marginBottom: '10px'}}>Turn the pages</div>
        <h1 className="text-display" style={{marginBottom: '30px', paddingTop: '10px', lineHeight: '1', fontSize: 'clamp(40px, 8vw, 80px)'}}>THE MENU</h1>

        <div style={{ width: '900px', height: '600px', filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.8))', maxWidth: '100%' }}>
          <HTMLFlipBook 
            width={450} 
            height={600} 
            size="stretch"
            minWidth={315}
            maxWidth={450}
            minHeight={420}
            maxHeight={600}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className="menu-flipbook"
          >
            {/* Page 1: Front Cover */}
            <Page image="/Menu/1.png" />
            
            {/* Page 2 (Inside Left) */}
            <Page image="/Menu/2.png" />
            
            {/* Page 3 (Inside Right) */}
            <Page image="/Menu/3.png" />
            
            {/* Page 4 (Inside Left) */}
            <Page image="/Menu/4.png" />
            
            {/* Page 5 (Inside Right) */}
            <Page image="/Menu/5.png" />
            
            {/* Page 6: Back Cover (Blank) */}
            <Page image="" />
          </HTMLFlipBook>
        </div>
      </section>
    </>
  );
};

export default Menu;
