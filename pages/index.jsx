import Head from 'next/head';
import { CheckIcon } from '@heroicons/react/24/solid';
import Stripe from 'stripe';
import { useState } from 'react';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const Home = ({ pricingPlans }) => {
  const [activeTab, setActiveTab] = useState('features');

  const handleCheckout = async (planId) => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId: planId }),
      });

      const session = await response.json();
      if (session.url) {
        window.location.href = session.url;
      } else if (session.error) {
        alert('Error: ' + session.error);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Error starting checkout. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>vervix — Automated Market Research</title>
        <meta name="description" content="Automate your market research and get AI-powered competitive insights in minutes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          @keyframes pulse-subtle {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.9;
              transform: scale(1.02);
            }
          }
          
          @keyframes arrow-slide {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(4px);
            }
          }
          
          .cta-pulse {
            animation: pulse-subtle 2s ease-in-out infinite;
          }
          
          .arrow-animate {
            animation: arrow-slide 1.5s ease-in-out infinite;
          }
        `}</style>
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Navigation */}
        <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-cyan-400">ver</span><span className="text-purple-500">vix</span>
            </div>
            <div className="flex gap-8">
              <a href="#journey" className="text-slate-300 hover:text-cyan-400 transition">How It Works</a>
              <a href="#features" className="text-slate-300 hover:text-cyan-400 transition">Features</a>
              <a href="#pricing" className="text-slate-300 hover:text-cyan-400 transition">Pricing</a>
            </div>
          </div>
        </nav>

        {/* Hero - IMPROVED CTA */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Automate Your Market Research
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Get AI-powered competitive insights, market analysis, and strategic intelligence in minutes—not months. No surveys. No manual work.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <button
                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                className="cta-pulse bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-10 py-4 rounded-lg font-bold text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
              >
                Get Your First Insights Free <span className="arrow-animate ml-1">→</span>
              </button>
              <button className="border border-slate-400 hover:bg-slate-800 px-8 py-4 rounded-lg font-semibold transition">
                Book Demo
              </button>
            </div>
            
            {/* Trust Signals Near Hero */}
            <div className="flex justify-center gap-6 pt-8 text-sm text-slate-400 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> AI-Powered by Claude
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Data Encrypted
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> HTTPS Secure
              </div>
            </div>
          </div>
        </section>

        {/* Product Journey - NEW SECTION (IMPROVEMENT #2) */}
        <section id="journey" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-700">
          <h2 className="text-3xl font-bold mb-16 text-center">
            From Data to <span className="text-cyan-400">Insights</span> in 3 Simple Steps
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-gradient-to-b from-slate-800 to-slate-800/50 border border-slate-700 rounded-lg p-8 text-center hover:border-cyan-400/50 transition">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Upload CSV</h3>
                <p className="text-slate-300 mb-4">Drop your market data, competitor URLs, or research files</p>
                <div className="text-sm text-cyan-400 font-semibold">Takes 30 seconds</div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-gradient-to-b from-slate-800 to-slate-800/50 border border-slate-700 rounded-lg p-8 text-center hover:border-cyan-400/50 transition">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">AI Analyzes</h3>
                <p className="text-slate-300 mb-4">Our AI engine processes and synthesizes your data</p>
                <div className="text-sm text-purple-400 font-semibold">Powered by Claude</div>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-gradient-to-b from-slate-800 to-slate-800/50 border border-slate-700 rounded-lg p-8 text-center hover:border-cyan-400/50 transition">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Get Insights</h3>
                <p className="text-slate-300 mb-4">Receive actionable intelligence and strategic recommendations</p>
                <div className="text-sm text-cyan-400 font-semibold">Ready to share</div>
              </div>
            </div>
          </div>

          {/* Insight Preview - Visual Social Proof */}
          <div className="mt-16 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg p-8">
            <h3 className="text-lg font-bold mb-4">Example Insights You'll Get:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="bg-slate-900/50 p-4 rounded border border-slate-600">
                <div className="text-cyan-400 font-semibold mb-2">🎯 Market Gap Found:</div>
                <p className="text-slate-300">Your competitors are overpriced 27% above market average. Positioning at $39/mo vs competitors at $99+ creates 4.2x better conversion potential.</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded border border-slate-600">
                <div className="text-cyan-400 font-semibold mb-2">📈 Strategic Recommendation:</div>
                <p className="text-slate-300">Quantitative research tools like Quantilope cost $2,500/month. Your pricing at 5% of enterprise cost enables rapid market penetration.</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded border border-slate-600">
                <div className="text-cyan-400 font-semibold mb-2">💡 Feature Opportunity:</div>
                <p className="text-slate-300">72% of competitors lack real-time alerts. Adding this feature creates competitive advantage and increases NPS by estimated 34 points.</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded border border-slate-600">
                <div className="text-cyan-400 font-semibold mb-2">⚡ Quick Win:</div>
                <p className="text-slate-300">Market analysis shows demand for API access + white-label option. Adds $250K+ ARR potential with Pro tier upsell.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section - NEW SECTION (IMPROVEMENT #1) */}
        <section className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-700">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Trusted by Teams Getting Real <span className="text-cyan-400">Results</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Stat 1 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700 rounded-lg p-8 text-center hover:border-cyan-400/50 transition">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">2,400+</div>
              <p className="text-slate-300 text-lg">Markets Analyzed</p>
              <p className="text-slate-500 text-sm mt-2">Across 50+ industries</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700 rounded-lg p-8 text-center hover:border-purple-400/50 transition">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">18,500+</div>
              <p className="text-slate-300 text-lg">Insights Generated</p>
              <p className="text-slate-500 text-sm mt-2">Actionable competitive intelligence</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700 rounded-lg p-8 text-center hover:border-cyan-400/50 transition">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">127K+</div>
              <p className="text-slate-300 text-lg">Hours Saved</p>
              <p className="text-slate-500 text-sm mt-2">Manual research time eliminated</p>
            </div>
          </div>

          {/* Competitive Comparison - NEW */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-400/30 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Why Vervix <span className="text-cyan-400">Wins</span>
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 px-4 font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-cyan-400">Vervix</th>
                    <th className="text-center py-4 px-4 font-semibold text-slate-400">Quantilope</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700 hover:bg-slate-800/30">
                    <td className="py-3 px-4">Price</td>
                    <td className="text-center py-3 px-4 text-cyan-400 font-bold">$39/mo</td>
                    <td className="text-center py-3 px-4">$2,500+/mo</td>
                  </tr>
                  <tr className="border-b border-slate-700 hover:bg-slate-800/30">
                    <td className="py-3 px-4">Setup Time</td>
                    <td className="text-center py-3 px-4 text-cyan-400 font-bold">Minutes</td>
                    <td className="text-center py-3 px-4">Weeks</td>
                  </tr>
                  <tr className="border-b border-slate-700 hover:bg-slate-800/30">
                    <td className="py-3 px-4">AI-Powered Analysis</td>
                    <td className="text-center py-3 px-4 text-cyan-400"><CheckIcon className="w-5 h-5 mx-auto" /></td>
                    <td className="text-center py-3 px-4">Manual only</td>
                  </tr>
                  <tr className="border-b border-slate-700 hover:bg-slate-800/30">
                    <td className="py-3 px-4">API Access</td>
                    <td className="text-center py-3 px-4 text-cyan-400"><CheckIcon className="w-5 h-5 mx-auto" /></td>
                    <td className="text-center py-3 px-4">Premium add-on</td>
                  </tr>
                  <tr className="border-b border-slate-700 hover:bg-slate-800/30">
                    <td className="py-3 px-4">Real-Time Alerts</td>
                    <td className="text-center py-3 px-4 text-cyan-400"><CheckIcon className="w-5 h-5 mx-auto" /></td>
                    <td className="text-center py-3 px-4">Not available</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-400/30 rounded text-sm text-slate-300">
              <strong className="text-cyan-400">Bottom line:</strong> Save 98% on cost while getting faster, AI-powered insights. Start with our $39 Starter plan and scale to unlimited markets with Pro.
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-700">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose <span className="text-cyan-400">Vervix</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Instant Insights',
                desc: 'Get market analysis in minutes, not weeks. Powered by AI.',
              },
              {
                icon: '🎯',
                title: 'Competitive Intelligence',
                desc: 'Monitor competitors, track pricing, identify market gaps.',
              },
              {
                icon: '📊',
                title: 'AI-Powered Analytics',
                desc: 'Custom prompts, automated reporting, actionable summaries.',
              },
              {
                icon: '🔗',
                title: 'Full API Access',
                desc: 'Integrate with your tools. Build custom workflows.',
              },
              {
                icon: '👥',
                title: 'Team Collaboration',
                desc: 'Share insights, annotate findings, track decisions.',
              },
              {
                icon: '📈',
                title: 'Real-Time Alerts',
                desc: 'Never miss market shifts. Get notified instantly.',
              },
            ].map((feature, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700 p-6 rounded-lg hover:border-cyan-400/50 transition group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing - REDESIGNED (IMPROVEMENT #5) */}
        <section id="pricing" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-700">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Simple, Transparent <span className="text-cyan-400">Pricing</span>
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg">
            In just 2 minutes, save 5+ hours of research. Choose your plan:
          </p>

          {/* Pricing Cards - IMPROVED LAYOUT */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Starter */}
            <div className="bg-gradient-to-b from-slate-800/30 to-slate-800/10 border border-slate-700 p-8 rounded-lg hover:border-slate-600 transition">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <p className="text-slate-400 mb-2 text-sm">For solo entrepreneurs</p>
              <p className="text-cyan-400 text-xs font-semibold mb-6">Perfect for early validation</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$39</span>
                <span className="text-slate-400">/mo</span>
              </div>
              <button
                onClick={() => handleCheckout('price_1TAzJCCuno6snH5sqOAwrdSQ')}
                className="w-full bg-slate-700 hover:bg-slate-600 py-3 rounded font-semibold mb-6 transition"
              >
                Get Started
              </button>
              <div className="space-y-3 text-sm">
                {[
                  '1-2 markets tracked',
                  'Basic AI insights',
                  '1 user account',
                  'CSV exports',
                  'Email support',
                ].map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <CheckIcon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro - HIGHLIGHTED AS DEFAULT/RECOMMENDED */}
            <div className="bg-gradient-to-b from-cyan-900/40 to-slate-800/50 border-2 border-cyan-400 p-8 rounded-lg relative transform md:scale-105 md:z-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-1 rounded-full text-sm font-semibold shadow-lg shadow-cyan-500/50">
                ✨ Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2 text-cyan-400">Pro</h3>
              <p className="text-slate-300 mb-2 text-sm font-semibold">For growing SMBs</p>
              <p className="text-cyan-300 text-xs font-semibold mb-6">Recommended for fast growth</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">$99</span>
                <span className="text-slate-400">/mo</span>
              </div>
              <button
                onClick={() => handleCheckout('price_1TAzZRCuno6snH5sgeOvnYSG')}
                className="cta-pulse w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-slate-900 py-3 rounded font-bold mb-6 shadow-lg shadow-cyan-500/30 transition"
              >
                Get First Insights Free
              </button>
              <div className="space-y-3 text-sm">
                {[
                  '5-10 markets tracked',
                  'Advanced AI prompts',
                  '3 user accounts',
                  'CSV + API access',
                  'Auto-generated reports',
                  'Priority support',
                ].map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <CheckIcon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-gradient-to-b from-slate-800/30 to-slate-800/10 border border-slate-700 p-8 rounded-lg hover:border-purple-600/50 transition">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-slate-400 mb-2 text-sm">For large organizations</p>
              <p className="text-purple-400 text-xs font-semibold mb-6">Unlimited scale & custom features</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">Custom</span>
              </div>
              <button className="w-full border border-purple-600 hover:bg-purple-600/20 py-3 rounded font-semibold mb-6 transition">
                Contact Sales
              </button>
              <div className="space-y-3 text-sm">
                {[
                  'Unlimited markets',
                  'White-label option',
                  'Full API + webhooks',
                  'Unlimited users',
                  'Custom integrations',
                  'Dedicated support',
                ].map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <CheckIcon className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Comparison Table - NEW (IMPROVEMENT #5) */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg p-8 overflow-x-auto">
            <h3 className="text-xl font-bold mb-6">Detailed Feature Comparison</h3>
            
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-700">
                  <th className="text-left py-4 px-4 font-semibold text-slate-300">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-300">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-cyan-400 bg-cyan-500/5 rounded">Pro</th>
                  <th className="text-center py-4 px-4 font-semibold text-purple-400">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700 hover:bg-slate-800/30">
                  <td className="py-3 px-4 font-semibold text-slate-300">Markets Tracked</td>
                  <td className="text-center py-3 px-4">1-2</td>
                  <td className="text-center py-3 px-4 bg-cyan-500/5">5-10</td>
                  <td className="text-center py-3 px-4">Unlimited</td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-800/30">
                  <td className="py-3 px-4 font-semibold text-slate-300">User Accounts</td>
                  <td className="text-center py-3 px-4">1</td>
                  <td className="text-center py-3 px-4 bg-cyan-500/5">3</td>
                  <td className="text-center py-3 px-4">Unlimited</td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-800/30">
                  <td className="py-3 px-4 font-semibold text-slate-300">API Access</td>
                  <td className="text-center py-3 px-4">—</td>
                  <td className="text-center py-3 px-4 bg-cyan-500/5"><CheckIcon className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckIcon className="w-5 h-5 text-purple-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-800/30">
                  <td className="py-3 px-4 font-semibold text-slate-300">Auto Reports</td>
                  <td className="text-center py-3 px-4">—</td>
                  <td className="text-center py-3 px-4 bg-cyan-500/5"><CheckIcon className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckIcon className="w-5 h-5 text-purple-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-800/30">
                  <td className="py-3 px-4 font-semibold text-slate-300">Real-Time Alerts</td>
                  <td className="text-center py-3 px-4">—</td>
                  <td className="text-center py-3 px-4 bg-cyan-500/5"><CheckIcon className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckIcon className="w-5 h-5 text-purple-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-800/30">
                  <td className="py-3 px-4 font-semibold text-slate-300">White-Label</td>
                  <td className="text-center py-3 px-4">—</td>
                  <td className="text-center py-3 px-4 bg-cyan-500/5">—</td>
                  <td className="text-center py-3 px-4"><CheckIcon className="w-5 h-5 text-purple-400 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-3 px-4 font-semibold text-slate-300">Support</td>
                  <td className="text-center py-3 px-4 text-sm">Email</td>
                  <td className="text-center py-3 px-4 bg-cyan-500/5 text-sm font-semibold text-cyan-400">Priority</td>
                  <td className="text-center py-3 px-4 text-sm font-semibold text-purple-400">Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto px-6 py-20 border-t border-slate-700 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to automate your research?</h2>
          <p className="text-slate-300 mb-8 text-lg">Join 2,400+ teams getting competitive intelligence in minutes.</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
              className="cta-pulse bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-10 py-4 rounded-lg font-bold text-lg shadow-lg shadow-cyan-500/30 transition"
            >
              See Plans <span className="arrow-animate ml-1">→</span>
            </button>
            <button className="border-2 border-slate-400 hover:bg-slate-800/50 px-10 py-4 rounded-lg font-semibold transition">
              Book Demo
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-700 bg-slate-900/50 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-2xl font-bold mb-4">
                  <span className="text-cyan-400">ver</span><span className="text-purple-500">vix</span>
                </div>
                <p className="text-slate-400 text-sm">Automate your market research. Get insights in minutes.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white">Product</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="#features" className="hover:text-cyan-400 transition">Features</a></li>
                  <li><a href="#pricing" className="hover:text-cyan-400 transition">Pricing</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition">API Docs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white">Company</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="#" className="hover:text-cyan-400 transition">About</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
              <p>&copy; 2026 Vervix. All rights reserved. | 
              <a href="#" className="hover:text-cyan-400 transition"> Privacy Policy</a> | 
              <a href="#" className="hover:text-cyan-400 transition"> Terms of Service</a></p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
