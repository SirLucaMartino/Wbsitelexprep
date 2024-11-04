import React from 'react';

const posts = [
  {
    title: 'Técnicas efectivas de estudio para el examen de grado',
    excerpt: 'Descubre las mejores estrategias para optimizar tu tiempo de estudio y maximizar resultados.',
    image: 'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?auto=format&fit=crop&q=80',
    category: 'Técnicas de Estudio',
    date: '15 Mar 2024',
  },
  {
    title: 'Actualización: Nuevas reformas constitucionales',
    excerpt: 'Análisis detallado de los cambios más recientes en la legislación y su impacto.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80',
    category: 'Actualización Legal',
    date: '10 Mar 2024',
  },
  {
    title: 'Casos prácticos: Derecho Civil',
    excerpt: 'Ejemplos reales y soluciones para fortalecer tu comprensión del derecho civil.',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80',
    category: 'Casos Prácticos',
    date: '5 Mar 2024',
  },
];

const Blog = () => {
  return (
    <div id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Blog Legal</h2>
          <p className="mt-4 text-xl text-gray-500">
            Mantente actualizado con las últimas noticias y consejos
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.image} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#ff951c]">{post.category}</p>
                  <div className="mt-2">
                    <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                    <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;