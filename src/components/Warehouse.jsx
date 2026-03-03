import React from 'react';
import { Thermometer, Layers, Flame, SquareStack, Zap, Route, Wrench, Fan } from 'lucide-react';
import buildingImg from '../assets/Building.png';

const Warehouse = () => {
  const amenities = [
    { icon: <Thermometer size={32} strokeWidth={1.5} />, title: "Insulation", desc: "25 mm thick Glass Wool" },
    { icon: <Layers size={32} strokeWidth={1.5} />, title: "Mezzanine Floor", desc: "Dedicated for Office Space" },
    { icon: <Flame size={32} strokeWidth={1.5} />, title: "Fire System", desc: "Hydrant, Sprinkle System & Pump room" },
    { icon: <SquareStack size={32} strokeWidth={1.5} />, title: "Flooring", desc: "Load of 6T/Sq.mtr & FM 2 Floor" },
    { icon: <Zap size={32} strokeWidth={1.5} />, title: "Power Supply", desc: "3 Phase power supply at Tap-off point" },
    { icon: <Route size={32} strokeWidth={1.5} />, title: "Internal Road", desc: "9 Mtr road / 6 Mtr open space in periphery" },
    { icon: <Wrench size={32} strokeWidth={1.5} />, title: "Built-to-suit", desc: "Customisable as per requirement" },
    { icon: <Fan size={32} strokeWidth={1.5} />, title: "Ventilation & lighting", desc: "Ridges & louvers panels enable 5-6 air changes" },
  ];

  return (
    <section className="bg-cream py-16">
      <div className="container mt-6">
        <div className="building-grid mb-12">
          <div className="building-info">
            <h2 className="section-title text-orange font-playfair mb-4">Warehouse</h2>
            <p className="font-normal text-gray-700 mb-8" style={{lineHeight: 1.6}}>
              The warehouse building is designed to "A" grade specifications for efficient logistics activities, catering to FMCG, E-commerce, 3PL logistics, and industry. It complies with all legal requirements and includes fire safety measures. The temperature-controlled building has a height of 12 meters to accommodate six-layer storage racks.
            </p>
            
            <h3 className="text-orange font-playfair mb-6 text-2xl" style={{fontWeight: 400}}>Specifications</h3>
            <div className="specs-grid">
              {[
                { title: "Number of Warhouses", value: "6 Warehouses" },
                { title: "Type of building", value: "Pre-engineered building" },
                { title: "Brick-wall height", value: "3.65m with RCC column-beam" },
                { title: "Clear height", value: "12m" },
                { title: "Docking", value: "Dock leveler, running dock platform & truck apron for 40ft containers", fullWidth: true }
              ].map((spec, index) => (
                <div key={index} style={spec.fullWidth ? { gridColumn: '1 / -1' } : {}}>
                  <div className="font-inter mb-1 text-gray-800 text-lg">{spec.title}</div>
                  <div className="font-light text-sm text-gray-600">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="building-image h-full w-full">
            <img src={buildingImg} style={{width: '100%', height: '100%', objectFit: 'cover', minHeight: '380px', borderRadius: '8px', filter: 'grayscale(100%) brightness(0.95)'}} alt="Warehouse Building" />
          </div>
        </div>

        <div className="mb-16">
           <h3 className="text-orange font-playfair mb-6 text-2xl" style={{fontWeight: 400}}>Available Dimensions</h3>
           <div className="cards-grid-6">
              {[
                { name: "Building B", totalArea: "92,044 sq.ft.", facing: "West" },
                { name: "Building C", totalArea: "1,80,000 sq.ft.", facing: "West" },
                { name: "Building E", totalArea: "1,55,000 sq.ft.", facing: "North" },
                { name: "Building G", totalArea: "1,80,000 sq.ft.", facing: "East" },
                { name: "Building H", totalArea: "2,50,000 sq.ft.", facing: "North" },
                { name: "Building I", totalArea: "3,30,000 sq.ft.", facing: "North" }
              ].map((bldg, index) => (
                <div key={index} className="dim-card">
                  <h4>{bldg.name}</h4>
                  <p className="text-sm font-light mb-2">Total Area : {bldg.totalArea}</p>
                  <p className="text-sm font-light">Facing : {bldg.facing}</p>
                </div>
              ))}
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

export default Warehouse;
