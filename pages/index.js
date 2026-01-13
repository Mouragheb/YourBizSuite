import Head from "next/head";
import Link from "next/link";
import VisionSection from "../components/VisionSection";

export default function Home() {
  const BASE = "https://yourbizsuite.com";
  const APPS_HUB = "https://apps.yourbizsuite.com";

  const VIDEOS = [
    {
      slug: "demo",
      name: "Cashlytic Demo / Overview",
      mp4: "/demo.mp4",
      poster: "/Demo_thumbnail.png",
      description:
        "Quick product overview showing how Cashlytic tracks income, expenses, analytics and invoices.",
      duration: "PT57S",
      seconds: 57,
      uploadDate: "2025-11-06",
    },
    {
      slug: "multi1",
      name: "Multi-Business Overview",
      mp4: "/multi1.mp4",
      poster: "/multi1_thumbnail.png",
      description:
        "Manage multiple businesses from a single Cashlytic account—one dashboard, unlimited possibilities.",
      duration: "PT1M53S",
      seconds: 113,
      uploadDate: "2025-11-06",
    },
    {
      slug: "dashboard",
      name: "Dashboard Deep Dive",
      mp4: "/dashboard.mp4",
      poster: "/dashboard_thumbnail.png",
      description: "Explore the Income, Expense, and Profit/Loss tables in detail.",
      duration: "PT5M7S",
      seconds: 307,
      uploadDate: "2025-11-06",
    },
    {
      slug: "analytics",
      name: "Analytics Walkthrough",
      mp4: "/Analytics.mp4",
      poster: "/Analytics-thumbnail.png",
      description:
        "Turn data into decisions with Cashlytic Analytics—category breakdowns, trends, and insights.",
      duration: "PT1M43S",
      seconds: 103,
      uploadDate: "2025-11-06",
    },
    {
      slug: "estimate-invoice",
      name: "Estimates & Invoices",
      mp4: "/estimate-invoice.mp4",
      poster: "/Estimate-Invoice_thumbnail.png",
      description:
        "Create estimates, convert to invoices, email clients, and get paid via Stripe.",
      duration: "PT3M53S",
      seconds: 233,
      uploadDate: "2025-11-06",
    },
    {
      slug: "database",
      name: "Database Search Feature",
      mp4: "/DataBaseVideo.mp4",
      poster: "/database_thumbnail.png",
      description:
        "Find entries instantly, view totals, and analyze finances with smart filters.",
      duration: "PT2M51S",
      seconds: 171,
      uploadDate: "2025-11-06",
    },
  ];

  const videoJsonLd = VIDEOS.map((v) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: v.name,
    description: v.description,
    thumbnailUrl: [`${BASE}${v.poster}`],
    uploadDate: v.uploadDate,
    duration: v.duration,
    contentUrl: `${BASE}${v.mp4}`,
    embedUrl: `${BASE}/#video-${v.slug}`,
    publisher: {
      "@type": "Organization",
      name: "YourBizSuite",
      logo: { "@type": "ImageObject", url: `${BASE}/logo.png` },
    },
  }));

  const apps = [
    {
      name: "Cashlytic",
      logo: "/ybscashlytic5.png",
      tagline: "Smart financial tracking, invoicing, and insights for modern businesses",
      bullets: [
        "Record daily income and expenses with automatic daily Profit & Loss (P&L) reports",
        "Interactive tables + charts for income, expenses, and performance",
        "Category-based pie charts for clear breakdowns",
        "Rule-based AI business insights (trends, risks, opportunities)",
        "Create estimates and convert to invoices in one click",
        "Stripe-connected invoices for secure online card payments",
        "PDF export + email delivery for estimates and invoices (approval + payment links)",
      ],
      ctaText: "Open Cashlytic",
      ctaHref: APPS_HUB,
      note: "Ideal for business owners who want clarity, accuracy, and professionalism without accounting complexity.",
    },
    {
      name: "YBS Meet",
      logo: "/ybsmeet5.png",
      tagline: "Professional appointment booking built for real businesses",
      bullets: [
        "Accept bookings for Zoom, Google Meet, phone, or in-person appointments",
        "Google Calendar + Zoom integrations for automatic scheduling",
        "Branded public booking pages customers can access anytime",
        "Automated confirmation, reminder, and follow-up emails",
        "Full appointment lifecycle tracking (booking → completion)",
        "30 full-flow appointments per business/month + option to purchase more",
      ],
      ctaText: "Open YBS Meet",
      ctaHref: APPS_HUB,
      note: "Perfect for service-based businesses that value time, organization, and a professional booking experience.",
    },
    {
      name: "YBS eSign",
      logo: "/ybsesign5.png",
      tagline: "Simple, secure document signing for businesses",
      bullets: [
        "Unlimited reusable document templates",
        "Send documents for signature with a complete email workflow",
        "Recipient portal to view and access signed documents",
        "Full audit trail for every envelope and signature",
        "30 completed envelopes per business/month + option to purchase more",
      ],
      ctaText: "Open YBS eSign",
      ctaHref: APPS_HUB,
      note: "Designed for contracts, agreements, approvals, and any document that requires a trusted signature process.",
    },
    {
      name: "YBS BrandMail",
      logo: "/ybsbrandmail5.png",
      tagline: "Beautiful business emails without complexity",
      bullets: [
        "Build stunning emails using 50+ professionally designed themes",
        "Save templates for reuse across campaigns",
        "Send marketing emails to your customer list",
        "Performance reporting: delivered, opens, clicks, failed deliveries",
        "500 emails per business/month + option to purchase more credits",
        "Enterprise-grade delivery infrastructure for reliable sending",
      ],
      ctaText: "Open BrandMail",
      ctaHref: APPS_HUB,
      note: "Perfect for businesses that want effective email marketing without learning complex tools.",
    },
    {
      name: "YBS EventPro",
      logo: "/ybseventpro5.png",
      tagline: "Events, invitations, and RSVPs—fully integrated",
      bullets: [
        "Create business events inside a built-in calendar",
        "Send invitations through BrandMail with beautiful templates",
        "Public RSVP response page for guests",
        "Real-time attendance reports: attending, maybe, not attending",
        "Centralized event reporting to measure engagement",
      ],
      ctaText: "Open EventPro",
      ctaHref: APPS_HUB,
      note: "Ideal for promotions, openings, customer appreciation events, and business announcements.",
    },
  ];

  const futureApps = [
    {
      name: "YBS FrontDesk",
      logo: "/ybsfrontdesk5.png",
      desc:
        "A public request & intake system for your business. Collect customer requests from your website, organize them in a dashboard, and route them into the right action—estimate, invoice, appointment, or contract.",
      badge: "Planned",
    },
    {
      name: "YBS CRM",
      logo: "/ybscrm5.png",
      desc:
        "A lightweight CRM designed for small business workflows—manage customers, interactions, follow-ups, and pipeline in one place, fully connected to your invoices, appointments, and documents.",
      badge: "Planned",
    },
    {
      name: "YBS Team",
      logo: "/ybsteams5.png",
      desc:
        "A team hub for businesses—roles, permissions, schedules, task workflows, and performance tracking. Built to keep your operation organized as you grow.",
      badge: "Planned",
    },
  ];

  return (
    <>
      <Head>
        <title>YourBizSuite</title>
        <meta
          name="description"
          content="YourBizSuite Apps — one platform with powerful tools to run your business: finances, invoicing, appointments, eSign, email marketing, and events."
        />
        <link rel="icon" href="/icon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
        <meta name="theme-color" content="#162b3e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
        />
      </Head>

      {/* Header / Nav */}
      <header className="bg-white shadow px-4 py-3 sm:sticky sm:top-0 sm:z-50">
        <div className="w-full max-w-6xl mx-auto px-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="YourBizSuite Logo" className="h-14 w-auto" />
          </div>

          <nav className="flex items-center gap-2 sm:gap-4">
            <a
              href="#apps"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 px-2 py-2"
            >
              Apps
            </a>
            <a
              href="#cashlytic-videos"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 px-2 py-2 hidden sm:inline"
            >
              Videos
            </a>
            <Link
              href="/services"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 px-2 py-2"
            >
              Services
            </Link>
          </nav>
        </div>
      </header>

      <main className="min-h-screen bg-[#162b3e] text-[#7c96b0]">
        {/* Hero */}
        <section className="py-24 bg-[#162b3e] px-4 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <img
              src="/logo.png"
              alt="YourBizSuite"
              className="h-28 w-auto mx-auto mb-6 animate-fadeInY"
            />

            <VisionSection />

            <h1 className="text-5xl font-bold tracking-tight leading-tight text-white">
              One Platform. <br className="hidden md:inline" />
              Five Business Apps.
            </h1>

            <p className="mt-6 text-lg text-[#7c96b0] leading-relaxed">
              <strong>YourBizSuite Apps</strong> is an all-in-one business platform built for real operators.
              Manage finances, invoices, appointments, contracts, email marketing, and events — under one login,
              across multiple businesses.
            </p>

            <p className="mt-6 text-lg text-[#7c96b0] leading-relaxed">
              We build tools that are clean, intuitive, and genuinely useful — designed to reduce chaos and
              give business owners clarity and control.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={APPS_HUB}
                className="inline-block bg-[#F4B400] text-[#162b3e] px-7 py-3 rounded-md font-semibold hover:opacity-90 transition"
                target="_blank"
                rel="noreferrer"
              >
                Open YourBizSuite Apps
              </a>

              <Link
                href="/services"
                className="inline-block bg-white/10 text-white px-7 py-3 rounded-md font-semibold hover:bg-white/15 transition"
              >
                View Services
              </Link>
            </div>

            <p className="mt-8 italic text-gray-400">
              “Built by small business owners, for small business owners.”
            </p>
          </div>
        </section>

        {/* Apps Section */}
        <section id="apps" className="py-16 bg-[#d5e1e8] px-6 text-[#162b3e]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#2C3E50] via-[#336659] to-[#F4B400] drop-shadow-md">
                TOOLS TO MAKE YOUR BUSINESS SUCCESSFUL
              </h2>

              <img
                src="/ybsapps5.png"
                alt="YourBizSuite Apps"
                className="h-28 w-auto mx-auto mb-6 animate-fadeInY"
              />

              <p className="max-w-3xl mx-auto text-slate-700">
                One platform, one login, multiple businesses — with five apps that work together to help you run
                cleaner operations and make faster decisions.
              </p>
            </div>

            {/* Apps grid */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {apps.map((app, index) => (
                <div
                  key={app.name}
                  className={[
                    "bg-[#f9f7f6] p-7 rounded-xl shadow-sm border border-transparent transition",
                    "hover:shadow-lg hover:border-[#336659]/20",
                    index === 0 ? "lg:col-span-2" : "", // 👈 Cashlytic spans 2 columns
                  ].join(" ")}
                >
                  <div className="flex items-center gap-4">
                    <img src={app.logo} alt={`${app.name} logo`} className="h-16 w-auto" />
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#162b3e]">{app.name}</h3>
                      <p className="text-sm text-sky-600 font-semibold">{app.tagline}</p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-slate-700">
                    {app.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-[6px] h-2 w-2 rounded-full bg-[#336659] flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 text-sm text-slate-600">{app.note}</p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href={app.ctaHref}
                      className="inline-block bg-sky-600 text-white px-5 py-2.5 rounded-md hover:bg-sky-500 transition text-sm font-semibold"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {app.ctaText}
                    </a>

                    <a
                      href="/services"
                      className="inline-block bg-white border border-slate-200 text-slate-800 px-5 py-2.5 rounded-md hover:bg-slate-50 transition text-sm font-semibold"
                    >
                      Hire Us (Services)
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 text-center">
              <a
                href={APPS_HUB}
                className="inline-block bg-[#162b3e] text-white px-7 py-3 rounded-md hover:opacity-90 transition font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                Open YourBizSuite Apps Platform
              </a>
            </div>
          </div>
        </section>

        {/* Cashlytic Videos */}
        <section id="cashlytic-videos" className="py-16 bg-white px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src="/ybscashlytic5.png" alt="Cashlytic" className="h-14 w-auto" />
              <h2 className="text-3xl font-bold text-[#1c4d29]">Cashlytic Walkthrough</h2>
            </div>

            <p className="text-sm text-slate-600 mb-10">
              Watch quick demos showing how Cashlytic works inside the YourBizSuite platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {VIDEOS.map((v) => (
                <div key={v.slug} id={`video-${v.slug}`}>
                  <div className="aspect-w-16 aspect-h-9">
                    <video
                      poster={v.poster}
                      className="w-full h-full rounded-lg"
                      controls
                      preload="metadata"
                      playsInline
                      controlsList="nodownload"
                    >
                      <source src={v.mp4} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Apps */}
        <section className="py-16 bg-[#162b3e] px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3 text-white">Future Apps</h2>
            <p className="text-[#7c96b0] max-w-3xl mx-auto mb-10">
              The ecosystem will continue to grow — but we’re building with focus and real-world needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {futureApps.map((tool) => (
                <div
                  key={tool.name}
                  className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <img src={tool.logo} alt={`${tool.name} logo`} className="h-16 w-auto" />
                  </div>

                  <h3 className="text-xl font-extrabold mb-2 text-white">{tool.name}</h3>
                  <p className="text-[#b9c9db] leading-relaxed text-sm">{tool.desc}</p>

                  <span className="inline-block mt-5 text-xs text-[#F4B400] font-semibold px-3 py-1 rounded-full bg-black/20">
                    {tool.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-20 bg-[#162b3e] px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">OUR STORY</h2>

            <img
              src="/mous2.png"
              alt="Moustafa Ragheb"
              className="mx-auto h-32 w-32 rounded-full object-cover object-top mb-4 shadow"
            />

            <h4 className="text-lg font-semibold text-[#7c96b0]">Moustafa Ragheb</h4>
            <p className="text-sm text-gray-400 mb-6">Entrepreneur & Full-Stack Engineer</p>

            <p className="text-lg text-[#7c96b0] leading-relaxed">
              YourBizSuite Software was founded by a small business owner who understands the real challenges
              of managing operations, finances, and teams.
            </p>

            <p className="mt-6 text-lg text-[#7c96b0] leading-relaxed">
              After running a busy business and juggling countless spreadsheets, invoices, and daily tasks —
              it became clear that small businesses needed simpler, smarter tools. That’s how the{" "}
              <strong>YourBizSuite Apps</strong> platform was born.
            </p>

            <p className="mt-6 text-lg text-[#7c96b0] leading-relaxed">
              At YourBizSuite, we believe technology should empower, not overwhelm. We design tools to be clean,
              intuitive, and genuinely useful — helping business owners operate with confidence, clarity, and control.
            </p>

            <p className="mt-6 text-[#94a6bd] italic">
              “We’re not just building tools — we’re building peace of mind for small business owners.”
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#d5e1e8] border-t mt-16">
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