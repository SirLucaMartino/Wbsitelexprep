import React from 'react';
import { Brain, Scale, Users, BookOpen } from 'lucide-react';

const services = [
  {
    title: 'Quiz Legal',
    description: 'Pon a prueba tus conocimientos con preguntas de opción múltiple actualizadas.',
    icon: Brain,
    color: 'bg-blue-500',
  },
  {
    title: 'Práctica',
    description: 'Ejercicios prácticos para mejorar tu comprensión y velocidad de respuesta.',
    icon: Scale,
    color: 'bg-green-500',
  },
  {
    title: 'Casos de Estudio',
    description: 'Analiza casos reales y mejora tu criterio legal con ejemplos prácticos.',
    icon: BookOpen,
    color: 'bg-purple-500',
  },
  {
    title: 'Tutoría Personalizada',
    description: 'Conecta con expertos en derecho para resolver tus dudas específicas.',
    icon: Users,
    color: 'bg-red-500',
  },
];

const Services = () => {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Herramientas completas para tu preparación profesional
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className={`${service.color} rounded-lg p-3 inline-block`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{service.title}</h3>
                <p className="mt-2 text-base text-gray-500">{service.description}</p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-[#ff951c] hover:text-[#e68718] font-medium inline-flex items-center"
                  >
                    Saber más
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;