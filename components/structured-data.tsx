export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Enterprise AI Platform",
    description:
      "Enterprise-grade AI platform with LLM conversations, customizable agents, secure knowledge base, and MCP server support for businesses and government agencies.",
    url: "https://your-domain.com",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Contact for custom enterprise pricing",
    },
    provider: {
      "@type": "Organization",
      name: "AI Enterprise",
      url: "https://your-domain.com",
    },
    featureList: [
      "Advanced LLM Conversations",
      "Customizable Agents",
      "Enterprise Knowledge Base",
      "Enterprise Security",
      "Prompt Templates",
      "MCP Server Support",
      "Data Privacy & Compliance",
      "Real-time Collaboration",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
