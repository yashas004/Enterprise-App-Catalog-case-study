export interface Application {
  id: number
  name: string
  category: string
  department: string[]
  price: number
  currency: string
  rating: number
  users: number
  status: string
  description: string
  integrations: string[]
  features: string[]
  securityBadges: string[]
  icon: string
}
