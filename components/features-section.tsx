import FeatureCard from "@/components/feature-card"
import { FeatureIcons } from "@/components/feature-icons"

export default function FeaturesSection() {
  const features = [
    {
      icon: <FeatureIcons.Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description:
        "Bank-grade encryption, SOC 2 compliance, and advanced access controls to protect your sensitive data.",
    },
    {
      icon: <FeatureIcons.Bot className="h-6 w-6" />,
      title: "Custom AI Agents",
      description:
        "Build specialized AI agents tailored to your industry needs with custom training and behavior patterns.",
    },
    {
      icon: <FeatureIcons.Database className="h-6 w-6" />,
      title: "Knowledge Management",
      description: "Centralized knowledge base with intelligent search, version control, and seamless integration.",
    },
    {
      icon: <FeatureIcons.Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description:
        "Role-based access control, team workspaces, and collaborative AI conversations for your organization.",
    },
    {
      icon: <FeatureIcons.Zap className="h-6 w-6" />,
      title: "High Performance",
      description: "Lightning-fast responses with 99.9% uptime SLA and global CDN for optimal performance.",
    },
    {
      icon: <FeatureIcons.Settings className="h-6 w-6" />,
      title: "Easy Integration",
      description:
        "RESTful APIs, webhooks, and pre-built connectors for seamless integration with your existing systems.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900/50" aria-labelledby="features-heading">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Powerful Features for Enterprise
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Everything you need to deploy AI solutions at scale with confidence and security.
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
