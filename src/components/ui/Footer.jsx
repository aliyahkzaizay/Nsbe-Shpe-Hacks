import NSBELogo from "../../assets/NSBE.png";
import SHPELogo from "../../assets/SHPE.png";
import RPILogo from "../../assets/RPI.svg";


export function Footer() {
  return (
    <footer className="border-t border-border mt-20 bg-background/70">

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* LEFT */}
        <div className="flex items-center gap-3 text-sm text-muted-foreground">

            <div className="flex items-center gap-3">

                <img
                src={NSBELogo}
                alt="NSBE Logo"
                className="w-8 h-8 object-contain"
                />

                 <img
                src={SHPELogo}
                alt="NSBE Logo"
                className="w-8 h-8 object-contain"
                />
                 <img
                src={RPILogo}
                alt="NSBE Logo"
                className="w-8 h-8 object-contain"
                />


            </div>


            <span>
                © {new Date().getFullYear()} NSBE × SHPE Hackathon at RPI
            </span>
        </div>


        {/* RIGHT */}
        <div className="flex gap-4 text-sm text-muted-foreground">

          <a
            href="mailto: rpinsbehackathondirector@gmail.com"
            className="hover:text-foreground"
          >
            Contact
          </a>

          <a href="https://www.instagram.com/rpinsbeshpe_hacks/" className="hover:text-foreground" target="_blank">
            Instagram
          </a>

          <a href="#" className="hover:text-foreground">
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}
