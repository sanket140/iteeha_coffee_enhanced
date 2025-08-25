import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <>
      <title>Privacy Policy - Iteeha Coffee | Data Protection & Privacy</title>
      <meta name="description" content="Iteeha Coffee's privacy policy. Learn how we collect, use, and protect your personal information. Contact us at connect@iteeha.coffee for privacy concerns." />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-coffee-light" data-testid="privacy-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-inter font-bold text-5xl md:text-6xl text-coffee-brown mb-6" data-testid="privacy-hero-title">
              Privacy Policy
            </h1>
            <p className="text-xl text-charcoal max-w-3xl mx-auto" data-testid="privacy-hero-subtitle">
              Your privacy is important to us. This policy explains how we handle your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white" data-testid="privacy-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12" data-testid="privacy-intro">
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                At Iteeha Coffee, we are committed to protecting your privacy. This Privacy Policy explains 
                how we collect, use, and disclose your personal information when you visit our cafes or use 
                our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12" data-testid="privacy-collection">
              <h2 className="font-inter font-bold text-3xl text-coffee-brown mb-6">
                Information We Collect
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                We may collect personal information such as your name, email address, phone number, and 
                payment details when you:
              </p>
              <ul className="list-disc pl-6 text-charcoal text-lg leading-relaxed mb-6 space-y-2">
                <li>Register for an account or loyalty program</li>
                <li>Make a purchase on our website or in our cafes</li>
                <li>Contact us through our website or social media</li>
                <li>Participate in surveys or promotional activities</li>
                <li>Subscribe to our newsletter or marketing communications</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12" data-testid="privacy-usage">
              <h2 className="font-inter font-bold text-3xl text-coffee-brown mb-6">
                How We Use Your Information
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                We use your personal information to:
              </p>
              <ul className="list-disc pl-6 text-charcoal text-lg leading-relaxed mb-6 space-y-2">
                <li>Provide and improve our services and customer experience</li>
                <li>Process transactions and manage your orders</li>
                <li>Communicate with you about your orders, account, and our services</li>
                <li>Send you marketing communications with your consent</li>
                <li>Analyze usage patterns to improve our offerings</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            {/* Sharing Your Information */}
            <div className="mb-12" data-testid="privacy-sharing">
              <h2 className="font-inter font-bold text-3xl text-coffee-brown mb-6">
                Sharing Your Information
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                We may share your personal information with:
              </p>
              <ul className="list-disc pl-6 text-charcoal text-lg leading-relaxed mb-6 space-y-2">
                <li>Third-party service providers who assist us in operating our website and providing our services</li>
                <li>Payment processors to handle transactions securely</li>
                <li>Legal authorities when required by law or to protect our rights</li>
              </ul>
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                <strong>We do not sell or rent your personal information to third parties.</strong>
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12" data-testid="privacy-security">
              <h2 className="font-inter font-bold text-3xl text-coffee-brown mb-6">
                Data Security
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                We implement appropriate security measures to protect your personal information from 
                unauthorized access, disclosure, alteration, or destruction. This includes:
              </p>
              <ul className="list-disc pl-6 text-charcoal text-lg leading-relaxed mb-6 space-y-2">
                <li>Encryption of sensitive data during transmission</li>
                <li>Secure servers and data storage systems</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-12" data-testid="privacy-cookies">
              <h2 className="font-inter font-bold text-3xl text-coffee-brown mb-6">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 text-charcoal text-lg leading-relaxed mb-6 space-y-2">
                <li>Analyze website traffic and user behavior</li>
                <li>Customize your online experience</li>
                <li>Remember your preferences and settings</li>
                <li>Improve our website functionality</li>
              </ul>
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                You can adjust your browser settings to refuse cookies, but this may affect certain 
                features of our website.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12" data-testid="privacy-rights">
              <h2 className="font-inter font-bold text-3xl text-coffee-brown mb-6">
                Your Rights
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-charcoal text-lg leading-relaxed mb-6 space-y-2">
                <li>Access, correct, or delete your personal information</li>
                <li>Withdraw consent for marketing communications at any time</li>
                <li>Request information about how your data is processed</li>
                <li>File a complaint with relevant data protection authorities</li>
              </ul>
            </div>

            {/* Prohibited Activities */}
            <div className="mb-12" data-testid="privacy-prohibited">
              <h2 className="font-inter font-bold text-3xl text-coffee-brown mb-6">
                Prohibited Activities
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                When using our website and services, you agree not to engage in any unlawful or 
                prohibited activities, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-charcoal text-lg leading-relaxed mb-6 space-y-2">
                <li>Hacking or attempting to gain unauthorized access to our systems</li>
                <li>Distributing spam, malware, or other harmful content</li>
                <li>Violating the rights of other users or third parties</li>
                <li>Using our services for any illegal purposes</li>
              </ul>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-12" data-testid="privacy-changes">
              <h2 className="font-inter font-bold text-3xl text-coffee-brown mb-6">
                Changes to This Privacy Policy
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                We reserve the right to modify or update this Privacy Policy at any time. We will 
                notify you of any significant changes by posting the revised policy on our website 
                and updating the effective date. Your continued use of our services after such 
                changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-coffee-light rounded-2xl p-8" data-testid="privacy-contact">
              <h2 className="font-inter font-bold text-3xl text-coffee-brown mb-6">
                Contact Us
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                If you have any questions or concerns about our Privacy Policy, or if you would like 
                to exercise your rights regarding your personal information, please contact us at:
              </p>
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-coffee-brown text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26c.67.36 1.45.36 2.12 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-xl text-coffee-brown">Email</h3>
                    <p className="text-charcoal">connect@iteeha.coffee</p>
                  </div>
                </div>
                <p className="text-charcoal">
                  We will respond to your inquiry within a reasonable timeframe and assist you with 
                  any privacy-related concerns.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
