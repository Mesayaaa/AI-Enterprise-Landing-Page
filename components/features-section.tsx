"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import FrostedGlassIcon from "@/components/frosted-glass-icon"
import { FeatureIcons } from "@/components/feature-icons"

export default function FeaturesSection() {
  const features = [
    {
      icon: <FeatureIcons.Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description:
        "Bank-grade encryption, SOC 2 compliance, and advanced access controls to protect your sensitive data.",
      color: "rgba(34, 197, 94, 0.2)",
    },
    {
      icon: <FeatureIcons.Bot className="w-6 h-6" />,
      title: "Custom AI Agents",
      description:
        "Build specialized AI agents tailored to your industry needs with custom training and behavior patterns.",
      color: "rgba(59, 130, 246, 0.2)",
    },
    {
      icon: <FeatureIcons.Database className="w-6 h-6" />,
      title: "Knowledge Management",
      description: "Centralized knowledge base with intelligent search, version control, and seamless integration.",
      color: "rgba(168, 85, 247, 0.2)",
    },
    {
      icon: <FeatureIcons.Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description:
        "Role-based access control, team workspaces, and collaborative AI conversations for your organization.",
      color: "rgba(236, 72, 153, 0.2)",
    },
    {
      icon: <FeatureIcons.Zap className="w-6 h-6" />,
      title: "High Performance",
      description: "Lightning-fast responses with 99.9% uptime SLA and global CDN for optimal performance.",
      color: "rgba(245, 158, 11, 0.2)",
    },
    {
      icon: <FeatureIcons.Settings className="w-6 h-6" />,
      title: "Easy Integration",
      description:
        "RESTful APIs, webhooks, and pre-built connectors for seamless integration with your existing systems.",
      color: "rgba(20, 184, 166, 0.2)",
    },
  ]

  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            Powerful Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Everything You Need for
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Enterprise AI
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Deploy AI solutions at scale with confidence, security, and complete control over your data and processes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <FrostedGlassIcon
                      icon={feature.icon}
                      color={feature.color}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
