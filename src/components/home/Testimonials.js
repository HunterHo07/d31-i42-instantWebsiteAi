'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef(null);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      quote:
        "I was up against a deadline and needed a website fast. instantWebsiteAi delivered a professional site in literally minutes. I couldn't believe how good it looked with just my logo and business name.",
      author: 'Sarah Johnson',
      role: 'Freelance Designer',
      avatar: '/images/testimonials/woman1.jpg',
    },
    {
      quote:
        "As a restaurant owner, I don't have time to learn website builders. This was exactly what I needed - I entered my restaurant name, uploaded our logo, and boom - a beautiful website that looks like we paid thousands for it.",
      author: 'Michael Chen',
      role: 'Restaurant Owner',
      avatar: '/images/testimonials/man1.jpg',
    },
    {
      quote:
        "The 7-day design guarantee is what sold me. They made tweaks until everything was perfect, and now I have a site that perfectly represents my consulting business. Worth every penny.",
      author: 'Alicia Rodriguez',
      role: 'Business Consultant',
      avatar: '/images/testimonials/woman2.jpg',
    },
    {
      quote:
        "I've tried Wix, Squarespace, and even hired a freelancer before. Nothing was as fast or as easy as instantWebsiteAi. I had my law practice online in under an hour.",
      author: 'David Thompson',
      role: 'Attorney',
      avatar: '/images/testimonials/man2.jpg',
    },
  ];

  useEffect(() => {
    // Auto-rotate testimonials
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [testimonials.length]);

  useEffect(() => {
    if (!testimonialsRef.current) return;

    // Animate the active testimonial
    gsap.fromTo(
      '.testimonial-card.active',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    );
  }, [activeIndex]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  return (
    <section
      ref={testimonialsRef}
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Our Customers <span className="text-primary">Say</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Don't just take our word for it. Here's what people are saying about instantWebsiteAi.
          </motion.p>
        </div>

        <div className="relative h-[300px] md:h-[250px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card absolute inset-0 transition-opacity duration-500 ${
                index === activeIndex ? 'opacity-100 active' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-10 max-w-3xl mx-auto border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                    />
                  </div>
                  <div className="flex-1">
                    <svg
                      className="h-8 w-8 text-primary/20 mb-3"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex
                  ? 'bg-primary'
                  : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
