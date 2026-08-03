import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Binary Bodhi — 0xneox" },
      {
        name: "description",
        content:
          "Binary Bodhi. Developer | Quant | Algos | Philosophy. Effective Altruism & Collective consciousness. Building saiprotocol.xyz, 21B Labs.",
      },
      { property: "og:title", content: "Binary Bodhi — 0xneox" },
      {
        property: "og:description",
        content: "Developer | Quant | Algos | Philosophy. Effective Altruism & Collective consciousness." },
    ],
  }),
  component: Index,
});

// Uptime since DOB: Dec 16, 1993 11:15 OM
function useUptime() {
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => {
    const start = new Date("1993-12-16T11:15:00Z").getTime();
    setDays(Math.floor((Date.now() - start) / 86_400_000));
  }, []);
  return days;
}

function TopBar() {
  const days = useUptime();
  return (
    <div className="flex items-baseline justify-between text-[11px] uppercase-tight dim uppercase">
      <span>Gokul Ravindran</span>
      <span className="hidden sm:inline" aria-label={`Uptime: ${days} days`}>
        {days !== null ? `uptime ${days.toLocaleString()}d` : "uptime ——"}
      </span>
    </div>
  );
}

function SectionMark({ n, label }: { n: string; label: string }) {
  return (
    <div className="my-12 sm:my-16 flex items-center gap-4 text-[11px] uppercase-tight dim uppercase">
      <span>§ {n}</span>
      <span className="rule flex-1" />
      <span>{label}</span>
    </div>
  );
}

function Meta({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[5rem_1fr] sm:grid-cols-[6.5rem_1fr] items-baseline gap-x-3 sm:gap-x-4 gap-y-1">
      <span className="dim text-[11px] uppercase-tight uppercase">{k}</span>
      <span className="break-words">{v}</span>
    </div>
  );
}

function Index() {
  return (
    <main className="mx-auto max-w-[720px] px-4 sm:px-6 py-12 sm:py-16 relative z-10">
      <div className="mandala-bg" />
      <TopBar />

      <div className="rule mt-6 mb-12 sm:mb-16" />

      {/* HERO */}
      <header className="section-fade-in">
        <div className="dim text-[11px] uppercase-tight uppercase mb-6">§ 00 — index</div>
        <h1 className="text-[clamp(2rem,6vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.02em] uppercase">
          Binary
          <br />
          Bodhi<span className="cursor" aria-hidden="true" />
        </h1>

        <div className="mt-10 space-y-3">
          <Meta k="Role" v="Developer | Quant | Algos | Philosophy" />
          <Meta k="Focus" v="Effective Altruism & Collective consciousness" />
          <Meta
            k="Building"
            v={
              <span>
                <a href="https://saiprotocol.xyz" target="_blank" rel="noreferrer" className="underline">saiprotocol.xyz</a>
                <span className="dim"> · </span>
                <a href="https://21b.fun" target="_blank" rel="noreferrer" className="underline">21b.fun</a>
                <span className="dim"> · </span>
                <a href="https://zigma.pro" target="_blank" rel="noreferrer" className="underline">zigma.pro</a>
                <span className="dim"> · </span>
                <a href="https://stillpoint.fun" target="_blank" rel="noreferrer" className="underline">stillpoint.fun</a>
                <span className="dim"> · </span>
                <a href="https://neurolov.tech" target="_blank" rel="noreferrer" className="underline">neurolov.tech</a>
              </span>
            }
          />
          <Meta
            k="Location"
            v={
              <span>
                Kerala · Bangalore · Delhi · Hyderabad · Uttarakhand · Dubai
              </span>
            }
          />
        </div>
      </header>

      <SectionMark n="01" label="present" />

      <p className="max-w-[62ch] section-fade-in">
        Currently building saiprotocol.xyz — a decentralized protocol for collective intelligence and coordination.
        Working on 21B Labs — exploring the intersection of quantitative finance, algorithmic trading, and blockchain technology.
      </p>

      <SectionMark n="02" label="prior work" />

      <p className="max-w-[62ch] section-fade-in">
        Before that: an independent Web3 practice. Smart contracts for
        seven-plus cryptocurrencies. An order book and matching engine
        for an exchange. Four whitepapers. On-chain analysis nobody else
        wanted to run. Code that outlives the client relationship.
      </p>

      <p className="mt-6 max-w-[62ch] section-fade-in">
        No résumé filler. No thought-leadership. Systems either run or
        they don't — everything else is noise.
      </p>

      <SectionMark n="03" label="the still point" />

      <p className="max-w-[62ch] section-fade-in">
        A parallel inquiry, older than the code: Kashmir Shaivism, Advaita
        Vedanta, the witness that watches the market without becoming it.
        Blockchain as a new form of collective attention. AI as an
        extension of mind, not a replacement for it. Volatility as the
        world doing what the world does — recognized, not escaped.
      </p>

      <p className="mt-6 max-w-[62ch] section-fade-in">
        The Still Point holds that half of the work. Not a brand. Not
        an investment. A recognition vehicle.
      </p>

      <SectionMark n="04" label="signal" />

      <p className="max-w-[62ch] mb-10 section-fade-in">
        No permission asked. No middlemen required. No platform owns
        this identity.
      </p>

      <ul className="space-y-3 section-fade-in">
        {[
          ["GitHub", "github.com/0xneox", "https://github.com/0xneox"],
          ["X", "x.com/binarybodhi", "https://x.com/binarybodhi"],
          ["Telegram", "t.me/binarybodhi", "https://t.me/binarybodhi"],
          ["Signal", "neohex@pm.me", "mailto:neohex@pm.me"],
          ["Quora", "quora.com/profile/0xneox", "https://www.quora.com/profile/0xneox"],
          ["Instagram", "instagram.com/binarybodhi", "https://www.instagram.com/binarybodhi"],
          ["Imgur", "imgur.com/user/0xbodi", "https://imgur.com/user/0xbodi"],
          ["Keybase", "keybase.io/neohex", "https://keybase.io/neohex"],
          ["YouTube", "youtube.com/@0xneox", "https://www.youtube.com/channel/UCZ1VrrBhdovc61DdJ6Xy1yA"],
        ].map(([label, text, href]) => (
          <li
            key={label}
            className="grid grid-cols-[5rem_1fr_auto] sm:grid-cols-[6.5rem_1fr_auto] items-baseline gap-x-3 sm:gap-x-4"
          >
            <span className="dim text-[11px] uppercase-tight uppercase">{label}</span>
            <a href={href} target="_blank" rel="noreferrer" className="hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors duration-150">
              {text}
            </a>
            <span className="dim text-[11px] hidden sm:inline">↗</span>
          </li>
        ))}
      </ul>

      <div className="rule mt-16 sm:mt-24 mb-6" />

      <footer className="flex flex-col sm:flex-row items-baseline justify-between gap-2 text-[11px] uppercase-tight dim uppercase">
        <span>0xneox — with wife & pet</span>
        <span>no tracking / no cookies / no analytics</span>
      </footer>
    </main>
  );
}
