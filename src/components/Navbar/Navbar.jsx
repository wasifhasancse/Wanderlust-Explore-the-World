import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import ProfileButton from "./ProfileButton";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tour", href: "/tour" },
  { label: "Hotel", href: "/hotel" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  // title = Wanderlust - Explore the World with Us
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold text-emerald-600 tracking-wide"
          >
            Wanderlust
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Profile Button */}
            <ProfileButton />
          </div>

          {/* Mobile Menu Toggle */}
          <HamburgerMenu navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
