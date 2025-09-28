"use client"

import { useState, useEffect } from 'react'
import { Application } from '@/types/application'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Search, Star, Users, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function PrototypesPage() {
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await fetch('/data/applications.json')
        const data = await response.json()
        setApplications(data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to load applications:', error)
        setLoading(false)
      }
    }

    fetchApps()
  }, [])

  const filteredApps = applications.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === '' || app.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = [...new Set(applications.map(app => app.category))]

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>

  return (
    <main className="page-wrapper">
      <div className="container-padding py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8 inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Interactive App Catalog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse and request enterprise applications with intelligent discovery and automated workflows
            </p>
          </div>

          {/* Search and Filters */}
          <div className="card-style mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Find the Perfect Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search applications..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <select
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              <div className="flex items-center justify-center bg-gray-50 rounded-lg px-4 py-2">
                <span className="text-lg font-semibold text-gray-900">{filteredApps.length}</span>
                <span className="text-sm text-gray-600 ml-2">applications found</span>
              </div>
            </div>
          </div>

          {/* App Grid */}
          <div className="grid-responsive gap-8">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>

          {filteredApps.length === 0 && (
            <div className="card-style text-center py-16">
              <div className="max-w-md mx-auto">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No applications found</h3>
                <p className="text-gray-600">Try adjusting your search criteria or browse a different category.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

function AppCard({ app }: { app: Application }) {
  return (
    <div className="card-style h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{app.name}</h3>
          <p className="text-gray-600 text-sm mb-3">{app.category}</p>

          <div className="flex items-center justify-start gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="font-medium">{app.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{app.users}</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
              <span>₹{app.price}</span>
            </div>
          </div>
        </div>

        <div className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
          app.status === 'available'
            ? 'bg-green-100 text-green-800 border border-green-200'
            : 'bg-gray-100 text-gray-800 border border-gray-200'
        }`}>
          {app.status}
        </div>
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed flex-grow">{app.description}</p>

      <div className="flex flex-wrap gap-2">
        {app.securityBadges.map((badge) => (
          <span key={badge} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-md border border-blue-100">
            {badge}
          </span>
        ))}
      </div>
    </div>
  )
}
