import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      company: "Fortune 500 Technology Company",
      content:
        "The enterprise AI platform has transformed how we handle data analysis and decision-making. The security features give us complete confidence in deploying AI across our organization.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Michael Rodriguez",
      role: "Director of Operations",
      company: "Global Financial Services",
      content:
        "Implementation was seamless, and the ROI was immediate. Our compliance team loves the automated reporting features, and the AI agents have reduced manual work by 60%.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director",
      company: "Medical Research Institute",
      content:
        "The knowledge management system has revolutionized our research processes. The AI's ability to analyze complex medical data while maintaining HIPAA compliance is outstanding.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "James Thompson",
      role: "IT Director",
      company: "Government Agency",
      content:
        "Security and compliance were our top priorities. This platform exceeded our expectations with its government-grade security features and seamless integration capabilities.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Lisa Park",
      role: "VP of Innovation",
      company: "Manufacturing Giant",
      content:
        "The custom AI agents have optimized our supply chain operations beyond what we thought possible. The platform's scalability handles our global operations effortlessly.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Robert Kim",
      role: "Chief Legal Officer",
      company: "International Law Firm",
      content:
        "Contract analysis that used to take days now takes hours. The AI's accuracy in legal document review has improved our efficiency while maintaining the highest quality standards.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900/50" aria-labelledby="testimonials-heading">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              See how organizations worldwide are transforming their operations with our AI platform.
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
