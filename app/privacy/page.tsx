import PrivacyPolicyTemplate from "@/components/privacy-policy-template"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Enterprise AI Platform",
  description:
    "Privacy Policy for Enterprise AI Platform - Learn how we protect and handle your data with enterprise-grade security.",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <PrivacyPolicyTemplate />
      </main>
      <Footer />
    </div>
  )
}
