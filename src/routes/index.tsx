import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Binary Bodhi — 0xneox" },
      {
        name: "description",
        content:
          "Binary Bodhi. Blockchain developer. Security researcher. CTO, Neurolov. Building since 2014. On-chain since 2015.",
      },
      { property: "og:title", content: "Binary Bodhi — 0xneox" },
      {
        property: "og:description",
        content: "Blockchain developer. Security researcher. CTO, Neurolov.",
      },
    ],
  }),
  component: Index,
});

// Days since Jan 1, 2014 — uptime marker.
function useUptime() {
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => {
    const start = new Date("2014-01-01T00:00:00Z").getTime();
    setDays(Math.floor((Date.now() - start) / 86_400_000));
  }, []);
  return days;
}

function TopBar() {
  const days = useUptime();
  return (
    <div className="flex items-baseline justify-between text-[11px] uppercase-tight dim uppercase">
      <span>binarybodhi@0xneox</span>
      <span className="hidden sm:inline">
        {days !== null ? `uptime ${days.toLocaleString()}d` : "uptime ——"}
      </span>
    </div>
  );
}

function SectionMark({ n, label }: { n: string; label: string }) {
  return (
    <div className="my-16 flex items-center gap-4 text-[11px] uppercase-tight dim uppercase">
      <span>§ {n}</span>
      <span className="rule flex-1" />
      <span>{label}</span>
    </div>
  );
}

function Meta({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[6.5rem_1fr] items-baseline gap-x-4">
      <span className="dim text-[11px] uppercase-tight uppercase">{k}</span>
      <span>{v}</span>
    </div>
  );
}

function Index() {
  return (
    <main className="mx-auto max-w-[720px] px-6 py-16">
      <TopBar />

      <div className="rule mt-6 mb-16" />

      {/* HERO */}
      <header>
        <div className="dim text-[11px] uppercase-tight uppercase mb-6">§ 00 — index</div>
        <h1 className="text-[clamp(2rem,6vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.02em] uppercase">
          Binary
          <br />
          Bodhi<span className="cursor" />
        </h1>

        <div className="mt-10 space-y-3">
          <Meta k="Since" v="2014 — building" />
          <Meta k="On-chain" v="2015 —" />
          <Meta k="Role" v="Blockchain developer / Security researcher / CTO" />
          <Meta
            k="Location"
            v={
              <span>
                Neurolov <span className="dim">— on-site</span>
              </span>
            }
          />
        </div>
      </header>

      <SectionMark n="01" label="present" />

      <p className="max-w-[62ch]">
        Blockchain developer. Security researcher. CTO, Neurolov —
        a decentralized GPU/AI compute network. Ten engineers, one
        platform, built from zero.
      </p>

      <SectionMark n="02" label="prior work" />

      <p className="max-w-[62ch]">
        Before that: an independent Web3 practice. Smart contracts for
        seven-plus cryptocurrencies. An order book and matching engine
        for an exchange. Four whitepapers. On-chain analysis nobody else
        wanted to run. Code that outlives the client relationship.
      </p>

      <p className="mt-6 max-w-[62ch]">
        No résumé filler. No thought-leadership. Systems either run or
        they don't — everything else is noise.
      </p>

      <SectionMark n="03" label="the still point" />

      <p className="max-w-[62ch]">
        A parallel inquiry, older than the code: Kashmir Shaivism, Advaita
        Vedanta, the witness that watches the market without becoming it.
        Blockchain as a new form of collective attention. AI as an
        extension of mind, not a replacement for it. Volatility as the
        world doing what the world does — recognized, not escaped.
      </p>

      <p className="mt-6 max-w-[62ch]">
        The Still Point holds that half of the work. Not a brand. Not
        an investment. A recognition vehicle.
      </p>

      <SectionMark n="04" label="signal" />

      <p className="max-w-[62ch] mb-10">
        No permission asked. No middlemen required. No platform owns
        this identity.
      </p>

      <ul className="space-y-3">
        {[
          ["GitHub", "github.com/0xneox", "https://github.com/0xneox"],
          ["X", "x.com/0xneox", "https://x.com/0xneox"],
          ["Telegram", "t.me/binarybodhi", "https://t.me/binarybodhi"],
          ["Signal", "neohex@pm.me", "mailto:neohex@pm.me"],
        ].map(([label, text, href]) => (
          <li
            key={label}
            className="grid grid-cols-[6.5rem_1fr_auto] items-baseline gap-x-4"
          >
            <span className="dim text-[11px] uppercase-tight uppercase">{label}</span>
            <a href={href} target="_blank" rel="noreferrer">
              {text}
            </a>
            <span className="dim text-[11px]">↗</span>
          </li>
        ))}
      </ul>

      <div className="rule mt-24 mb-6" />

      <footer className="flex items-baseline justify-between text-[11px] uppercase-tight dim uppercase">
        <span>0xneox — 2026</span>
        <span>no tracking / no cookies / no analytics</span>
      </footer>
    </main>
  );
}
