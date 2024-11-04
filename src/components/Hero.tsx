import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-white pt-16">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
          alt="Law books and gavel"
        />
        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Prepárate para el éxito en tu examen de grado
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
          LexPrep combina la inteligencia artificial con métodos probados de estudio para maximizar tu preparación.
          Domina el derecho con nuestra plataforma personalizada.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="#features"
            className="bg-[#ff951c] hover:bg-[#e68718] text-white px-8 py-3 rounded-md text-base font-medium inline-flex items-center transition-colors"
          >
            Comienza ahora
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="text-white hover:text-[#ff951c] px-4 py-2 text-base font-medium transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;