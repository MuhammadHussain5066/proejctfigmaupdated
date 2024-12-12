'use client';

import React from 'react';
import Image from 'next/image';

const Homepage = () => {
  const newArrivals = [
    { id: 1, src: '/pic1.png', title: 'Gradient Graphic T-Shirt', price: 145 },
    { id: 2, src: '/pic2.png', title: 'Checked Shirt', price: 180 },
    { id: 3, src: '/pic3.png', title: 'Skinny Fit Jeans', price: 240 },
    { id: 4, src: '/pic4.png', title: 'Orange Graphic T-Shirt', price: 145 },
  ];

  const topSelling = [
    { id: 1, src: '/pic5.png', title: 'Vertical Striped Shirt', price: 220 },
    { id: 2, src: '/pic6.png', title: 'Courage Graphic T-Shirt', price: 145 },
    { id: 3, src: '/pic7.png', title: 'Loose Fit Bermuda Shorts', price: 130 },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>SHOP.CO</h1>
        <input
          type="text"
          placeholder="Search products..."
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            width: '300px',
          }}
        />
      </header>

      {/* New Arrivals Section */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>New Arrivals</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {newArrivals.map((item) => (
            <div
              key={item.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                overflow: 'hidden',
                backgroundColor: '#fff',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={200}
                height={200}
                style={{ width: '100%', objectFit: 'cover' }}
              />
              <div style={{ padding: '10px' }}>
                <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.title}</p>
                <p style={{ fontSize: '14px', color: '#888' }}>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Selling Section */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>Top Selling</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {topSelling.map((item) => (
            <div
              key={item.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                overflow: 'hidden',
                backgroundColor: '#fff',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={200}
                height={200}
                style={{ width: '100%', objectFit: 'cover' }}
              />
              <div style={{ padding: '10px' }}>
                <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.title}</p>
                <p style={{ fontSize: '14px', color: '#888' }}>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by Dress Style Section */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>Browse by Dress Style</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {['Casual', 'Formal', 'Party', 'Gym'].map((style, index) => (
            <div
              key={index}
              style={{
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '10px',
                backgroundColor: '#fff',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Image
                src={`/pic${index + 8}.png`}
                alt={style}
                width={150}
                height={150}
                style={{ borderRadius: '10px' }}
              />
              <p style={{ fontSize: '16px', marginTop: '10px' }}>{style}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '20px', backgroundColor: '#000', color: '#fff', textAlign: 'center' }}>
        <p>Stay up-to-date about our latest offers!</p>
        <input
          type="email"
          placeholder="Enter your email"
          style={{ padding: '10px', borderRadius: '5px', width: '300px', margin: '10px auto' }}
        />
        <button
          style={{
            backgroundColor: '#fff',
            color: '#000',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            cursor: 'pointer',
          }}
        >
          Subscribe
        </button>
      </footer>
    </div>
  );
};

export default Homepage;
