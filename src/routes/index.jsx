import { createFileRoute, Link } from "@tanstack/react-router";
import NSBELogo from "../assets/NSBE.png"
import SHPELogo from "../assets/SHPE.png"
import RPILogo from "../assets/RPI.svg"
import TicketmasterLogo from "../assets/ticketM.png"
import MathWorksLogo from "../assets/MW.png"
import CadenceLogo from "../assets/Cadence.png"
import EYLogo from "../assets/EY1.png"
import TraneLogo from "../assets/Trane.png"


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 pt-12 pb-20">

          {/* TERMINAL WINDOW */}
          <div className="terminal-window p-0 mb-8">

            {/* TERMINAL TOP BAR */}
            <div className="flex items-center gap-2 px-3 py-1 border-b border-border bg-secondary/40 text-xs">

              <span className="size-3 rounded-full bg-rpi" />
              <span className="size-3 rounded-full bg-shpe" />
              <span className="size-3 rounded-full bg-nsbe" />

              <span className="ml-2 text-muted-foreground">
                ~/sponsorship-packet — bash — 80×24
              </span>
            </div>


            {/* TERMINAL CONTENT */}
            <div className="p-6 md:p-10 text-left">

              <p className="text-sm md:text-base text-muted-foreground">

                <span className="text-primary">
                  user@rpi
                </span>

                :

                <span className="text-cyan">
                  ~/2027
                </span>

                $ ./launch_hackathon.sh
              </p>


              <p className="text-xs md:text-sm text-muted-foreground mt-1">

                &gt; booting NSBE × SHPE × RPI mainframe...

                <span className="text-primary">
                  {" "} [ OK ]
                </span>
              </p>


              <p className="text-xs md:text-sm text-muted-foreground">
                &gt; event: Jan. 30-31st 2027
              </p>


              <p className="text-xs md:text-sm text-muted-foreground">
                &gt; applications: open October 2026
              </p>


              {/* MAIN TITLE */}
              <h1 className="mt-8 text-5xl md:text-8xl font-bold leading-none">

                <span>
                  NSH @
                </span>

                <span className="text-rpi">
                  {" "}RPI
                </span>

                <span className="blink text-primary">
                  _
                </span>
              </h1>

              <p className="mt-6 text-2xl md:text-4xl font-bold text-primary">
                &gt; BUILD WHAT MATTERS.
              </p>

              {/* SUBTITLE */}
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">

                &gt; NSBE x SHPE Hackathon

                <br />

                Hosted by the NSBE and SHPE chapters at
                Rensselaer Polytechnic Institute.
              </p>


              {/* CTA BUTTONS */}
              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href="#register"
                  className="px-6 py-3 border border-primary bg-primary text-primary-foreground font-bold uppercase hover:opacity-90 transition"
                  style={{
                    boxShadow: "var(--shadow-glow)",
                  }}
                >
                  [ Register Now ]
                </a>


                <a
                  href="#sponsors"
                  className="px-6 py-3 border border-amber/70 bg-transparent text-amber font-bold uppercase hover:bg-amber hover:text-accent-foreground transition"
                >
                  [ Become a Sponsor ]
                </a>
              </div>
            </div>
          </div>


          {/* INFO */}
         {/* EVENT INFO */}
      <section id="event-info" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24">

            <div className="grid md:grid-cols-3 gap-6">

            {[
                {
                title: "When",
                body: "January 30-31st 2027",
                sub: "Saturday 9am → Sunday 3pm",
                },

                {
                title: "Where",
                body: "Darrin Comm. Center",
                sub: "RPI Campus, Troy NY",
                },

                {
                title: "Who",
                body: "All college students",
                sub: "Beginners welcome",
                },
            ].map((c, i) => (

                <div
                key={c.title}
                className="rounded-2xl border border-border bg-card p-6"
                >

                <div
                    className={`size-10 rounded-lg mb-4 ${
                    i === 0
                        ? "bg-nsbe"
                        : i === 1
                        ? "bg-cyan"
                        : "bg-amber"
                    }`}
                />

                <div className="text-sm text-muted-foreground">
                    {c.title}
                </div>

                <div className="text-xl font-bold mt-1">
                    {c.body}
                </div>

                <div className="text-sm text-muted-foreground mt-1">
                    {c.sub}
                </div>
                </div>
            ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="font-mono text-sm text-cyan mb-3">
                  &gt; who_we_are.txt
                </p>
                <h2 className="text-2xl font-bold">Who is NSH @ RPI?</h2>
                <p className="mt-4 text-muted-foreground">
                  NSH @ RPI is a student-led weekend hackathon hosted by the
                  NSBE and SHPE chapters at Rensselaer Polytechnic Institute.
                  We bring builders together to learn, create, and solve real
                  problems with support from mentors, workshops, and sponsors.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="font-mono text-sm text-amber mb-3">
                  &gt; hackathon_101.md
                </p>
                <h2 className="text-2xl font-bold">What is a hackathon?</h2>
                <p className="mt-4 text-muted-foreground">
                  A hackathon is a collaborative build event where students form
                  teams, choose a problem, and create a project in a short
                  amount of time. You do not need to be an expert to join.
                  Hackathons are about learning fast, trying ideas, and building
                  something you can demo.
                </p>
              </div>
            </div>
            </section>
        </div>
      </section>


      {/* THEME REVEAL */}
      {/* <ThemeReveal /> */}


      {/* SCHEDULE */}
      <section id="schedule" className="max-w-7xl mx-auto px-6 py-20">

        {/*
          Uncomment this event list once the full schedule is ready, then remove
          or comment out the coming-soon block below.

          <p className="text-sm uppercase tracking-widest text-muted-foreground text-center mb-3">
            Run of Show
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Event Schedule
          </h2>

          <div className="max-w-4xl mx-auto terminal-window p-4 md:p-6">
            <div className="space-y-3">
              {[
                ["Day 1", "9:00 AM", "Registration & Check-in"],
                ["Day 1", "10:00 AM", "Opening Ceremony"],
                ["Day 1", "11:00 AM", "Hacking Begins!"],
                ["Day 1", "12:30 PM", "Lunch"],
                ["Day 1", "2:00 PM", "Workshop: Web Development"],
                ["Day 1", "4:00 PM", "Workshop: Machine Learning"],
                ["Day 1", "6:00 PM", "Dinner"],
                ["Day 1", "9:00 PM", "Midnight Snacks"],
                ["Day 2", "8:00 AM", "Breakfast"],
                ["Day 2", "11:00 AM", "Hacking Ends - Submissions Due"],
                ["Day 2", "12:00 PM", "Project Presentations"],
                ["Day 2", "2:00 PM", "Awards Ceremony"],
              ].map(([day, time, title]) => (
                <ScheduleItem
                  key={`${day}-${time}-${title}`}
                  day={day}
                  time={time}
                  title={title}
                />
              ))}
            </div>
          </div>
        */}

      </section>



      {/* SPONSORS */}
      <section id="sponsors" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-24">

        {/*
          Uncomment this block once sponsors are confirmed, then remove or comment
          out the outreach block below.

          <p className="text-sm uppercase tracking-widest text-muted-foreground text-center mb-3">
            Partners
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our Sponsors
          </h2>

          <div className="space-y-12">
            <SponsorTier
              title="Platinum Sponsors"
              sizeClass="w-64 h-32"
              count={2}
            />

            <SponsorTier
              title="Gold Sponsors"
              sizeClass="w-48 h-24"
              count={3}
            />
          </div>
        */}

        <div className="terminal-window p-8 md:p-12">

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            <div>


              <h2 className="text-4xl md:text-5xl font-bold">
                Partner with NSBE × SHPE Hacks
              </h2>

              <p className="mt-5 text-lg text-muted-foreground">
              Partner with us to support diverse talent, foster innovation <br></br>
              and create meaningful opportunities for students in STEM.
              </p>

              <PastSponsorMarquee />

              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href="mailto:nshrpi.director@gmail.com?subject=NSBE%20x%20SHPE%20Hackathon%20Sponsorship"
                  className="px-6 py-3 border border-primary bg-primary text-primary-foreground font-bold uppercase hover:opacity-90 transition"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                >
                  [ Contact Us ]
                </a>

                <a
                  href="/sponsorship-packet-2027.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border border-cyan/50 bg-transparent text-cyan font-bold uppercase hover:bg-cyan hover:text-background transition"
                >
                  [ View Sponsorship Packet ]
                </a>
              </div>
            </div>

            {/* <div className="grid gap-3">

              {[
                "Sponsorship packet",
                "Pitch deck / PDF",
                "Basic event site",
              ].map((item) => (

                <div
                  key={item}
                  className="border border-border bg-background/55 p-4"
                >

                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    June onward
                  </div>

                  <div className="mt-2 text-xl font-bold">
                    {item}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>



      {/* FAQ */}
      <section
        id="faq"
        className="relative scroll-mt-24 overflow-hidden border-y border-border bg-[radial-gradient(circle_at_18%_12%,rgb(82_215_255_/_10%),transparent_24rem),radial-gradient(circle_at_82%_18%,rgb(246_196_69_/_9%),transparent_24rem),linear-gradient(180deg,rgb(17_29_33_/_46%),rgb(5_7_7_/_78%))] px-6 py-20"
      >

        <div className="mx-auto max-w-6xl">
        
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <FAQGroup
              title="General"
              accent="text-cyan"
              questions={[
                {
                  question: "Still have questions?",
                  answer: (
                    <>
                      Please reach out to us at{" "}
                      <a
                        href="mailto:nshrpi.director@gmail.com"
                        className="text-amber underline underline-offset-4 hover:text-foreground transition"
                      >
                        nshrpi.director@gmail.com
                      </a>
                      . We are happy to help.
                    </>
                  ),
                },
                {
                  question: "Can I start my project before the hackathon?",
                  answer:
                    "You cannot work on a project you started before the hackathon. Ideation before the hackathon is allowed, but all implementation must happen during the hackathon.",
                },
                {
                  question: "How many people can be on a single team?",
                  answer: "Up to 4 people can be part of a single team.",
                },
                {
                  question: "What should I bring?",
                  answer:
                    "Bring your laptop, chargers, and any hardware you plan to use. We will provide WiFi, food, workspace, and event programming.",
                },
                {
                  question: "What if I am a beginner?",
                  answer:
                    "Beginners are welcome. We will have workshops, mentors, and space to learn while building.",
                },
              ]}
            />

            <FAQGroup
              title="Registration"
              accent="text-amber"
              questions={[
                {
                  question: "Who can apply?",
                  answer:
                    "NSH @ RPI is open to undergraduate and graduate students, students at nearby colleges in New York's Capital Region, and anyone who graduated within the past year after Fall 2025.",
                },
                {
                  question: "How do I apply?",
                  answer:
                    "Applications will open in October 2026. When applications go live, we will share the Devpost link.",
                },
                {
                  question: "Is there a cost to participate?",
                  answer:
                    "No. The event is free for accepted participants, including meals, workshops, and swag.",
                },
                {
                  question: "Do I need to be part of NSBE or SHPE?",
                  answer:
                    "No. You do not need to be a member of NSBE or SHPE to participate.",
                },
                {
                  question: "If I graduated, can I be a mentor or judge?",
                  answer:
                    "Yes. Mentor and judge applications will be shared later through a separate link.",
                },
              ]}
            />
          </div>
        </div>
      </section>



      {/* CTA STRIP */}
      <section id="register" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-24">

        <div className="terminal-window p-10 md:p-16 text-center">

          <h2 className="text-3xl md:text-5xl font-bold text-amber">
            {/* Ready to build? */}

            &gt; Applications open October 2026_
          </h2>


          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Follow our instagram @rpinsbeshpe_hacks for more info!
          </p>


          {/* <Link
            to="/register"
            className="inline-block mt-6 px-6 py-3 rounded-md bg-background text-foreground font-semibold hover:bg-card transition"
          >
            Apply Now →
          </Link> */}
        </div>
      </section>
    </div>
  );
}



function ScheduleItem({ day, time, title }) {
  return (
    <div className="grid gap-3 border border-border bg-background/55 p-4 md:grid-cols-[5rem_7rem_1fr] md:items-center">

      <span className="text-xs uppercase tracking-widest text-accent">
        {day}
      </span>

      <span className="text-sm font-bold text-primary">
        {time}
      </span>

      <span className="text-card-foreground">
        {title}
      </span>
    </div>
  );
}



/*
function SponsorTier({ title, sizeClass, count }) {
  return (
    <div>

      <h3 className="text-2xl font-semibold text-center mb-6 text-muted-foreground">
        {title}
      </h3>

      <div className="flex flex-wrap justify-center gap-6">

        {Array.from({ length: count }, (_, index) => (

          <div
            key={`${title}-${index}`}
            className={`${sizeClass} border border-border bg-card/80 flex items-center justify-center text-muted-foreground`}
          >
            Sponsor Logo
          </div>
        ))}
      </div>
    </div>
  );
}
*/



const pastSponsorLogos = [
  { name: "Ticketmaster", logo: TicketmasterLogo, className: "max-h-9" },
  { name: "MathWorks", logo: MathWorksLogo, className: "max-h-10" },
  { name: "Cadence", logo: CadenceLogo, className: "max-h-10" },
  { name: "EY", logo: EYLogo, className: "max-h-12" },
  { name: "Trane Technologies", logo: TraneLogo, className: "max-h-12" },
];



function PastSponsorMarquee() {
  const marqueeLogos = [...pastSponsorLogos, ...pastSponsorLogos];

  return (
    <div className="mt-8 overflow-hidden border-y border-border py-5">
      <div className="flex w-max items-center gap-10 home-sponsor-marquee">
        {marqueeLogos.map((sponsor, index) => (
          <img
            key={`${sponsor.name}-${index}`}
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            className={`w-40 object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 ${sponsor.className}`}
          />
        ))}
      </div>
    </div>
  );
}



function FAQGroup({ title, accent, questions }) {
  return (
    <div className="rounded-2xl border border-border bg-card/55 p-5 shadow-[0_24px_80px_rgb(0_0_0_/_22%)] backdrop-blur-xl md:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="size-2.5 rounded-full bg-current text-primary" />
        <h3 className={`font-mono text-2xl font-bold ${accent}`}>
          {title}
        </h3>
      </div>

      <div className="space-y-3">
        {questions.map((item) => (
          <FAQItem
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}



function FAQItem({ question, answer }) {
  return (
    <details className="group rounded-xl border border-border bg-background/45 p-4 transition open:border-cyan/35 open:bg-background/70">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
        <span className="text-lg font-bold text-foreground">
          {question}
        </span>

        <span className="font-mono text-2xl leading-none text-amber transition group-open:rotate-45">
          +
        </span>
      </summary>

      <p className="mt-3 leading-6 text-muted-foreground">
        {answer}
      </p>
    </details>
  );
}



function TrophyIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 4h8v4.5a4 4 0 0 1-8 0V4Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 6H5.5A1.5 1.5 0 0 0 4 7.5V8a4 4 0 0 0 4 4m8-6h2.5A1.5 1.5 0 0 1 20 7.5V8a4 4 0 0 1-4 4m-4 .5V17m-3 3h6m-7 0h8"
      />
    </svg>
  );
}



function ThemeReveal() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="terminal-window p-10 md:p-16 text-center">

        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
          Theme Reveal
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-primary">
          &gt; THEME to be revealed when applications open_
        </h2>

        <p className="mt-5 max-w-xl mx-auto text-muted-foreground">
          Applications open October 2026.
        </p>
      </div>
    </section>
  );
}



export default Index;
