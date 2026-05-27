import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Team - NSBE x SHPE Hackathon at RPI" },
      {
        name: "description",
        content:
          "Meet the organizing team behind the NSBE x SHPE Hackathon at RPI.",
      },
    ],
  }),
});

const teamYears = [
  {
    id: "NSH_2026",
    label: "NSH_2026",

    sections: [
      {
        title: "Directors",
        members: [
          {
            name: "Aliyah Zaizay",
            role: "Hackathon Co-Director",
            org: "NSBE Hackathon Director",
            headshot: "/team/2027/AliyahZ.jpg",
            quote:
              "There is no growth without change, no change without fear or loss, and no loss without pain",
            linkedin: "https://www.linkedin.com/in/aliyah-zaizay/",
          },
          {
            name: "Lauren Caraballo",
            role: "Hackathon Co-Director",
            org: "SHPE President",
            quote: "",
            linkedin: "https://www.linkedin.com/in/caraballo-lauren/",
          },
        ],
      },
      {
        title: "Leads",
        members: [
          {
            name: "Abigail Gutierrez",
            role: "Marketing Lead",
            org: "SHPE Webmaster",
            quote:
              "",
            linkedin: "https://www.linkedin.com/in/abigailgutierrez5/",
          },
          {
            name: "Kyle-Lamar Morgan",
            role: "Tech Lead",
            org: "RPI",
            headshot: "/team/2027/KyleLamar.jpeg",
            quote: "Lets rock out",
            linkedin: "https://www.linkedin.com/in/klmorgan22/",
          },
          {
            name: "Alex Clark",
            role: "Events Coordinator",
            org: "RPI",
            headshot:"/team/2027/AlexC.jpeg",
            quote:
              "Quality you can taste - In-N-Out",
            linkedin: "https://www.linkedin.com/in/alx-jam-clrk/",
          },
        ],
      },
    ],
    // volunteers: [
    //   "Volunteer Name",
    //   "Volunteer Name",
    //   "Volunteer Name",
    //   "Volunteer Name",
    //   "Volunteer Name",
    //   "Volunteer Name",
    // ],
  },
  {
    id: "NSH_2025",
    label: "NSH_2025",
    sections: [
      {
        title: "Directors",
        members: [
          {
            name: "Solomon Starks",
            role: "Hackathon Co-Director",
            org: "NSBE Hackathon Director",
            headshot: "/team/2026/SS.jpeg",
            linkedin: "https://www.linkedin.com/in/solomon-starkes/",
          },
        ],
      },
    ],
    // volunteers: [],
  },
];

function TeamPage() {
  const [selectedYear, setSelectedYear] = useState(teamYears[0].id);
  const activeYear =
    teamYears.find((year) => year.id === selectedYear) ?? teamYears[0];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <p className="font-mono text-sm text-primary mb-3">
        &gt; organizing_team.exe
      </p>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">Meet the Team</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Browse the student teams behind NSBE x SHPE Hacks programming at
            RPI.
          </p>
        </div>

        <a
          href="#"
          className="w-fit rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Become a Volunteer!
        </a>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:items-start">
        <div className="border-l border-border/80 pl-5">
          {teamYears.map((year) => (
            <button
              key={year.id}
              type="button"
              onClick={() => setSelectedYear(year.id)}
              className={`relative mb-4 block w-full rounded-lg border px-4 py-3 text-left transition ${
                activeYear.id === year.id
                  ? "border-primary/50 bg-card text-foreground shadow-[0_0_0_1px_rgba(0,255,102,0.12)]"
                  : "border-border bg-transparent text-muted-foreground hover:border-border hover:bg-card/60 hover:text-foreground"
              }`}
            >
              <span
                className={`absolute -left-[1.72rem] top-1/2 size-3 -translate-y-1/2 rounded-full border ${
                  activeYear.id === year.id
                    ? "border-primary bg-background"
                    : "border-border bg-background"
                }`}
              />
              <span className="block font-mono font-bold">{year.label}</span>
            </button>
          ))}
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full border border-primary/70 bg-background" />
            <h2 className="font-mono text-2xl font-bold">{activeYear.label}</h2>
          </div>

          {activeYear.sections.length > 0 ? (
            <div className="mt-8 space-y-12">
              {activeYear.sections.map((section) => (
                <section key={section.title}>
                  <h3 className="text-xl font-bold">{section.title}</h3>
                  <div className="mt-5 grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fit,minmax(14rem,18rem))]">
                    {section.members.map((member) => (
                      <TeamMember key={member.name} {...member} />
                    ))}
                  </div>
                </section>
              ))}
              {/* <VolunteersList volunteers={activeYear.volunteers} /> */}
            </div>
          ) : (
            <div className="mt-8 rounded-xl border border-border bg-card p-8">
              <h3 className="text-xl font-bold">Team archive coming soon</h3>
              <p className="mt-2 text-muted-foreground">
                This year is ready for team members to be added.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// function VolunteersList({ volunteers }: { volunteers: string[] }) {
//   if (volunteers.length === 0) {
//     return null;
//   }

//   const marqueeVolunteers = [...volunteers, ...volunteers];

//   return (
//     <section>
//       <h3 className="text-xl font-bold">Volunteers</h3>
//       <div className="mt-5 overflow-hidden rounded-xl border border-border bg-card">
//         <div className="flex w-max gap-3 py-5 team-volunteer-marquee">
//           {marqueeVolunteers.map((name, index) => (
//             <span
//               key={`${name}-${index}`}
//               className="rounded-md border border-border bg-background px-4 py-2 font-mono text-sm text-muted-foreground"
//             >
//               {name}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function TeamMember({
  name,
  role,
  org,
  linkedin,
  quote,
  headshot,
}: {
  name: string;
  role: string;
  org: string;
  linkedin: string;
  quote: string;
  headshot?: string;
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="group relative min-w-0 max-w-72 overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:rounded-2xl hover:border-primary/50">
      <div className="mx-auto size-28 overflow-hidden rounded-full border border-border bg-secondary">
        {headshot ? (
          <img
            src={headshot}
            alt={`${name} headshot`}
            className="size-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(0,255,102,0.24),transparent_42%),linear-gradient(135deg,hsl(var(--card)),hsl(var(--secondary)))]">
            <span className="font-mono text-3xl font-bold text-primary">
              {initials}
            </span>
          </div>
        )}
      </div>

      <div className="mt-5 text-center">
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-w-0 items-center justify-center gap-2 text-lg font-bold hover:text-primary transition"
        >
          <span className="min-w-0 break-words">{name}</span>
          <LinkedInIcon />
        </a>

        <div className="mt-1 text-sm text-muted-foreground">{role}</div>
        <div className="mt-3 inline-flex rounded-md border border-border px-2.5 py-1 text-xs font-semibold text-primary">
          {org}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-2 bottom-2 translate-y-5 rounded-xl border border-primary/40 bg-background/95 p-3 opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-xs text-foreground">"{quote}"</p>
      </div>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5 shrink-0"
      fill="#0A66C2"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}
