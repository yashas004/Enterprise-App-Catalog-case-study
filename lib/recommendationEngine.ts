import type { Application } from '@/types/application'

interface UserProfile {
  department: string
  currentApps: number[]
}

export function getRecommendations(
  userProfile: UserProfile,
  allApps: Application[],
  departmentApps: Application[]
): Application[] {
  const recommendations = []

  // Rule-based recommendations
  const ruleBased = getRuleBasedRecommendations(userProfile, allApps, departmentApps)
  recommendations.push(...ruleBased)

  // Collaborative filtering (based on similar users)
  const collaborative = getCollaborativeRecommendations(userProfile, allApps)
  recommendations.push(...collaborative)

  // Trending apps in department
  const trending = getTrendingApps(departmentApps)
  recommendations.push(...trending)

  // Remove duplicates and user's current apps
  const unique = removeDuplicates([...recommendations])
  const filtered = unique.filter(app => !userProfile.currentApps.includes(app.id))

  return filtered.slice(0, 6) // Return top 6 recommendations
}

function getRuleBasedRecommendations(
  userProfile: UserProfile,
  allApps: Application[],
  departmentApps: Application[]
): Application[] {
  const scores = allApps.map(app => ({
    app,
    score: calculateRuleScore(app, userProfile, departmentApps)
  }))

  return scores
    .filter(({ score }) => score > 50)
    .sort((a, b) => b.score - a.score)
    .map(({ app }) => app)
    .slice(0, 3)
}

function calculateRuleScore(
  app: Application,
  userProfile: UserProfile,
  departmentApps: Application[]
): number {
  let score = 0

  // Department match
  if (app.department.includes(userProfile.department) || app.department.includes("All")) {
    score += 40
  }

  // High rating
  if (app.rating >= 4.5) score += 20

  // Popular in department (many users using it)
  const deptUsers = departmentApps
    .filter(deptApp => deptApp.id === app.id)
    .reduce((sum, deptApp) => sum + deptApp.users, 0)
  if (deptUsers > 50) score += 15

  // Security badges
  if (app.securityBadges.length > 0) score += 10

  // Cost effectiveness
  if (app.price < 400) score += 10

  return score
}

function getCollaborativeRecommendations(
  userProfile: UserProfile,
  allApps: Application[]
): Application[] {
  // Simplified collaborative filtering - recommend apps popular in the same department
  const department = userProfile.department
  const deptApps = allApps.filter(app =>
    app.department.includes(department) && app.users > 50
  )

  return deptApps.slice(0, 2)
}

function getTrendingApps(departmentApps: Application[]): Application[] {
  // Apps with increasing user adoption
  // For simplicity, return high-rated apps with many users
  return departmentApps
    .filter(app => app.rating >= 4.5 && app.users > 100)
    .slice(0, 2)
}

function removeDuplicates(apps: Application[]): Application[] {
  const seen = new Set<number>()
  return apps.filter(app => {
    if (seen.has(app.id)) return false
    seen.add(app.id)
    return true
  })
}
