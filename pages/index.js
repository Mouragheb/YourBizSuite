import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>YourBizSuite</title>
        <meta name="description" content="Business tools that help you thrive" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <meta name="theme-color" content="#162b3e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      <header className="bg-white shadow px-4 py-2 sm:sticky sm:top-0 sm:z-50">
        <div className="w-full px-6 py-4">
          <img src="/logo.png" alt="YourBizSuite Logo" className="h-16 w-auto" />
        </div>
      </header>

      <main className="min-h-screen bg-[#162b3e] text-[#7c96b0]">
        {/* Hero Section */}
        <section className="py-24 bg-[#162b3e] px-4 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <img
              src="/logo.png"
              alt="YourBizSuite Logo"
              className="h-32 w-auto mx-auto mb-6 animate-fadeInY"
            />
            <h1 className="text-5xl font-bold tracking-tight leading-tight">
              Smarter Tools <br className="hidden md:inline" />
              for Smarter Businesses
            </h1>
            <p className="mt-6 text-lg text-[#7c96b0] leading-relaxed">
              At <strong>YourBizSuite</strong>, we&apos;re building simple, effective tools to help entrepreneurs
              run smarter businesses. We understand the pain of juggling spreadsheets, invoices, expenses,
              and tasks — because we&apos;ve lived it.
            </p>
            <p className="mt-6 text-lg text-[#7c96b0] leading-relaxed">
              Our mission is to give small business owners clarity and control with tools that are intuitive,
              affordable, and powerful — no bloat, no fluff.
            </p>
            <p className="mt-6 text-xl text-[#F4B400] font-semibold max-w-2xl mx-auto">
              Empowering small businesses with simple, powerful tools — starting with Cashlytic.
            </p>
            <p className="mt-6 italic text-gray-500">
              “Built by small business owners, for small business owners.”
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-[#d5e1e8] px-6 text-[#162b3e]">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#2C3E50] via-[#336659] to-[#F4B400] drop-shadow-md">
              TOOLS TO MAKE YOUR BUSINESS SUCCESSFUL
            </h2>
            <div className="flex justify-center items-center gap-3 mb-10">
              <img src="/Cashlytic-logo.jpg" alt="Cashlytic Logo" className="h-32 w-auto" />
              <h3 className="text-2xl text-[#336659] font-semibold">Cashlytic</h3>
            </div>
            <h2 className="text-3xl font-bold mb-10">What Makes Cashlytic Powerful</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Desktop Web Application",
                  desc: "Track income, expenses, and invoices with powerful tables, visual analytics, and AI insights — all in one streamlined dashboard."
                },
                {
                  title: "Inline Entry Tracking",
                  desc: "Add, edit, or delete income and expenses directly in the table — no popups or extra steps."
                },
                {
                  title: "Visual Analytics",
                  desc: "Visualize your income, expenses, and profit over time with interactive charts. View category breakdowns, monthly trends, and P&L summaries."
                },
                {
                  title: "AI Revenue Insights",
                  desc: "Get smart, AI-powered suggestions and breakdowns to boost your profitability."
                },
                {
                  title: "PDF & Excel Export",
                  desc: "One-click exports of all income, expenses, and P&L reports — professionally formatted."
                },
                {
                  title: "Invoices + Stripe Payments",
                  desc: "Create invoices, send them to clients, and receive payments via Stripe."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#f9f7f6] p-6 rounded-lg shadow-sm border border-transparent transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-lg hover:border-[#336659]/20"
                >
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <a
              href="https://cashlytic.app"
              className="mt-8 inline-block bg-[#336659] text-white px-6 py-3 rounded-md hover:bg-[#284438] transition"
            >
              Open Cashlytic App
            </a>
          </div>
        </section>

        {/* Videos Section */}
        <section className="py-16 bg-white px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">Cashlytic Walkthrough</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Video 1: Get Started */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/JWx1XhXLjYo"
                  title="Get Started - Login & Create Store"
                  className="w-full h-64 md:h-80 rounded-lg"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <p className="mt-4 text-sm text-gray-600">Step 1: Get Started — Login & Create Your First Store</p>
              </div>

              {/* Video 2: Fill Income Table */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/wgzDRZ52Wqk"
                  title="Fill Income Table"
                  className="w-full h-64 md:h-80 rounded-lg"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <p className="mt-4 text-sm text-gray-600">Step 2: Fill and Edit Income Table with Deductions</p>
              </div>

              {/* Video 3: Fill Expense Table */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/JV30vyqMW2o"
                  title="Fill Expense Table"
                  className="w-full h-64 md:h-80 rounded-lg"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <p className="mt-4 text-sm text-gray-600">Step 3: Add and Manage Expenses with Category Tracking</p>
              </div>

              {/* Video 4: Category Groups */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/KoKdwplvx8s"
                  title="Category Groups"
                  className="w-full h-64 md:h-80 rounded-lg"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <p className="mt-4 text-sm text-gray-600">Step 4: Organize Categories into Groups for Simpler Reporting</p>
              </div>

              {/* Video 5: Profit & Loss Table */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/FGuGQSyW7Uk"
                  title="Understand the Profit & Loss Table"
                  className="w-full h-64 md:h-96 rounded-lg"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <p className="mt-4 text-sm text-gray-600">Step 5: Understand the P&L Table — See Your Profit Clearly</p>
              </div>

              {/* Video 6: Export to PDF and Excel */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/oVp7Tviowbw"
                  title="Understand the Profit & Loss Table"
                  className="w-full h-64 md:h-96 rounded-lg"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <p className="mt-4 text-sm text-gray-600">Step 6: Export your tables into Excel and pdf files.</p>
              </div>

            </div>
          </div>
        </section>

        {/* What’s Coming Section */}
        <section className="py-16 bg-[#162b3e] px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">What&apos;s Coming Next...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "🗂️ ReTaskMan",
                  img: "/ReTaskMan.PNG",
                  desc:
                    "A smart task manager mobile app built for small teams, restaurants, and fast-paced businesses. Assign, track, and complete tasks with clarity.",
                },
                {
                  name: "🔌 EzVen",
                  img: "/EzVen.png",
                  desc:
                    "An all-in-one software to simplify vendor communications, track orders, and manage relationships in one centralized system.",
                },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className="p-6 rounded-xl border border-dashed border-gray-300 bg-white hover:shadow-lg hover:border-[#336659]/30 transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
                >
                  <h3 className="text-2xl font-bold mb-3 text-[#162b3e]">{tool.name}</h3>
                  <img src={tool.img} alt={`${tool.name} Logo`} className="h-20 w-auto mx-auto mb-4" />
                  <p className="text-gray-600 leading-relaxed text-sm">{tool.desc}</p>
                  <span className="inline-block mt-5 text-sm text-yellow-600 font-medium">Launching Soon</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Story Section */}
        <section className="py-20 bg-[#162b3e] px-6 border-t">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">OUR STORY</h2>

            <img
              src="/mous.jpg"
              alt="Moustafa Ragheb"
              className="mx-auto h-32 w-32 rounded-full object-cover object-top mb-4 shadow"
            />

            <h4 className="text-lg font-semibold text-[#7c96b0]">Moustafa Ragheb</h4>
            <p className="text-sm text-gray-400 mb-6">Entrepreneur & Full-Stack Engineer</p>

            <p className="text-lg text-[#7c96b0] leading-relaxed">
              YourBizSuite Software was founded by a small business owner who understands the real challenges of managing operations, finances, and teams.
            </p>

            <p className="mt-6 text-lg text-[#7c96b0] leading-relaxed">
              After running a busy restaurant and juggling countless spreadsheets, invoices, and daily tasks — it became clear that small businesses needed simpler, smarter tools. That&apos;s how <strong>Cashlytic</strong> was born — and we&apos;re just getting started.
            </p>

            <p className="mt-6 text-lg text-[#7c96b0] leading-relaxed">
              At YourBizSuite, we believe that technology should empower, not overwhelm. We design our tools to be clean, intuitive, and genuinely useful — helping business owners make decisions with confidence, clarity, and control.
            </p>

            <p className="mt-6 text-lg text-[#7c96b0] leading-relaxed">
              Every product we build is rooted in empathy for the small business journey. Whether you&apos;re tracking your finances, managing tasks, or working with vendors — our tools aim to simplify your day-to-day and amplify your results.
            </p>

            <p className="mt-6 text-lg text-[#7c96b0] leading-relaxed">
              In the near future, we plan to expand the YourBizSuite ecosystem with powerful solutions like <strong>ReTaskMan</strong> for task management and <strong>EzVen</strong> for vendor coordination — all built with the same values of simplicity, transparency, and empowerment.
            </p>

            <p className="mt-6 text-[#94a6bd] italic">
              “We’re not just building tools — we&apos;re building peace of mind for small business owners.”
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