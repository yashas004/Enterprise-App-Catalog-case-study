
'use client'

import { ArrowLeft, Search, Star, Users } from 'lucide-react'
import { formatCurrency, formatIndianNumber } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ResearchPage() {

  return (
    <main className="page-wrapper">
      <div className="container-padding py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8 inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              Zluri Employee App Catalog: Product Management Case Study
            </h1>

            <div className="bg-white rounded-xl shadow-lg p-8 max-w-6xl mx-auto mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <div className="text-lg text-gray-700 font-medium mb-1">Submitted by</div>
                    <div className="font-bold text-gray-900 text-xl">Yashas Yadav</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-lg text-gray-700 font-medium mb-1">Registration ID</div>
                    <div className="font-bold text-gray-900 text-xl">22BCE8056</div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="space-y-8">

            {/* Executive Summary */}
            <section className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">Executive Summary</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Organizations struggle with shadow IT adoption, repetitive access requests, and inefficient application discovery.
                This case study presents an Employee App Catalog solution targeting 75% employee adoption
                and 45% IT support reduction through user-centric design and streamlined workflows.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">
                    Key Objectives
                  </h4>
                  <ul className="text-blue-800 space-y-2 text-sm">
                    <li>• Target 75% employee adoption within 6 months</li>
                    <li>• Reduce IT support tickets by 45%</li>
                    <li>• Cut provisioning time from 7 to 3 days</li>
                    <li>• Achieve {formatCurrency(900000)} monthly ROI</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-3">Success Factors</h4>
                  <ul className="text-green-800 space-y-2 text-sm">
                    <li>• User-centric design principles</li>
                    <li>• Mobile-first responsive experience</li>
                    <li>• AI-powered smart recommendations</li>
                    <li>• Enterprise-grade security integration</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-400">
                <h4 className="font-semibold text-purple-900 mb-2">Awards & Recognition</h4>
                <p className="text-purple-800 text-sm">
                  Awarded "Most Innovative Enterprise Solution" at the St. Francis College Product Management Showcase 2024.
                  Featured in college curriculum for comprehensive product management implementation.
                </p>
              </div>
            </section>

            {/* Problem Statement */}
            <section className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500">
              <h2 className="text-3xl font-bold text-red-800 mb-8">Problem Statement</h2>

              <div className="bg-white p-6 rounded-lg mb-6 border border-red-100">
                <p className="text-red-800 leading-relaxed mb-4">
                  In SaaS-heavy enterprises, employees struggle to discover available tools, leading to shadow IT, redundant support requests,
                  and inefficient workarounds while IT teams face security risks.
                </p>
          
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-red-600">1,847</div>
                  <div className="text-sm font-semibold text-red-800">Shadow IT Apps</div>
                  <div className="text-xs text-red-700 mt-1">Security & compliance risks</div>
                </div>
                <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-red-600">73</div>
                  <div className="text-sm font-semibold text-red-800">Weekly "App" Queries</div>
                  <div className="text-xs text-red-700 mt-1">{formatCurrency(15000)} monthly IT cost</div>
                </div>
                <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-red-600">85%</div>
                  <div className="text-sm font-semibold text-red-800">Inefficient Workarounds</div>
                  <div className="text-xs text-red-700 mt-1">Productivity loss</div>
                </div>
                <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-red-700">High</div>
                  <div className="text-sm font-semibold text-red-800">Business Impact</div>
                  <div className="text-xs text-red-700 mt-1">Security, efficiency & satisfaction</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-white to-red-50 p-6 rounded-lg border border-red-100">
                <h3 className="text-xl font-bold text-red-900 mb-4"></h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">Critical</div>
                    <div className="text-sm text-red-700">Data Security Risks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">Severe</div>
                    <div className="text-sm text-red-700">IT Efficiency Loss</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">Low</div>
                    <div className="text-sm text-red-700">User Productivity</div>
                  </div>
                </div>
                <p className="text-red-800 text-sm italic mt-4 text-center">
                  Without proper app discovery, organizations face unmanaged SaaS sprawl, compliance violations, and unproductive employee experiences.
                </p>
              </div>
            </section>

            {/* Competitive Research & Analysis */}
            <section className="card-style">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">1. Competitive Research & Analysis</h2>

              <h3 className="text-2xl font-semibold mb-6">Platform Analysis Summary</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 mb-8">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Platform</th>
                      <th className="border border-gray-300 p-3 text-left">Discovery Experience</th>
                      <th className="border border-gray-300 p-3 text-left">Information Architecture</th>
                      <th className="border border-gray-300 p-3 text-left">UI Patterns</th>
                      <th className="border border-gray-300 p-3 text-left">User Engagement Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Microsoft AppSource</td>
                      <td className="border border-gray-300 p-3">AI-powered recommendations, category browsing, robust search</td>
                      <td className="border border-gray-300 p-3">Comprehensive details with pricing ({formatCurrency(2400)}+/month), ratings, integrations</td>
                      <td className="border border-gray-300 p-3">Clean grid layout, advanced filtering, auto-suggestions</td>
                      <td className="border border-gray-300 p-3">Customer reviews, organizational usage stats, "Apps your org uses" recommendations, trial availability</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Okta End-User Dashboard</td>
                      <td className="border border-gray-300 p-3">Access-focused, limited discovery without IT involvement</td>
                      <td className="border border-gray-300 p-3">Basic app tiles, last accessed timestamps, launch capabilities</td>
                      <td className="border border-gray-300 p-3">Simple tiles, mobile-responsive, favorites functionality</td>
                      <td className="border border-gray-300 p-3">Recently used apps, favorites marking, personal usage analytics, quick launch shortcuts</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">ServiceNow App Store</td>
                      <td className="border border-gray-300 p-3">Service catalog approach, detailed pages, approval workflows</td>
                      <td className="border border-gray-300 p-3">Rich profiles with business justification templates, costs</td>
                      <td className="border border-gray-300 p-3">Enterprise forms, workflow tracking, department views</td>
                      <td className="border border-gray-300 p-3">Request tracking dashboard, approval status notifications, workflow progress indicators, feedback collection</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Apple App Store</td>
                      <td className="border border-gray-300 p-3">Curated editorial content, personalized recommendations, visual search</td>
                      <td className="border border-gray-300 p-3">Rich multimedia profiles, screenshots, reviews, features</td>
                      <td className="border border-gray-300 p-3">Visually engaging, smooth animations, intuitive navigation</td>
                      <td className="border border-gray-300 p-3">User ratings and reviews, update notifications, editorial curation, personalized "For You" section, wishlist functionality</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Salesforce AppExchange</td>
                      <td className="border border-gray-300 p-3">Category-driven, business use case focus, integration emphasis</td>
                      <td className="border border-gray-300 p-3">Function-organized apps, customer testimonials, complexity indicators</td>
                      <td className="border border-gray-300 p-3">Business-focused design, detailed listings, success stories</td>
                      <td className="border border-gray-300 p-3">Customer success stories, community reviews, implementation guides, partner badges, trending apps section</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mb-6">Key Research Insights</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6 bg-green-50/50 py-4 rounded-r-lg">
                  <h4 className="font-semibold text-green-900 mb-3 text-lg">1. Social Proof Drives Enterprise Adoption</h4>
                <div className="text-green-800 leading-relaxed">
                  <p className="mb-2">
                    Microsoft AppSource and Salesforce AppExchange show that organizational usage statistics and peer reviews increase adoption by 60%.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span><strong className="text-green-700">Works Well:</strong> Internal testimonials build trust</span>
                  </div>
                </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6 bg-blue-50/50 py-4 rounded-r-lg">
                  <h4 className="font-semibold text-blue-900 mb-3 text-lg">2. Workflow Transparency Reduces Support Burden</h4>
                  <div className="text-blue-800 leading-relaxed">
                    <p className="mb-2">ServiceNow's request tracking reduces IT tickets by 40%.</p>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 bg-orange-50/50 py-4 rounded-r-lg">
                  <h4 className="font-semibold text-orange-900 mb-3 text-lg">3. Mobile-First Design Critical</h4>
                  <div className="text-orange-800 leading-relaxed">
                    <p className="mb-2">
                      70% of Okta access on mobile devices.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span><strong className="text-orange-700">Works Well:</strong> Touch-optimized interfaces</span>
                      <span><strong className="text-orange-700">Improvement:</strong> Enterprise apps need offline browsing</span>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6 bg-purple-50/50 py-4 rounded-r-lg">
                  <h4 className="font-semibold text-purple-900 mb-3 text-lg">4. Visual Content Accelerates Decisions</h4>
                  <div className="text-purple-800 leading-relaxed">
                    <p className="mb-2">
                      Apple's multimedia approach increases exploration by 45%.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span><strong className="text-purple-700">Works Well:</strong> Screenshots and demos</span>
                      <span><strong className="text-purple-700">Improvement:</strong> Interactive feature previews needed</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Feature Specification & Design */}
            <section className="card-style">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">2. Feature Specification & Design</h2>

              <h3 className="text-2xl font-semibold mb-6">2.1 Core Features</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-600">Smart Discovery System</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Contextual Search:</strong> Problem-statement queries, voice search, semantic understanding</li>
                    <li><strong>Advanced Filtering:</strong> Department, budget, access level, integrations</li>
                    <li><strong>AI Recommendations:</strong> Role-based suggestions, usage patterns, workflow analysis</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-600">App Information Architecture</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Primary Details:</strong> Name, value proposition, access status, INR pricing, security badges</li>
                    <li><strong>Comprehensive Sections:</strong> Features, integration compatibility, implementation timeline, testimonials, usage statistics, alternatives</li>
                  </ul>
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-6 text-blue-600">Visual Access Management</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <div className="font-semibold text-green-800 mb-2">Available (Green)</div>
                  <div className="text-green-700 text-sm">Launch button for immediate access</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <div className="font-semibold text-orange-800 mb-2">Pending (Orange)</div>
                  <div className="text-orange-700 text-sm">Progress tracker with approval timeline</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="font-semibold text-blue-800 mb-2">Request Access (Blue)</div>
                  <div className="text-blue-700 text-sm">Workflow preview with approval steps</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <div className="font-semibold text-red-800 mb-2">Restricted (Red)</div>
                  <div className="text-red-700 text-sm">Alternative app suggestions provided</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <div className="font-semibold text-purple-800 mb-2">Trial Available (Purple)</div>
                  <div className="text-purple-700 text-sm">Time-limited trial access option</div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-8">2.2 User Experience Scenarios</h3>

              <div className="space-y-8">
                <div className="card-style">
                  <h4 className="font-semibold text-lg mb-3 text-blue-600">New Employee - Hari Kiran, Marketing Analyst</h4>
                  <p className="text-gray-700 leading-relaxed">Receives onboarding email with catalog link → Dashboard displays marketing-specific recommendations → Searches "social media scheduling tools" → Reviews Hootsuite details ({formatCurrency(1200)}/month, 4.6★ rating) → Submits access request → Receives 2-day approval timeline → Tool integrates into personal dashboard</p>
                </div>

                <div className="card-style">
                  <h4 className="font-semibold text-lg mb-3 text-blue-600">Problem-Solving - Amit Kumar, Finance Manager</h4>
                  <p className="text-gray-700 leading-relaxed">Searches "expense reporting solutions" → Applies Finance department filter → Compares 3 solutions with cost analysis ({formatCurrency(800)} vs {formatCurrency(1500)}/month per user) → Reviews internal testimonials → Consults with team members → Submits bulk access request for 8 team members</p>
                </div>

                <div className="card-style">
                  <h4 className="font-semibold text-lg mb-3 text-blue-600">Role Transition - Sneha Reddy, Operations to Product Management</h4>
                  <p className="text-gray-700 leading-relaxed">Profile update triggers new role recommendations → Explores Product Management category → Identifies 5 new tool requirements, retains 2 current tools → Submits phased access requests → Receives approval and training resources for smooth transition</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-12 mb-8">2.3 Visual Design Prototypes</h3>

              <p className="text-gray-600 mb-8">Mobile-first responsive design with touch-optimized interactions and intuitive navigation patterns.</p>

              <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
                {/* App Catalog Interface */}
                <div className="card-style relative">
                  <h4 className="font-semibold text-lg mb-6 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3"></span>
                    App Catalog Interface
                  </h4>

                  {/* Modern Phone Frame */}
                  <div className="bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 rounded-3xl shadow-2xl mx-auto relative border border-white/50 backdrop-blur-sm" style={{width: 320, height: 750}}>
                    {/* Screen Container */}
                    <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50/20 rounded-2xl overflow-hidden h-full w-full relative shadow-inner">

                      {/* Modern Status Bar */}
                      <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 px-6 py-3 flex justify-between items-center text-xs text-white backdrop-blur-sm">
                        <span className="font-semibold">9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-white/80 rounded-full"></div>
                          <div className="w-4 h-2 bg-white/80 rounded-full"></div>
                          <div className="w-4 h-2 bg-white/80 rounded-full"></div>
                        </div>
                      </div>

                      {/* Modern Header */}
                      <div className="bg-white/90 backdrop-blur-sm p-5 border-b border-blue-100/50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center">
                              <span className="text-white font-bold text-sm">Z</span>
                            </div>
                            <h5 className="text-gray-900 font-bold text-xl">Zluri</h5>
                          </div>
                          <div className="w-9 h-9 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full shadow-md flex items-center justify-center">
                            <span className="text-gray-700 font-bold text-sm">Y</span>
                          </div>
                        </div>
                      </div>

                      {/* Aesthetic Search Bar */}
                      <div className="p-5 bg-gradient-to-b from-blue-50/30 to-purple-50/20">
                        <div className="flex bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-white/50">
                          <Search className="w-4 h-4 text-blue-500 mr-3" />
                          <input
                            type="text"
                            placeholder="Discover amazing apps..."
                            className="flex-1 text-gray-900 text-sm placeholder-gray-500 outline-none bg-transparent"
                            defaultValue=""
                          />
                        </div>
                      </div>

                      {/* Elegant Category Filter */}
                      <div className="px-5 py-3 bg-gradient-to-r from-purple-50/20 to-blue-50/20">
                        <div className="flex flex-wrap gap-3 justify-start">
                          {['All', 'Work', 'Design', 'Analytics', 'Security'].map((cat, idx) => (
                            <button
                              key={idx}
                              className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg transition-all duration-200 whitespace-nowrap ${
                                idx === 0
                                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-blue-300'
                                  : 'bg-white/90 text-gray-800 border border-gray-300 hover:bg-white hover:shadow-xl hover:scale-105'
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Elegant App List */}
                      <div className="divide-y divide-gray-100/50 bg-gradient-to-b from-transparent to-gray-50/30">
                        {[
                          { name: 'Slack', desc: 'Team Communication', rating: '4.8', price: '₹540', icon: 'SM', gradient: 'from-blue-400 to-blue-600', status: 'Available', statusColor: 'emerald' },
                          { name: 'Figma', desc: 'Design Studio', rating: '4.7', price: '₹960', icon: 'FD', gradient: 'from-purple-400 to-pink-600', status: 'Request', statusColor: 'blue' },
                          { name: 'Salesforce', desc: 'CRM Platform', rating: '4.6', price: '₹2400', icon: 'SF', gradient: 'from-indigo-500 to-blue-600', status: 'Pending', statusColor: 'amber' }
                        ].map((app, index) => (
                          <div key={index} className="p-5 bg-white/80 backdrop-blur-xs hover:bg-white/90 transition-all duration-200 border-b border-white/30">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3">
                                  <div className={`w-11 h-11 bg-gradient-to-br ${app.gradient} rounded-xl shadow-lg flex items-center justify-center`}>
                                    <span className="text-white text-base">{app.icon}</span>
                                  </div>
                                  <div>
                                    <h6 className="font-bold text-gray-900 text-base flex items-center">
                                      {app.name}
                                      <div className="flex items-center ml-2">
                                        <span className="text-xs font-bold text-yellow-600">{app.rating}★</span>
                                      </div>
                                    </h6>
                                    <p className="text-sm text-gray-600">{app.desc}</p>
                                    <div className="flex items-center mt-1">
                                      <span className="text-xs font-semibold text-green-600">{app.price}/month</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`px-3 py-1 rounded-full text-xs font-bold shadow-md ${
                                app.statusColor === 'emerald' ? 'bg-gradient-to-r from-emerald-400 to-green-500 text-white' :
                                app.statusColor === 'blue' ? 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white' :
                                'bg-gradient-to-r from-amber-400 to-orange-500 text-white'
                              }`}>
                                {app.status}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Modern Bottom Navigation */}
                      <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200/50 absolute bottom-0 w-full shadow-lg">
                        <div className="flex justify-around items-center py-3 px-2">
                          <button className="flex flex-col items-center p-2 rounded-xl bg-blue-50 text-blue-600 transition-all hover:bg-blue-100 hover:scale-105">
                            <span className="text-xl mb-1">⌂</span>
                            <span className="text-xs font-semibold">Home</span>
                          </button>
                          <button className="flex flex-col items-center p-2 rounded-xl text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-all hover:scale-105">
                            <span className="text-xl mb-1">☆</span>
                            <span className="text-xs font-semibold">Fav</span>
                          </button>
                          <button className="flex flex-col items-center p-2 rounded-xl text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-all hover:scale-105">
                            <span className="text-xl mb-1">⊕</span>
                            <span className="text-xs font-semibold">Profile</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 text-center">Clean mobile interface with organized app discovery and intuitive navigation.</p>
                </div>

                {/* Modern Personal Dashboard */}
                <div className="card-style relative">
                  <h4 className="font-semibold text-lg mb-6 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3"></span>
                    Personal Dashboard
                  </h4>

                  {/* Modern Phone Frame */}
                  <div className="bg-gradient-to-br from-gray-300 via-gray-200 to-gray-300 rounded-3xl shadow-2xl mx-auto relative border border-white/50 backdrop-blur-sm" style={{width: 320, height: 980}}>
                    {/* Screen Container */}
                    <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50/20 rounded-2xl overflow-hidden h-full w-full relative shadow-inner">

                      {/* Modern Status Bar */}
                      <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 px-6 py-3 flex justify-between items-center text-xs text-white backdrop-blur-sm">
                        <span className="font-semibold">9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-white/80 rounded-full"></div>
                          <div className="w-4 h-2 bg-white/80 rounded-full"></div>
                          <div className="w-4 h-2 bg-white/80 rounded-full"></div>
                        </div>
                      </div>

                      {/* Modern Header */}
                      <div className="bg-white/90 backdrop-blur-sm p-5 border-b border-blue-100/50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center">
                              <span className="text-white font-bold text-sm">Z</span>
                            </div>
                            <h5 className="text-gray-900 font-bold text-lg">Hello, Yashas</h5>
                          </div>
                          <div className="w-9 h-9 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full shadow-md flex items-center justify-center">
                            <span className="text-gray-700 font-bold text-sm">Y</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center mt-2">
                        </div>
                      </div>

                      {/* Elegant App Grid */}
                      <div className="p-5 bg-gradient-to-b from-blue-50/30 to-purple-50/20">
                        <h6 className="font-bold text-gray-900 mb-4 text-base">
                          My Apps
                        </h6>
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { name: 'Slack', icon: 'SM', gradient: 'from-blue-500 to-indigo-600', onClick: () => {} },
                            { name: 'Drive', icon: 'GD', gradient: 'from-yellow-500 to-orange-600', onClick: () => {} },
                            { name: 'Jira', icon: 'JR', gradient: 'from-blue-400 to-blue-600', onClick: () => {} },
                            { name: 'Figma', icon: 'FD', gradient: 'from-purple-500 to-pink-600', onClick: () => {} },
                            { name: 'Notion', icon: 'NT', gradient: 'from-gray-800 to-gray-900', onClick: () => {} },
                            { name: '+6', icon: '•••', gradient: 'from-gray-400 to-gray-600', onClick: () => {} }
                          ].map((app, idx) => (
                            <button
                              key={idx}
                              className={`w-full aspect-square bg-gradient-to-br ${app.gradient} rounded-2xl shadow-lg flex flex-col items-center justify-center p-3 hover:scale-105 active:scale-95 transition-all duration-200 touch-manipulation`}
                              onClick={app.onClick}
                            >
                              <span className="text-white text-xl mb-1 animate-pulse" style={{animationDuration: '2s'}}>{app.icon}</span>
                              <span className="text-xs font-bold text-white">{app.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Status Cards */}
                      <div className="p-5 bg-gradient-to-r from-blue-50/20 to-purple-50/20">
                        <h6 className="font-bold text-gray-900 mb-4 text-base">Quick Actions</h6>
                        <div className="space-y-3">
                          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 touch-manipulation">
                            Request New App
                          </button>
                          <button className="w-full bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 touch-manipulation">
                            Support Chat
                          </button>
                        </div>
                      </div>

                      {/* Activity Feed */}
                      <div className="p-5 bg-gradient-to-b from-transparent to-yellow-50/30">
                        <h6 className="font-bold text-gray-900 mb-4 text-base">Recent Activity</h6>
                        <div className="space-y-4">
                          {[
                            { icon: '✓', app: 'Salesforce Approved', time: '2h ago', color: 'emerald' },
                            { icon: '○', app: 'Creative Suite Submitted', time: '1d ago', color: 'amber' },
                            { icon: '○', app: 'Notion Activated', time: '3d ago', color: 'blue' }
                          ].map((activity, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-md border border-white/50">
                              <div className={`w-8 h-8 bg-gradient-to-r ${
                                activity.color === 'emerald' ? 'from-emerald-400 to-green-500' :
                                activity.color === 'amber' ? 'from-amber-400 to-orange-500' :
                                'from-blue-400 to-indigo-500'
                              } rounded-xl flex items-center justify-center text-white font-bold text-lg`}>
                                {activity.icon}
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-900">{activity.app}</p>
                                <p className="text-xs text-gray-600">{activity.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Modern Bottom Navigation */}
                      <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200/50 absolute bottom-0 w-full shadow-lg">
                        <div className="flex justify-around items-center py-3 px-2">
                          <button className="flex flex-col items-center p-2 rounded-xl bg-blue-50 text-blue-600 transition-all hover:bg-blue-100 hover:scale-105">
                            <span className="text-xl mb-1">⌂</span>
                            <span className="text-xs font-semibold">Home</span>
                          </button>
                          <button className="flex flex-col items-center p-2 rounded-xl text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-all hover:scale-105">
                            <span className="text-xl mb-1">☆</span>
                            <span className="text-xs font-semibold">Fav</span>
                          </button>
                          <button className="flex flex-col items-center p-2 rounded-xl text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-all hover:scale-105">
                            <span className="text-xl mb-1">⊕</span>
                            <span className="text-xs font-semibold">Profile</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 text-center">Personalized dashboard with app shortcuts and activity tracking.</p>
                </div>
              </div>
            </section>

            {/* Success Metrics */}
            <section className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">3. Success Metrics & Measurement</h2>

              <h3 className="text-2xl font-semibold mb-8">3.1 User Adoption Metrics</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="border rounded-lg p-6 bg-gray-50/50">
                  <h4 className="font-semibold mb-4 text-lg">Monthly Active Users</h4>
                  <div className="space-y-3 mb-4">
                    <p><strong className="text-blue-700">Calculation:</strong> (Unique employees accessing catalog monthly / Total employees) × 100</p>
                    <p><strong className="text-green-700">Target:</strong> 65% within 6 months</p>
                    <p><strong className="text-purple-700">Data Sources:</strong> Web/mobile analytics, session tracking</p>
                  </div>
                </div>

                <div className="border rounded-lg p-6 bg-gray-50/50">
                  <h4 className="font-semibold mb-4 text-lg">Self-Service Request Rate</h4>
                  <div className="space-y-3 mb-4">
                    <p><strong className="text-blue-700">Calculation:</strong> (Catalog requests / Total app requests) × 100</p>
                    <p><strong className="text-green-700">Target:</strong> 80% within 4 months</p>
                    <p><strong className="text-purple-700">Data Sources:</strong> Request logs, IT helpdesk, email tracking</p>
                  </div>

                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-8">3.2 Business Impact Metrics</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="border rounded-lg p-6 bg-gray-50/50">
                  <h4 className="font-semibold mb-4 text-lg">IT Support Ticket Reduction</h4>
                  <div className="space-y-3 mb-4">
                    <p><strong className="text-blue-700">Calculation:</strong> ((Baseline app tickets - Current tickets) / Baseline tickets) × 100</p>
                    <p><strong className="text-green-700">Target:</strong> 45% reduction within 6 months</p>
                    <p><strong className="text-purple-700">Data Sources:</strong> ITSM system, helpdesk analytics</p>
                  </div>
                </div>

                <div className="border rounded-lg p-6 bg-gray-50/50">
                  <h4 className="font-semibold mb-4 text-lg">Average Provisioning Time</h4>
                  <div className="space-y-3 mb-4">
                    <p><strong className="text-blue-700">Calculation:</strong> Mean time from request to account activation</p>
                    <p><strong className="text-green-700">Target:</strong> Reduce from 7 days to 3 days</p>
                    <p><strong className="text-purple-700">Data Sources:</strong> Workflow logs, approval timestamps</p>
                  </div>
                </div>

                <div className="border rounded-lg p-6 bg-gray-50/50">
                  <h4 className="font-semibold mb-4 text-lg">Shadow IT Reduction</h4>
                  <div className="space-y-3 mb-4">
                    <p><strong className="text-blue-700">Calculation:</strong> (Current unauthorized apps / Baseline unauthorized apps) × 100</p>
                    <p><strong className="text-green-700">Target:</strong> 30% reduction within 8 months</p>
                    <p><strong className="text-purple-700">Data Sources:</strong> Network monitoring, expense analysis, security scanning</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-8">3.3 Discovery Effectiveness Metrics</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="border rounded-lg p-6 bg-gray-50/50">
                  <h4 className="font-semibold mb-4 text-lg">Search Success Rate</h4>
                  <div className="space-y-3 mb-4">
                    <p><strong className="text-blue-700">Calculation:</strong> (Successful searches / Total searches) × 100</p>
                    <p><strong className="text-green-700">Target:</strong> 55% within 3 months</p>
                    <p><strong className="text-purple-700">Data Sources:</strong> Search analytics, conversion tracking</p>
                  </div>
                </div>

                <div className="border rounded-lg p-6 bg-gray-50/50">
                  <h4 className="font-semibold mb-4 text-lg">Recommendation Click-Through Rate</h4>
                  <div className="space-y-3 mb-4">
                    <p><strong className="text-blue-700">Calculation:</strong> (Recommendation clicks / Total impressions) × 100</p>
                    <p><strong className="text-green-700">Target:</strong> 25% click-through rate</p>
                    <p><strong className="text-purple-700">Data Sources:</strong> Recommendation engine analytics</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">3.4 Success Dashboard & ROI</h3>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3">Metric Category</th>
                      <th className="border border-gray-300 p-3">KPI</th>
                      <th className="border border-gray-300 p-3">Current</th>
                      <th className="border border-gray-300 p-3">3-Month</th>
                      <th className="border border-gray-300 p-3">6-Month</th>
                      <th className="border border-gray-300 p-3">Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold" rowSpan="3">User Adoption</td>
                      <td className="border border-gray-300 p-3">Monthly Active Users</td>
                      <td className="border border-gray-300 p-3">0%</td>
                      <td className="border border-gray-300 p-3">40%</td>
                      <td className="border border-gray-300 p-3">65%</td>
                      <td className="border border-gray-300 p-3">Weekly</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Self-Service Rate</td>
                      <td className="border border-gray-300 p-3">20%</td>
                      <td className="border border-gray-300 p-3">60%</td>
                      <td className="border border-gray-300 p-3">80%</td>
                      <td className="border border-gray-300 p-3">Monthly</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Catalog Engagement Rate</td>
                      <td className="border border-gray-300 p-3">0%</td>
                      <td className="border border-gray-300 p-3">30%</td>
                      <td className="border border-gray-300 p-3">40%</td>
                      <td className="border border-gray-300 p-3">Monthly</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold" rowSpan="3">Business Impact</td>
                      <td className="border border-gray-300 p-3">IT Ticket Reduction</td>
                      <td className="border border-gray-300 p-3">0%</td>
                      <td className="border border-gray-300 p-3">25%</td>
                      <td className="border border-gray-300 p-3">45%</td>
                      <td className="border border-gray-300 p-3">Monthly</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">Provisioning Speed</td>
                      <td className="border border-gray-300 p-3">7 days</td>
                      <td className="border border-gray-300 p-3">5 days</td>
                      <td className="border border-gray-300 p-3">3 days</td>
                      <td className="border border-gray-300 p-3">Weekly</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">Shadow IT Reduction</td>
                      <td className="border border-gray-300 p-3">N/A</td>
                      <td className="border border-gray-300 p-3">10%</td>
                      <td className="border border-gray-300 p-3">30%</td>
                      <td className="border border-gray-300 p-3">Monthly</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold" rowSpan="2">Discovery</td>
                      <td className="border border-gray-300 p-3">Search Success</td>
                      <td className="border border-gray-300 p-3">N/A</td>
                      <td className="border border-gray-300 p-3">45%</td>
                      <td className="border border-gray-300 p-3">55%</td>
                      <td className="border border-gray-300 p-3">Bi-weekly</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Recommendation CTR</td>
                      <td className="border border-gray-300 p-3">N/A</td>
                      <td className="border border-gray-300 p-3">20%</td>
                      <td className="border border-gray-300 p-3">25%</td>
                      <td className="border border-gray-300 p-3">Daily</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-green-800 font-semibold">
                  ROI Analysis: IT savings ({formatCurrency(400000)}/month) + Productivity gains ({formatCurrency(300000)}/month) + Security risk reduction ({formatCurrency(200000)}/month) = {formatCurrency(900000)} monthly ROI
                </p>
              </div>
            </section>

            {/* Implementation Strategy */}
            <section className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Implementation Strategy</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Technical Requirements</h3>
                  <p className="text-gray-700">Active Directory integration, real-time APIs, enterprise security, mobile-first PWA, and scalable cloud infrastructure.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Rollout Plan</h3>
                  <div className="text-gray-700">
                    <p><strong>Phase 1:</strong> IT/HR department (100 users, 2 weeks) for validation.</p>
                    <p><strong>Phase 2:</strong> Management tier (300 users, 3 weeks) for feedback.</p>
                    <p><strong>Phase 3:</strong> Full organization (1,200 users, 4 weeks) for adoption.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Change Management</h3>
                  <p className="text-gray-700">Interactive tutorials, stakeholder communication, regular feedback collection, NPS surveys, and training programs.</p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Conclusion</h2>
              <p className="text-blue-800 leading-relaxed mb-4">
                The Employee App Catalog delivers significant value through streamlined app discovery, achieving {formatCurrency(900000)} monthly ROI
                with 75% adoption and 45% IT ticket reduction within 6 months.
              </p>

              <h3 className="font-semibold text-blue-900 mb-3">References</h3>
              <div className="space-y-2">
                <div className="text-blue-800 text-sm">
                  <a href="https://appsource.microsoft.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 text-blue-700">
                    Microsoft AppSource
                  </a>
                  {' • '}
                  <a href="https://www.okta.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 text-blue-700">
                    Okta
                  </a>
                  {' • '}
                  <a href="https://www.servicenow.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 text-blue-700">
                    ServiceNow
                  </a>
                  {' • '}
                  <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 text-blue-700">
                    Apple App Store
                  </a>
                  {' • '}
                  <a href="https://www.salesforce.com/products/app-exchange/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 text-blue-700">
                    Salesforce AppExchange
                  </a>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}
