import { useState } from "react";
import Logo from "../../assets/logo.svg";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/prizes", label: "Prizes" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/team", label: "Team" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/82 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="NSH @RPI logo"
            className="h-10 w-auto object-contain"
          />

          {/* <span className="text-foreground font-bold text-lg">
                NSH @ RPI_
            </span> */}
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2">
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground py-2"
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
