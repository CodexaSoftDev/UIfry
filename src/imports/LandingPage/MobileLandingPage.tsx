import { useState } from "react";

const BRAND = "#2DDB81";
const BRAND_DARK = "#28A263";
const CARD_BG = "#111218";
const MUTED = "#c8c9d0";

/* ── Tiny reusable primitives ─────────────────────────── */

function GreenDot() {
  return (
    <span
      className="inline-block w-2 h-2 rounded-full mr-2 shrink-0"
      style={{ background: BRAND }}
    />
  );
}

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#F9D006">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ── Product cards ────────────────────────────────────── */

const products = [
  {
    label: "Analytics",
    desc: "Track your key metrics in real time",
    visual: (
      <svg viewBox="0 0 120 80" className="w-full h-full opacity-80">
        <polyline
          points="10,65 30,45 50,55 70,30 90,40 110,20"
          fill="none"
          stroke={BRAND}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[30, 50, 70, 90].map((x, i) => (
          <circle key={i} cx={x} cy={[45, 55, 30, 40][i]} r="4" fill={BRAND} />
        ))}
      </svg>
    ),
    cardBg: "#ffffff",
    textColor: "#111218",
    descColor: "#6b7280",
  },
  {
    label: "Spending",
    desc: "Monitor weekly budgets easily",
    visual: (
      <div className="flex items-center justify-center h-full">
        <svg viewBox="0 0 80 80" className="w-20 h-20">
          <circle cx="40" cy="40" r="30" fill="none" stroke="#1a2a1a" strokeWidth="10" />
          <circle
            cx="40" cy="40" r="30"
            fill="none" stroke={BRAND} strokeWidth="10"
            strokeDasharray="94 94"
            strokeLinecap="round"
            transform="rotate(-90 40 40)"
          />
          <circle
            cx="40" cy="40" r="30"
            fill="none" stroke="#6fcf97" strokeWidth="10"
            strokeDasharray="47 141"
            strokeDashoffset="-94"
            strokeLinecap="round"
            transform="rotate(-90 40 40)"
          />
        </svg>
        <div className="absolute">
          <p className="text-white font-bold text-lg leading-tight">$5476</p>
          <p className="text-[#c8c9d0] text-[9px] text-center">This Week</p>
        </div>
      </div>
    ),
    cardBg: CARD_BG,
    textColor: "#ffffff",
    descColor: MUTED,
  },
  {
    label: "Team",
    desc: "Collaborate with your crew",
    visual: (
      <div className="flex items-center justify-center h-full gap-2">
        {["#a3c4f3", "#f3a3a3", "#a3f3b4"].map((c, i) => (
          <div
            key={i}
            className="rounded-xl flex items-center justify-center text-2xl"
            style={{ width: 40, height: 40, background: c + "33", border: `1.5px dashed ${c}` }}
          >
            {["👤", "😎", "🧑‍💻"][i]}
          </div>
        ))}
      </div>
    ),
    cardBg: CARD_BG,
    textColor: "#ffffff",
    descColor: MUTED,
  },
  {
    label: "Reports",
    desc: "Auto-generated PDF reports",
    visual: (
      <div className="flex items-end justify-center h-full gap-2 pb-2">
        {[60, 80, 45, 90, 55, 70].map((h, i) => (
          <div
            key={i}
            className="rounded-t-md"
            style={{
              width: 12,
              height: `${h}%`,
              background: i === 3 ? BRAND : "#1e2a1e",
            }}
          />
        ))}
      </div>
    ),
    cardBg: CARD_BG,
    textColor: "#ffffff",
    descColor: MUTED,
  },
  {
    label: "Insights",
    desc: "AI-powered business insights",
    visual: (
      <div className="flex items-center justify-center h-full">
        <div
          className="rounded-full flex items-center justify-center"
          style={{ width: 64, height: 64, background: BRAND + "22", border: `2px solid ${BRAND}` }}
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5z" stroke={BRAND} strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke={BRAND} strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    ),
    cardBg: CARD_BG,
    textColor: "#ffffff",
    descColor: MUTED,
  },
  {
    label: "Integrations",
    desc: "Connect 50+ tools seamlessly",
    visual: (
      <div className="flex items-center justify-center h-full">
        <svg viewBox="0 0 80 80" className="w-16 h-16">
          <circle cx="40" cy="40" r="34" fill="none" stroke={BRAND + "40"} strokeWidth="1" />
          <circle cx="40" cy="40" r="20" fill={BRAND + "20"} />
          <circle cx="40" cy="40" r="8" fill={BRAND} />
          {[0, 60, 120, 180, 240, 300].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x = 40 + 34 * Math.cos(rad);
            const y = 40 + 34 * Math.sin(rad);
            return <circle key={i} cx={x} cy={y} r="4" fill={BRAND} />;
          })}
        </svg>
      </div>
    ),
    cardBg: CARD_BG,
    textColor: "#ffffff",
    descColor: MUTED,
  },
];

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <div
      className="shrink-0 rounded-2xl overflow-hidden flex flex-col"
      style={{
        width: 200,
        background: product.cardBg,
        border: `1px solid ${product.cardBg === "#ffffff" ? "#e5e7eb" : "#1e2030"}`,
      }}
    >
      <div className="relative h-[130px] flex items-center justify-center">
        {product.visual}
      </div>
      <div className="px-4 pb-5 pt-2">
        <p className="font-semibold text-sm" style={{ color: product.textColor }}>
          {product.label}
        </p>
        <p className="text-xs mt-1 leading-snug" style={{ color: product.descColor }}>
          {product.desc}
        </p>
      </div>
    </div>
  );
}

/* ── Testimonial card ─────────────────────────────────── */

const testimonials = [
  {
    quote: "Amazing tool! Saved me months",
    body: "This is a placeholder for your testimonials and what your client has to say, put them here and make sure it's 100% true and meaningful.",
    name: "Alex Johnson",
    role: "Product Manager",
  },
  {
    quote: "Best investment for our team",
    body: "UIFry transformed the way we manage projects. The insights are clear, the UI is beautiful, and the team loves it.",
    name: "Sara Kim",
    role: "Engineering Lead",
  },
  {
    quote: "Effortless and intuitive",
    body: "We replaced three separate tools with UIFry. Onboarding took an afternoon, and ROI was visible within the first week.",
    name: "Marcus Lee",
    role: "CEO, Startify",
  },
];

/* ── Main mobile component ────────────────────────────── */

export default function MobileLandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ── Header ─────────────────────────────────────── */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-5 py-4"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span className="font-bold text-lg tracking-tight" style={{ color: BRAND }}>UIFry</span>
        <a
          href="#cta"
          className="text-sm font-medium px-4 py-1.5 rounded-full"
          style={{ border: `1px solid ${BRAND}`, color: BRAND }}
        >
          Get Demo
        </a>
      </header>

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative px-5 pt-14 pb-12 overflow-hidden">
        {/* glow */}
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${BRAND}30 0%, transparent 70%)` }}
        />
        <div className="relative">
          <div className="flex items-center mb-4">
            <GreenDot />
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: BRAND }}>
              UIFry Platform
            </span>
          </div>
          <h1 className="text-[2rem] font-bold leading-[1.2] tracking-tight mb-4">
            Choose from over{" "}
            <span className="text-white">10+</span>{" "}
            cutting—edge products
          </h1>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: MUTED }}>
            UIFry is the project management platform that helps teams achieve efficient, scalable, and transparent workflows.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#cta"
              className="font-semibold px-5 py-3 rounded-xl text-sm"
              style={{ background: BRAND_DARK, color: "#fff" }}
            >
              Get a Free Demo
            </a>
            <a
              href="#products"
              className="font-medium px-5 py-3 rounded-xl text-sm"
              style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
            >
              See all products
            </a>
          </div>
        </div>
      </section>

      {/* ── Products ───────────────────────────────────── */}
      <section id="products" className="py-8">
        <div className="px-5 mb-5 flex items-center justify-between">
          <h2 className="text-lg font-bold">Our Products</h2>
          <span className="text-sm font-medium" style={{ color: BRAND }}>See all →</span>
        </div>
        <div className="overflow-x-auto pl-5 pb-3" style={{ WebkitOverflowScrolling: "touch" }}>
          <div className="flex gap-3 w-max pr-5">
            {products.map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats strip ────────────────────────────────── */}
      <section className="mx-5 my-6 rounded-2xl px-6 py-5 grid grid-cols-3 gap-4"
        style={{ background: CARD_BG, border: "1px solid #1e2030" }}>
        {[
          { value: "10+", label: "Products" },
          { value: "50+", label: "Integrations" },
          { value: "99%", label: "Uptime" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-xl font-bold" style={{ color: BRAND }}>{s.value}</p>
            <p className="text-xs mt-0.5" style={{ color: MUTED }}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* ── Testimonials ───────────────────────────────── */}
      <section className="px-5 py-10">
        <div className="flex items-center mb-2">
          <GreenDot />
          <span className="text-xs font-medium uppercase tracking-widest" style={{ color: BRAND }}>
            Testimonials
          </span>
        </div>
        <h2 className="text-2xl font-bold leading-tight mb-6">
          Here's what our{" "}
          <span style={{ color: BRAND }}>customers</span>{" "}
          have to say
        </h2>
        <div className="flex flex-col gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-5"
              style={{ background: "#22242f", border: "1px solid #2a2d3a" }}
            >
              <StarRow />
              <p className="mt-3 font-semibold text-base">{t.quote}</p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>{t.body}</p>
              <div className="mt-4 flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ background: BRAND + "33", color: BRAND }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs" style={{ color: MUTED }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section id="cta" className="mx-5 mb-10 rounded-2xl p-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1a0d 0%, #111218 100%)", border: `1px solid ${BRAND}30` }}>
        <div
          className="absolute -top-8 -right-8 w-36 h-36 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${BRAND}25 0%, transparent 70%)` }}
        />
        <div className="relative">
          <div className="flex items-center mb-3">
            <GreenDot />
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: BRAND }}>
              Start for free
            </span>
          </div>
          <h2 className="text-xl font-bold leading-tight mb-2">
            Start work efficiently with UIFry
          </h2>
          <p className="text-sm leading-relaxed mb-5" style={{ color: MUTED }}>
            Join thousands of teams already using UIFry to ship faster.
          </p>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none"
              style={{
                background: "#1a1c24",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
              }}
            />
            <button
              className="w-full py-3 rounded-xl font-semibold text-sm"
              style={{ background: BRAND_DARK, color: "#fff" }}
            >
              Get a Free Demo
            </button>
          </div>
          <p className="mt-3 text-xs text-center" style={{ color: MUTED }}>
            No credit card required · Free 14-day trial
          </p>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="px-5 py-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <span className="font-bold text-lg" style={{ color: BRAND }}>UIFry</span>
        <p className="text-xs mt-2" style={{ color: MUTED }}>
          © {new Date().getFullYear()} UIFry. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
