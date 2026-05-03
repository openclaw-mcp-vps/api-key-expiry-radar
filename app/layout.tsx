import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Key Expiry Radar — Never Let a Key Expire Again',
  description: 'Monitors API key expiration across services. Scans codebases and services for expiring API keys with Slack alerts for DevOps teams and platform engineers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6f64b05c-7a31-47e1-a84f-55d7b853a6ed"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
