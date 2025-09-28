"use client"

import Link from 'next/link'
import { ArrowRight, TrendingUp, Award, Users, Target, BookOpen, Lightbulb, Workflow, PieChart, Cog } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'
import { motion } from 'framer-motion'

export default function Home() {
  const counters = [
    {
      label: 'App Adoption Rate',
      value: 75,
      suffix: '%',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
      description: 'Employee engagement achieved'
    },
    {
      label: 'Monthly ROI',
      value: '₹1.25L',
      suffix: '',
      icon: Award,
      color: 'from-green-500 to-green-600',
      description: 'Financial impact generated'
    },
    {
      label: 'Annual Savings',
      value: '₹1.68Cr',
      suffix: '',
      icon: Target,
      color: 'from-purple-500 to-purple-600',
      description: 'Cost optimization achieved'
    },
    {
      label: 'User Satisfaction',
      value: 4.8,
      suffix: '/5',
      icon: Users,
      color: 'from-orange-500 to-orange-600',
      description: 'Rating across all metrics'
    }
  ]

  const sections = [
    {
      title: "Research & Analysis",
      href: "/research",
      description: "In-depth market research, competitive analysis, user interviews, and problem space identification",
      features: ["Market Analysis", "User Research", "Problem Validation", "Competitive Assessment"],
      icon: BookOpen,
      color: "bg-blue-50 border-blue-200",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Solution Design",
      href: "/features",
      description: "Comprehensive feature specification, user experience design, technical architecture, and prototyping",
      features: ["Wireframes", "User Flows", "Technical Specs", "Design System"],
      icon: Lightbulb,
      color: "bg-green-50 border-green-200",
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Interactive Demo",
      href: "/prototypes",
      description: "Fully functional app catalog with advanced search, intelligent filtering, and realistic user interactions",
      features: ["Smart Search", "AI Filters", "Real-time Data", "Interactive UI"],
      icon: Workflow,
      color: "bg-purple-50 border-purple-200",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Success Metrics",
      href: "/metrics",
      description: "Comprehensive KPI tracking, ROI calculations, performance analytics, and success measurement frameworks",
      features: ["ROI Analytics", "KPI Dashboards", "Success Metrics", "Performance Tracking"],
      icon: PieChart,
      color: "bg-orange-50 border-orange-200",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Implementation",
      href: "/implementation",
      description: "Complete deployment strategy, change management plans, rollout timelines, and production launch",
      features: ["DevOps Strategy", "Change Management", "Go-to-Market", "Scalability Planning"],
      icon: Cog,
      color: "bg-indigo-50 border-indigo-200",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }



  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20" />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 container-padding py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-6xl mx-auto"
          >
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="text-7xl md:text-9xl font-extrabold text-white mb-4 leading-tight">
                ZLURI
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Employee App Catalog
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl font-medium text-blue-200 mb-8"
            >
              Product Management Case Study
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive case study exploring the design and implementation of an enterprise app discovery platform,
              targeting 75% employee adoption and ₹1.68Cr annual cost savings through innovative UX design and data-driven insights.
            </motion.p>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mb-16"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/research">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                      Explore Case Study
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Author Credit */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-blue-100 text-base font-medium mt-8"
              >
                by Yashas Yadav
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </motion.section>

      {/* Metrics Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-padding bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container-padding">
          <motion.div
            variants={itemVariants}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Projected Outcomes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expected impact based on comprehensive product strategy and market analysis projections
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid-responsive-4"
          >
            {counters.map((counter, index) => (
              <motion.div
                key={counter.label}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                    {counter.value}{counter.suffix}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">{counter.label}</div>
                  <div className="text-gray-600 text-sm">{counter.description}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Sections Overview */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-padding bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container-padding">
          <motion.div
            variants={itemVariants}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Case Study
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the complete product management journey from research to implementation
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid-responsive"
          >
            {sections.map((section, index) => (
              <Link key={section.title} href={section.href}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                  }}
                  className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 bg-white border border-gray-200 cursor-pointer block h-full min-h-[420px] flex flex-col"
                >

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{section.description}</p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                      {section.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 rounded-full bg-gray-400" />
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Link href={section.href}>
                      <Button className="bg-gray-800 hover:bg-gray-900 text-white">
                        Explore Section
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-padding bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Dive Deep into the Research
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Discover the methodologies, insights, and strategic thinking that drove this product management case study
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/research">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-12 py-6 text-xl shadow-2xl hover:shadow-white/25 transition-all duration-300">
                  Explore Full Case Study
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}
