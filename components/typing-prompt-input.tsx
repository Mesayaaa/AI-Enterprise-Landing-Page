"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Sparkles, Loader2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const DEMO_PROMPTS = [
  "Analyze our quarterly financial reports",
  "Generate a compliance summary for GDPR",
  "Create a risk assessment for new projects",
  "Summarize customer feedback data trends",
  "Draft a security policy document",
  "Optimize our supply chain processes",
]

export default function TypingPromptInput() {
  const [currentPrompt, setCurrentPrompt] = useState("")
  const [promptIndex, setPromptIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [userInput, setUserInput] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const typingTimeoutRef = useRef<NodeJS.Timeout>()

  // Improved typing animation with proper cleanup
  useEffect(() => {
    if (!isTyping || isFocused || userInput) return

    const currentPromptText = DEMO_PROMPTS[promptIndex]

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(() => {
      if (charIndex < currentPromptText.length) {
        setCurrentPrompt(currentPromptText.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else {
        // Pause at end, then move to next prompt
        setTimeout(() => {
          setCharIndex(0)
          setCurrentPrompt("")
          setPromptIndex((prev) => (prev + 1) % DEMO_PROMPTS.length)
        }, 2000)
      }
    }, 80)

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
    }
  }, [charIndex, promptIndex, isTyping, isFocused, userInput])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!userInput.trim() || isSubmitting) return

      setIsSubmitting(true)

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log("Prompt submitted:", userInput)

        // Reset form
        setUserInput("")
        setShowSuggestions(false)
        setIsFocused(false)
        setIsTyping(true)
        setCharIndex(0)
      } catch (error) {
        console.error("Submission error:", error)
      } finally {
        setIsSubmitting(false)
      }
    },
    [userInput, isSubmitting],
  )

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
    setIsTyping(false)
    setShowSuggestions(true)
    setCurrentPrompt("")
  }, [])

  const handleInputBlur = useCallback(() => {
    // Delay to allow clicking suggestions
    setTimeout(() => {
      if (!userInput.trim()) {
        setIsFocused(false)
        setIsTyping(true)
        setCharIndex(0)
      }
      setShowSuggestions(false)
    }, 200)
  }, [userInput])

  const selectSuggestion = useCallback((suggestion: string) => {
    setUserInput(suggestion)
    setShowSuggestions(false)
    setIsFocused(true)
    inputRef.current?.focus()
  }, [])

  return (
    <div className="relative max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Main Input Container */}
        <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-6">
          {/* Header */}
          <div className="flex items-center mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3"
            >
              <Sparkles className="w-5 h-5 text-white" />
            </motion.div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Try AI Enterprise</h3>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              {/* Placeholder/Demo Text - Only show when not focused and no user input */}
              <AnimatePresence>
                {!isFocused && !userInput && currentPrompt && (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center px-4 pointer-events-none z-10"
                  >
                    <Sparkles className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-500 dark:text-gray-400 truncate">
                      {currentPrompt}
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                        className="ml-1"
                      >
                        |
                      </motion.span>
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actual Input */}
              <Input
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder={isFocused ? "Ask anything about your enterprise data..." : ""}
                className="w-full h-16 pl-14 pr-16 text-lg bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 relative z-20"
                disabled={isSubmitting}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="sm"
                disabled={!userInput.trim() || isSubmitting}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-12 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-30"
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </motion.div>
                  ) : (
                    <motion.div key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Send className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
                <span>AI Enterprise is ready</span>
              </div>

              {userInput && <div className="text-xs text-gray-400">{userInput.length}/500 characters</div>}
            </div>
          </form>

          {/* Example Suggestions */}
          <div className="mt-4 flex flex-wrap gap-2">
            {["Security Analysis", "Data Insights", "Process Automation"].map((suggestion, index) => (
              <motion.button
                key={suggestion}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => selectSuggestion(suggestion)}
                className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
              >
                {suggestion}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Suggestions Dropdown */}
        <AnimatePresence>
          {showSuggestions && isFocused && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 overflow-hidden"
            >
              <div className="p-2">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 px-3 py-2 uppercase tracking-wide">
                  Try these examples:
                </div>
                {DEMO_PROMPTS.slice(0, 4).map((prompt, index) => (
                  <motion.button
                    key={index}
                    onClick={() => selectSuggestion(prompt)}
                    className="w-full text-left px-3 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-sm group"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Sparkles className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{prompt}</span>
                      </div>
                      <ArrowRight className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Processing Status */}
        <AnimatePresence>
          {isSubmitting && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-4 text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl shadow-lg">
                <Loader2 className="w-5 h-5 animate-spin mr-3" />
                <span className="font-medium">Processing your request...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10 opacity-50" />
      </motion.div>
    </div>
  )
}
