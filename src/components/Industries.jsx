import React from 'react';
import { Printer, Package, Recycle, Gem, Shirt, Plug, Tv, RadioTower, Sofa, Footprints, Pill, Cog, Car, Ship, ShoppingCart, Sparkles } from 'lucide-react';

const Industries = () => {
  const industriesList = [
    { icon: <Printer size={36} strokeWidth={1.2} />, title: "Printing" },
    { icon: <Package size={36} strokeWidth={1.2} />, title: "Packaging" },
    { icon: <Recycle size={36} strokeWidth={1.2} />, title: "Plastic" },
    { icon: <Gem size={36} strokeWidth={1.2} />, title: "Jewelry" },
    { icon: <Shirt size={36} strokeWidth={1.2} />, title: "Garment" },
    { icon: <Plug size={36} strokeWidth={1.2} />, title: "Electrical" },
    { icon: <Tv size={36} strokeWidth={1.2} />, title: "Home Appliance" },
    { icon: <RadioTower size={36} strokeWidth={1.2} />, title: "Telecom" },
    { icon: <Sofa size={36} strokeWidth={1.2} />, title: "Furniture" },
    { icon: <Footprints size={36} strokeWidth={1.2} />, title: "Footwear" },
    { icon: <Pill size={36} strokeWidth={1.2} />, title: "Pharmaceuticals" },
    { icon: <Cog size={36} strokeWidth={1.2} />, title: "Engineering" },
    { icon: <Car size={36} strokeWidth={1.2} />, title: "Automobile" },
    { icon: <Ship size={36} strokeWidth={1.2} />, title: "Import/Export" },
    { icon: <ShoppingCart size={36} strokeWidth={1.2} />, title: "E-Commerce" },
    { icon: <Sparkles size={36} strokeWidth={1.2} />, title: "Cosmetic" },
  ];

  return (
    <section className="py-16 bg-white" id="industries">
      <div className="container mt-6">
        <h2 className="section-title text-orange font-playfair mb-2" style={{fontSize: '2.5rem'}}>Industries we cater to</h2>
        
        <div className="industries-grid">
           {industriesList.map((ind, i) => (
              <div key={i} className="industry-card shadow-sm">
                 <div className="text-gray-800 mb-2">
                   {ind.icon}
                 </div>
                 <span>{ind.title}</span>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
