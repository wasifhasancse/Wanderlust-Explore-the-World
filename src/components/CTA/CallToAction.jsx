import { FaPlane } from "react-icons/fa";
import { FiArrowRight, FiCamera, FiCompass, FiMapPin } from "react-icons/fi";

const highlights = [
  { icon: FiCompass, text: "500+ curated tours" },
  { icon: FiMapPin, text: "80+ countries" },
  { icon: FiCamera, text: "Unforgettable memories" },
];

const CallToAction = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Full-bleed gradient card */}
      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-700" />

        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-teal-400/10 rounded-full blur-2xl" />

        {/* Plane icon decoration */}
        <div className="absolute top-8 right-10 text-white/10 hidden sm:block">
          <FaPlane className="text-[120px] rotate-45" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-10 sm:p-14">
          {/* Left */}
          <div className="max-w-xl text-center lg:text-left">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse" />
              Start Your Journey
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Ready for Your{" "}
              <span className="relative">
                Next Adventure?
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 9C50 3 100 1 150 4C200 7 250 6 298 3"
                    stroke="rgba(110,231,183,0.7)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-emerald-100 mt-6 text-base leading-relaxed">
              Join over{" "}
              <strong className="text-white">12,000+ happy travelers</strong>{" "}
              who&apos;ve trusted Wanderlust to craft their perfect getaway.
              Your dream trip is just one click away.
            </p>

            {/* Highlight pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
              {highlights.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  <Icon className="text-emerald-300 text-sm shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — CTA card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col items-center gap-4 min-w-72 shrink-0 shadow-xl">
            <div className="text-center">
              <p className="text-white/70 text-sm font-medium">
                Starting from just
              </p>
              <p className="text-5xl font-extrabold text-white mt-1">$599</p>
              <p className="text-emerald-200 text-xs mt-1">
                per person, all inclusive
              </p>
            </div>

            <a
              href="/tour"
              className="w-full flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-emerald-700 font-bold py-3.5 rounded-xl transition-all duration-200 text-sm shadow-md active:scale-95"
            >
              Book Now
              <FiArrowRight />
            </a>

            <a
              href="/destinations"
              className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 rounded-xl transition-all duration-200 text-sm"
            >
              Browse Destinations
              <FiMapPin className="text-emerald-300" />
            </a>

            <p className="text-white/50 text-xs text-center">
              Free cancellation · No hidden fees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
