export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          API Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          API Key Expiry Radar
        </h1>
        <p className="text-lg text-[#8b949e] mb-4 max-w-xl mx-auto">
          Continuously scans your repos and services for API keys nearing expiration.
          Get proactive Slack alerts before production goes down.
        </p>
        <ul className="flex flex-wrap justify-center gap-3 mb-8 text-sm text-[#c9d1d9]">
          {['Multi-repo scanning', 'Slack alerts', 'Threshold config', 'Multi-environment'].map(f => (
            <li key={f} className="flex items-center gap-1 bg-[#161b22] border border-[#30363d] rounded-full px-3 py-1">
              <span className="text-[#58a6ff]">✓</span> {f}
            </li>
          ))}
        </ul>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $39/mo
        </a>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay ahead of key expiry</p>
          <div className="text-5xl font-extrabold text-[#58a6ff] mb-1">$39</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited repository scans',
              'Slack & email notifications',
              'Custom expiry thresholds',
              'Multi-environment support',
              'Key lifecycle dashboard',
              'Priority support',
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does API Key Expiry Radar detect expiring keys?',
              a: 'It connects to your repositories and service integrations, parses key metadata and expiry dates, and flags any keys expiring within your configured threshold window.',
            },
            {
              q: 'Which services and platforms are supported?',
              a: 'GitHub, GitLab, AWS, GCP, Azure, Stripe, Twilio, and more. New integrations are added regularly based on customer requests.',
            },
            {
              q: 'How are Slack alerts configured?',
              a: 'Connect your Slack workspace via OAuth, choose a channel, and set how many days before expiry you want to be notified. You can configure separate thresholds per environment.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs pb-8">
        &copy; {new Date().getFullYear()} API Key Expiry Radar. All rights reserved.
      </footer>
    </main>
  )
}
