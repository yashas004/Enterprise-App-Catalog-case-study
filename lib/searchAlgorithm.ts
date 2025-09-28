import type { Application } from '@/types/application'

export function fuzzySearch(apps: Application[], query: string): Application[] {
  if (!query.trim()) return apps

  const terms = query.toLowerCase().trim().split(/\s+/)

  return apps
    .map(app => {
      const scores = terms.map(term => calculateMatchScore(app, term))
      const totalScore = scores.reduce((sum, score) => sum + score, 0) / scores.length
      return { app, score: totalScore }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ app }) => app)
}

function calculateMatchScore(app: Application, term: string): number {
  const searchableText = [
    app.name,
    app.category,
    app.description,
    ...app.features,
    ...app.integrations,
    app.department.join(' ')
  ].join(' ').toLowerCase()

  // Exact match
  if (app.name.toLowerCase().includes(term)) return 100
  if (app.category.toLowerCase().includes(term)) return 80

  // Partial match in name
  if (app.name.toLowerCase().includes(term)) return 70

  // Match in description or features
  if (searchableText.includes(term)) return 50

  // Fuzzy match - character proximity
  const fuzzyScore = calculateFuzzyScore(searchableText, term)
  return Math.max(fuzzyScore - 30, 0) // Subtract penalty for fuzzy match
}

function calculateFuzzyScore(text: string, pattern: string): number {
  if (pattern.length === 0) return 100

  const distance = levenshteinDistance(text, pattern)
  const maxLength = Math.max(text.length, pattern.length)
  const similarity = 1 - distance / maxLength
  return similarity * 100
}

function levenshteinDistance(str1: string, str2: string): number {
  const matrix = Array(str1.length + 1).fill(null).map(() => Array(str2.length + 1).fill(null))

  for (let i = 0; i <= str1.length; i++) {
    matrix[i][0] = i
  }

  for (let j = 0; j <= str2.length; j++) {
    matrix[0][j] = j
  }

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1
      matrix[i][j] = Math.min(
        matrix[i][j - 1] + 1,
        matrix[i - 1][j] + 1,
        matrix[i - 1][j - 1] + indicator
      )
    }
  }

  return matrix[str1.length][str2.length]
}
