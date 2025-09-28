import { Button } from '@/components/ui/button'
import { ArrowLeft, Search, Shield, Zap, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function FeaturesPage() {
  const features = [
    {
      icon: Search,
      title: "Smart Search & Discovery",
      description: "Fuzzy search with AI-powered recommendations and multi-dimensional filtering",
      benefits: ["Advanced fuzzy matching", "AI-powered suggestions", "Multi-department filtering", "Real-time relevance"]
    },
    {
      icon: Shield,
      title: "Security & Governance",
      description: "Role-based access control with comprehensive security badge verification",
      benefits: ["RBAC authentication", "Security badge validation", "Compliance monitoring", "Audit trail tracking"]
    },
    {
      icon: Zap,
      title: "Streamlined Requests",
      description: "Automated approval workflows with real-time tracking and notifications",
      benefits: ["Automated workflows", "Real-time notifications", "Request tracking system", "Self-service portal"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Comprehensive usage analytics and ROI tracking dashboards",
      benefits: ["Usage patterns analysis", "ROI calculation engine", "Report generation", "Executive dashboards"]
    }
  ]

  return (
    <main className="page-wrapper">
      <div className="container-padding py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8 inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Product Features
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive enterprise app management solution designed for modern workplaces
            </p>
          </div>

          <div className="grid-responsive-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-style h-full flex flex-col">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">{feature.description}</p>

                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="card-style max-w-md mx-auto">
              <p className="text-gray-700 mb-6">
                Experience the power of intelligent app discovery with our interactive prototype.
              </p>
              <Link href="/prototypes">
                <Button size="lg" className="btn-primary">
                  View Interactive Prototypes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
