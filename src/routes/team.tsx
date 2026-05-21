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

const team = [
  {
    name: "Aliyah Zaizay",
    role: "Co-Director",
    org: "NSBE",
    linkedin: "https://www.linkedin.com/in/aliyah-zaizay/",
  },
  {
    name: "Kyle-Lamar Morgan",
    role: "Tech Lead",
    org: "RPI",
    linkedin: "https://www.linkedin.com/in/klmorgan22/", 
  },
  {
    name: "Alex Clark",
    role: "Events Coordinator",
    org: "RPI",
    linkedin: "https://www.linkedin.com/in/alx-jam-clrk/",
  },
  // { name: "Carlos Martinez", role: "Logistics Lead", org: "SHPE" },
  // { name: "Jordan Chen", role: "Workshop Coordinator", org: "NSBE" },
  // { name: "Sofia Garcia", role: "Marketing Lead", org: "SHPE" },
  // { name: "DeAndre Brown", role: "Volunteer Coordinator", org: "NSBE" },
  // { name: "Isabella Lopez", role: "Design Lead", org: "SHPE" },
];

function TeamPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <p className="text-sm uppercase tracking-widest text-muted-foreground text-center mb-3">
        People behind the event
      </p>

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Organizing Team
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {team.map((member) => (

          <TeamMember
            key={`${member.name}-${member.role}`}
            name={member.name}
            role={member.role}
            org={member.org}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </section>
  );
}

function TeamMember({
  name,
  role,
  org,
  linkedin,
}: {
  name: string;
  role: string;
  org: string;
  linkedin: string;
}) {
  const isNsbe = org === "NSBE";

  return (
    <article className="border border-border bg-card p-6 text-center transition hover:-translate-y-1 hover:border-primary/40">

      <div
        className={`mx-auto flex size-20 items-center justify-center rounded-full text-2xl font-bold ${
          isNsbe
            ? "bg-nsbe text-primary-foreground"
            : "bg-shpe text-primary-foreground"
        }`}
      >
        {name
          .split(" ")
          .map((part) => part[0])
          .join("")}
      </div>

      <h2 className="mt-5 flex items-center justify-center gap-2 text-xl font-bold">
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary transition"
        >
          {name}
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`${name} on LinkedIn`}
          className="text-[#0A66C2] hover:opacity-80 transition"
        >
          <LinkedInIcon className="size-4" />
        </a>
      </h2>

      <p className="mt-2 text-sm text-primary">
        {role}
      </p>

      <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
        {org}
      </p>
    </article>
  );
}

function LinkedInIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6.94 8.98H3.75v10.48h3.19V8.98ZM5.35 4.54c-1.02 0-1.85.84-1.85 1.86s.83 1.86 1.85 1.86c1.03 0 1.86-.84 1.86-1.86s-.83-1.86-1.86-1.86Zm13.9 8.9c0-2.82-1.51-4.13-3.52-4.13-1.62 0-2.35.89-2.75 1.52V8.98H9.92v10.48h3.19v-5.18c0-1.37.26-2.7 1.96-2.7 1.68 0 1.7 1.57 1.7 2.79v5.09h3.19v-5.74c0-.1-.01-.19-.01-.28Z" />
    </svg>
  );
}
