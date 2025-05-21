import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Button from '@/components/ui/Button';

export default function RoadmapPage() {
  const phases = [
    {
      title: 'MVP (Live)',
      description: 'Our current offering with core functionality',
      features: [
        'Live preview with name + icon',
        'Admin panel for simple edits',
        'GitHub template hub',
        '7-day edit request window',
        'Subdomain hosting + setup automation',
        'Multi-site user dashboard',
        'Analytics for each site (visits, clicks, uptime)',
        'Public/private access toggle',
      ],
      status: 'current',
    },
    {
      title: 'Phase 1',
      description: 'Enhanced editing and integration capabilities',
      features: [
        'Drag-and-drop editor (optional, for advanced users)',
        'Basic form builder integration',
        'Google Sheet backend support',
        'Enhanced analytics dashboard',
        'Custom domain verification wizard',
        'SEO optimization tools',
        'Social media integration',
      ],
      status: 'upcoming',
    },
    {
      title: 'Phase 2',
      description: 'Content management and AI assistance',
      features: [
        'CMS-ready templates (blog, news, updates)',
        'Real-time editing with save history',
        'AI-assisted content fill (auto text/images)',
        'Advanced image optimization',
        'Multi-language support',
        'A/B testing capabilities',
        'User feedback collection tools',
      ],
      status: 'planned',
    },
    {
      title: 'Phase 3',
      description: 'Ecosystem expansion and marketplace',
      features: [
        'Plugin ecosystem (CRM, eCommerce, chat, analytics)',
        'Template marketplace (sell your own)',
        'White-label + agency dashboard',
        'API for third-party integrations',
        'Advanced user permissions',
        'Custom code injection',
        'Enterprise-grade security features',
      ],
      status: 'future',
    },
  ];

  const statusColors = {
    current: 'bg-green-500',
    upcoming: 'bg-blue-500',
    planned: 'bg-purple-500',
    future: 'bg-gray-500',
  };

  const statusLabels = {
    current: 'Current',
    upcoming: 'Coming Soon',
    planned: 'Planned',
    future: 'Future',
  };

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Product <span className="text-primary">Roadmap</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Our vision for the future of instantWebsiteAi. See what we're working on and what's coming next.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

              <div className="space-y-16">
                {phases.map((phase, index) => (
                  <div key={phase.title} className="relative">
                    <div className="flex items-center justify-center mb-6">
                      <div className={`w-8 h-8 rounded-full ${statusColors[phase.status]} z-10 flex items-center justify-center text-white font-bold`}>
                        {index + 1}
                      </div>
                    </div>

                    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto relative ${
                      index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {phase.title}
                        </h2>
                        <span className={`text-xs font-medium text-white px-2 py-1 rounded-full ${statusColors[phase.status]}`}>
                          {statusLabels[phase.status]}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {phase.description}
                      </p>
                      <div className="space-y-2">
                        {phase.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
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
                            <span className="text-gray-700 dark:text-gray-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-16 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Have a feature request?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We're constantly improving instantWebsiteAi based on user feedback. If there's a feature you'd like to see, let us know!
              </p>
              <Button href="/contact" size="lg">
                Submit Feedback
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
