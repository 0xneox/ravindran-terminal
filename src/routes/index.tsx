import { createFileRoute } from "@tanstack/react-router";

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

function Index() {
  return (
    <main className="mx-auto max-w-[680px] px-6 py-24">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
        Binary Bodhi
      </h1>

      <p className="mt-10">
        Building since 2014. On-chain since 2015.<span className="cursor" />
      </p>

      <p className="mt-8 max-w-[62ch]">
        Blockchain developer. Security researcher. CTO, Neurolov —
        a decentralized GPU/AI compute network. Ten engineers, one
        platform, built from zero.
      </p>

      <p className="mt-6 max-w-[62ch]">
        Before that: an independent Web3 practice. Smart contracts for
        seven-plus cryptocurrencies. An order book and matching engine
        for an exchange. Four whitepapers. On-chain analysis nobody else
        wanted to run. Code that outlives the client relationship.
      </p>

      <p className="mt-6 max-w-[62ch]">
        No résumé filler. No thought-leadership. Systems either run or
        they don't — everything else is noise.
      </p>

      <div className="my-16 text-[color:var(--muted)]">—</div>

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

      <div className="my-16 text-[color:var(--muted)]">—</div>

      <p className="max-w-[62ch]">
        No permission asked. No middlemen required. No platform owns
        this identity.
      </p>

      <ul className="mt-10 space-y-2">
        {[
          ["GitHub", "github.com/0xneox", "https://github.com/0xneox"],
          ["X", "x.com/0xneox", "https://x.com/0xneox"],
          ["Telegram", "t.me/binarybodhi", "https://t.me/binarybodhi"],
          ["Signal", "neohex@pm.me", "mailto:neohex@pm.me"],
        ].map(([label, text, href]) => (
          <li key={label} className="flex gap-6">
            <span className="w-24 shrink-0 text-[color:var(--muted)]">{label}</span>
            <a href={href} target="_blank" rel="noreferrer">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
