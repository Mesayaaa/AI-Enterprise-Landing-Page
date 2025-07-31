"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FrostedGlassIcon from "@/components/frosted-glass-icon"
import { UseCaseIcons } from "@/components/use-case-icons"

export default function UseCases() {
  const useCases = [
    {
      icon: <UseCaseIcons.Landmark className="w-8 h-8" />,
      title: "Financial Services",
      description:
        "Risk analysis, compliance monitoring, and automated reporting for banks and financial institutions.",
      features: ["Risk Assessment", "Compliance Automation", "Financial Analysis", "Fraud Detection"],
      color: "rgba(34, 197, 94, 0.2)",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: <UseCaseIcons.Heart className="w-8 h-8" />,
      title: "Healthcare",
      description: "Medical research assistance, patient data analysis, and clinical decision support systems.",
      features: ["Clinical Research", "Patient Analytics", "Medical Documentation", "Drug Discovery"],
      color: "rgba(239, 68, 68, 0.2)",
      gradient: "from-red-500 to-pink-600",
    },
    {
      icon: <UseCaseIcons.Building2 className="w-8 h-8" />,
      title: "Government",
      description: "Policy analysis, citizen services automation, and secure document processing for agencies.",
      features: ["Policy Analysis", "Citizen Services", "Document Processing", "Security Clearance"],
      color: "rgba(59, 130, 246, 0.2)",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: <UseCaseIcons.Scale className="w-8 h-8" />,
      title: "Legal",
      description: "Contract analysis, legal research, and case management for law firms and legal departments.",
      features: ["Contract Review", "Legal Research", "Case Management", "Compliance Tracking"],
      color: "rgba(168, 85, 247, 0.2)",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      icon: <UseCaseIcons.GraduationCap className="w-8 h-8" />,
      title: "Education",
      description: "Personalized learning, research assistance, and administrative automation for institutions.",
      features: ["Personalized Learning", "Research Support", "Admin Automation", "Student Analytics"],
      color: "rgba(245, 158, 11, 0.2)",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      icon: <UseCaseIcons.Factory className="w-8 h-8" />,
      title: "Manufacturing",
      description: "Quality control, predictive maintenance, and supply chain optimization for manufacturers.",
      features: ["Quality Control", "Predictive Maintenance", "Supply Chain", "Process Optimization"],
      color: "rgba(20, 184, 166, 0.2)",
      gradient: "from-teal-500 to-cyan-600",
    },
  ]

  return (
    <section
      id="use-cases"
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
            Industry Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Tailored for Every
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Industry</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Specialized AI solutions designed to meet the unique challenges and compliance requirements of your
            industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <CardContent className="p-8 relative">
                  <div className="mb-6">
                    <FrostedGlassIcon
                      icon={useCase.icon}
                      color={useCase.color}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                    {useCase.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{useCase.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                        >
                          {feature}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
