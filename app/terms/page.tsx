import Link from "next/link"

export const dynamic = "force-static"

const sections = [
  {
    title: "Website Use",
    body:
      "You may use this website for lawful informational and business purposes only. You agree not to misuse the site, interfere with its operation, or attempt unauthorized access to related systems.",
  },
  {
    title: "Product and Pilot Information",
    body:
      "Descriptions of LightMind products, pilots, and availability are provided for general information and may change without notice. Submission of interest through the site does not create a binding purchase or supply commitment.",
  },
  {
    title: "Intellectual Property",
    body:
      "Website content, branding, product materials, and related assets are owned by LightMind or its licensors and may not be copied, distributed, or reused without permission except as allowed by law.",
  },
  {
    title: "No Warranty",
    body:
      "The site is provided on an as-is basis. To the maximum extent permitted by law, LightMind disclaims warranties regarding availability, accuracy, fitness for a particular purpose, and non-infringement.",
  },
  {
    title: "Limitation of Liability",
    body:
      "LightMind is not liable for indirect, incidental, special, or consequential damages arising from use of the website or reliance on its content, except where liability cannot be excluded by applicable law.",
  },
  {
    title: "Contact",
    body:
      "Questions about these terms can be sent to lightmind@lightmind.art.",
  },
] as const

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            These terms govern access to the LightMind website and the
            informational materials published here.
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
