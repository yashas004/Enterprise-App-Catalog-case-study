"use client"

import { useState } from 'react'

export interface FilterState {
  category: string
  department: string
  priceRange: [number, number]
  rating: number
}

export function useFilters(initialFilters?: Partial<FilterState>) {
  const [filters, setFilters] = useState<FilterState>({
    category: initialFilters?.category || '',
    department: initialFilters?.department || '',
    priceRange: initialFilters?.priceRange || [0, 1000],
    rating: initialFilters?.rating || 0
  })

  const updateFilter = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }

  const clearFilters = () => {
    setFilters({
      category: '',
      department: '',
      priceRange: [0, 1000],
      rating: 0
    })
  }

  const hasActiveFilters = () => {
    return filters.category !== '' ||
           filters.department !== '' ||
           filters.priceRange[0] > 0 ||
           filters.priceRange[1] < 1000 ||
           filters.rating > 0
  }

  return {
    filters,
    updateFilter,
    updateFilters,
    clearFilters,
    hasActiveFilters: hasActiveFilters()
  }
}
