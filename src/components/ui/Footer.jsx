import Logo from "../../assets/NSHLogo.png";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/#event-info", label: "Event Info" },
  { href: "/schedule", label: "Schedule" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/team", label: "Team" },
  { href: "/#faq", label: "FAQ" },
];

const followLinks = [
  // { href: "#", label: "Devpost" },
  { href: "https://www.instagram.com/rpinsbeshpe_hacks/", label: "Instagram" },
  // { href: "#", label: "YouTube" },
  // { href: "#", label: "Discord" },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-20 bg-background/70">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <img
            src={Logo}
            alt="NSH @ RPI logo"
            className="h-12 w-auto object-contain"
          />

          <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground">
            NSH @ RPI is a weekend hackathon in New York's Capital Region,
            hosted by Rensselaer Polytechnic Institute. Join us in 2027 as we
            hack for community impact.
          </p>

          <p className="mt-5 text-xs text-muted-foreground">
            © {new Date().getFullYear()} NSBE x SHPE Hacks at RPI
          </p>
        </div>

        <div>
          <h2 className="font-mono text-sm font-bold uppercase text-foreground">
            Quick Links
          </h2>
          <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-fit hover:text-cyan transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-mono text-sm font-bold uppercase text-foreground">
            Follow Us
          </h2>
          <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
            {followLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href === "#" ? undefined : "_blank"}
                rel={link.href === "#" ? undefined : "noreferrer"}
                className="w-fit hover:text-amber transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* <a
            href="#"
            className="mt-5 inline-block rounded-md border border-primary/60 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition"
          >
            Join our Discord
          </a> */}
        </div>
      </div>
    </footer>
  );
}
