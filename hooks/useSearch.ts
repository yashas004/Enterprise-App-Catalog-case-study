"use client"

import React, { useState, useMemo } from 'react'
import { fuzzySearch } from '@/lib/searchAlgorithm'
import type { Application } from '@/types/application'

interface UseSearchOptions {
  initialApps: Application[]
}

export function useSearch({ initialApps }: UseSearchOptions) {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({
    category: '',
    department: '',
    priceRange: [0, 1000] as [number, number],
    rating: 0
  })

  const results = useMemo(() => {
    let apps = initialApps

    // Apply search
    if (query.trim()) {
      apps = fuzzySearch(apps, query)
    }

    // Apply filters
    return apps.filter(app => {
      // Category filter
      if (filters.category && app.category !== filters.category) {
        return false
      }

      // Department filter
      if (filters.department && !app.department.includes(filters.department) && !app.department.includes('All')) {
        return false
      }

      // Price range filter
      if (app.price < filters.priceRange[0] || app.price > filters.priceRange[1]) {
        return false
      }

      // Rating filter
      if (app.rating < filters.rating) {
        return false
      }

      return true
    })
  }, [query, filters, initialApps])

  const suggestions = useMemo(() => {
    if (!query.trim()) return []

    // Generate suggestions based on categories, names
    const suggestions = new Set<string>()

    initialApps.forEach(app => {
      if (app.name.toLowerCase().includes(query.toLowerCase())) {
        suggestions.add(app.name)
      }
      if (app.category.toLowerCase().includes(query.toLowerCase())) {
        suggestions.add(app.category)
      }
    })

    return Array.from(suggestions).slice(0, 5)
  }, [query, initialApps])

  const updateQuery = (newQuery: string) => {
    setQuery(newQuery)
  }

  const updateFilters = (newFilters: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }

  const clearSearch = () => {
    setQuery('')
  }

  const clearFilters = () => {
    setFilters({
      category: '',
      department: '',
      priceRange: [0, 1000],
      rating: 0
    })
  }

  return {
    query,
    filters,
    results,
    suggestions,
    updateQuery,
    updateFilters,
    clearSearch,
    clearFilters,
    hasActiveFilters: filters.category !== '' || filters.department !== '' ||
                      filters.priceRange[0] > 0 || filters.priceRange[1] < 1000 || filters.rating > 0
  }
}
