import {
    FiDollarSign,
    FiHeadphones,
    FiMap,
    FiShield,
    FiStar,
    FiUsers,
} from "react-icons/fi";

const reasons = [
  {
    icon: FiShield,
    color: "bg-emerald-50 text-emerald-600",
    ring: "ring-emerald-100",
    title: "Safe & Secure",
    desc: "Every tour is fully vetted and insured. Travel with confidence knowing your safety is our top priority.",
  },
  {
    icon: FiDollarSign,
    color: "bg-blue-50 text-blue-600",
    ring: "ring-blue-100",
    title: "Best Price Guarantee",
    desc: "Find a lower price elsewhere? We'll match it — no questions asked. Great experiences shouldn't break the bank.",
  },
  {
    icon: FiMap,
    color: "bg-orange-50 text-orange-500",
    ring: "ring-orange-100",
    title: "Curated Itineraries",
    desc: "Our travel experts craft each itinerary to include hidden gems alongside iconic landmarks.",
  },
  {
    icon: FiHeadphones,
    color: "bg-purple-50 text-purple-600",
    ring: "ring-purple-100",
    title: "24/7 Support",
    desc: "Day or night, our dedicated support team is always one call away — wherever you are in the world.",
  },
  {
    icon: FiStar,
    color: "bg-yellow-50 text-yellow-500",
    ring: "ring-yellow-100",
    title: "Top-Rated Experiences",
    desc: "Over 98% of our travelers rate their experience 5 stars. Real reviews, real adventures.",
  },
  {
    icon: FiUsers,
    color: "bg-rose-50 text-rose-500",
    ring: "ring-rose-100",
    title: "Community of Explorers",
    desc: "Join 12,000+ fellow travelers. Share stories, tips, and memories with a global community that loves to roam.",
  },
];

const stats = [
  { value: "12k+", label: "Happy Travelers" },
  { value: "500+", label: "Tour Packages" },
  { value: "80+", label: "Countries" },
  { value: "98%", label: "Satisfaction Rate" },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-teal-100 rounded-full opacity-40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Why Wanderlust
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Travel Smarter,{" "}
            <span className="relative inline-block text-emerald-600">
              Not Harder
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-emerald-300 rounded-full opacity-60" />
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-base leading-relaxed">
            We do the heavy lifting so you can focus on making memories. Here's
            what sets Wanderlust apart from the rest.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden mb-16 shadow-sm">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white flex flex-col items-center justify-center py-7 px-4"
            >
              <span className="text-3xl font-extrabold text-emerald-600">
                {stat.value}
              </span>
              <span className="text-sm text-gray-400 font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {reasons.map(({ icon: Icon, color, ring, title, desc }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-emerald-100 hover:-translate-y-1"
            >
              <div
                className={`inline-flex items-center justify-center w-13 h-13 rounded-2xl ${color} ring-4 ${ring} mb-5 transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
