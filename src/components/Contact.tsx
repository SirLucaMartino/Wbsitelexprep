import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">Contáctanos</h2>
          <p className="mt-4 text-center text-xl text-gray-500">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte
          </p>

          <form name="contact" method="POST" data-netlify="true" className="mt-12 grid grid-cols-1 gap-y-6">
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ff951c] focus:ring-[#ff951c] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ff951c] focus:ring-[#ff951c] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ff951c] focus:ring-[#ff951c] sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ff951c] hover:bg-[#e68718] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff951c]"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;