import React from 'react';

const Footer = () => {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: "Absolutely love the products! High quality and great service"
    },
    {
      name: 'Jane Smith',
      feedback: "Fast delivery and the design is just perfect. Highly recommend"
    },
    {
      name: 'Emily Johnson',
      feedback: "Excellent customer support and the materials feel premium."
    },
  ];

  return (
    <footer style={{ padding: '2rem', backgroundColor: '#f8f8f8' }}>
      <h2
        style={{
          fontWeight: 700,
          fontSize: '48px',
          lineHeight: '57.6px',
          color: '#000000',
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        Our Happy Customers
      </h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              maxWidth: '300px',
              padding: '1rem',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontStyle: 'italic',
                color: '#555555',
                marginBottom: '1rem',
              }}
            >
              "{testimonial.feedback}"
            </p>
            <h4
              style={{
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '20px',
                color: '#000000',
              }}
            >
              - {testimonial.name}
            </h4>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
