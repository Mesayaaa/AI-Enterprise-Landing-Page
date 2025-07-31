"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const prompts = [
  "How can I improve our customer support with AI?",
  "What are the security features for enterprise data?",
  "How do I integrate with our existing knowledge base?",
  "Can you help me analyze our quarterly reports?",
  "What compliance standards do you support?",
]

export default function TypingPromptInput() {
  const [currentPrompt, setCurrentPrompt] = useState("")
  const [promptIndex, setPromptIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false)
          setIsDeleting(true)
          return
        }

        if (isDeleting) {
          if (charIndex > 0) {
            setCurrentPrompt(prompts[promptIndex].substring(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            setIsDeleting(false)
            setPromptIndex((promptIndex + 1) % prompts.length)
          }
        } else {
          if (charIndex < prompts[promptIndex].length) {
            setCurrentPrompt(prompts[promptIndex].substring(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            setIsPaused(true)
          }
        }
      },
      isDeleting ? 50 : isPaused ? 2000 : 100,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, isPaused, promptIndex])

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <Input
          type="text"
          placeholder={currentPrompt + (charIndex === prompts[promptIndex].length && !isPaused ? "" : "|")}
          className="w-full h-14 pl-6 pr-14 text-lg bg-background/80 backdrop-blur-sm border-2 border-muted-foreground/20 focus:border-primary rounded-xl shadow-lg"
          readOnly
        />
        <Button size="icon" className="absolute right-2 top-2 h-10 w-10 rounded-lg bg-primary hover:bg-primary/90">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-sm text-muted-foreground mt-3 text-center">
        Try asking about our enterprise features, security, or integration capabilities
      </p>
    </div>
  )
}
