import Link from "next/link"

export const dynamic = "force-static"

const sections = [
  {
    title: "What We Collect",
    body:
      "When you contact LightMind, request product access, or interact with our site, we may collect the information you provide directly, including your name, email address, company, and message contents.",
  },
  {
    title: "How We Use Information",
    body:
      "We use submitted information to respond to inquiries, coordinate pilots or pre-orders, improve product communications, and maintain the security and reliability of our services.",
  },
  {
    title: "Sharing and Service Providers",
    body:
      "We do not sell personal information. We may share limited information with infrastructure, analytics, payments, and communications providers only where necessary to operate the business and support customer requests.",
  },
  {
    title: "Retention",
    body:
      "We retain inquiry and business records for as long as needed to manage customer relationships, comply with legal obligations, resolve disputes, and enforce agreements.",
  },
  {
    title: "Your Choices",
    body:
      "You may request access, correction, or deletion of information you have provided to us, subject to applicable legal and operational requirements.",
  },
  {
    title: "Contact",
    body:
      "For privacy-related questions, contact LightMind at lightmind@lightmind.art.",
  },
] as const

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="mb-10">
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to home
          </Link>
        </div>

        <header className="mb-12 space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Legal
          </p>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            This page explains how LightMind handles information submitted
            through this website and related business communications.
          </p>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="border-t border-border pt-8">
              <h2 className="mb-3 text-2xl font-semibold tracking-tight">
                {section.title}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
