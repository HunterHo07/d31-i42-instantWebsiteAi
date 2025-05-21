'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Button from '../ui/Button';

const Hero = () => {
  const heroRef = useRef(null);
  const websitePreviewRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline();

    // Animate the hero section
    tl.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
    })
      .from(
        '.hero-subtitle',
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      .from(
        '.hero-buttons',
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      .from(
        '.website-preview',
        {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.6'
      );

    // Animate the website preview
    if (websitePreviewRef.current) {
      gsap.to('.website-preview-inner', {
        y: -20,
        duration: 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Aurora background effect */}
      <div className="aurora">
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              From name to website in{' '}
              <span className="text-primary">30 seconds</span>
            </motion.h1>
            <motion.p
              className="hero-subtitle mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Just enter your business name, upload a logo, and see your site live instantly. 
              No builders, no code, no drag-and-drop. AI-powered, human-refined.
            </motion.p>
            <motion.div
              className="hero-buttons mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button href="/demo" size="lg">
                Try it Now
              </Button>
              <Button href="/#features" variant="outline" size="lg">
                See Features
              </Button>
            </motion.div>
            <motion.div
              className="mt-8 flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white dark:border-gray-900 flex items-center justify-center text-xs font-medium text-gray-600"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Trusted by 1,000+ businesses
              </span>
            </motion.div>
          </div>

          <div className="website-preview relative" ref={websitePreviewRef}>
            <div className="website-preview-inner relative">
              {/* Browser mockup */}
              <div className="relative rounded-lg shadow-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                {/* Browser toolbar */}
                <div className="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-2 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 flex-1 bg-white dark:bg-gray-800 rounded-full px-4 py-1 text-xs text-gray-600 dark:text-gray-400 truncate">
                    yourname.instantweb.ai
                  </div>
                </div>

                {/* Website preview content */}
                <div className="relative">
                  {/* Website header */}
                  <div className="bg-gradient-to-r from-primary/90 to-secondary/90 text-white p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary font-bold text-xl">
                          A
                        </div>
                        <div className="font-bold text-xl">Acme Inc</div>
                      </div>
                      <div className="hidden sm:flex space-x-4 text-sm">
                        <div>Home</div>
                        <div>Services</div>
                        <div>About</div>
                        <div>Contact</div>
                      </div>
                    </div>
                    <div className="mt-12 mb-8 text-center">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                        Professional Solutions for Your Business
                      </h2>
                      <p className="text-white/80 max-w-md mx-auto">
                        We provide top-quality services to help your business grow and succeed in today's competitive market.
                      </p>
                      <button className="mt-6 bg-white text-primary px-6 py-2 rounded-md font-medium">
                        Get Started
                      </button>
                    </div>
                  </div>

                  {/* Website content preview */}
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg h-24 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
