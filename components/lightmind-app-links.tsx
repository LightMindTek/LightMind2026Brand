import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function LightMindAppButton({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="#app"
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-border bg-white px-3 py-2 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
    >
      <Image
        src="/images/lightmind-agent.jpg"
        alt=""
        width={28}
        height={28}
        className="rounded-lg"
      />
      Get the app
    </Link>
  )
}

export function LightMindAppLinks() {
  return (
    <div id="app" className="mt-10 scroll-mt-24 border-t border-border pt-6">
      <div className="flex items-center gap-3.5">
        <Image
          src="/images/lightmind-agent.jpg"
          alt="LightMind Agent app icon"
          width={52}
          height={52}
          className="shrink-0 rounded-xl"
        />
        <div>
          <h2 className="text-base font-semibold tracking-tight">LightMind Agent</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Notes, reminders and supported smart-glasses workflows.
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="https://apps.apple.com/us/app/lightmind-agent/id6794785684"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download LightMind Agent for iPhone and iPad on the App Store (opens in a new tab)"
          className="group inline-flex items-center gap-4 rounded-xl bg-foreground px-4 py-2.5 text-background transition-colors hover:bg-foreground/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          <span>
            <span className="block text-xs opacity-75">iPhone &amp; iPad</span>
            <span className="block text-sm font-medium">App Store</span>
          </span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=art.lightmind.mobile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download LightMind Agent for Android on Google Play (opens in a new tab)"
          className="group inline-flex items-center gap-4 rounded-xl border border-border bg-white px-4 py-2.5 transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          <span>
            <span className="block text-xs text-muted-foreground">Android</span>
            <span className="block text-sm font-medium">Google Play</span>
          </span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
