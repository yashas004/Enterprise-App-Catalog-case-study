"use client"

import { useState, useEffect } from 'react'

interface Metric {
  id: string
  name: string
  current: number
  target: number
  unit: string
}

interface Budget {
  allocated: number
  spent: number
  remaining: number
}

interface RequestData {
  date: string
  count: number
}

interface DepartmentUsage {
  department: string
  apps: number
  users: number
}

interface MetricsData {
  kpis: Metric[]
  budget: Budget
  requests: RequestData[]
  department_usage: DepartmentUsage[]
}

export function useMetrics() {
  const [metrics, setMetrics] = useState<MetricsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch('/data/metrics.json')
        const data = await response.json()
        setMetrics(data)
      } catch (err) {
        setError('Failed to load metrics data')
        console.error('Error loading metrics:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchMetrics()
  }, [])

  const getProgressPercentage = (current: number, target: number): number => {
    if (target === 0) return 100
    return Math.min(100, (current / target) * 100)
  }

  const getBudgetPercentage = (budget: Budget): number => {
    return budget.allocated > 0 ? (budget.spent / budget.allocated) * 100 : 0
  }

  return {
    metrics,
    loading,
    error,
    getProgressPercentage,
    getBudgetPercentage
  }
}
