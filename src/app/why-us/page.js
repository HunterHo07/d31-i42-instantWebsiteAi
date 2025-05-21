import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Button from '@/components/ui/Button';

export default function WhyUsPage() {
  const reasons = [
    {
      title: 'Instant Live Website Preview',
      description:
        'Unlike other AI tools that generate code or mockups, we give you a fully functional website that's live instantly. No waiting, no setup, just results.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary"
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
      ),
    },
    {
      title: 'No Builder Interface Needed',
      description:
        'We deliver a finished site, not a project for you to work on. No drag-and-drop, no learning curve, no decision fatigue from endless options.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
    {
      title: 'Human-in-the-Loop Quality',
      description:
        'While others rely 100% on AI, we combine AI speed with human expertise. Every site is reviewed by real designers and developers for quality assurance.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: '7-Day Design Request Guarantee',
      description:
        'We tweak your site until you're satisfied. Unlike agencies that charge for every change, we include unlimited design tweaks for 7 days with every site.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: 'Simple, Transparent Pricing',
      description:
        'No hidden fees, no complicated tiers. Our one-time setup fee and minimal annual renewal keeps your site online without subscription fatigue.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Open Source Templates',
      description:
        'All our templates are available on GitHub for free use. We believe in transparency and giving back to the community.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
  ];

  const comparisons = [
    {
      competitor: 'DIY Website Builders',
      us: 'Instant results with no learning curve',
      them: 'Hours of work with steep learning curve',
    },
    {
      competitor: 'AI Code Generators',
      us: 'Complete, hosted website ready to use',
      them: 'Just code snippets that need implementation',
    },
    {
      competitor: 'Web Design Agencies',
      us: 'Affordable with instant turnaround',
      them: 'Expensive with weeks of waiting',
    },
    {
      competitor: 'Freelance Developers',
      us: 'Consistent quality with guaranteed support',
      them: 'Variable quality with uncertain support',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose <span className="text-primary">instantWebsiteAi</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                We're different from traditional website builders and AI tools. Here's why.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-200 dark:border-gray-700 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                How We Compare
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="py-4 px-6 text-left text-gray-500 dark:text-gray-400 font-medium">
                        Competitor
                      </th>
                      <th className="py-4 px-6 text-left text-primary font-medium">
                        instantWebsiteAi
                      </th>
                      <th className="py-4 px-6 text-left text-gray-500 dark:text-gray-400 font-medium">
                        Them
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((comparison, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 dark:border-gray-700"
                      >
                        <td className="py-4 px-6 text-gray-900 dark:text-white font-medium">
                          {comparison.competitor}
                        </td>
                        <td className="py-4 px-6 text-gray-900 dark:text-white">
                          <div className="flex items-center">
                            <svg
                              className="h-5 w-5 text-green-500 mr-2"
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
                            {comparison.us}
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                          <div className="flex items-center">
                            <svg
                              className="h-5 w-5 text-red-500 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                            {comparison.them}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to experience the difference?
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
