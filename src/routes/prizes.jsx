import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/prizes")({
  component: PrizesPage,
  head: () => ({
    meta: [
      { title: "Prizes - NSBE x SHPE Hackathon at RPI" },
      {
        name: "description",
        content: "Stay tuned for prize announcements and updates!",
      },
    ],
  }),
});

// Over $10,000 in prizes across multiple tracks.

const podium = [
  {
    place: "1st",
    prize: "Prize TBD",
    color: "bg-shpe text-primary-foreground",
  },
  {
    place: "2nd",
    prize: "Prize TBD",
    color: "bg-nsbe text-primary-foreground",
  },
  {
    place: "3rd",
    prize: "Prize TBD",
    color: "bg-rpi text-primary-foreground",
  },
];

const tracks = [
  {
    name: "Best Social Impact Hack",
    prize: "Prize TBD",
    desc: "Tech that makes communities stronger.",
  },
  {
    name: "Best AI/ML Hack",
    prize: "Prize TBD",
    desc: "Most creative use of modern AI.",
  },
  {
    name: "Best Hardware Hack",
    prize: "Prize TBD",
    desc: "Bring your soldering iron.",
  },
  {
    name: "Best Beginner Hack",
    prize: "Prize TBD",
    desc: "First-time hackers only.",
  },
  {
    name: "Best Design",
    prize: "Prize TBD",
    desc: "Polish above all.",
  },
  {
    name: "People's Choice",
    prize: "Prize TBD",
    desc: "Voted by your fellow hackers.",
  },
];

function PrizesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="text-sm uppercase tracking-widest text-muted-foreground">
        Awards and tracks
      </p>

      <h1 className="mt-3 text-4xl md:text-5xl font-bold">Prizes</h1>

      <p className="mt-3 text-muted-foreground max-w-2xl">
        Stay tuned for prize announcements and updates!
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {podium.map((p) => (
          <div
            key={p.place}
            className={`p-8 ${p.color} transition hover:-translate-y-1`}
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            <div className="text-sm font-semibold opacity-80">Grand Prize</div>

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
            className="border border-border bg-card p-6 transition hover:border-primary/40"
          >
            <div className="font-semibold">{t.name}</div>

            <div className="text-sm text-primary mt-1">{t.prize}</div>

            <p className="text-sm text-muted-foreground mt-3">{t.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 border border-border bg-card p-8 text-center">
        <h3 className="text-2xl font-bold">Think you can win?</h3>

        <p className="mt-2 text-muted-foreground">
          There's only one way to find out.
        </p>

        <Link
          to="/register"
          className="inline-block mt-5 px-6 py-3 bg-gradient-hero text-primary-foreground font-semibold"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
}
