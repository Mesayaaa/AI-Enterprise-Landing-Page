"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

const prompts = [
  "Analyze our quarterly financial reports...",
  "Generate a compliance summary for...",
  "Create a risk assessment for...",
  "Draft a policy document about...",
  "Summarize the latest market trends...",
]

export default function TypingPromptInput() {
  const [currentPrompt, setCurrentPrompt] = useState("")
  const [promptIndex, setPromptIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = prompts[promptIndex]

        if (!isDeleting && charIndex < current.length) {
          setCurrentPrompt(current.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else if (isDeleting && charIndex > 0) {
          setCurrentPrompt(current.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else if (!isDeleting && charIndex === current.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false)
          setPromptIndex((promptIndex + 1) % prompts.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, promptIndex])

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative flex items-center space-x-2 rounded-xl border bg-background/50 backdrop-blur-sm p-2 shadow-lg">
        <Input
          placeholder={currentPrompt}
          className="flex-1 border-0 bg-transparent text-lg placeholder:text-muted-foreground focus-visible:ring-0"
          readOnly
        />
        <Button size="icon" className="shrink-0 rounded-lg">
          <Send className="h-4 w-4" />
        </Button>
      </div>
      <p className="mt-2 text-center text-sm text-muted-foreground">
        Try our AI assistant with enterprise-grade security
      </p>
    </div>
  )
}
