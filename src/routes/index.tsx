import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gokul Ravindran — 0xneox / binarybodhi" },
      {
        name: "description",
        content:
          "Gokul Ravindran (0xneox / binarybodhi). Blockchain developer, security researcher, CTO. Building since 2014. On-chain since 2015.",
      },
      { property: "og:title", content: "Gokul Ravindran — 0xneox / binarybodhi" },
      {
        property: "og:description",
        content:
          "Blockchain developer. Security researcher. CTO. Currently CTO, Neurolov.",
      },
    ],
  }),
  component: Index,
});

function Nav() {
  const items = [
    { label: "HOME", href: "#home" },
    { label: "WORK", href: "#work" },
    { label: "PROJECTS", href: "#projects" },
    { label: "NOW", href: "#now" },
    { label: "SIGNAL", href: "#signal" },
  ];
  return (
    <nav className="mb-24 text-sm tracking-widest uppercase">
      {items.map((it, i) => (
        <span key={it.href}>
          <a href={it.href}>{it.label}</a>
          {i < items.length - 1 && <span className="mx-2 text-[color:var(--muted)]">/</span>}
        </span>
      ))}
    </nav>
  );
}

function Row({ left, right }: { left: React.ReactNode; right: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6">
      <div className="min-w-0">{left}</div>
      <div className="shrink-0 text-[color:var(--muted)] whitespace-nowrap">{right}</div>
    </div>
  );
}

function Index() {
  return (
    <main className="mx-auto max-w-[720px] px-6 py-16">
      <Nav />

      {/* HOME */}
      <section id="home" className="scroll-mt-16">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
          Gokul Ravindran
        </h1>
        <p className="mt-2 text-[color:var(--muted)] uppercase tracking-wider text-sm">
          0xneox / binarybodhi
        </p>

        <div className="mt-10 space-y-1">
          <p>Blockchain developer. Security researcher. CTO.</p>
          <p>
            Building since 2014. On-chain since 2015.<span className="cursor" />
          </p>
        </div>

        <p className="mt-6">
          Currently: CTO, Neurolov — decentralized GPU/AI compute network.
        </p>

        <p className="mt-10 max-w-[62ch]">
          I build systems for people who don't trust systems. Smart contracts,
          exchange infrastructure, security audits, quantitative trading tools —
          delivered independently, without noise. I do not perform expertise.
          I ship it.
        </p>
      </section>

      <hr />

      {/* WORK */}
      <section id="work" className="scroll-mt-16">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)] mb-8">
          Work
        </h2>

        <div className="space-y-10">
          <div>
            <Row
              left={
                <span className="font-bold">
                  Chief Technology Officer — Neurolov (on-site)
                </span>
              }
              right="2025 — Present"
            />
            <p className="mt-2 text-[color:var(--muted)]">
              Decentralized GPU/AI compute network, built on Solana.
              Leading a 10-person team across app, platform, and infrastructure.
              Built the application, the compute platform, and the distributed
              infrastructure underneath it, from zero.
            </p>
          </div>

          <div>
            <Row
              left={
                <span className="font-bold">
                  Independent Developer — Agent Zigma (zigmacore)
                </span>
              }
              right="2024 — Completed"
            />
            <p className="mt-2 text-[color:var(--muted)]">
              Self-contained independent build. Proving ground for Open Network
              and SVM development ahead of the Neurolov engagement.
            </p>
          </div>

          <div>
            <Row
              left={
                <span className="font-bold">
                  Founder — Web3 Research &amp; Development
                </span>
              }
              right="2017 — 2022"
            />
            <p className="mt-2 text-[color:var(--muted)]">
              Independent consultancy. 30+ collaborators across smart contract,
              exchange, and analytics work. Smart contracts for 7+ cryptocurrencies.
              Order book and matching engine for an exchange. Proof of concept for
              IQVIA (IPFS + Ethereum + BigchainDB). Four whitepapers. On-chain
              analysis for 10+ projects. Tax computation software for crypto
              transactions (taxpotter).
            </p>
          </div>

          <div>
            <Row
              left={
                <span className="font-bold">
                  Freelance Developer &amp; Security Contributor
                </span>
              }
              right="2014 — 2016"
            />
            <p className="mt-2 text-[color:var(--muted)]">
              Started as a web developer. Moved into ethical hacking and
              vulnerability assessment. Contributed full-time to Bitcoin-ecosystem
              work from 2015, shifted fully into Web3 by 2016.
            </p>
          </div>
        </div>
      </section>

      <hr />

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-16">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)] mb-8">
          Projects
        </h2>

        <ul className="space-y-3">
          {[
            {
              name: "Neurolov",
              desc: "decentralized GPU/AI compute network (CTO, on-site)",
              href: "https://neurolov.ai",
            },
            {
              name: "taxpotter",
              desc: "crypto transaction tax computation tool",
              href: "https://github.com/0xneox/taxpotter",
            },
            {
              name: "zigmacore",
              desc: "Agent Zigma — independent agent project, completed",
              href: "https://github.com/0xneox/zigmacore",
            },
            {
              name: "Block-Analytics",
              desc: "blockchain parsing & analysis tool (Python)",
              href: "https://github.com/0xneox/Block-Analytics",
            },
            {
              name: "QuantResearch",
              desc: "quantitative trading strategy research & backtesting",
              href: "https://github.com/0xneox/QuantResearch",
            },
          ].map((p) => (
            <li key={p.name} className="flex flex-wrap items-baseline gap-x-3">
              <a href={p.href} target="_blank" rel="noreferrer" className="font-bold">
                {p.name}
              </a>
              <span className="text-[color:var(--muted)]">→ {p.desc}</span>
            </li>
          ))}
        </ul>
      </section>

      <hr />

      {/* NOW */}
      <section id="now" className="scroll-mt-16">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)] mb-8">
          Now
        </h2>

        <div className="space-y-4 max-w-[62ch]">
          <p>Parallel to the code, a longer-running inquiry.</p>
          <p>
            The Still Point is a separate space I founded — where non-dual
            teachings from Kashmir Shaivism and Advaita Vedanta meet the
            frontiers of blockchain, AI, and collective attention. Not a
            side project. A different register of the same question:
            what remains, underneath the noise, unmoved by it.
          </p>
          <p>Not an investment vehicle. A recognition vehicle.</p>
          <p>
            →{" "}
            <a href="https://linktr.ee/neo_grp" target="_blank" rel="noreferrer">
              thestillpoint
            </a>
          </p>
        </div>
      </section>

      <hr />

      {/* SIGNAL */}
      <section id="signal" className="scroll-mt-16">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)] mb-8">
          Signal
        </h2>

        <ul className="space-y-2">
          {[
            ["GitHub", "github.com/0xneox", "https://github.com/0xneox"],
            ["X", "x.com/0xneox", "https://x.com/0xneox"],
            ["Telegram", "t.me/binarybodhi", "https://t.me/binarybodhi"],
            ["Email", "neohex@pm.me", "mailto:neohex@pm.me"],
            ["Linktree", "linktr.ee/neo_grp", "https://linktr.ee/neo_grp"],
          ].map(([label, text, href]) => (
            <li key={label} className="flex gap-6">
              <span className="w-24 shrink-0 text-[color:var(--muted)]">{label}</span>
              <a href={href} target="_blank" rel="noreferrer">
                {text}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[color:var(--muted)]">
          No forms. No newsletter. Use one of the above.
        </p>
      </section>

      <hr />

      <footer className="text-xs text-[color:var(--muted)] pb-8">
        0xneox — 2026. No tracking. No cookies banner. If you're reading
        the source, you already know that.
      </footer>
    </main>
  );
}
