import type { Metadata } from "next"
import Link from "next/link"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "LightMind Agent Privacy Notice",
  description:
    "How LightMind Agent handles local app data, optional backend requests, connected-glasses data, retention, and deletion.",
}

const sections = [
  {
    title: "Summary",
    paragraphs: [
      "LightMind Agent is a local-first mobile companion published by LightMind Tech Limited. The app does not contain advertising, third-party analytics, cross-app tracking, or a publisher-operated user account. Core app features work without sending personal data to LightMind Tech Limited.",
      "This notice applies to the LightMind Agent Android and iOS apps and their companion browser experience. The separate LightMind website privacy policy applies to information submitted through the company website.",
    ],
  },
  {
    title: "Information handled on your device",
    paragraphs: [
      "The app can process text you enter, assistant history, reminders, memory notes, a location label you type, language preferences, app interactions, and photos, videos, or audio that you choose to capture or import.",
      "When you use compatible glasses, the app can process Bluetooth identity, connection state, battery level, firmware information, brightness and audio status, capture status, and media transferred from the glasses. Compatibility depends on the device model, firmware, companion software, permissions, and network.",
      "This information remains in app-specific storage unless you explicitly export it, transmit it to compatible hardware, or submit it to an endpoint you configure.",
    ],
  },
  {
    title: "Optional network requests",
    paragraphs: [
      "You can enable a backend URL and explicitly submit an assistant prompt or tool-session request. A request can include submitted text, language, a random local conversation or session identifier, selected capability, timestamps, and related interaction metadata. Media is included only when the selected workflow says it will be included.",
      "The public release does not contain a default publisher-operated backend account or reusable hardware-provider credential. The destination, operator, purpose, retention, and deletion terms for a configured endpoint depend on the URL you choose. Do not use an endpoint you do not trust.",
    ],
  },
  {
    title: "Permissions and recording",
    paragraphs: [
      "Bluetooth and Nearby Devices permissions connect the phone to supported glasses. Android 11 and earlier can require a location-related permission for Bluetooth discovery; LightMind Agent does not use that permission to collect GPS location. Network and Wi-Fi permissions support local device communication and optional backend requests.",
      "Photo, video, and audio actions begin only after a user action. Active recording is identified by the operating system or an in-app recording state. You are responsible for giving appropriate notice and obtaining consent before recording another person.",
    ],
  },
  {
    title: "Sharing and tracking",
    paragraphs: [
      "LightMind Tech Limited does not sell personal information and the app does not share information for advertising or cross-app tracking. Information leaves the device only when needed for a connection you initiate, when you export it, or when you explicitly submit it to a backend you select.",
    ],
  },
  {
    title: "Retention and deletion",
    paragraphs: [
      "Local records remain until you delete them with available app controls, clear app or browser storage, or uninstall the app. Android cloud backup is disabled for app-local state. Backend bearer tokens are held only for the current app process or browser session and are not stored with job data.",
      "Data sent to a configured backend is governed by that endpoint operator. Because this release has no LightMind Agent publisher account, there is no app account record to delete from LightMind Tech Limited.",
    ],
  },
  {
    title: "Security and international transfers",
    paragraphs: [
      "Use HTTPS for any internet-accessible backend. Plain HTTP is available only for explicitly configured local-network development and does not protect content in transit. If you choose an endpoint in another country or region, submitted information may be processed there under that endpoint operator's terms.",
    ],
  },
  {
    title: "Children",
    paragraphs: [
      "LightMind Agent is not directed to children under 13. LightMind Tech Limited does not knowingly collect children's personal information through the app.",
    ],
  },
  {
    title: "Changes",
    paragraphs: [
      "Material changes to app data collection, cloud services, advertising, analytics, accounts, or tracking will be reflected in this notice and the applicable store disclosures before release.",
    ],
  },
] as const

export default function LightMindAgentPrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-12 lg:py-24">
        <nav className="mb-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            LightMind home
          </Link>
          <Link
            href="/privacy"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Website privacy
          </Link>
        </nav>

        <header className="mb-12 space-y-4">
          <p className="text-sm font-semibold uppercase text-teal-700">
            LightMind Agent
          </p>
          <h1 className="text-4xl font-bold lg:text-5xl">
            App Privacy Notice
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Effective July 26, 2026. This notice explains how LightMind Agent,
            published by LightMind Tech Limited, handles information in the
            mobile companion and browser app.
          </p>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="border-t border-border pt-8">
              <h2 className="mb-3 text-2xl font-semibold">{section.title}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section className="border-t border-border pt-8">
            <h2 className="mb-3 text-2xl font-semibold">Contact</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Controller: LightMind Tech Limited.
              {" "}
              Privacy questions:
              {" "}
              <a
                className="text-teal-700 underline underline-offset-4"
                href="mailto:lightmind@lightmind.art"
              >
                lightmind@lightmind.art
              </a>
              .
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: July 26, 2026.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
