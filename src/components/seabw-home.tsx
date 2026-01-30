"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";



const APPLY_LINKS = [
  { label: "Become a Sponsor", href: "https://shardlab.typeform.com" },
  { label: "Become a Speaker", href: "https://airtable.com" },
  { label: "Become a Partner", href: "https://shardlab.typeform.com" },
  { label: "Submit Your Event", href: "https://shardlab.typeform.com" },
];

const STATS = [
  { k: "4,000+", v: "Attendees" },
  { k: "200+", v: "Speakers" },
  { k: "40+", v: "Sponsors" },
  { k: "110+", v: "Partners" },
  { k: "60+", v: "Side Events" },
];

const TRACKS = [
  { title: "The Agentic Economy", desc: "Autonomous agents, AI-native workflows, and economic coordination." },
  { title: "Institutional Verticalization & The Great Convergence", desc: "TradFi, fintech, and crypto rails merging into new stacks." },
  { title: "RWA 2.0 & The Industrialization of Tokenization", desc: "Scaling real-world assets with institutional-grade infrastructure." },
  { title: "Privacy & ZK (Verifiable & Confidential Compute)", desc: "Proofs, privacy-preserving systems, and trusted computation." },
  { title: "The Information Layer (Consumer Crypto & Culture)", desc: "Identity, media, community, and consumer-grade crypto experiences." },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 * i, ease: EASE },
  }),
};

function cn(...v: Array<string | false | null | undefined>) {
  return v.filter(Boolean).join(" ");
}

export function SeabwHome() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[480px] w-[560px] bg-[url('/SEABW%20KV-01%20copy.jpg')] bg-cover bg-right opacity-70" />
        <div className="absolute -top-28 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#2E80FF]/18 blur-3xl" />
        <div className="absolute top-[18%] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#2E80FF]/16 blur-[120px]" />
        <div className="absolute -bottom-44 right-[-160px] h-[580px] w-[580px] rounded-full bg-[#1313D2]/12 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(46,128,255,0.18),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.85),rgba(255,255,255,1))]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(46,128,255,0.2)_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>

      <Header />

      <main className="relative mx-auto max-w-6xl px-4 pb-24">
        <Hero />

        <Section
          kicker="Past editions"
          title="Built in SEA. Watched by the world."
          desc="A premium gathering where founders, operators, institutions, and communities meet—focused on real adoption and collaboration."
          descClassName="whitespace-nowrap"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {STATS.map((s, i) => (
              <motion.div
                key={s.v}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                custom={i}
                className="rounded-2xl border border-slate-200 bg-[#EEF2FF] p-5 backdrop-blur"
              >
                <div className="text-2xl font-semibold tracking-tight">{s.k}</div>
                <div className="mt-1 text-sm text-slate-600">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="program"
          kicker="Program"
          title="Five Main Themes"
          desc="High-signal sessions across frontier technology, institutions, and culture. (Full agenda to be announced.)"
          descClassName="whitespace-nowrap"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {TRACKS.map((t, i) => (
              <motion.div
                key={t.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                custom={i}
                className={cn(
                  "group rounded-2xl border border-slate-200 bg-[#F5F7FF] p-6 backdrop-blur transition",
                  "hover:border-[#2E80FF]/35 hover:bg-[#EEF2FF]"
                )}
              >
                <div>
                  <span className="inline-flex h-6 items-center rounded-full border border-slate-200 bg-[#EEF2FF] px-2 text-[11px] text-slate-600">
                    Theme {i + 1}
                  </span>
                  <h3 className="mt-3 text-base font-semibold tracking-tight">{t.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.desc}</p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-[#2E80FF]/0 via-[#2E80FF]/45 to-[#2E80FF]/0 opacity-0 transition group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="recap"
          kicker="Recap"
          title="Highlights from SEA Blockchain Week"
          desc=""
        >
          <div className="grid gap-4 lg:grid-cols-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              className="lg:col-span-7"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-200 bg-[#F5F7FF]">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/LnlijitV24U?si=xECRatKnVfTEas0a"
                  title="SEABW Recap Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-5">
              {["/Recap-1.jpg", "/Recap-2.jpg", "/Recap-3.jpg", "/Recap-4.jpg"].map((src, i) => (
                <motion.div
                  key={src}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  custom={i + 1}
                  className="aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-[#F5F7FF]"
                >
                  <img
                    src={src}
                    alt={`Recap photo ${i + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Subscribe />
        <Footer />
      </main>
    </div>
  );
}

function Header() {
  return (
    <div className="relative z-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="inline-flex items-center">
            {/* Long logo only (symbol included in the artwork) */}
            <div className="relative h-12 w-[260px]">
              <img
                src="/SEABW-logo_Long.png"
                alt="SEA Blockchain Week"
                className="h-full w-full object-contain object-left"
              />
            </div>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <NavPill href="#program" label="Program" />
            <NavPill href="#recap" label="Recap" />
            <a
              href="#subscribe"
              className="inline-flex items-center justify-center rounded-full bg-[#2E80FF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2E80FF]/90"
            >
              Get updates
            </a>
          </div>

          <div className="md:hidden">
            <a
              href="#subscribe"
              className="inline-flex items-center justify-center rounded-full bg-[#2E80FF] px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2E80FF]/90"
            >
              Updates
            </a>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2E80FF]/25 to-transparent" />
    </div>
  );
}

function NavPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-full border border-[#2E80FF]/30 bg-[#F5F7FF] px-4 py-2 text-sm font-semibold text-[#17154D] shadow-sm backdrop-blur transition hover:bg-[#E9EEFF]"
    >
      {label}
    </a>
  );
}

function Hero() {
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    // 서버 렌더(SSR)에서는 간단한 정적 placeholder만 렌더 → mismatch 방지
    if (!mounted) {
      return (
        <section className="pt-12 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#E9EEFF] px-5 py-2 text-sm font-semibold text-slate-900 backdrop-blur whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-seabw-aqua/90" />
                Bridging Web3 Innovations in Southeast Asia
              </div>
  
              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Southeast Asia
                <span className="block bg-gradient-to-r from-[#2E80FF] via-white to-[#1313D2] bg-clip-text text-transparent">
                  Blockchain Week 2026
                </span>
              </h1>
  
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
                20–21 May, 2026 · TRUE ICON HALL, Bangkok
                <br />
                A minimal-luxury, blue-tech gathering for builders, institutions, and communities in SEA.
              </p>
  
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#subscribe"
                  className="inline-flex items-center justify-center rounded-full bg-[#2E80FF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2E80FF]/90"
                >
                  Get updates
                </a>
                <span className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-[#F5F7FF] px-5 py-3 text-sm font-semibold text-slate-800 backdrop-blur">
                  Apply ▾
                </span>
              </div>
            </div>
  
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[#F5F7FF] p-6 backdrop-blur">
                <div className="text-sm font-semibold text-slate-800">Quick links</div>
                <div className="mt-4 grid gap-2">
                  {APPLY_LINKS.map((l) => (
                    <div
                      key={l.label}
                      className="flex items-center justify-between rounded-2xl border border-slate-200 bg-[#F8FAFF] px-4 py-3 text-sm text-slate-700"
                    >
                      <span>{l.label}</span>
                      <span className="text-slate-400">↗</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
  
          <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
      );
    }
  
    // mounted 이후에만 기존 motion/인터랙션 렌더
    return (
      <section className="pt-12 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#E9EEFF] px-5 py-2 text-sm font-semibold text-slate-900 backdrop-blur whitespace-nowrap"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#2E80FF]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#2E80FF]" />
              Bridging Web3 Innovations in Southeast Asia
            </motion.div>
  
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Southeast Asia
              <span className="seabw-gradient-text block bg-gradient-to-r from-[#2E80FF] via-white to-[#1313D2] bg-clip-text text-transparent">
                Blockchain Week 2026
              </span>
            </motion.h1>
  
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-600"
            >
              <span className="font-semibold">20–21 May, 2026 · TRUE ICON HALL, Bangkok</span>
              <br />
              A premier conference dedicated to exploring the evolving landscape of Web3 technology in one of the world's most dynamic and rapidly growing regions.
            </motion.p>
  
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#subscribe"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#2E80FF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2E80FF]/90"
              >
                <span className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <span className="absolute -inset-10 bg-[radial-gradient(circle,rgba(46,128,255,0.25),transparent_60%)]" />
                </span>
                <span className="relative">Get updates</span>
              </a>
  
              <AttendButton />
  
              <div className="ml-0 flex items-center gap-2 text-xs text-slate-500 sm:ml-2">
                <span className="h-5 w-px bg-[#2E80FF]/35" />
                <span>Hosted by ShardLab X Hashed</span>
              </div>
            </motion.div>
          </div>
  
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[#F5F7FF] p-6 backdrop-blur"
            >
              <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_0%,rgba(19,19,210,0.3),rgba(23,21,77,0))]" />
              <div className="relative">
                <div className="text-sm font-semibold text-slate-800">Quick links</div>
                <div className="mt-4 grid gap-2">
                  {APPLY_LINKS.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-slate-200 bg-[#F8FAFF] px-4 py-3 text-sm text-slate-700 transition hover:border-[#2E80FF]/35 hover:bg-[#E9EEFF]"
                    >
                      <span>{l.label}</span>
                      <span className="text-slate-400">↗</span>
                    </a>
                  ))}
                </div>
  
              </div>
            </motion.div>
          </div>
        </div>
  
        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-[#2E80FF]/25 to-transparent" />
      </section>
    );
  }
  

function Section({
  id,
  kicker,
  title,
  desc,
  descClassName,
  children,
}: {
  id?: string;
  kicker: string;
  title: string;
  desc: string;
  descClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-14 sm:mt-16">
      <div className="mb-6">
        <div className="text-xs font-medium uppercase tracking-[0.20em] text-[#2E80FF]/80">{kicker}</div>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        <p className={cn("mt-2 max-w-2xl text-sm leading-relaxed text-slate-600", descClassName)}>
          {desc}
        </p>
      </div>
      {children}
    </section>
  );
}

function Subscribe() {
  return (
    <section id="subscribe" className="mt-16">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-[#F5F7FF] backdrop-blur">
        <div className="grid gap-0 lg:grid-cols-12">
          <div className="relative p-8 lg:col-span-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_0%,rgba(19,19,210,0.22),rgba(23,21,77,0))]" />
            <div className="relative">
              <div className="text-xs font-medium uppercase tracking-[0.20em] text-[#2E80FF]/80">
                Subscribe
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">Get the latest SEABW updates</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
                Announcements, program drops, speaker reveals, and side-event highlights—no spam.
              </p>

              <form
                className="mt-6 grid gap-3 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Submitted (wire this to your API)");
                }}
              >
                <Input label="Name" placeholder="Rachel Kim" />
                <Input label="Email" placeholder="you@company.com" type="email" />
                <Input label="Company / Project" placeholder="ShardLab" />
                <Input label="Title" placeholder="PM / BD / Founder" />

                <div className="sm:col-span-2 mt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#2E80FF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2E80FF]/90"
                  >
                    Subscribe
                  </button>
                  <p className="text-xs text-slate-500">By subscribing, you agree to receive updates from SEABW.</p>
                </div>
              </form>
            </div>
          </div>

          <div className="p-8 lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-[#F5F7FF] p-6">
              <div className="text-sm font-semibold">Social</div>
              <div className="mt-4 grid gap-2">
                <a className="social" href="https://t.me/SEABWofficial" target="_blank" rel="noreferrer">
                  <span className="social-icon-wrap" aria-hidden>
                    <span className="social-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.6 5.2 19 18.7c-.2 1-1 1.2-1.9.8l-5.3-3.9-2.6 2.5c-.3.3-.5.5-1 .5l.4-5.6L18.9 6.8c.4-.3-.1-.5-.6-.2l-12 7.5-5.2-1.6c-1.1-.3-1.1-1.1.2-1.6l20.2-7.8c.9-.3 1.7.2 1.4 1.1z" />
                      </svg>
                    </span>
                  </span>
                  <span className="social-label">Telegram</span>
                  <span className="social-arrow">↗</span>
                </a>
                <a className="social" href="https://www.linkedin.com/company/seabw/" target="_blank" rel="noreferrer">
                  <span className="social-icon-wrap" aria-hidden>
                    <span className="social-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5zM3 8.98h4v12H3v-12zm7 0h3.8v1.6h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v6.3h-4v-5.6c0-1.3 0-3-1.9-3-1.9 0-2.2 1.4-2.2 2.9v5.7h-4v-12z" />
                      </svg>
                    </span>
                  </span>
                  <span className="social-label">LinkedIn</span>
                  <span className="social-arrow">↗</span>
                </a>
                <a className="social" href="https://x.com/SEABWOfficial" target="_blank" rel="noreferrer">
                  <span className="social-icon-wrap" aria-hidden>
                    <span className="social-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.9 3H21l-6.6 7.5L22 21h-6.2l-4.9-6.4L5.5 21H3.4l7-7.9L2 3h6.3l4.4 5.8L18.9 3zm-2.2 16h1.7L7.5 4.9H5.6L16.7 19z" />
                      </svg>
                    </span>
                  </span>
                  <span className="social-label">X (Twitter)</span>
                  <span className="social-arrow">↗</span>
                </a>
              </div>

            </div>

            <style jsx>{`
              .seabw-gradient-text {
                -webkit-text-stroke: 1px rgba(121, 135, 180, 0.7);
                text-shadow:
                  0 1px 10px rgba(46, 128, 255, 0.16),
                  0 0 2px rgba(121, 135, 180, 0.4);
              }
              .social {
                display: grid;
                grid-template-columns: 32px 1fr 18px;
                align-items: center;
                gap: 10px;
                border: 1px solid rgba(46, 128, 255, 0.2);
                background: rgba(245, 247, 255, 0.9);
                padding: 12px 14px;
                border-radius: 16px;
                color: rgba(23, 21, 77, 0.9);
                transition: all 160ms ease;
              }
              .social:hover {
                border-color: rgba(46, 128, 255, 0.45);
                background: rgba(233, 238, 255, 0.95);
              }
              .social-icon-wrap {
                width: 28px;
                height: 28px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
                background: rgba(46, 128, 255, 0.12);
              }
              .social-icon {
                display: inline-flex;
                width: 18px;
                height: 18px;
                color: rgba(46, 128, 255, 0.95);
              }
              .social-icon svg {
                width: 100%;
                height: 100%;
              }
              .social-label {
                font-weight: 600;
                color: rgba(23, 21, 77, 0.9);
              }
              .social-arrow {
                text-align: right;
                color: rgba(23, 21, 77, 0.45);
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="grid gap-1">
      <span className="text-xs text-slate-500">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          "h-11 w-full rounded-2xl border border-slate-200 bg-[#F5F7FF] px-4",
          "text-sm text-slate-900 placeholder:text-slate-400",
          "outline-none transition focus:border-[#2E80FF]/40 focus:bg-[#EEF2FF]"
        )}
      />
    </label>
  );
}

function Footer() {
  return (
    <footer className="mt-16 pb-10">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2E80FF]/25 to-transparent" />
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-start gap-3 text-left">
          <img
            src="/SEABW-logo_Long.png"
            alt="SEA Blockchain Week"
            className="h-8 w-auto"
          />
          <div className="text-sm text-slate-600">ⓒ 2026 SEA Blockchain Week · Hosted by ShardLab X Hashed</div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <a className="text-slate-600 hover:text-slate-800" href="#program">
            Program
          </a>
          <span className="text-slate-300">·</span>
          <a className="text-slate-600 hover:text-slate-800" href="#recap">
            Recap
          </a>
          <span className="text-slate-300">·</span>
          <a className="text-slate-600 hover:text-slate-800" href="#subscribe">
            Subscribe
          </a>
        </div>
      </div>
    </footer>
  );
}
function AttendButton() {
  return (
    <div className="group relative">
      <a
        href="#"
        className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-[#F5F7FF] px-5 py-3 text-sm font-semibold text-slate-800 backdrop-blur transition hover:border-[#2E80FF]/35 hover:bg-[#E9EEFF]"
      >
        Attend
      </a>
      <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 opacity-0 shadow-sm transition group-hover:opacity-100">
        Coming Soon
      </span>
    </div>
  );
}
  