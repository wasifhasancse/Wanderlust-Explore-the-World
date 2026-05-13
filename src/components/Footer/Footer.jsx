import Link from "next/link";
import {
  FiArrowRight,
  FiCompass,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

const footerLinks = {
  Destinations: [
    { label: "Santorini, Greece", href: "/destinations/santorini" },
    { label: "Bali, Indonesia", href: "/destinations/bali" },
    { label: "Kyoto, Japan", href: "/destinations/kyoto" },
    { label: "Amalfi Coast, Italy", href: "/destinations/amalfi" },
    { label: "Cape Town, South Africa", href: "/destinations/cape-town" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Press & Media", href: "/press" },
    { label: "Partners", href: "/partners" },
  ],
  Support: [
    { label: "Help Center", href: "/help" },
    { label: "Booking Guide", href: "/booking-guide" },
    { label: "Cancellation Policy", href: "/cancellation" },
    { label: "Travel Insurance", href: "/insurance" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const socials = [
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FiYoutube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-400 overflow-hidden">
      {/* Decorative top blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-900/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-900/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Newsletter banner */}
      <div className="relative border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-xl font-bold">
              Get travel inspiration straight to your inbox
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Join 50,000+ subscribers. No spam, ever.
            </p>
          </div>
          <form className="flex w-full sm:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 sm:w-64 bg-gray-800 border border-gray-700 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-emerald-500 placeholder-gray-500 transition-colors"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors shrink-0"
            >
              Subscribe
              <FiArrowRight />
            </button>
          </form>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center">
                <FiCompass className="text-white text-lg" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-wide">
                Wanderlust
              </span>
            </Link>

            <p className="text-sm leading-relaxed max-w-xs mb-6">
              We turn dream destinations into real adventures. Trusted by over
              12,000 travelers across 80+ countries since 2018.
            </p>

            {/* Contact info */}
            <ul className="space-y-3 text-sm mb-7">
              <li className="flex items-center gap-2.5">
                <FiMapPin className="text-emerald-500 shrink-0" />
                123 Explorer Ave, San Francisco, CA 94102
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="text-emerald-500 shrink-0" />
                +1 (415) 555-0182
              </li>
              <li className="flex items-center gap-2.5">
                <FiMail className="text-emerald-500 shrink-0" />
                hello@wanderlust.travel
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 hover:bg-emerald-600 border border-gray-700 hover:border-emerald-600 rounded-xl flex items-center justify-center transition-all duration-200 text-gray-400 hover:text-white"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm hover:text-emerald-400 transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <FiArrowRight className="text-xs opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-emerald-500" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p>© {new Date().getFullYear()} Wanderlust. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
