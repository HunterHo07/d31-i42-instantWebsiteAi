'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Button from '@/components/ui/Button';

export default function DemoPage() {
  const [businessName, setBusinessName] = useState('');
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('business');
  const [isLoading, setIsLoading] = useState(false);
  const [previewReady, setPreviewReady] = useState(false);
  const [viewMode, setViewMode] = useState('desktop');

  const templates = [
    { id: 'business', name: 'Business', description: 'Professional template for businesses' },
    { id: 'restaurant', name: 'Restaurant', description: 'Perfect for restaurants and cafes' },
    { id: 'portfolio', name: 'Portfolio', description: 'Showcase your work and skills' },
    { id: 'ecommerce', name: 'E-commerce', description: 'Sell products online' },
    { id: 'blog', name: 'Blog', description: 'Share your thoughts and ideas' },
    { id: 'agency', name: 'Agency', description: 'For creative and marketing agencies' },
  ];

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setPreviewReady(true);
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Try <span className="text-primary">instantWebsiteAi</span> Now
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Enter your business name, upload a logo, and see your website live in seconds.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
              {!previewReady ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="business-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business-name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your business name"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="logo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Logo (optional)
                    </label>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center justify-center w-32 h-32 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-primary dark:hover:border-primary transition-colors">
                        <input
                          type="file"
                          id="logo"
                          className="hidden"
                          accept="image/*"
                          onChange={handleLogoChange}
                        />
                        {logoPreview ? (
                          <img src={logoPreview} alt="Logo preview" className="w-full h-full object-contain p-2" />
                        ) : (
                          <div className="text-center p-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-10 w-10 mx-auto text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <p className="text-xs mt-2">Upload Logo</p>
                          </div>
                        )}
                      </label>
                      {logoPreview && (
                        <button
                          type="button"
                          className="text-red-500 hover:text-red-700 text-sm"
                          onClick={() => {
                            setLogo(null);
                            setLogoPreview('');
                          }}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Choose a Template
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {templates.map((template) => (
                        <div
                          key={template.id}
                          className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                            selectedTemplate === template.id
                              ? 'border-primary bg-primary/5'
                              : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                          }`}
                          onClick={() => setSelectedTemplate(template.id)}
                        >
                          <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded mb-2 flex items-center justify-center">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {template.name}
                            </span>
                          </div>
                          <h3 className="font-medium text-gray-900 dark:text-white">
                            {template.name}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {template.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Generating your website...
                        </span>
                      ) : (
                        'Generate Website'
                      )}
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      Your Website Preview
                    </h2>
                    <div className="flex space-x-2 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
                      <button
                        className={`px-3 py-1 rounded ${
                          viewMode === 'desktop'
                            ? 'bg-white dark:bg-gray-600 shadow-sm'
                            : 'text-gray-600 dark:text-gray-300'
                        }`}
                        onClick={() => setViewMode('desktop')}
                      >
                        Desktop
                      </button>
                      <button
                        className={`px-3 py-1 rounded ${
                          viewMode === 'mobile'
                            ? 'bg-white dark:bg-gray-600 shadow-sm'
                            : 'text-gray-600 dark:text-gray-300'
                        }`}
                        onClick={() => setViewMode('mobile')}
                      >
                        Mobile
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div
                      className={`border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-300 ${
                        viewMode === 'mobile' ? 'w-[375px]' : 'w-full'
                      }`}
                    >
                      {/* Browser toolbar */}
                      <div className="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-2 flex items-center">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="ml-4 flex-1 bg-white dark:bg-gray-800 rounded-full px-4 py-1 text-xs text-gray-600 dark:text-gray-400 truncate">
                          {businessName.toLowerCase().replace(/\s+/g, '-')}.instantweb.ai
                        </div>
                      </div>

                      {/* Website preview content */}
                      <div className="relative">
                        {/* Website header */}
                        <div className="bg-gradient-to-r from-primary/90 to-secondary/90 text-white p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              {logoPreview ? (
                                <img src={logoPreview} alt="Logo" className="w-10 h-10 rounded-full object-contain bg-white" />
                              ) : (
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary font-bold text-xl">
                                  {businessName ? businessName.charAt(0) : 'A'}
                                </div>
                              )}
                              <div className="font-bold text-xl">{businessName || 'Your Business'}</div>
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
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setPreviewReady(false)}
                    >
                      Edit Details
                    </Button>
                    <Button>
                      Deploy Website
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
