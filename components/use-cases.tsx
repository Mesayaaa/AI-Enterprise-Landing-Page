"use client"

import { motion } from "framer-motion"
import UseCaseCard3D from "@/components/use-case-card-3d"
import { UseCaseIcons } from "@/components/use-case-icons"

export default function UseCases() {
  const useCases = [
    {
      icon: <UseCaseIcons.Landmark className="w-10 h-10" />,
      title: "Financial Services",
      description:
        "Advanced risk analysis, real-time compliance monitoring, automated regulatory reporting, and fraud detection for banks and financial institutions worldwide.",
      features: [
        "Risk Assessment",
        "Compliance Automation",
        "Financial Analysis",
        "Fraud Detection",
        "Regulatory Reporting",
      ],
      color: "#10b981",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: <UseCaseIcons.Heart className="w-10 h-10" />,
      title: "Healthcare",
      description:
        "Medical research assistance, patient data analysis, clinical decision support systems, and drug discovery acceleration with HIPAA compliance.",
      features: [
        "Clinical Research",
        "Patient Analytics",
        "Medical Documentation",
        "Drug Discovery",
        "HIPAA Compliance",
      ],
      color: "#ef4444",
      gradient: "from-red-500 to-pink-600",
    },
    {
      icon: <UseCaseIcons.Building2 className="w-10 h-10" />,
      title: "Government",
      description:
        "Policy analysis, citizen services automation, secure document processing, and intelligence analysis for government agencies and public sector.",
      features: [
        "Policy Analysis",
        "Citizen Services",
        "Document Processing",
        "Security Clearance",
        "Intelligence Analysis",
      ],
      color: "#3b82f6",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: <UseCaseIcons.Scale className="w-10 h-10" />,
      title: "Legal",
      description:
        "Contract analysis, legal research, case management, compliance tracking, and document review for law firms and legal departments.",
      features: ["Contract Review", "Legal Research", "Case Management", "Compliance Tracking", "Document Analysis"],
      color: "#8b5cf6",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      icon: <UseCaseIcons.GraduationCap className="w-10 h-10" />,
      title: "Education",
      description:
        "Personalized learning experiences, research assistance, administrative automation, and student analytics for educational institutions.",
      features: [
        "Personalized Learning",
        "Research Support",
        "Admin Automation",
        "Student Analytics",
        "Curriculum Design",
      ],
      color: "#f59e0b",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      icon: <UseCaseIcons.Factory className="w-10 h-10" />,
      title: "Manufacturing",
      description:
        "Quality control automation, predictive maintenance, supply chain optimization, and process improvement for manufacturing operations.",
      features: [
        "Quality Control",
        "Predictive Maintenance",
        "Supply Chain",
        "Process Optimization",
        "IoT Integration",
      ],
      color: "#14b8a6",
      gradient: "from-teal-500 to-cyan-600",
    },
  ]

  return (
    <section
      id="use-cases"
      className="py-32 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-pink-950 relative overflow-hidden"
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-20 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-32 right-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-6 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6 shadow-lg"
          >
            🏢 Industry Solutions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 dark:from-white dark:via-purple-100 dark:to-white bg-clip-text text-transparent">
              Tailored Solutions
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              for Every Industry
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Specialized AI solutions designed to meet the unique challenges, compliance requirements, and operational
            needs of your specific industry.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {useCases.map((useCase, index) => (
            <UseCaseCard3D
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              features={useCase.features}
              color={useCase.color}
              gradient={useCase.gradient}
              index={index}
            />
          ))}
        </div>

        {/* Interactive Industry Stats */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Trusted Across Industries
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Leading organizations worldwide rely on our AI platform
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {[
              { industry: "Finance", count: "150+", color: "#10b981" },
              { industry: "Healthcare", count: "80+", color: "#ef4444" },
              { industry: "Government", count: "45+", color: "#3b82f6" },
              { industry: "Legal", count: "120+", color: "#8b5cf6" },
              { industry: "Education", count: "200+", color: "#f59e0b" },
              { industry: "Manufacturing", count: "90+", color: "#14b8a6" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  rotateX: 5,
                }}
                className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/20 group cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: stat.color }}
                >
                  {stat.count}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.industry}</div>
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${stat.color}, transparent 70%)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
