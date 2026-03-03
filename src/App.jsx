import React from 'react';
import './index.css';

import Hero from './components/Hero';
import AboutIndustrial from './components/AboutIndustrial';
import AboutDeveloper from './components/AboutDeveloper';
import LocationAdvantage from './components/LocationAdvantage';
import IndustrialBuilding from './components/IndustrialBuilding';
import Warehouse from './components/Warehouse';
import Industries from './components/Industries';
import FloorPlan from './components/FloorPlan';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Hero />
      <AboutIndustrial />
      <AboutDeveloper />
      <LocationAdvantage />
      <IndustrialBuilding />
      <Warehouse />
      <Industries />
      <FloorPlan />
      <Footer />
    </div>
  );
}

export default App;
