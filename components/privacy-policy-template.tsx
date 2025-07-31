import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyTemplate() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
            <CardDescription>
              We collect information you provide directly to us and information we collect automatically when you use
              our services.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Information You Provide</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Account information (name, email, company details)</li>
                <li>Content you upload to our knowledge base</li>
                <li>Communications with our support team</li>
                <li>Payment information (processed by third-party providers)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Information We Collect Automatically</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Usage data and analytics</li>
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
            <CardDescription>
              We use the information we collect to provide, maintain, and improve our services.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Provide and maintain our AI platform services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Improve our services and develop new features</li>
              <li>Comply with legal obligations</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Security</CardTitle>
            <CardDescription>
              We implement appropriate security measures to protect your personal information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>End-to-end encryption for data in transit and at rest</li>
              <li>Regular security audits and penetration testing</li>
              <li>SOC 2 Type II compliance</li>
              <li>GDPR and CCPA compliance</li>
              <li>Role-based access controls</li>
              <li>Regular security training for employees</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Rights</CardTitle>
            <CardDescription>You have certain rights regarding your personal information.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request data portability</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>If you have any questions about this Privacy Policy, please contact us.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: privacy@ai-enterprise.com</p>
              <p>Address: 123 AI Street, Tech City, TC 12345</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
