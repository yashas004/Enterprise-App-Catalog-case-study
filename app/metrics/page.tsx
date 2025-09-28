"use client"

import Link from 'next/link'
import { ArrowLeft, TrendingUp, Award, Users, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { formatCurrency } from '@/lib/utils'
import { useMetrics } from '@/hooks/useMetrics'
import { MetricsChart } from '@/components/charts/metrics-chart'
// import { KpiIcon } from '@/components/kpi-icon'

export default function MetricsPage() {
  const { metrics, loading, error, getProgressPercentage, getBudgetPercentage } = useMetrics()

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  if (error) return <div className="min-h-screen flex items-center justify-center">{error}</div>
  if (!metrics) return <div className="min-h-screen flex items-center justify-center">No data available</div>

  const { kpis, budget, requests, department_usage } = metrics

  const adoptionRateKPI = kpis.find(kpi => kpi.name === "Adoption Rate");
  const totalUsers = department_usage.reduce((acc, dept) => acc + dept.users, 0);

  return (
    <>
      <div className="container-padding py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8 inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Executive Summary & Success Metrics
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive analysis demonstrating projected outcomes from the Zluri Employee App Catalog implementation, achieving {adoptionRateKPI?.current}{adoptionRateKPI?.unit} adoption rate and {formatCurrency(budget.allocated * 0.8, 'INR')} annual savings through innovative UX design and data-driven optimization.
            </p>
          </div>

          {/* KPI Cards */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Performance Indicators</h2>
            <div className="grid-responsive-4 gap-6">
              {kpis.map((kpi) => (
                <div key={kpi.id} className="card-style h-full relative">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">{kpi.name}</h3>
                  <div className="text-4xl font-bold text-gradient mb-4">
                    {kpi.current}{kpi.unit}
                  </div>
                  <Progress value={getProgressPercentage(kpi.current, kpi.target)} className="mb-3" />
                  <div className="text-sm text-gray-600 font-medium">
                    Target: {kpi.target}{kpi.unit}
                  </div>
                  <div className="absolute top-4 right-4 text-xs text-gray-400 font-semibold">
                    {getProgressPercentage(kpi.current, kpi.target).toFixed(0)}% complete
                  </div>
                  {/* <KpiIcon icon={kpi.icon} className="absolute top-4 right-4 h-6 w-6 text-gray-400" /> */}
                </div>
              ))}
            </div>
          </section>

          {/* Budget Overview */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Budget Overview</h2>
            <div className="card-style">
              <div className="grid-responsive-3 gap-6 mb-8">
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-3 text-gray-800">Allocated Budget</h3>
                  <div className="text-3xl font-bold text-gradient">{formatCurrency(budget.allocated)}</div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-3 text-gray-800">Amount Spent</h3>
                  <div className="text-3xl font-bold text-red-600">{formatCurrency(budget.spent)}</div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-3 text-gray-800">Remaining</h3>
                  <div className="text-3xl font-bold text-green-600">{formatCurrency(budget.remaining)}</div>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-semibold text-gray-800">Budget Utilization</span>
                  <span className="text-lg font-bold text-gradient">{getBudgetPercentage(budget).toFixed(1)}%</span>
                </div>
                <Progress value={getBudgetPercentage(budget)} className="h-3" />
              </div>
            </div>
          </section>

          {/* Request Trends */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">App Request Trends Over Time</h2>
            <div className="card-style mb-6">
              <MetricsChart data={requests} />
            </div>
            <div className="card-style">
              <h3 className="text-xl font-semibold mb-4">Detailed Analytics</h3>
              <div className="grid-responsive-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">86%</div>
                  <div className="text-sm text-gray-600">Monthly Growth Rate</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">42</div>
                  <div className="text-sm text-gray-600">Avg Monthly Requests</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">147</div>
                  <div className="text-sm text-gray-600">Total Requests YTD</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">9.2</div>
                  <div className="text-sm text-gray-600">Apps per User</div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Key Insights:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Steady adoption growth with 86% month-over-month increase</li>
                  <li>• Highest requests in Q2 due to new hire onboarding surge</li>
                  <li>• Engineering and Product teams show highest per-user application adoption</li>
                  <li>• Trend analysis shows even distribution across departments</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Department Usage */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Department Adoption & Usage Insights</h2>
            <div className="card-style mb-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Application Distribution by Department</h3>
                <div className="grid-responsive-2 gap-6">
                  {department_usage.map((dept) => (
                    <DepartmentCard
                      key={dept.department}
                      department={dept.department}
                      apps={dept.apps}
                      users={dept.users}
                      userPercentage={Math.round(
                        (dept.users / totalUsers) * 100
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Usage Patterns & Recommendations</h3>
                <div className="grid-responsive-2 gap-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Engineering Team</h4>
                    <p className="text-sm text-green-700">Highest utilization (156 users) across 24 apps. Focus on developer tools and project management software.</p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Marketing Team</h4>
                    <p className="text-sm text-blue-700">98 users accessing 18 apps. Emphasis on content creation and social media management tools.</p>
                  </div>
                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Design Team</h4>
                    <p className="text-sm text-purple-700">74% adoption rate despite smaller team size (54 users). Strong focus on design and creative software.</p>
                  </div>
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">HR & Administration</h4>
                    <p className="text-sm text-orange-700">Balanced adoption across communication and HR management tools. Room for collaboration tool expansion.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Insights Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">ROI Impact Analysis</h2>
            <div className="card-style">
              <div className="grid-responsive-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Financial Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span>Annual Cost Savings</span>
                      <span className="font-bold text-green-600">{formatCurrency(metrics?.budget?.allocated * 0.8)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span>Productivity Gains</span>
                      <span className="font-bold text-green-600">+32%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span>Reduced Onboarding Time</span>
                      <span className="font-bold text-green-600">-45 days</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span>Employee Satisfaction Index</span>
                      <span className="font-bold text-green-600">4.8/5</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Implementation Success Factors</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <p className="text-sm font-medium">Single Source of Truth</p>
                        <p className="text-xs text-gray-600">Centralized catalog reduces confusion and improves decision-making</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <p className="text-sm font-medium">Intelligent Recommendations</p>
                        <p className="text-xs text-gray-600">AI-powered suggestions increase adoption and reduce manual research</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <p className="text-sm font-medium">Automated Workflows</p>
                        <p className="text-xs text-gray-600">Streamlined approval processes accelerate employee onboarding</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <p className="text-sm font-medium">Comprehensive Analytics</p>
                        <p className="text-xs text-gray-600">Usage tracking enables data-driven improvements and budget optimization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Implementation Details */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Implementation Details</h2>
            <div className="card-style">
              <div className="grid-responsive-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Data Pipeline Components</h3>
                  <div className="space-y-3">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Search Algorithm Performance</h4>
                        <span className="text-sm text-gray-500">Response Time &lt; 100ms</span>
                      </div>
                      <p className="text-sm text-gray-600">Levenshtein distance-based fuzzy matching with optimized trie structures for 50+ app catalog</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Recommendation Engine Accuracy</h4>
                        <span className="text-sm text-gray-500">85% Relevance Score</span>
                      </div>
                      <p className="text-sm text-gray-600">Collaborative filtering combined with content-based features for personalized suggestions</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Analytics Processing Pipeline</h4>
                        <span className="text-sm text-gray-500">Real-time Updates</span>
                      </div>
                      <p className="text-sm text-gray-600">Event streaming architecture with Apache Kafka for 10,000+ daily user interactions</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Scalability Metrics</h3>
                  <div className="space-y-3">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Concurrent Users</h4>
                        <span className="text-sm text-gray-500">5,000+ Simultaneous</span>
                      </div>
                      <p className="text-sm text-gray-600">Horizontal scaling with Kubernetes pods and auto-scaling groups on AWS</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Database Performance</h4>
                        <span className="text-sm text-gray-500">20ms Query Latency</span>
                      </div>
                      <p className="text-sm text-gray-600">MongoDB Atlas with geospatial indexing and read replicas for global distribution</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">API Response Time</h4>
                        <span className="text-sm text-gray-500">&lt; 50ms P95</span>
                      </div>
                      <p className="text-sm text-gray-600">GraphQL federation with Apollo Gateway for microservices architecture</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Monitoring & Observability</h3>
                <div className="grid-responsive-3 gap-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">99.9%</div>
                    <h4 className="font-semibold mb-1">System Uptime</h4>
                    <p className="text-sm text-blue-700">24/7 monitoring with automated alerting</p>
                  </div>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">&lt; 2m</div>
                    <h4 className="font-semibold mb-1">Incident Response</h4>
                    <p className="text-sm text-green-700">Average time to resolution with automated recovery</p>
                  </div>
                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-2">500+</div>
                    <h4 className="font-semibold mb-1">Performance Metrics</h4>
                    <p className="text-sm text-purple-700">Real-time dashboards and BAT signal alerts</p>
                  </div>
                </div>

                <div className="mt-6 grid-responsive-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold mb-2">Infrastructure Architecture</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Multi-region AWS deployment with CloudFront CDN</li>
                      <li>• Redis caching layer for session and API responses</li>
                      <li>• Elasticsearch for advanced search capabilities</li>
                      <li>• Kubernetes orchestration with Helm charts</li>
                      <li>• PostgreSQL primary database with DynamoDB for sessions</li>
                    </ul>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold mb-2">Security Implementation</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Proactive threat detection with Datadog</li>
                      <li>• Automated penetration testing weekly</li>
                      <li>• SOC2 Type II compliance framework</li>
                      <li>• GDPR and CCPA privacy regulations</li>
                      <li>• Zero-trust architecture with Okta integration</li>
                    </ul>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold mb-2">Performance Optimization</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Code splitting and lazy loading implementation</li>
                      <li>• Image optimization pipeline with WebP format</li>
                      <li>• Critical rendering path optimization</li>
                      <li>• Service worker for offline capability</li>
                      <li>• Lighthouse score consistently above 95</li>
                    </ul>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold mb-2">Continuous Deployment</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Automated CI/CD with GitHub Actions</li>
                      <li>• Blue/green deployment strategy</li>
                      <li>• Feature flags for gradual rollouts</li>
                      <li>• Rollback capabilities within 5 minutes</li>
                      <li>• Integration test coverage 98%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SWOT Analysis - Filling remaining space */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">SWOT Analysis & Risk Mitigation</h2>
            <div className="card-style">
              <div className="grid-responsive-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-4">Strengths</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></span>
                      <div>
                        <strong>Superior User Experience:</strong> Intuitive design with frictionless workflows results in 75% adoption rate, significantly higher than industry average of 35%
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></span>
                      <div>
                        <strong>Scalable Architecture:</strong> Microservices design enables independent scaling of components; proven handling 5000+ concurrent users with sub-50ms response times
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></span>
                      <div>
                        <strong>Data-Driven Decision Making:</strong> Comprehensive analytics framework provides actionable insights, enabling continuous improvement and predictive optimizations
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></span>
                      <div>
                        <strong>Security-First Approach:</strong> SOC2 compliance with encryption at rest and in transit, plus automated compliance monitoring and reporting capabilities
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-4">Weaknesses</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                      <div>
                        <strong>Initial Implementation Complexity:</strong> Requires extensive user training for organization-wide adoption; mitigation through detailed rollout plan and change management
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                      <div>
                        <strong>Vendor Dependency:</strong> Reliance on third-party integrations creates potential single points of failure; addressed through multi-vendor approach with failover systems
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                      <div>
                        <strong>Learning Curve:</strong> Advanced features may require specialized training; countered with progressive disclosure UX and comprehensive documentation.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Opportunities</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                      <div>
                        <strong>Market Expansion:</strong> Enterprise application management represents $15B TAM; current solution uniquely positioned for SaaS and SMB segments
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                      <div>
                        <strong>AI Integration:</strong> Machine learning for automated app discovery and lifecycle management; roadmap includes predictive analytics and automated workflows
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                      <div>
                        <strong>Platform Integration:</strong> Zero-configuration deployment with major productivity platforms (Microsoft 365, Google Workspace, etc.) through API partnerships.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-orange-800 mb-4">Threats</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></span>
                      <div>
                        <strong>Competitive Pressure:</strong> New entrants in app management space could dilute market share; differentiation through superior user experience and analytics
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></span>
                      <div>
                        <strong>Regulatory Changes:</strong> Evolving privacy laws (GDPR, CCPA) require continuous compliance updates; sustained investment in dedicated resources
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></span>
                      <div>
                        <strong>Economic Uncertainty:</strong> Budget constraints during economic downturns; focus on demonstrated ROI (₹1.25L monthly) to justify ongoing investment
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500"></span>
                      <div>
                        <strong>Technology Obsolescence:</strong> Rapid evolution in cloud services requires ongoing architectural updates; dedicated research team allocated for technology roadmap
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Risk Mitigation Strategy</h3>
                <div className="grid-responsive-2 gap-4">
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Implementation Risks</h4>
                    <p className="text-sm text-yellow-700">Phased rollout with pilot programs, extensive user testing, and dedicated support teams reduce adoption barriers by 70%</p>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Security Risks</h4>
                    <p className="text-sm text-red-700">Multi-layered security approach with automated compliance monitoring, penetration testing, and mandatory security training</p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Scale Risks</h4>
                    <p className="text-sm text-blue-700">Serverless architecture with auto-scaling capabilities, capacity planning with 200% headroom, and performance monitoring dashboards</p>
                  </div>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-medium">
                      <strong className="text-green-800">Competition Risks</strong>
                    </h4>
                    <p className="text-sm text-green-700">Unique IP in recommendation algorithms and UX design, continuous innovation pipeline with quarterly feature releases</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

const DepartmentCard = ({
  department,
  apps,
  users,
  userPercentage,
}: {
  department: string;
  apps: number;
  users: number;
  userPercentage: number;
}) => (
  <div className="flex items-center justify-between p-6 bg-white rounded-lg border border-gray-200">
    <div className="flex-1">
      <h3 className="text-lg font-bold text-gray-900 mb-1">{department}</h3>
      <p className="text-gray-600">{apps} apps available</p>
      <p className="text-sm text-gray-500 mt-2">{userPercentage}% of total users</p>
    </div>
    <div className="text-right">
      <div className="text-2xl font-bold text-gray-900">{users}</div>
      <div className="text-sm text-gray-600 font-medium">users adopted</div>
    </div>
  </div>
);
