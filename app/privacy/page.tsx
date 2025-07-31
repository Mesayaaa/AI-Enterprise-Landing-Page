import PrivacyPolicyTemplate from "@/components/privacy-policy-template"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | AI Enterprise",
  description: "Privacy Policy for AI Enterprise platform. Learn how we collect, use, and protect your data.",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <PrivacyPolicyTemplate />
      </main>
      <Footer />
    </div>
  )
}
