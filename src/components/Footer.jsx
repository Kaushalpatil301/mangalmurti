import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* FOOTER */}
      <footer className="footer-main">
        <div className="container">
          <div className="footer-grid">
            
            {/* Col 1: Map Snippet */}
            <div>
               <iframe
                 src="https://www.openstreetmap.org/export/embed.html?bbox=73.0100%2C19.2700%2C73.0700%2C19.3200&layer=mapnik&marker=19.2987%2C73.0400"
                 className="footer-map-img"
                 title="Bhiwandi Location Map"
                 style={{border:0}}
                 loading="lazy">
               </iframe>
            </div>

            {/* Col 2: Office Address */}
            <div>
               <h3 className="footer-heading">Office Address</h3>
               <p className="footer-text">
                 Savande Near Tandoori Garden,<br/>
                 Bhinar Nasik-Bhiwandi Bypass,<br/>
                 Vadape-Bhiwandi Link Road,<br/>
                 Bhiwandi, Thane - 421302.<br/>
                 Maharashtra
               </p>
            </div>

            {/* Col 3: Phone */}
            <div>
               <h3 className="footer-heading">Phone</h3>
               {["+91 7293935393", "+91 7293936393", "+91 9619491310"].map((phone, i) => (
                 <p key={i} className="footer-text">{phone}</p>
               ))}
            </div>

            {/* Col 4: Enquire With Us */}
            <div>
               <h3 className="footer-heading">Enquire With Us</h3>
               <form onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Full Name" className="footer-form-input" />
                  <input type="email" placeholder="Email" className="footer-form-input" />
                  <input type="tel" placeholder="Number" className="footer-form-input" />
                  <button type="submit" className="footer-submit mt-2">Request Callback</button>
               </form>
            </div>

            {/* Col 5: Other Documents */}
            <div>
               <h3 className="footer-heading">Other Documents</h3>
               {["Brochure. pdf", "Layout. pdf"].map((doc, i) => (
                 <button key={i} className="footer-doc-btn">{doc}</button>
               ))}
            </div>

          </div>
        </div>
      </footer>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
         <div className="container flex justify-between items-center" style={{width: '100%'}}>
           <div className="copyright">Copyright © Mangalmurti</div>
           <div className="social-icons">
             <a href="#" className="social-icon"><Facebook size={32} strokeWidth={1.5} /></a>
             <a href="#" className="social-icon"><Instagram size={32} strokeWidth={1.5} /></a>
             <a href="#" className="social-icon"><Youtube size={32} strokeWidth={1.5} /></a>
           </div>
         </div>
      </div>
    </>
  );
};

export default Footer;
