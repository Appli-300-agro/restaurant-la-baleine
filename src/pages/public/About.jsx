import React from 'react';
import { Target, Lightbulb, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-dark mb-6">À Propos de La Baleine Bleue de Massa</h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
            Situé en zone aval du Port de Douala (Youpwe), notre établissement est une véritable institution culinaire 
            offrant une vue imprenable sur le Wouri et le meilleur de la gastronomie camerounaise.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-primary">Notre Histoire</h2>
            <p className="text-secondary leading-relaxed">
              Depuis des années, La Baleine (La Baleine Bleue de Massa) accueille les gourmets dans un cadre hangar-chic 
              ventilé par les brises du Wouri. Notre mission est de préserver et sublimer les saveurs de notre terroir. 
              Célèbre pour notre Ndolè royal et nos buffets dominicaux, nous offrons une expérience conviviale où la musique live 
              et la bonne chère se rencontrent pour créer des souvenirs inoubliables.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <Target className="text-primary h-8 w-8" />
                <h4 className="font-bold">Tradition</h4>
                <p className="text-xs text-secondary">Le respect des recettes ancestrales pour un goût authentique.</p>
              </div>
              <div className="space-y-2">
                <ShieldCheck className="text-primary h-8 w-8" />
                <h4 className="font-bold">Qualité</h4>
                <p className="text-xs text-secondary">Des produits frais sélectionnés chaque matin au marché de Youpwe.</p>
              </div>
            </div>
          </div>
          <div className="bg-primary/5 rounded-3xl p-8 border-2 border-primary/10 border-dashed relative overflow-hidden">
            <h3 className="text-xl font-bold mb-6 text-secondary-dark relative z-10">Nos Incontournables</h3>
            <ul className="grid grid-cols-1 gap-3 relative z-10">
              {[
                "Ndolè Royal aux Crevettes & Viande",
                "Poisson Braisé (Bar, Capitaine) du Wouri",
                "Buffet Gastronomique à Volonté (Dimanche)",
                "Espace Snack & Bar Ouvert 24h/24",
                "Soirées Musique Live avec Orchestres",
                "Service de Privatisation pour Événements",
                "Vue Panoramique sur le Fleuve Wouri",
                "Service Traiteur Professionnel"
              ].map(item => (
                <li key={item} className="flex items-center text-sm text-secondary font-medium">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 mb-10 text-center bg-primary p-16 rounded-[2rem] text-white">
        <h2 className="text-3xl font-bold mb-6">Prêt pour une escale gourmande au bord du Wouri ?</h2>
        <p className="text-primary-light mb-8 max-w-2xl mx-auto">
          Que ce soit pour un déjeuner d'affaires, un dîner romantique ou un buffet en famille, 
          notre équipe vous attend avec le meilleur de la cuisine camerounaise.
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
          Réserver une table
        </button>
      </section>
    </div>
  );
};

export default About;
