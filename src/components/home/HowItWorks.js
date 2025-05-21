'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Button from '../ui/Button';

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    const steps = document.querySelectorAll('.step-item');

    if (steps.length > 0) {
      gsap.from(steps, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: index => (index % 2 === 0 ? -50 : 50),
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Enter Your Business Name',
      description:
        'Start by entering your business name and uploading your logo. This takes just seconds and helps us personalize your website.',
      image: '/images/step1.png',
      placeholder: 'bg-gradient-to-br from-primary/30 to-secondary/30',
    },
    {
      number: '02',
      title: 'Choose a Template',
      description:
        'Browse our collection of professionally designed templates and select the one that best fits your business needs.',
      image: '/images/step2.png',
      placeholder: 'bg-gradient-to-br from-secondary/30 to-accent/30',
    },
    {
      number: '03',
      title: 'Preview Your Website',
      description:
        'Instantly see your website with your business name and logo applied. Make any quick adjustments you want.',
      image: '/images/step3.png',
      placeholder: 'bg-gradient-to-br from-accent/30 to-primary/30',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            How It <span className="text-primary">Works</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Three simple steps to get your professional website up and running in seconds.
          </motion.p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-item grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="inline-block text-sm font-bold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
                  Step {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                  {step.description}
                </p>
                {index === steps.length - 1 && (
                  <Button href="/demo" size="lg">
                    Try it Now
                  </Button>
                )}
              </div>

              <div
                className={`rounded-lg overflow-hidden shadow-xl ${
                  index % 2 === 1 ? 'md:order-1' : ''
                }`}
              >
                {/* Placeholder for actual images */}
                <div
                  className={`${step.placeholder} aspect-video rounded-lg flex items-center justify-center`}
                >
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-white/80">Coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to create your website?
            </h3>
            <Button href="/demo" size="lg">
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
