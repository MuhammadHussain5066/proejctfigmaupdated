import React from 'react';
import Image from 'next/image';

const ProductPage = () => {
  // Array of image file names
  const imageSources = [
    '/pic9.png',
    '/pic10.png',
    '/pic11.png',
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
            width: '300px'
          }}
        />
      </header>

      {/* Product Detail Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: '30px' }}>
        {/* Product Image */}
        <div style={{ width: '48%', padding: '10px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Image
            src={imageSources[0]} // Main product image
            alt="Product"
            width={444}
            height={530}
            style={{ borderRadius: '10px', width: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Product Details */}
        <div style={{ width: '48%', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>ONE LIFE GRAPHIC T-SHIRT</h2>
          <p style={{ fontSize: '20px', color: '#888', marginBottom: '15px' }}>$260 <span style={{ textDecoration: 'line-through', color: '#999' }}>$300</span></p>
          <p style={{ fontSize: '14px', color: '#333' }}>This graphic t-shirt pairs well with casual outfits and provides excellent comfort, making it your go-to for everyday wear.</p>
          
          {/* Size Selector */}
          <div style={{ marginTop: '15px' }}>
            <label style={{ fontSize: '16px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Select Size</label>
            <select style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #ddd' }}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="xlarge">X-Large</option>
            </select>
          </div>

          {/* Add to Cart Button */}
          <button style={{
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '15px 20px',
            marginTop: '15px',
            width: '100%',
            cursor: 'pointer',
            fontSize: '16px'
          }}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Rating & Reviews */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Ratings & Reviews</h3>
        {/* Review Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {/* Individual review card */}
          {[...Array(4)].map((_, index) => (
            <div key={index} style={{
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              <p style={{ fontWeight: 'bold', color: '#000' }}>Samantha D.</p>
              <p style={{ color: '#777', marginBottom: '10px' }}>★ ★ ★ ★ ☆</p>
              <p style={{ fontSize: '14px' }}>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
            </div>
          ))}
        </div>
        <button style={{
          display: 'block',
          marginTop: '20px',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 20px',
          cursor: 'pointer'
        }}>
          Load More Reviews
        </button>
      </div>

      {/* Similar Products Section */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>You Might Also Like</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {imageSources.slice(1).map((image, index) => (
            <div key={index} style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              <Image
                src={image}
                alt={`Similar Product ${index + 1}`}
                width={200}
                height={200}
                style={{ width: '100%', objectFit: 'cover' }}
              />
              <div style={{ padding: '10px' }}>
                <p style={{ fontSize: '16px', fontWeight: 'bold' }}>$120</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '50%',
        padding: '15px',
        cursor: 'pointer'
      }}>
        <span style={{ fontSize: '24px' }}>💬</span>
      </div>
    </div>
  );
};

export default ProductPage;
