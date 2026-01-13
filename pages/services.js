import Head from "next/head";
import Link from "next/link";

export default function Services() {
  const APPS_HUB = "https://apps.yourbizsuite.com";
  // If you already have a public YBS Meet booking link, put it here:
  // const BOOKING_LINK = "https://apps.yourbizsuite.com/meet/....";
  const BOOKING_LINK = "https://meet.yourbizsuite.com/book/9c626e6c8a0a93cbcf62135d35567df93f8598c624255e06";

  const packages = [
    {
      title: "Starter Website",
      price: "$300–$500",
      bestFor: "1–2 page business website",
      bullets: [
        "Mobile-responsive design",
        "Contact form + basic sections",
        "Fast delivery (typically 2–4 days)",
        "1 revision round included",
      ],
    },
    {
      title: "Business Website",
      price: "$800–$1,200",
      bestFor: "4–6 pages for small businesses",
      bullets: [
        "Home, About, Services, Contact + more",
        "Clean UI with strong credibility layout",
        "Basic SEO structure (titles, meta, headings)",
        "2 revision rounds included",
      ],
    },
    {
      title: "SaaS Landing + Dashboard UI",
      price: "$1,500–$2,500",
      bestFor: "Founders launching an MVP",
      bullets: [
        "Conversion-focused landing page",
        "Auth-ready UI structure (if needed)",
        "Dashboard screens (tables, cards, charts UI)",
        "Best practices for performance + UX",
      ],
    },
  ];

  const integrations = [
    { title: "Stripe Payments / Checkout", price: "$500–$800" },
    { title: "Stripe Subscriptions / Billing", price: "$800–$1,500" },
    { title: "Google / Microsoft OAuth", price: "$500–$1,000" },
    { title: "Zoom Integration", price: "$700–$1,200" },
    { title: "PayPal or Square", price: "$500–$900" },
    { title: "Webhooks / Automations", price: "$500+" },
  ];

  const consulting = [
    { title: "60-minute Consultation", price: "$150" },
    { title: "Architecture Review + Recommendations", price: "$300" },
    { title: "MVP Roadmap (scope, stack, plan)", price: "$500" },
  ];

  return (
    <>
      <Head>
        <title>YourBizSuite — Services</title>
        <meta
          name="description"
          content="Affordable websites, SaaS consulting, and integrations (OAuth, Stripe, Zoom, Microsoft, Square, PayPal). Built by YourBizSuite Software LLC."
        />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <header className="bg-white shadow px-4 py-3">
        <div className="w-full max-w-6xl mx-auto px-2 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="YourBizSuite Logo" className="h-12 w-auto" />
          </Link>

          <nav className="flex items-center gap-2 sm:gap-4">
            <Link href="/" className="text-sm font-medium text-slate-700 hover:text-slate-900 px-2 py-2">
              Home
            </Link>
            <a
              href={APPS_HUB}
              className="text-sm font-semibold bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-500 transition"
              target="_blank"
              rel="noreferrer"
            >
              Open Apps
            </a>
          </nav>
        </div>
      </header>

      <main className="min-h-screen bg-[#162b3e] text-[#7c96b0]">
        {/* Hero */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Services by YourBizSuite Software LLC
            </h1>
            <p className="mt-5 text-lg text-[#7c96b0] max-w-3xl mx-auto leading-relaxed">
              We build affordable websites, SaaS user interfaces, and production-ready integrations.
              Clean communication, fast delivery, and real business experience.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={BOOKING_LINK}
                className="inline-block bg-[#F4B400] text-[#162b3e] px-7 py-3 rounded-md font-semibold hover:opacity-90 transition"
                target="_blank"
                rel="noreferrer"
              >
                Book a Google Meet Appointment (YBS Meet)
              </a>
              <Link
                href="/"
                className="inline-block bg-white/10 text-white px-7 py-3 rounded-md font-semibold hover:bg-white/15 transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-14 bg-[#d5e1e8] px-6 text-[#162b3e]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Website Packages</h2>
              <p className="text-slate-700 max-w-3xl mx-auto">
                Transparent ranges — final quote depends on scope, content readiness, and integrations.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-7">
              {packages.map((p) => (
                <div
                  key={p.title}
                  className="bg-[#f9f7f6] p-7 rounded-xl shadow-sm border border-transparent hover:shadow-lg hover:border-[#336659]/20 transition"
                >
                  <h3 className="text-xl font-extrabold">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.bestFor}</p>

                  <div className="mt-4 inline-block bg-[#162b3e] text-white px-4 py-2 rounded-md text-sm font-semibold">
                    {p.price}
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-slate-700">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-[6px] h-2 w-2 rounded-full bg-[#336659] flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-14 bg-white px-6 text-[#162b3e]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">SaaS Integrations</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                For founders and businesses who need secure auth, payments, scheduling, and reliable webhooks.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((i) => (
                <div
                  key={i.title}
                  className="p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md transition"
                >
                  <h3 className="font-extrabold text-lg">{i.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">Typical range: <strong>{i.price}</strong></p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href={BOOKING_LINK}
                className="inline-block bg-sky-600 text-white px-7 py-3 rounded-md hover:bg-sky-500 transition font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                Book a Google Meet Appointment (YBS Meet)
              </a>
            </div>
          </div>
        </section>

        {/* Consulting */}
        <section className="py-14 bg-[#162b3e] px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white">Consulting</h2>
            <p className="text-[#7c96b0] max-w-3xl mx-auto">
              Need clarity before you build? We’ll help you avoid expensive mistakes and ship faster.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {consulting.map((c) => (
                <div
                  key={c.title}
                  className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  <h3 className="text-white font-extrabold text-lg">{c.title}</h3>
                  <p className="mt-2 text-sm text-[#b9c9db]">
                    Price: <span className="font-semibold text-[#F4B400]">{c.price}</span>
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm text-[#b9c9db] max-w-3xl mx-auto">
              Tip: If you want a fixed-price quote, come with a short scope list (pages/features + integrations),
              or we can build that scope together during the consultation.
            </p>

            <a
                href={BOOKING_LINK}
                className="inline-block bg-[#F4B400] text-[#162b3e] px-7 py-3 rounded-md font-semibold hover:opacity-90 transition"
                target="_blank"
                rel="noreferrer"
              >
                Book a Google Meet Appointment (YBS Meet)
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#d5e1e8] border-t mt-10">
          <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} YourBizSuite Software LLC. All rights reserved.</p>
            <p className="mt-2">
              Need help? Email us at{" "}
              <a href="mailto:support@yourbizsuite.com" className="text-blue-600 hover:underline">
                support@yourbizsuite.com
              </a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}