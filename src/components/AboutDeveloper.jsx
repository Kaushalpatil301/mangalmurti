import React from 'react';

const AboutDeveloper = () => {
  const stats = [
    { number: '20+', label: 'Years of Experience' },
    { number: '24', label: 'Projects Delivered' },
    { number: '3', label: 'Key locations' },
    { number: '500+', label: 'Customers served' }
  ];

  return (
    <section className="bg-cream py-16" id="developer">
      <div className="container mt-6">
        <h2 className="section-title text-orange font-playfair mb-6">About Shubhlabh</h2>
        <p className="text-gray-700 font-inter font-normal mb-12" style={{lineHeight: 1.8}}>
          SHUBHLABH is a renowned name in the real estate industry, specializing in residential and industrial spaces. They've carved a niche for themselves in the affordable housing sector, where the developers have delivered a staggering 2 million square feet of residential and industrial units. Their focus lies on the outskirts of Mumbai, particularly in developing areas like Mira Bhayandar, Vasai Virar, and Bhiwandi Taluka. This expertise stems from over two decades of experience in acquiring land parcels, strategically accumulating them, and transforming them into valuable projects within these areas.
        </p>

        <div className="stats-grid pt-4 pb-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item text-center">
              <div className="stat-number font-inter">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutDeveloper;
