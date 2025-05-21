'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="aurora">
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Ready to launch your website in{' '}
                <span className="text-primary">30 seconds?</span>
              </motion.h2>
              <motion.p
                className="mt-4 text-xl text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join thousands of businesses who have already simplified their web presence with instantWebsiteAi.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button href="/demo" size="lg">
                  Try it Now
                </Button>
                <Button href="/showcase" variant="outline" size="lg">
                  View Examples
                </Button>
              </motion.div>

              <motion.div
                className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">30s</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Setup Time
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Templates
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Support
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">$0</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    To Start
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                className="glass rounded-lg p-6 md:p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  See it in action
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        Enter your business name
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Tell us who you are
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        Upload your logo
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Add your brand identity
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        Get your website instantly
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Live on your own subdomain
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button href="/demo" className="w-full">
                    Try the Demo
                  </Button>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
