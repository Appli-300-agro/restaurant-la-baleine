import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-dark text-slate-300 py-12 no-print">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-white text-lg font-heading font-bold mb-4">La Baleine Bleue de Massa</h3>
          <p className="text-sm leading-relaxed text-slate-400">
            L'institution gastronomique au bord du Wouri. Spécialiste du Ndolè royal, des grillades de prestige et des buffets festifs à Youpwe.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-medium mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
            <li><Link to="/a-propos" className="hover:text-white transition-colors">À Propos</Link></li>
            <li><Link to="/catalogue" className="hover:text-white transition-colors">La Carte</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-medium mb-4">Légal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/cgv" className="hover:text-white transition-colors">CGV</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-medium mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Douala, Youpwe (Zone Port)</li>
            <li>Face à la Base Navale</li>
            <li>contact@labaleine-massa.com</li>
            <li>+237 6 94 37 14 60 / 6 99 54 70 87</li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="https://wa.me/237694371460" target="_blank" rel="noopener" className="hover:text-primary transition-colors"><MessageCircle className="w-5 h-5" /></a>
            <a href="https://www.facebook.com/lerestaurantlabaleine" target="_blank" rel="noopener" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700 mt-12 pt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} La Baleine Bleue de Massa. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
