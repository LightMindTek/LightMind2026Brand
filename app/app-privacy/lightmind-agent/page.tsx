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
      "LightMind Agent is a local-first companion published by LightMind Tech Limited. Local notes and disconnected workspaces do not require glasses or an account. Connected AI tools and optional Studio editing send only the inputs you choose to their configured services. The app does not contain advertising, third-party analytics, or cross-app tracking.",
      "This notice applies to the LightMind Agent Android, iOS, iPadOS and macOS apps and their companion browser experience. Available capabilities depend on the app version and platform. The separate website privacy policy applies to the company website.",
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
      "You can connect an AI service and explicitly submit a prompt, translation or tool request. Depending on the action, it can include text, language, selected photos or audio, location coordinates or a place label, session identifiers, capability and timestamps. Location and media require the corresponding selection or consent. These inputs are used to provide the requested result, not advertising.",
      "Configured services may be operated by LightMind, by you or by another provider, and may forward the chosen input to an AI provider. Backend jobs and results can remain available after the immediate request for retrieval and recovery. Do not assume optional requests are anonymous or immediately deleted. Use only trusted endpoints and avoid unnecessary sensitive information.",
    ],
  },
  {
    title: "Optional Studio accounts and media",
    paragraphs: [
      "Studio linking is a separate, optional account connection. After browser approval, LightMind receives a scoped credential and account identifier. The configured Studio workspace stores uploaded videos, accompanying audio, editing instructions, derived media and job records under that account. Selecting a video first creates a local preview; upload and editing are separate actions.",
      "Publishing requires additional authorization and configured social channels. Connecting an account, choosing a file or generating a preview does not itself authorize social publication. Revoking the link disables that client's grant; it does not delete the provider account or previously uploaded media. Manage those records with the provider's controls or support.",
    ],
  },
  {
    title: "Permissions and recording",
    paragraphs: [
      "Bluetooth and Nearby Devices permissions connect the phone to supported glasses. Android 11 and earlier can require a location-related permission for Bluetooth discovery; LightMind Agent does not use that permission to collect GPS location. Network and Wi-Fi permissions support local device communication and optional backend requests.",
      "Separately, AI Tour can request current precise or approximate location when you choose location input. You can instead provide a place label or image. Camera and microphone access is optional. On macOS, the system picker requires user-selected read/write sandbox permission; importing a movie reads the original and stages a private copy without modifying the source.",
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
      "Local records remain until you remove them with available app controls or clear app storage. Credentials can persist between launches: Apple clients use the system Keychain for protected connection credentials. Disconnect or revoke optional services when no longer needed; uninstalling an app alone may not remove Keychain entries or server records.",
      "Uploaded Studio media and server job records have a separate lifecycle from local copies. Local deletion or disconnect does not automatically delete remote data. Use the configured service's deletion controls or contact its operator. For LightMind-operated processing or assistance with a deletion request, contact lightmind@lightmind.art and identify the service and records concerned without sending passwords or connection keys.",
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
            Updated October 4, 2026. This notice explains how LightMind Agent,
            published by LightMind Tech Limited, handles information in the
            mobile, Mac and browser companion apps.
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
              Last updated: October 4, 2026.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
