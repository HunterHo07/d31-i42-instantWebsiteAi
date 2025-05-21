'use client';

import { useState } from 'react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Button from '@/components/ui/Button';

export default function ShowcasePage() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'business', name: 'Business' },
    { id: 'restaurant', name: 'Restaurant' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'blog', name: 'Blog' },
  ];

  const showcaseItems = [
    {
      id: 1,
      title: 'Acme Inc',
      category: 'business',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Professional business website with modern design and clear call-to-actions.',
    },
    {
      id: 2,
      title: 'Bistro Deluxe',
      category: 'restaurant',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Elegant restaurant website featuring menu, reservations, and ambiance photos.',
    },
    {
      id: 3,
      title: 'Jane Designer',
      category: 'portfolio',
      image: 'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Creative portfolio showcasing design work with minimal, elegant layout.',
    },
    {
      id: 4,
      title: 'Tech Gadgets',
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1593344484594-6e7c7bf8fb0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'E-commerce store with product catalog, cart functionality, and secure checkout.',
    },
    {
      id: 5,
      title: 'Travel Tales',
      category: 'blog',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Travel blog with engaging stories, photography, and destination guides.',
    },
    {
      id: 6,
      title: 'Legal Partners',
      category: 'business',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Law firm website with practice areas, attorney profiles, and contact information.',
    },
    {
      id: 7,
      title: 'Sushi Express',
      category: 'restaurant',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Japanese restaurant website with online ordering and delivery options.',
    },
    {
      id: 8,
      title: 'Mark Photographer',
      category: 'portfolio',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Photography portfolio with gallery, services, and booking functionality.',
    },
    {
      id: 9,
      title: 'Fashion Forward',
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Clothing store with lookbooks, size guides, and customer reviews.',
    },
  ];

  const filteredItems = filter === 'all' 
    ? showcaseItems 
    : showcaseItems.filter(item => item.category === filter);

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Website <span className="text-primary">Showcase</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Browse examples of websites created with instantWebsiteAi. From businesses to portfolios, see what's possible.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setFilter(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.description}
                    </p>
                    <Button variant="outline" className="w-full">
                      View Website
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to create your own website?
              </h2>
              <Button href="/demo" size="lg">
                Try it Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
