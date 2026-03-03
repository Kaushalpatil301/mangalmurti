import React from 'react';

const AboutIndustrial = () => {
  return (
    <section className="info-section" id="park">
      <div className="container info-grid">
        <div className="info-left">
          <h2 className="section-title text-orange font-playfair mb-3">About industrial Park</h2>
          <p className="about-text font-inter font-light text-gray-600 mb-8">
            Welcome to Mangalmurti Industrial and Logistic Park, where we offer legally compliant Grade-A industrial
            and warehousing solutions. Our facilities are designed to cater to a wide range of industries, ensuring that
            your storage and logistics needs are met with the highest standards of safety and efficiency.
          </p>

          <h2 className="section-title text-orange font-playfair mb-5">Quick Facts</h2>
          <div className="facts-grid mb-8">
            {[
              { title: "Location", desc: <>Savande village, Bhiwandi - Vadpe bypass,<br/>Bhiwandi - 421302</> },
              { title: "Land type", desc: "Industrial zone land with clear land title" },
              { title: "Total Area", desc: "50 Acres" },
              { title: "Bult-Up Area", desc: "8 - 10L Sq.ft." },
              { title: "Project Clearance", desc: "MMRDA approved project, Fire NOC granted" },
              { title: "Park Solutions", desc: "State of the art Industrial RCC building & Warehouses" },
            ].map((fact, index) => (
              <div key={index} className="fact-item">
                <h3 className="fact-title font-inter font-normal text-gray-800">{fact.title}</h3>
                <p className="fact-desc font-inter font-light text-gray-500 text-sm">{fact.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title text-orange font-playfair mb-6">Amenities</h2>
          <div className="amenities-grid">
            <div className="amenity-item">
              <div className="amenity-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5">
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                  <path d="M12 4v4m0 4v4m0 4v4"></path>
                </svg>
              </div>
              <h4 className="amenity-title font-inter font-medium">Internal Road</h4>
              <p className="amenity-desc text-xs text-gray-500 font-light">Road provided for 40ft container</p>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5">
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                  <path d="M4 12h16m-8-8v16"></path>
                  <circle cx="12" cy="12" r="3" strokeDasharray="2 2"></circle>
                </svg>
              </div>
              <h4 className="amenity-title font-inter font-medium">Ring road</h4>
              <p className="amenity-desc text-xs text-gray-500 font-light">Bhiwandi ring road passes through park</p>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5">
                  <path d="M4 20c0-6 4-10 10-10s8 4 8 8"></path>
                  <path d="M12 10V4m-4 6V5m8 5V6"></path>
                </svg>
              </div>
              <h4 className="amenity-title font-inter font-medium">Decorated Passage</h4>
              <p className="amenity-desc text-xs text-gray-500 font-light">Well-lit roads with lush greenery</p>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5">
                  <path d="M4 20h16M8 20v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8M10 10V6a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v4"></path>
                  <path d="M12 4v2m-2 4h4m-4 4h4"></path>
                </svg>
              </div>
              <h4 className="amenity-title font-inter font-medium">Grade A park</h4>
              <p className="amenity-desc text-xs text-gray-500 font-light">World class infrastructure</p>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <path d="M9 3v18M15 3v18M3 9h18M3 15h18"></path>
                  <circle cx="9" cy="9" r="2" fill="#666"></circle>
                  <circle cx="15" cy="15" r="2" fill="#666"></circle>
                </svg>
              </div>
              <h4 className="amenity-title font-inter font-medium">Industry Cluster</h4>
              <p className="amenity-desc text-xs text-gray-500 font-light">E-commerce & 3PL logistics network</p>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <h4 className="amenity-title font-inter font-medium">Safe & Secure</h4>
              <p className="amenity-desc text-xs text-gray-500 font-light">24/7 Surveillance with Fire Safety & Fencing</p>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Right Column (Form) */}
        <div className="info-right">
          <h2 className="section-title text-orange font-playfair mb-4">Enquire With Us</h2>
          <p className="form-subtitle text-gray-700 font-inter font-normal mb-8">Please share your contact info</p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <p className="role-label text-sm text-gray-700 mb-3">I am</p>
            <div className="role-selection mb-6">
              {['Business Owner', 'Agent', 'Investor'].map((role, index) => (
                <label key={index} className="custom-checkbox flex-1">
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="label-text">{role}</span>
                </label>
              ))}
            </div>
            <div className="inputs-group">
              <input type="text" placeholder="Full Name" className="form-input" />
              <input type="email" placeholder="Email ID" className="form-input" />
              <input type="tel" placeholder="Mobile Number" className="form-input" />
              <input type="text" placeholder="Company Name" className="form-input" />
            </div>
            <div className="form-actions mt-6">
              <button type="submit" className="btn btn-outline">Request Callback</button>
              <button type="button" className="btn btn-gray">
                <i className="fa-brands fa-whatsapp text-green-500 mr-2"></i> Connect via
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AboutIndustrial;
