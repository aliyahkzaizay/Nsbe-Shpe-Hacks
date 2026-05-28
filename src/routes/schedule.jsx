import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/schedule")({
  component: SchedulePage,
  head: () => ({
    meta: [
      { title: "Schedule - NSBE x SHPE Hackathon at RPI" },
      {
        name: "description",
        content:
          "Schedule details for the NSBE x SHPE Hackathon at RPI will be revealed closer to the event date.",
      },
    ],
  }),
});

/*
Uncomment this data and replace the SchedulePage return when the full schedule is ready.

const days = [
  {
    day: "Friday, March 27",
    accent: "bg-nsbe",
    events: [
      { time: "5:00 PM", title: "Check-in opens", desc: "Pick up swag at DCC" },
      { time: "6:30 PM", title: "Opening ceremony", desc: "Welcome from NSBE & SHPE leads" },
      { time: "7:30 PM", title: "Team formation + dinner", desc: "Mingle, find teammates" },
      { time: "9:00 PM", title: "Hacking begins", desc: "Clock starts now" },
      { time: "10:00 PM", title: "Workshop: Intro to React", desc: "Beginner friendly" },
    ],
  },
  {
    day: "Saturday, March 28",
    accent: "bg-shpe",
    events: [
      { time: "9:00 AM", title: "Breakfast", desc: "Bagels + coffee" },
      { time: "11:00 AM", title: "Workshop: ML with Hugging Face", desc: "Hands-on" },
      { time: "1:00 PM", title: "Lunch + sponsor fair", desc: "Meet recruiters" },
      { time: "3:00 PM", title: "Workshop: Designing for impact", desc: "UX in 30 min" },
      { time: "8:00 PM", title: "Dinner + games night", desc: "Smash bros, anyone?" },
      { time: "11:00 PM", title: "Midnight snacks", desc: "Pizza drop" },
    ],
  },
  {
    day: "Sunday, March 29",
    accent: "bg-rpi",
    events: [
      { time: "9:00 AM", title: "Breakfast", desc: "Last fuel-up" },
      { time: "12:00 PM", title: "Submissions due", desc: "Pencils down" },
      { time: "1:00 PM", title: "Project expo", desc: "Demo to judges" },
      { time: "3:30 PM", title: "Closing ceremony", desc: "Awards + prizes" },
      { time: "5:00 PM", title: "Wrap up", desc: "See you next year" },
    ],
  },
];
*/

function SchedulePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <div className="terminal-window p-8 md:p-12 text-center">

        <p className="text-sm uppercase tracking-widest text-accent mb-4">
          Schedule Coming Soon
        </p>

        <h1 className="text-4xl md:text-5xl font-bold">
          Schedule to be revealed closer to the event date.
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">
          We are finalizing workshops, mentor hours, meals, judging blocks,
          and sponsor programming. Check back as the hackathon approaches
          for the full 48-hour timeline.
        </p>

        <div className="mt-8 border border-border bg-background/55 p-5 text-left">

          <div className="text-xs uppercase tracking-widest text-accent">
            Weekend Hackathon
          </div>

          <p className="mt-3 text-lg font-bold">
            2 days, Saturday through Sunday
          </p>

          <p className="mt-2 text-muted-foreground">
            The hackathon is planned to begin Saturday at 9:00 AM,
            continue overnight, and wrap Sunday around 3:00-4:00 PM.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">

          {[
            ["Workshops", "border-cyan/40"],
            ["Meals", "border-amber/40"],
            ["Judging", "border-rpi/50"],
          ].map(([item, colorClass]) => (

            <div
              key={item}
              className={`border ${colorClass} bg-background/55 p-4`}
            >
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Included
              </div>

              <div className="mt-2 text-xl font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 border border-primary bg-primary text-primary-foreground font-bold uppercase hover:opacity-90 transition"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          [ Back Home ]
        </Link>
      </div>
    </div>
  );
}

/*
function FullSchedulePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <p className="text-sm uppercase tracking-widest text-muted-foreground">
        Full 48-hour timeline
      </p>

      <h1 className="mt-3 text-4xl md:text-5xl font-bold">
        Schedule
      </h1>

      <p className="mt-3 text-muted-foreground">
        All times Eastern. Times subject to small adjustments.
      </p>

      <div className="mt-12 space-y-12">

        {days.map((d) => (

          <section key={d.day}>

            <div className="flex items-center gap-3 mb-6">

              <div className={`size-3 rounded-full ${d.accent}`} />

              <h2 className="text-2xl font-bold">
                {d.day}
              </h2>
            </div>

            <div className="space-y-3">

              {d.events.map((e) => (

                <div
                  key={`${d.day}-${e.time}-${e.title}`}
                  className="flex gap-4 border border-border bg-card p-4 transition hover:border-primary/40 md:gap-8"
                >

                  <div className="w-20 shrink-0 text-sm font-mono text-muted-foreground md:w-28">
                    {e.time}
                  </div>

                  <div>

                    <div className="font-semibold text-foreground">
                      {e.title}
                    </div>

                    <div className="text-sm text-muted-foreground">
                      {e.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
*/
