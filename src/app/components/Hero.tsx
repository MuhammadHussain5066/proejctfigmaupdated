import React from 'react';
import Image from 'next/image';
import Footer from './Footer';

const FindClothingHero = () => {
  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <h1
        style={{
          fontWeight: 700,
          fontSize: '3rem',
          lineHeight: 1.2,
          color: '#000',
        }}
      >
        Find Clothing
      </h1>
      <Image
        src="/header-homepage.png" 
        alt="Trendy Fashionable Couple Posing"
        width={1440}
        height={663}
        layout="responsive"
      />
    </div>
  );
};

const NewArrivalsHero = () => {
  const images = [
    '/pic1.png',
    '/pic2.png',
    '/pic3.png',
    '/pic4.png',
    '/pic5.png',
  ];

  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <h1
        style={{
          fontWeight: 700,
          fontSize: '48px',
          lineHeight: '57.6px',
          color: '#000000',
        }}
      >
        NEW ARRIVALS
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        {images.map((imageSrc, index) => (
          <Image
            key={index}
            src={imageSrc}
            alt={`New Arrival ${index + 1}`}
            width={295}
            height={298}
            layout="intrinsic" 
          />
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div>
      <FindClothingHero />
      <NewArrivalsHero />
      <Footer/> 
    </div>
  );
};

export default Hero;
