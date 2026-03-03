import React from 'react';

const LocationAdvantage = () => {
  return (
    <section className="py-16 bg-white" id="location">
      <div className="container location-grid mt-6">
        <div className="location-left">
          <h2 className="section-title text-orange font-playfair mb-6">Location Advantage</h2>
          <ul className="bullet-list mb-10">
            {[
              "Close proximity to Bhiwandi city offers a strong workforce & Excellent public transport connections.",
              "Situated within an industrial cluster for cost-effective logistics.",
              "Conveniently located near Mumbai-Nashik road avoiding city traffic."
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="section-title text-orange font-playfair mb-6">Present Connectivity</h2>
          <ul className="bullet-list mb-10">
            {[
              "3.5 km from Bhiwandi Bus Depot",
              "Connected to Bhiwandi - Wada road",
              "Centrally Located between Eastern & Western Express Highway",
              "60 km from JNPT port",
              "40 km from Chhatrapati Shivaji Maharaj Airport"
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="section-title text-orange font-playfair mb-6">Upcoming Infrastructure projects</h2>
          <ul className="bullet-list">
            {[
              "60 meter Bhiwandi Ring Road passes through our project",
              "Easy access to Samrudhi Expressway and Bombay-Baroda Expressway via 1km ring road.",
              "5 km from Metro line 5"
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="location-right">
          <div className="map-image-wrapper h-full w-full">
             <iframe
               src="https://www.openstreetmap.org/export/embed.html?bbox=73.0100%2C19.2700%2C73.0700%2C19.3200&layer=mapnik&marker=19.2987%2C73.0400"
               width="100%"
               height="100%"
               style={{border:0, borderRadius: '8px', minHeight: '520px', filter: 'grayscale(60%)'}}
               title="Bhiwandi Location Map"
               loading="lazy">
             </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantage;
