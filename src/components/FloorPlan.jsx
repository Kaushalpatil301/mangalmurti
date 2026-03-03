import React from 'react';
import layoutImg from '../assets/Layout.png';

const FloorPlan = () => {
  return (
    <section className="bg-cream py-16" id="layout">
      <div className="container mt-6">
        <h2 className="section-title text-orange font-playfair mb-4">Floor plan & Layout</h2>
        <p className="font-normal text-gray-700 mb-8" style={{lineHeight: 1.6}}>
          Mangalmurti Industrial & Logistic Park is designed to support maximum logistics activities for micro, small, and medium manufacturing units. The warehouse building is tailored to meet the needs of the e-commerce, 3PL, and FMCG industries. Over 50% of the layout is maintained as open space to facilitate optimal logistics activity.
        </p>

        {/* PDF Buttons — shown above map on mobile, absolute top-right on desktop */}
        <div className="floor-plan-pdf-btns">
          {["Rcc building floor plan. pdf", "Warehouse floor plan. pdf"].map((doc, index) => (
            <button key={index} className="btn-doc">{doc}</button>
          ))}
        </div>

        <div className="floor-plan-container">
          {/* DP Road — left side on desktop, above image on mobile */}
          <div className="fp-dp-road">DP road</div>

          {/* Main Layout Image */}
          <div className="fp-image-wrapper">
            <img src={layoutImg} alt="Floor Plan Layout" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} />
          </div>

          {/* Right labels — below image on mobile */}
          <div className="floor-plan-labels">
            {["Entry/Exit", "Bhiwandi - Nashik Bypass road", "60 meter Bhiwandi ring road"].map((label, index) => (
              <div key={index} className="fp-label-title">{label}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlan;
