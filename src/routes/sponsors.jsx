import { createFileRoute, Link } from "@tanstack/react-router";
import TicketmasterLogo from "../assets/ticketM.png";
import TraneTech from "../assets/Trane.png";
import MathWorksLogo from "../assets/MW.png";
import EYlogo from "../assets/EY1.png";
import CadenceLogo from "../assets/Cadence.png";

export const Route = createFileRoute("/sponsors")({
  component: SponsorsPage,
  head: () => ({
    meta: [
      { title: "Sponsors - NSBE x SHPE Hackathon at RPI" },
      {
        name: "description",
        content:
          "Past sponsors and partner archive for the NSBE x SHPE Hackathon at RPI.",
      },
    ],
  }),
});

const pastSponsors = [
  {
    year: "2025",
    sponsors: [
      {
        name: "Ticketmaster",
        logo: TicketmasterLogo,
      },
    ],
  },
  {
    year: "2024",
    sponsors: [
      {
        name: "MathWorks",
        logo: MathWorksLogo,
      },
      {
        name: "Cadence",
        logo: CadenceLogo,
      },
      {
        name: "EY",
        logo: EYlogo,
        logoClassName: "max-h-20",
      },
      {
        name: "Trane Technologies",
        logo: TraneTech,
        logoClassName: "max-h-24",
      },
    ],
  },
];

function SponsorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <p className="text-sm uppercase tracking-widest text-muted-foreground text-center mb-3">
        Partner archive
      </p>

      <h1 className="text-4xl md:text-5xl font-bold text-center">
        Past Sponsors
      </h1>

      <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
        Organizations that have supported NSBE, SHPE, and student builders
        at RPI across previous hackathon years.
      </p>

      <div className="mt-12 space-y-12">

        {pastSponsors.map((yearGroup) => (

          <section key={yearGroup.year}>

            <h2 className="text-2xl font-bold text-center mb-6">
              {yearGroup.year} Sponsors
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {yearGroup.sponsors.map((sponsor) => (

                <div
                  key={`${yearGroup.year}-${sponsor.name}`}
                  className={
                    sponsor.logo
                      ? "min-h-28 p-6 flex flex-col items-center justify-center text-center"
                      : "min-h-28 border border-border bg-card p-6 flex flex-col items-center justify-center text-center transition hover:border-primary/40"
                  }
                >
                  {sponsor.logo ? (
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className={`${sponsor.logoClassName ?? "max-h-14"} max-w-full object-contain`}
                    />
                  ) : (
                    <div className="text-xl font-bold">
                      {sponsor.name}
                    </div>
                  )}

                  <div className="mt-2 text-sm text-muted-foreground">
                    {sponsor.detail}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 terminal-window p-8 text-center">

        <h2 className="text-2xl font-bold">
          Interested in sponsoring the next hackathon?
        </h2>

        <p className="mt-3 text-muted-foreground">
          Our current sponsor outreach begins June 2026.
        </p>

        <Link
          to="/"
          hash="sponsors"
          className="inline-block mt-6 px-6 py-3 border border-primary bg-primary text-primary-foreground font-bold uppercase hover:opacity-90 transition"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          [ Sponsor Info ]
        </Link>
      </div>
    </div>
  );
}
