import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: string = 'INR'): string {
  if (currency === 'INR') {
    return '₹' + new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: currency === 'INR' ? 0 : 2,
    }).format(amount);
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

export function formatNumber(num: number): string {
  // Indian numbering system with appropriate abbreviations
  if (num >= 10000000) { // 1 crore
    return '₹' + (num / 10000000).toFixed(1) + 'Cr'
  } else if (num >= 100000) { // 1 lakh
    return '₹' + (num / 100000).toFixed(1) + 'L'
  } else if (num >= 1000) {
    return '₹' + (num / 1000).toFixed(1) + 'K'
  }
  return '₹' + num.toString()
}

export function formatIndianNumber(num: number): string {
  return new Intl.NumberFormat('en-IN').format(num)
}

export function calculatePercentage(current: number, total: number): number {
  return Math.round((current / total) * 100)
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
