import type { Metadata } from "next"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "LightMind Agent Connected Device Demonstration",
  description: "LightMind Agent connected-device foreground service reviewer demonstration.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function LightMindReviewPage() {
  return (
    <main className="min-h-screen bg-[#f5f8f6] text-[#101713]">
      <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <header className="mb-8">
          <p className="mb-3 text-sm font-bold uppercase text-[#087d59]">
            Google Play reviewer evidence
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
            Connected device data transfer
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#536058]">
            This physical-device recording shows LightMind Agent connected to
            compatible glasses, the persistent connected-device foreground
            service notification, and a user-requested photo transfer.
          </p>
        </header>

        <div className="rounded-lg border border-[#ced8d2] bg-white p-3">
          <video
            className="mx-auto block w-full max-w-[390px] rounded bg-[#101713]"
            controls
            playsInline
            preload="metadata"
          >
            <source
              src="/app-review/lightmind/lightmind-connected-device.mp4"
              type="video/mp4"
            />
            Your browser does not support embedded MP4 video.
          </video>
        </div>

        <p className="mt-5 text-sm">
          <a
            className="text-[#087d59] underline underline-offset-4"
            href="/app-review/lightmind/lightmind-connected-device.mp4"
          >
            Open the MP4 directly
          </a>
        </p>
      </div>
    </main>
  )
}
