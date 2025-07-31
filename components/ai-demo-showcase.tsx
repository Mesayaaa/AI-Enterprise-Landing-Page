"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Sparkles, ArrowRight, Brain, Zap } from "lucide-react"

const DEMO_EXAMPLES = [
  {
    category: "Financial Analysis",
    prompt: "Analyze Q4 revenue trends and predict next quarter performance",
    response: "Based on the data, Q4 shows 23% growth with strong momentum in enterprise sales...",
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Risk Assessment",
    prompt: "Evaluate cybersecurity risks for our new cloud infrastructure",
    response: "Identified 3 critical vulnerabilities with recommended mitigation strategies...",
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Compliance Review",
    prompt: "Generate GDPR compliance report for our data processing activities",
    response: "Compliance score: 94%. Found 2 areas requiring attention in data retention...",
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Market Intelligence",
    prompt: "Summarize competitor analysis and market positioning opportunities",
    response: "Market analysis reveals 3 key opportunities in the mid-market segment...",
    color: "from-orange-500 to-red-500",
  },
]

export default function AIDemoShowcase() {
  const [currentExample, setCurrentExample] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true)
      setTimeout(() => {
        setCurrentExample((prev) => (prev + 1) % DEMO_EXAMPLES.length)
        setIsTyping(false)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const current = DEMO_EXAMPLES[currentExample]

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Main Demo Container */}
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-4 sm:p-6 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0"
              >
                <Brain className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
              </motion.div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white truncate">
                  AI Enterprise Demo
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">See AI in action</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:inline">Live Demo</span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
            {DEMO_EXAMPLES.map((example, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentExample(index)}
                className={`px-2 sm:px-3 py-1 text-xs rounded-full transition-all duration-200 flex-shrink-0 ${
                  index === currentExample
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="truncate">{example.category}</span>
              </motion.button>
            ))}
          </div>

          {/* Demo Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentExample}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-3 sm:space-y-4"
            >
              {/* User Prompt */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 sm:p-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs sm:text-sm font-medium">U</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">You asked:</p>
                    <p className="text-sm sm:text-base text-gray-900 dark:text-white font-medium break-words">
                      {current.prompt}
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Response */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-3 sm:p-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div
                    className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${current.color} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">AI Enterprise responds:</p>
                    <motion.p
                      className="text-sm sm:text-base text-gray-900 dark:text-white font-medium break-words"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {isTyping ? (
                        <span className="flex items-center">
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                          >
                            Analyzing...
                          </motion.span>
                          <Zap className="w-3 h-3 sm:w-4 sm:h-4 ml-2 text-blue-500 flex-shrink-0" />
                        </span>
                      ) : (
                        current.response
                      )}
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-2 gap-3 sm:gap-0">
                <div className="flex flex-wrap gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 sm:px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                  >
                    Export Report
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 sm:px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    Share Insights
                  </motion.button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  <span className="truncate">Try Another Example</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 flex-shrink-0" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
            {DEMO_EXAMPLES.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentExample ? "bg-blue-500 w-4 sm:w-6" : "bg-gray-300 dark:bg-gray-600"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10 opacity-50" />

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-4 sm:mt-6"
        >
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3">
            Ready to transform your enterprise with AI?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
