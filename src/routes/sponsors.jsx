import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import TicketmasterLogo from "../assets/ticketM.png";
import MathWorksLogo from "../assets/MW.png";
import CadenceLogo from "../assets/Cadence.png";
import EYLogo from "../assets/EY1.png";
import TraneLogo from "../assets/Trane.png";

export const Route = createFileRoute("/sponsors")({
  component: SponsorsPage,
  head: () => ({
    meta: [
      { title: "Sponsors - NSBE x SHPE Hackathon at RPI" },
      {
        name: "description",
        content:
          "Past sponsors and partners of the NSBE x SHPE Hackathon at RPI.",
      },
    ],
  }),
});

const sponsorYears = [
  {
    year: "2025",
    sponsors: [
      {
        name: "Ticketmaster",
        logo: TicketmasterLogo,
        logoClassName: "max-h-16",
      },
    ],
  },
  {
    year: "2024",
    sponsors: [
      {
        name: "MathWorks",
        logo: MathWorksLogo,
        logoClassName: "max-h-16",
      },
      {
        name: "Cadence",
        logo: CadenceLogo,
        logoClassName: "max-h-16",
      },
      {
        name: "EY",
        logo: EYLogo,
        logoClassName: "max-h-24",
      },
      {
        name: "Trane Technologies",
        logo: TraneLogo,
        logoClassName: "max-h-24",
      },
    ],
  },
];

const sponsorPacket = {
  path: "/sponsorship-packet-2027.pdf",
  totalPages: 4,
};

function SponsorsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="font-mono text-sm text-primary mb-3">
        &gt; sponsor_archive.exe
      </p>
      <h1 className="text-4xl md:text-5xl font-bold">Past Sponsors</h1>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        We are grateful for the companies and partners who have supported NSBE x
        SHPE Hacks at RPI !!
      </p>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        View our sponsorship opportunities or{" "}
        <a
          href="mailto:nshrpi.director@gmail.com?subject=NSBE%20x%20SHPE%20Hackathon%20Sponsorship"
          className="text-primary underline underline-offset-4 hover:text-foreground transition"
        >
          contact us
        </a>{" "}
        to learn more.
      </p>

      <div className="mt-12 space-y-14">
        {sponsorYears.map((group) => (
          <section key={group.year}>
            <div className="flex items-center gap-3 mb-6">
              <div className="size-3 rounded-full bg-primary" />
              <h2 className="text-2xl font-bold">{group.year}</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {group.sponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="min-h-32 flex items-center justify-center rounded-xl border border-border bg-card p-6"
                >
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className={`w-full object-contain ${sponsor.logoClassName}`}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <SponsorPacketViewer />

      <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center">
        <h3 className="text-2xl font-bold">
          Interested in partnering with us?
        </h3>
        <a
          href="/#sponsors"
          className="inline-block mt-5 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
        >
          Email us!
        </a>
      </div>
    </div>
  );
}

function SponsorPacketViewer() {
  const [page, setPage] = useState(1);

  const goToPage = (direction) => {
    setPage((currentPage) => {
      if (direction === "previous") {
        return currentPage === 1 ? sponsorPacket.totalPages : currentPage - 1;
      }

      return currentPage === sponsorPacket.totalPages ? 1 : currentPage + 1;
    });
  };

  return (
    <section className="mt-12">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between border-b border-border bg-background/90 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-rpi" />
            <span className="size-3 rounded-full bg-shpe" />
            <span className="size-3 rounded-full bg-primary" />
          </div>

          <div className="font-mono text-xs text-muted-foreground">
            sponsorship_packet.pdf / page {page}
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1fr_12rem]">
          <div className="min-h-[32rem] bg-background">
            <iframe
              key={page}
              title={`Sponsorship packet page ${page}`}
              src={`${sponsorPacket.path}#page=${page}&toolbar=0&navpanes=0&view=FitH`}
              className="h-[32rem] w-full border-0 bg-background"
            />
          </div>

          <div className="border-t border-border bg-card p-4 lg:border-l lg:border-t-0">
            <div className="font-mono text-xs uppercase text-muted-foreground">
              Packet Controls
            </div>

            <div className="mt-4 flex gap-2 lg:flex-col">
              <button
                type="button"
                onClick={() => goToPage("previous")}
                className="flex-1 rounded-md border border-border px-4 py-3 font-mono text-sm text-foreground hover:border-primary/50 hover:bg-background transition"
                aria-label="Previous sponsorship packet page"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={() => goToPage("next")}
                className="flex-1 rounded-md border border-border px-4 py-3 font-mono text-sm text-foreground hover:border-primary/50 hover:bg-background transition"
                aria-label="Next sponsorship packet page"
              >
                Next →
              </button>
            </div>

            <div className="mt-4 rounded-md border border-border bg-background p-3 font-mono text-xs text-muted-foreground">
              {page} / {sponsorPacket.totalPages}
            </div>

            <a
              href={sponsorPacket.path}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              Open PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
