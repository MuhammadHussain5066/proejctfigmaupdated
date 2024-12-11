"use client";

import React from 'react';
import Image from 'next/image';

const CategoryPage = () => {
  // Sample product data
  const products = [
    { id: 1, name: "Gradient Graphic T-Shirt", price: 145, image: "/pic9.png" },
    { id: 2, name: "Polo with Tipping Details", price: 180, image: "/pic10.png" },
    { id: 3, name: "Black Striped T-Shirt", price: 120, image: "/pic11.png" },
    { id: 4, name: "Skinny Fit Jeans", price: 240, image: "/pic12.png" },
    { id: 5, name: "Checked Shirt", price: 180, image: "/pic13.png" },
    { id: 6, name: "Sleeve Striped T-Shirt", price: 130, image: "/pic14.png" },
  ];

  // Sample filter options
  const colors = ["Red", "Blue", "Green", "Black", "White"];
  const sizes = ["S", "M", "L", "XL"];

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

      {/* Main Section */}
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Filters */}
        <aside style={{ width: '25%', padding: '10px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ marginBottom: '15px', fontSize: '20px' }}>Filters</h3>
          {/* Colors */}
          <div style={{ marginBottom: '15px' }}>
            <h4 style={{ marginBottom: '10px' }}>Colors</h4>
            {colors.map((color) => (
              <label key={color} style={{ display: 'block', marginBottom: '5px' }}>
                <input type="checkbox" value={color} style={{ marginRight: '10px' }} />
                {color}
              </label>
            ))}
          </div>
          {/* Sizes */}
          <div>
            <h4 style={{ marginBottom: '10px' }}>Sizes</h4>
            {sizes.map((size) => (
              <label key={size} style={{ display: 'block', marginBottom: '5px' }}>
                <input type="checkbox" value={size} style={{ marginRight: '10px' }} />
                {size}
              </label>
            ))}
          </div>
        </aside>

        {/* Products Grid */}
        <section style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                padding: '10px',
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '10px'
                }}
              />
              <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{product.name}</h3>
              <p style={{ fontSize: '16px', color: '#888' }}>${product.price}</p>
              <button
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '10px 15px',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </section>
      </div>

      {/* Pagination */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button
          style={{
            padding: '10px 15px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            marginRight: '10px',
            cursor: 'pointer',
            backgroundColor: '#fff'
          }}
        >
          Previous
        </button>
        <button
          style={{
            padding: '10px 15px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            cursor: 'pointer',
            backgroundColor: '#fff'
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
