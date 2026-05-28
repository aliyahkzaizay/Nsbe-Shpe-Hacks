import { useState } from "react";

const navLinks = [
  { href: "/sponsors", label: "Sponsors" },
  { href: "/team", label: "Team" },
  { href: "/#faq", label: "FAQ" },
];

const eventLinks = [
  { href: "/#event-info", label: "Event Info" },
  { href: "/schedule", label: "Schedule" },
  { href: "/prizes", label: "Prizes" },
];

const nshx26Links = [
  { href: "/NSHx26/winners", label: "Winners" },
  { href: "/NSHx26/winners#pictures", label: "Pictures" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/82 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center">
          <a
            href="/"
            className="font-mono text-2xl font-bold tracking-normal text-foreground transition hover:text-cyan"
          >
            NSH @<span className="text-rpi">RPI</span>
            <span className="text-primary">_</span>
          </a>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2">
          <a
            href="/"
            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition"
          >
            Home
          </a>

          <div className="relative group">
            <button
              type="button"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition"
            >
              Events
            </button>

            <div className="absolute left-0 top-full hidden min-w-44 pt-2 group-hover:block group-focus-within:block">
              <div className="rounded-lg border border-border bg-background/95 p-2 shadow-lg backdrop-blur-xl">
                {eventLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-cyan transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <button
              type="button"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition"
            >
              NSHx26
            </button>

            <div className="absolute left-0 top-full hidden min-w-44 pt-2 group-hover:block group-focus-within:block">
              <div className="rounded-lg border border-border bg-background/95 p-2 shadow-lg backdrop-blur-xl">
                {nshx26Links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-amber transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/#register"
            className="ml-2 px-4 py-2 rounded-md bg-primary hover:opacity-90 text-primary-foreground font-semibold text-sm transition"
          >
            Register
          </a>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-2">
            <a
              href="/"
              className="text-muted-foreground hover:text-foreground py-2"
              onClick={() => setOpen(false)}
            >
              Home
            </a>

            <div className="border-y border-border/70 py-2">
              <div className="text-xs uppercase text-muted-foreground mb-1">
                Events
              </div>
              {eventLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground py-2 pl-3"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="border-b border-border/70 py-2">
              <div className="text-xs uppercase text-muted-foreground mb-1">
                NSHx26
              </div>
              {nshx26Links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground py-2 pl-3"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="/#register"
              className="mt-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-center font-semibold"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
