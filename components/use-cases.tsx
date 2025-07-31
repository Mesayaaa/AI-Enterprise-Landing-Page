import { Card, CardContent } from "@/components/ui/card"
import { UseCaseIcons } from "@/components/use-case-icons"

export default function UseCases() {
  const useCases = [
    {
      icon: <UseCaseIcons.Building2 className="h-8 w-8" />,
      title: "Financial Services",
      description:
        "Risk analysis, compliance monitoring, and automated reporting for banks and financial institutions.",
      features: ["Risk Assessment", "Compliance Automation", "Financial Analysis"],
    },
    {
      icon: <UseCaseIcons.Heart className="h-8 w-8" />,
      title: "Healthcare",
      description: "Medical research assistance, patient data analysis, and clinical decision support systems.",
      features: ["Clinical Research", "Patient Analytics", "Medical Documentation"],
    },
    {
      icon: <UseCaseIcons.Landmark className="h-8 w-8" />,
      title: "Government",
      description: "Policy analysis, citizen services automation, and secure document processing for agencies.",
      features: ["Policy Analysis", "Citizen Services", "Document Processing"],
    },
    {
      icon: <UseCaseIcons.Scale className="h-8 w-8" />,
      title: "Legal",
      description: "Contract analysis, legal research, and case management for law firms and legal departments.",
      features: ["Contract Review", "Legal Research", "Case Management"],
    },
    {
      icon: <UseCaseIcons.GraduationCap className="h-8 w-8" />,
      title: "Education",
      description: "Personalized learning, research assistance, and administrative automation for institutions.",
      features: ["Personalized Learning", "Research Support", "Admin Automation"],
    },
    {
      icon: <UseCaseIcons.Factory className="h-8 w-8" />,
      title: "Manufacturing",
      description: "Quality control, predictive maintenance, and supply chain optimization for manufacturers.",
      features: ["Quality Control", "Predictive Maintenance", "Supply Chain"],
    },
  ]

  return (
    <section id="use-cases" className="py-20" aria-labelledby="use-cases-heading">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 id="use-cases-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Industry Solutions
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Tailored AI solutions for every industry with specialized features and compliance requirements.
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="relative p-6">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                  {useCase.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
