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
      name: "Enterprise AI Platform",
      url: "https://your-domain.com",
    },
    featureList: [
      "Secure AI Conversations",
      "Customizable AI Agents",
      "Knowledge Base Management",
      "MCP Server Support",
      "Enterprise Security",
      "Role-based Access Control",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
