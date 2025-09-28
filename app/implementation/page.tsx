import { Button } from '@/components/ui/button'
import { ArrowLeft, Code, Database, Cloud, Users } from 'lucide-react'
import Link from 'next/link'

export default function ImplementationPage() {
  const phases = [
    {
      icon: Users,
      title: "Discovery & Planning",
      description: "Stakeholder Interviews, requirements gathering, and technical assessment",
      duration: "2-3 weeks"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Import existing app catalog, user data, and integration with enterprise systems",
      duration: "3-4 weeks"
    },
    {
      icon: Code,
      title: "Platform Development",
      description: "Custom features collateral, testing, and security implementation",
      duration: "6-8 weeks"
    },
    {
      icon: Cloud,
      title: "Deployment & Training",
      description: "Production deployment, user training, and go-live support",
      duration: "2-3 weeks"
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8 inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Implementation Overview</h1>
          <p className="text-xl text-gray-600 text-center mb-16">End-to-end deployment and adoption strategy</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {phases.map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <phase.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">{phase.title}</h3>
                    <span className="text-sm text-gray-500">{phase.duration}</span>
                  </div>
                </div>
                <p className="text-gray-700">{phase.description}</p>
              </div>
            ))}
            </div>
        </div>
      </div>
    </main>
  )
}
