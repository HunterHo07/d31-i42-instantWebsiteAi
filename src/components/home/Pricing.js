'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for trying out the platform',
      price: {
        monthly: 0,
        annual: 0,
      },
      features: [
        'Browse templates',
        'Generate live preview',
        'Download static HTML',
        'No login required',
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Launch',
      description: 'Everything you need to launch your site',
      price: {
        monthly: 14,
        annual: 9,
      },
      features: [
        'Host on yourname.instantweb.ai',
        '7-day unlimited design tweaks',
        'Live deployment handled by us',
        'Simple admin panel',
        'Basic analytics',
      ],
      cta: 'Get Started',
      popular: true,
      badge: 'Most Popular',
    },
    {
      name: 'Pro',
      description: 'For businesses that need more customization',
      price: {
        monthly: 89,
        annual: 89,
      },
      features: [
        'Everything in Launch plan',
        'Custom layout or visual polish',
        'Priority support',
        'Advanced analytics',
        'Custom domain setup',
      ],
      cta: 'Go Pro',
      popular: false,
      oneTime: true,
    },
  ];

  const addOns = [
    {
      name: 'Starter Support',
      price: 5,
      period: 'day',
      description: '1-day access to unlimited minor edit requests',
    },
    {
      name: 'Flex Week',
      price: 19,
      period: 'week',
      description: 'Unlimited reasonable change requests for 7 days',
    },
    {
      name: 'Monthly Partner',
      price: 39,
      period: 'month',
      description: 'Ongoing change support with priority turnaround',
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Simple, Transparent <span className="text-primary">Pricing</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            No hidden fees, no complicated tiers. Just what you need to get your website online.
          </motion.p>

          {/* Billing toggle */}
          <div className="mt-8 flex items-center justify-center">
            <span
              className={`mr-3 text-sm ${
                !isAnnual
                  ? 'font-medium text-gray-900 dark:text-white'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Monthly
            </span>
            <button
              type="button"
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                isAnnual ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              role="switch"
              aria-checked={isAnnual}
              onClick={toggleBilling}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                }`}
              ></span>
            </button>
            <span
              className={`ml-3 text-sm ${
                isAnnual
                  ? 'font-medium text-gray-900 dark:text-white'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Annual <span className="text-green-500 font-medium">(Save 35%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border ${
                plan.popular
                  ? 'border-primary md:scale-105 z-10'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-2 text-sm font-medium">
                  {plan.badge}
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 h-12">
                  {plan.description}
                </p>
                <div className="mt-6 mb-8">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ${plan.price[isAnnual ? 'annual' : 'monthly']}
                  </span>
                  {plan.price[isAnnual ? 'annual' : 'monthly'] > 0 && (
                    <span className="text-gray-600 dark:text-gray-400 ml-2">
                      {plan.oneTime ? 'one-time' : isAnnual ? '/year' : '/month'}
                    </span>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
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
                      <span className="text-gray-600 dark:text-gray-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/demo"
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons section */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              "Done For You" Change Plans
            </motion.h3>
            <motion.p
              className="mt-4 text-lg text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let us handle the edits — no drag-and-drop, no messy builders. Just tell us what you want changed.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {addon.name}
                </h4>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${addon.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">
                    /{addon.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {addon.description}
                </p>
                <Button variant="outline" className="w-full">
                  Add to Plan
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
