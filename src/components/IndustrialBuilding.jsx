import React from 'react';
import { Compass, ArrowUpSquare, Car, Droplet, Thermometer, ShieldCheck, Wrench, Truck } from 'lucide-react';
import buildingImg from '../assets/Building.png';

const IndustrialBuilding = () => {
  const amenities = [
    { icon: <Compass size={32} strokeWidth={1.5} />, title: "Vaastu Compliant", desc: "Each building designed to Vaastu Compliant" },
    { icon: <ArrowUpSquare size={32} strokeWidth={1.5} />, title: "Goods lift", desc: "Heavy duty industrial lift of sufficient capacity" },
    { icon: <Car size={32} strokeWidth={1.5} />, title: "Private Parking", desc: "Ample of parking space" },
    { icon: <Droplet size={32} strokeWidth={1.5} />, title: "Water proof", desc: "Leak & dampness proof structure" },
    { icon: <Thermometer size={32} strokeWidth={1.5} />, title: "Insulation", desc: "Heat insulating paint on external walls" },
    { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: "Safe & Secure", desc: "24/7 Surveillance with Fire Safety & Fencing" },
    { icon: <Wrench size={32} strokeWidth={1.5} />, title: "Built-to-suit", desc: "Customisable according to requirement" },
    { icon: <Truck size={32} strokeWidth={1.5} />, title: "Load & Unload", desc: "Docking Platform for easy loading/Unloading" },
  ];

  return (
    <section className="bg-cream py-16" id="products">
      <div className="container mt-6">

        {/* Mobile-reorderable building section */}
        <div className="building-mobile-wrapper mb-12">

          {/* 1st on mobile: paragraph */}
          <div className="building-para">
            <h2 className="section-title text-orange font-playfair mb-4">Industrial Building</h2>
            <p className="font-normal text-gray-700 mb-8" style={{lineHeight: 1.6}}>
              The industrial RCC building is a robust and durable structure designed to withstand heavy industrial use and long-term reliability with Trimix floor, free movement area of Forklift. Industrial building designed to Cater mirco, small and medium scale mfg units
            </p>
          </div>

          {/* 2nd on mobile: image */}
          <div className="building-image h-full w-full">
            <img src={buildingImg} style={{width: '100%', height: '100%', objectFit: 'cover', minHeight: '380px', borderRadius: '8px', filter: 'grayscale(100%) brightness(0.9)'}} alt="Industrial Building" />
          </div>

          {/* 3rd on mobile: specifications */}
          <div className="building-specs">
            <h3 className="text-orange font-playfair mb-6 text-2xl" style={{fontWeight: 400}}>Specifications</h3>
            <div className="specs-grid">
              {[
                { title: "Number of Buildings", value: "3+ Buildings" },
                { title: "Type of building", value: "RCC building" },
                { title: "Number of floors", value: "Ground + 3" },
                { title: "Facing", value: "West Facing" },
                { title: "Ceiling height", value: "Ground Floor : 20ft, 1st floor : 16ft, 2nd Floor & above : 12ft", fullWidth: true }
              ].map((spec, index) => (
                <div key={index} style={spec.fullWidth ? { gridColumn: '1 / -1' } : {}}>
                  <div className="font-inter mb-1 text-gray-800 text-lg">{spec.title}</div>
                  <div className="font-light text-sm text-gray-600">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Dimensions section */}
        <div className="dimensions-section mb-16">
          <div className="dimensions-left">
            <h3 className="text-orange font-playfair mb-6 text-2xl" style={{fontWeight: 400}}>Available Dimensions</h3>
            <div className="cards-grid">
              {[
                { name: "Building A", carpetArea: "1,04,000 sq.ft.", floorPlate: "26,000 sq.ft." },
                { name: "Building D", carpetArea: "40,000 sq.ft.", floorPlate: "10,000 sq.ft." },
                { name: "Building F", carpetArea: "56,000 sq.ft.", floorPlate: "14,000 sq.ft." }
              ].map((bldg, index) => (
                <div key={index} className="dim-card">
                  <h4>{bldg.name}</h4>
                  <p className="text-sm font-light mb-2">Usable Carpet Area : {bldg.carpetArea}</p>
                  <p className="text-sm font-light">Floor Plate : {bldg.floorPlate}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="dimensions-right">
            <div className="gala-form-card">
              <div className="flex-1">
                <h3 className="text-2xl font-inter font-normal text-gray-900 leading-tight">
                  Individual Galas<br/>Available in<br/>multiple of 1000<br/>sq.ft. for MSME<br/>Businesses
                </h3>
              </div>
              <div className="flex-1 flex flex-col gap-4 w-full">
                <input type="text" placeholder="Full Name" className="form-input" />
                <input type="text" placeholder="Number" className="form-input" />
                <button className="btn-orange-outline mt-2 w-full">Get a Quote</button>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-orange font-playfair mb-8 text-2xl" style={{fontWeight: 400}}>Amenities</h3>
        <div className="amenities-row">
          {amenities.map((am, i) => (
            <div key={i} className="amenity-item text-center items-center">
               <div className="amenity-icon mb-4 rounded-full border border-gray-400 p-3 text-gray-600 flex items-center justify-center">
                  {am.icon}
               </div>
               <h4 className="amenity-title font-inter font-medium text-sm text-gray-800">{am.title}</h4>
               <p className="amenity-desc text-xs text-gray-500 font-light mt-1">{am.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrialBuilding;
