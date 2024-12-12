"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  const newArrivals = [
    { id: 1, name: 'T-shirt with Tape Details', price: 120, image: '/pic1.png' },
    { id: 2, name: 'Skinny Fit Jeans', price: 240, discountPrice: 260, image: '/pic2.png' },
    { id: 3, name: 'Checkered Shirt', price: 180, image: '/pic3.png' },
    { id: 4, name: 'Sleeve Striped T-shirt', price: 130, discountPrice: 160, image: '/pic4.png' },
  ];

  const topSelling = [
    { id: 1, name: 'Vertical Striped Shirt', price: 212, discountPrice: 232, image: '/pic5.png' },
    { id: 2, name: 'Courage Graphic T-shirt', price: 145, image: '/pic6.png' },
    { id: 3, name: 'Loose Fit Bermuda Shorts', price: 80, image: '/pic7.png' },
    { id: 4, name: 'Faded Skinny Jeans', price: 210, image: '/pic8.png' },
  ];

  const dressStyles = [
    { id: 1, name: 'Casual', image: '/pic12.png' },
    { id: 2, name: 'Formal', image: '/pic13.png' },
    { id: 3, name: 'Party', image: '/pic14.png' },
    { id: 4, name: 'Gym', image: '/pic15.png' },
  ];

  const happyClients = [
    { id: 1, name: 'John Doe', feedback: 'Amazing quality and fast delivery!', image: '/client1.png' },
    { id: 2, name: 'Jane Smith', feedback: 'The best shopping experience I have ever had.', image: '/client2.png' },
    { id: 3, name: 'Sam Wilson', feedback: 'Highly recommend! Great styles and prices.', image: '/client3.png' },
  ];

  return (
    <>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 40px',
          backgroundColor: '#fff',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        }}
      >
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>SHOP.CO</h1>
        <input
          type="text"
          placeholder="Search for products..."
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            width: '300px',
          }}
        />
      </header>

      {/* Hero Section */}
      <section
        style={{ position: 'relative', width: '100%', height: '663px', marginTop: '20px' }}
      >
        <Image src="/header-homepage.png" alt="Hero Image" layout="fill" objectFit="cover" />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '10%',
            transform: 'translateY(-50%)',
            color: '#fff',
          }}
        >
          <h2
            style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}
          >
            Find Clothes That Match Your Style
          </h2>
          <button
            style={{
              padding: '15px 30px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* New Arrivals */}
      <section style={{ padding: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
          New Arrivals
        </h2>
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}
        >
          {newArrivals.map((item) => (
            <Link key={item.id} href={`/product/${item.id}`} passHref>
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  style={{ borderRadius: '10px 10px 0 0' }}
                />
                <div style={{ padding: '10px' }}>
                  <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.name}</p>
                  <p style={{ fontSize: '14px', color: '#555' }}>
                    ${item.price}
                    {item.discountPrice && (
                      <span
                        style={{
                          textDecoration: 'line-through',
                          marginLeft: '10px',
                          color: '#999',
                        }}
                      >
                        ${item.discountPrice}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Selling */}
      <section style={{ padding: '40px', backgroundColor: '#fff' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
          Top Selling
        </h2>
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}
        >
          {topSelling.map((item) => (
            <Link key={item.id} href={`/product/${item.id}`} passHref>
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  style={{ borderRadius: '10px 10px 0 0' }}
                />
                <div style={{ padding: '10px' }}>
                  <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{item.name}</p>
                  <p style={{ fontSize: '14px', color: '#555' }}>
                    ${item.price}
                    {item.discountPrice && (
                      <span
                        style={{
                          textDecoration: 'line-through',
                          marginLeft: '10px',
                          color: '#999',
                        }}
                      >
                        ${item.discountPrice}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Browse by Dress Style */}
      <section style={{ padding: '40px', backgroundColor: '#f9f9f9' }}>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Browse by Dress Style
        </h2>
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}
        >
          {dressStyles.map((style) => (
            <div key={style.id} style={{ textAlign: 'center', cursor: 'pointer' }}>
              <Image
                src={style.image}
                alt={style.name}
                width={300}
                height={300}
                style={{ borderRadius: '10px' }}
              />
              <p
                style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}
              >
                {style.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Happy Clients */}
      <section style={{ padding: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
          Our Happy Clients
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {happyClients.map((client) => (
            <div
              key={client.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                textAlign: 'center',
                padding: '20px',
              }}
            >
              <Image
                src={client.image}
                alt={client.name}
                width={100}
                height={100}
                style={{ borderRadius: '50%' }}
              />
              <p style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}>
                {client.name}
              </p>
              <p style={{ fontSize: '14px', color: '#555', marginTop: '10px' }}>
                "{client.feedback}"
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
