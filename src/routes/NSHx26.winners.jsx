import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { pictureShowcase } from "../data/pictureShowcase.generated";

export const Route = createFileRoute("/NSHx26/winners")({
  component: WinnersPage,
  head: () => ({
    meta: [
      { title: "NSHx26 Winners - NSBE x SHPE Hackathon at RPI" },
      {
        name: "description",
        content: "Winner projects from NSH 2026.",
      },
    ],
  }),
});

const winnerProjects = [
  {
    rank: "1st",
    title: "FlipALB",
    members: ["Suchi Ganeshan", "Harrison Schmidt", "Nicole Stepanenko,"],
    description:
      "We created a centralized platform that connects vacant properties with people who can activate them. Whether you are an investor, homebuyer, or even a government entity, you are able to use the platform to view the vacant properties in the area and get an overview status. You can then express your interest in the property to the current owner. Our project utilized django as a backend with a basic html/css/js stack for the frontend. We got our data from a ny.gov api for Albany vacancies. Additionally, we utilized leaflet for our interactive map feature. We ran into a little trouble initially with the link between our api data collection and our frontend display, but finally decided to store in a SQlite database and pull data directly from there. We are proud of the implementation of real data for our area with the possibility to create real solutions. ",
    projectPicture: "/projects/2026/FlipALB.jpg",
    winnersPicture: "/projects/2026/firstPlace.jpeg",
  },
  {
    rank: "2nd",
    title: "LoyaltyLand",
    members: [
      "Jerold Bonifacio",
      "Amymarie Jones",
      "Miles Fortuno",
      "Melody Adamson",
    ],
    description:
      'LoyaltyLand, a gamified loyalty app that turns supporting local businesses into a real world quest. We used React Native and Firebase to create a system where users find "Orbs" on a live map to unlock rewards, making the shopping experience feel like a game. We’re really proud of how we bridged the gap between the digital and physical worlds by integrating an Arduino and ESP32 setup so that when a user "taps to pay," the hardware communicates with our app to calculate and deduct points from their "Orb" in real time. This project taught us how to sync physical hardware with a cloud database and geofencing logic, all while making local shopping way more fun and interactive.',
    projectPicture: "/projects/2026/LoyaltyLand.jpg",
    winnersPicture: "/projects/2026/secondPlace.jpeg",
  },
  {
    rank: "3rd",
    title: "HomeSwipe",
    members: [
      "Oluwakorede Adeoye",
      "Patrick Ezeh Jr",
      "Lawrence Hammond",
      "Kamsi Dozie Obele",
    ],
    description:
      "When it comes down to housing, this is one issue that everyone must face. Thus even in a region such as ours housing is an issue that is shared amongst students, general residents, and at risk individuals. We created a platform that is meant to clear the gap when it comes to finding housing. We insituted a swipe feature that when you like saves to your profile. Furthermore, we wanted to ensure people are able to find roomates who match their vibe as much as possible. Thus we combined our database with a llm, to gauge the differences/similarities between two peoples preferences. To increase communication we created a chat feature that users can engage in to discuss their experienced and their possible shared needs. Finally we added a resource tab, that people can openly post events/opportunities to give back from anyone who would benefit from it. ",
    projectPicture: "/projects/2026/HomeSwipe.jpg",
    winnersPicture: "/projects/2026/thirdWinners.jpeg",
  },
];

const trackWinners = [
  {
    track: "People's Choice",
    project: "Capital Connect",
    team: "Marcus Brown, Ayanmo Adebajo, Jynene Alfay, Alyssa Okosun",
    picture: "/projects/2026/Capital-Connect.jpg",
  },
  {
    track: "Most Innovative",
    project: "Capital Exchange",
    team: "Izaak King, Matti, Henriksen, Leo Marte",
    picture: "/projects/2026/Capital-Exchange.jpg",
  },
];

const pictureTabs = [
  { id: "all", label: "All Pictures" },
  { id: "team", label: "Team Photos" },
  { id: "presentations", label: "Presentations" },
  { id: "workshops", label: "Workshops" },
];

function WinnersPage() {
  const [activePictureTab, setActivePictureTab] = useState("all");
  const filteredPictures =
    activePictureTab === "all"
      ? pictureShowcase
      : pictureShowcase.filter(
          (picture) => picture.category === activePictureTab
        );

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <p className="font-mono text-sm text-primary mb-3">&gt; winners.log</p>
      <h1 className="text-4xl md:text-5xl font-bold">
        Winner projects from NSH 2026
      </h1>
  
      <div className="mt-12 space-y-8">
        {winnerProjects.map((project) => (
          <WinnerProjectCard key={project.rank} project={project} />
        ))}
      </div>

      <section className="mt-16">
        <div className="flex items-center gap-3">
          <div className="size-3 rounded-full border border-primary/70 bg-background" />
          <h2 className="text-2xl font-bold">Track Winners</h2>
        </div>

        {trackWinners.length > 0 ? (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {trackWinners.map((track) => (
              <div
                key={track.track}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="aspect-[16/9] border-b border-border bg-background">
                  {track.picture ? (
                    <img
                      src={track.picture}
                      alt={`${track.track} winner`}
                      className="size-full object-cover"
                    />
                  ) : (
                    <div className="flex size-full items-center justify-center p-6 text-center font-mono text-sm text-muted-foreground">
                      Track Picture
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="font-mono text-xs uppercase tracking-widest text-primary">
                    {track.track}
                  </div>
                  <div className="mt-3 text-xl font-bold">{track.project}</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {track.team}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-xl border border-border bg-card p-6">
            <p className="text-muted-foreground">
              Track winner format to be added later.
            </p>
          </div>
        )}
      </section>

      <section id="pictures" className="mt-16 scroll-mt-24">
        <div className="flex items-center gap-3">
          <div className="size-3 rounded-full border border-primary/70 bg-background" />
          <h2 className="text-2xl font-bold">Picture Showcase</h2>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {pictureTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActivePictureTab(tab.id)}
              className={`rounded-md border px-4 py-2 font-mono text-sm transition ${
                activePictureTab === tab.id
                  ? "border-primary/60 bg-card text-foreground"
                  : "border-border text-muted-foreground hover:bg-card hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPictures.map((picture) => (
            <figure
              key={picture.src}
              className="group overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={picture.src}
                  alt={picture.label}
                  className="size-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </figure>
          ))}
        </div>

        {filteredPictures.length === 0 && (
          <div className="mt-6 rounded-xl border border-border bg-card p-6">
            <p className="text-muted-foreground">
              No photos in this category yet.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

function WinnerProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="grid lg:grid-cols-[15rem_1fr]">
        <div className="border-b border-border bg-background/70 p-6 lg:border-b-0 lg:border-r">
          <div className="font-mono text-sm text-primary">rank</div>
          <div className="mt-2 text-5xl font-bold">{project.rank}</div>
          <div className="mt-6 rounded-lg border border-border bg-card p-4">
            <div className="font-mono text-xs text-muted-foreground">
              members
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.members.map((member) => (
                <span
                  key={member}
                  className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {member}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <p className="mt-3 text-muted-foreground">{project.description}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ImageSlot src={project.projectPicture} label="Project Picture" />
            <ImageSlot src={project.winnersPicture} label="Winners Picture" />
          </div>
        </div>
      </div>
    </article>
  );
}

function ImageSlot({ src, label }) {
  return (
    <div className="aspect-video overflow-hidden rounded-xl border border-border bg-background">
      {src ? (
        <img src={src} alt={label} className="size-full object-cover" />
      ) : (
        <div className="flex size-full items-center justify-center p-6 text-center font-mono text-sm text-muted-foreground">
          {label}
        </div>
      )}
    </div>
  );
}
