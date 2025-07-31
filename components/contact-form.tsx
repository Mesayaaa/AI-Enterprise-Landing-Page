"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    companySize: "",
    useCase: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Thank You!</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We've received your request and will contact you within 24 hours to discuss your enterprise AI needs.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              variant="outline"
              className="border-2 border-gray-300 dark:border-gray-600"
            >
              Submit Another Request
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Request Enterprise Demo
        </CardTitle>
        <p className="text-center text-gray-600 dark:text-gray-400">
          Get a personalized demo tailored to your organization's needs
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium">
                First Name *
              </Label>
              <Input
                id="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
                className="bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium">
                Last Name *
              </Label>
              <Input
                id="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                required
                className="bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Work Email *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium">
              Company *
            </Label>
            <Input
              id="company"
              placeholder="Your Company"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              required
              className="bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role" className="text-sm font-medium">
              Your Role *
            </Label>
            <Select onValueChange={(value) => handleInputChange("role", value)} required>
              <SelectTrigger className="bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cto">CTO</SelectItem>
                <SelectItem value="cio">CIO</SelectItem>
                <SelectItem value="it-director">IT Director</SelectItem>
                <SelectItem value="data-scientist">Data Scientist</SelectItem>
                <SelectItem value="product-manager">Product Manager</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="companySize" className="text-sm font-medium">
              Company Size *
            </Label>
            <Select onValueChange={(value) => handleInputChange("companySize", value)} required>
              <SelectTrigger className="bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700">
                <SelectValue placeholder="Select company size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="50-200">50-200 employees</SelectItem>
                <SelectItem value="200-1000">200-1,000 employees</SelectItem>
                <SelectItem value="1000-5000">1,000-5,000 employees</SelectItem>
                <SelectItem value="5000+">5,000+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="useCase" className="text-sm font-medium">
              Primary Use Case *
            </Label>
            <Textarea
              id="useCase"
              placeholder="Tell us about your AI use case and requirements..."
              value={formData.useCase}
              onChange={(e) => handleInputChange("useCase", e.target.value)}
              className="min-h-[100px] bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700"
              required
            />
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Request Demo
                </>
              )}
            </Button>
          </motion.div>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
