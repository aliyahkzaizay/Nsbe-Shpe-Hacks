import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/prizes")({
  component: PrizesPage,
  head: () => ({
    meta: [
      { title: "Prizes - NSBE x SHPE Hackathon at RPI" },
      {
        name: "description",
        content:
          "Prize details for the NSBE x SHPE Hackathon at RPI will be announced closer to the event.",
      },
    ],
  }),
});

const podium = [
  {
    place: "1st",
    prize: "To be announced",
    color: "bg-primary text-primary-foreground",
  },
  {
    place: "2nd",
    prize: "To be announced",
    color: "bg-card text-foreground border border-border",
  },
  {
    place: "3rd",
    prize: "To be announced",
    color: "bg-rpi text-white",
  },
];

const tracks = [
  {
    name: "Best Social Impact Hack",
    prize: "TBD",
    desc: "Tech that makes communities stronger.",
  },
  {
    name: "Best AI/ML Hack",
    prize: "TBD",
    desc: "Most creative use of modern AI.",
  },
  {
    name: "Best Hardware Hack",
    prize: "TBD",
    desc: "Build something physical, connected, or delightfully practical.",
  },
  {
    name: "Best Beginner Hack",
    prize: "TBD",
    desc: "First-time hackers only.",
  },
  {
    name: "Best Design",
    prize: "TBD",
    desc: "Polish, clarity, and thoughtful user experience.",
  },
  {
    name: "People's Choice",
    prize: "TBD",
    desc: "Voted by your fellow hackers.",
  },
];

function PrizesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="font-mono text-sm text-primary mb-3">
        &gt; prize_pool.exe
      </p>
      <h1 className="text-4xl md:text-5xl font-bold">Prizes</h1>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        Prize details are still being finalized with sponsors and will be
        announced closer to the event.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {podium.map((p) => (
          <div key={p.place} className={`rounded-2xl p-8 ${p.color}`}>
            <div className="text-sm font-semibold opacity-80">
              Grand Prize
            </div>
            <div className="text-5xl font-bold mt-2">{p.place}</div>
            <div className="mt-4 font-medium">{p.prize}</div>
          </div>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-bold">Track Prizes</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tracks.map((t) => (
          <div
            key={t.name}
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition"
          >
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm text-primary mt-1">{t.prize}</div>
            <p className="text-sm text-muted-foreground mt-3">{t.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center">
        <h3 className="text-2xl font-bold">Think you can win?</h3>
        <p className="mt-2 text-muted-foreground">
          Applications open October 2026 for the January 2027 hackathon.
        </p>
        <a
          href="/#register"
          className="inline-block mt-5 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}
