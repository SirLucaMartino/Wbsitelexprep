import React from 'react';
import { Brain, Scale, BookOpen, Users } from 'lucide-react';

const features = [
  {
    name: 'IA Avanzada',
    description: 'Asistente legal impulsado por IA que responde tus dudas y te guía en tu aprendizaje.',
    icon: Brain,
  },
  {
    name: 'Casos Prácticos',
    description: 'Analiza casos reales y mejora tu criterio legal con ejercicios prácticos.',
    icon: Scale,
  },
  {
    name: 'Material Actualizado',
    description: 'Contenido actualizado y alineado con los últimos cambios en la legislación.',
    icon: BookOpen,
  },
  {
    name: 'Tutores Expertos',
    description: 'Conecta con profesionales del derecho para resolver tus dudas específicas.',
    icon: Users,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Tu éxito es nuestra prioridad
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Descubre cómo LexPrep revoluciona la manera de prepararte para tu examen de grado.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff951c] text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;