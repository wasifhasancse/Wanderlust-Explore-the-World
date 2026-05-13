import Image from "next/image";
import Link from "next/link";
import {
  FiAward,
  FiCompass,
  FiGlobe,
  FiHeart,
  FiInstagram,
  FiLinkedin,
  FiMapPin,
  FiShield,
  FiStar,
  FiTwitter,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const stats = [
  { value: "50K+", label: "Happy Travelers" },
  { value: "120+", label: "Destinations" },
  { value: "12", label: "Years of Experience" },
  { value: "98%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: FiHeart,
    color: "bg-rose-50 text-rose-500",
    title: "Passion for Travel",
    desc: "Every itinerary is crafted with genuine love for exploration and discovery.",
  },
  {
    icon: FiShield,
    color: "bg-emerald-50 text-emerald-600",
    title: "Integrity & Trust",
    desc: "Transparent pricing, honest reviews, and no hidden fees — ever.",
  },
  {
    icon: FiGlobe,
    color: "bg-blue-50 text-blue-600",
    title: "Sustainable Tourism",
    desc: "We partner with local communities and prioritize eco-friendly travel practices.",
  },
  {
    icon: FiZap,
    color: "bg-yellow-50 text-yellow-500",
    title: "Innovation",
    desc: "From AI-powered trip planning to real-time support, we embrace technology to serve you better.",
  },
  {
    icon: FiUsers,
    color: "bg-purple-50 text-purple-600",
    title: "Community First",
    desc: "Our travelers are family. We build connections that last long after the journey ends.",
  },
  {
    icon: FiAward,
    color: "bg-orange-50 text-orange-500",
    title: "Excellence",
    desc: "Award-winning service recognized by leading travel organizations worldwide.",
  },
];

const team = [
  {
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    bio: "Former globe-trotter turned entrepreneur, Sarah has visited 89 countries and founded Wanderlust to share that magic with the world.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    social: { twitter: "#", linkedin: "#", instagram: "#" },
  },
  {
    name: "James Okafor",
    role: "Head of Experiences",
    bio: "With a background in cultural anthropology, James designs immersive itineraries that go far beyond typical tourist trails.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    social: { twitter: "#", linkedin: "#", instagram: "#" },
  },
  {
    name: "Priya Sharma",
    role: "Lead Travel Curator",
    bio: "Priya's obsession with hidden gems and local cuisine has earned her the nickname 'The Food & Culture Whisperer' among our team.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    social: { twitter: "#", linkedin: "#", instagram: "#" },
  },
  {
    name: "Lucas Fernández",
    role: "Chief Technology Officer",
    bio: "Lucas built the platform from scratch and continues to lead innovation so every booking feels seamless and personal.",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    social: { twitter: "#", linkedin: "#", instagram: "#" },
  },
];

const milestones = [
  {
    year: "2012",
    event:
      "Wanderlust founded in a small Lisbon apartment with just 3 destinations.",
  },
  {
    year: "2015",
    event: "Reached 5,000 happy travelers and expanded to 40 countries.",
  },
  {
    year: "2018",
    event:
      "Launched our mobile app, making travel planning available anywhere, anytime.",
  },
  {
    year: "2021",
    event: "Won the Global Travel Innovation Award and hit 30,000 travelers.",
  },
  {
    year: "2024",
    event:
      "Opened 8 regional offices worldwide and introduced AI trip planning.",
  },
  {
    year: "2026",
    event: "Celebrating 50,000+ travelers across 120+ destinations.",
  },
];

const AboutPage = () => {
  return (
   <main className="bg-white">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        {/* background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600&q=80"
            alt="World map travel"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-b from-gray-950/60 via-gray-950/50 to-gray-950" />
        </div>

        {/* decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">
          {/* breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-emerald-400">About</span>
          </div>

          <span className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <FiCompass className="w-3.5 h-3.5" />
            Our Story
          </span>

          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            We Live &amp; Breathe
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
              Adventure
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Born from a passion for exploration, Wanderlust has spent over a
            decade turning ordinary trips into extraordinary memories for
            travelers across the globe.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ───────────────────────────────────────── */}
      <section className="bg-emerald-600">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-emerald-500">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center px-4">
              <p className="text-3xl font-black text-white">{value}</p>
              <p className="text-emerald-100 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Story ───────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden aspect-4/3 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=900&q=80"
              alt="Team at work"
              fill
              className="object-cover"
            />
          </div>
          {/* floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <FiStar className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">Award-Winning</p>
              <p className="text-xs text-gray-500">Global Travel 2024</p>
            </div>
          </div>
        </div>

        <div>
          <span className="inline-block bg-emerald-50 text-emerald-600 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            How It Started
          </span>
          <h2 className="text-4xl font-black text-gray-900 leading-tight mb-5">
            A Dream Hatched in a Lisbon Apartment
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In 2012, our founder Sarah Mitchell quit her corporate job, packed a
            single bag, and set off around the world. What she found was a
            travel industry full of cookie-cutter packages and missed
            connections with culture. So she built something better.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Wanderlust started as a tiny blog of handpicked destinations. Today
            it&apos;s a full-service travel platform trusted by over 50,000
            adventurers — but our philosophy hasn&apos;t changed: every journey
            should feel personal, meaningful, and a little bit magical.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {["women/44", "men/32", "women/68"].map((p) => (
                <div
                  key={p}
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative"
                >
                  <Image
                    src={`https://randomuser.me/api/portraits/${p}.jpg`}
                    alt="Team"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-900">
                Our team of 40+
              </span>{" "}
              travel experts worldwide
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ────────────────────────────────── */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <FiCompass className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To make authentic, transformative travel accessible to everyone
                — by combining expert local knowledge with seamless technology,
                and an unwavering commitment to sustainable, community-first
                tourism.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-linear-to-br from-emerald-600 to-cyan-600 rounded-3xl p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <FiGlobe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                Our Vision
              </h3>
              <p className="text-emerald-50 leading-relaxed">
                A world where every person feels the life-changing power of
                stepping outside their comfort zone — where travel builds
                bridges between cultures, protects the planet, and brings
                genuine joy to every explorer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="inline-block bg-emerald-50 text-emerald-600 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            What We Stand For
          </span>
          <h2 className="text-4xl font-black text-gray-900">Our Core Values</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, color, title, desc }) => (
            <div
              key={title}
              className="group bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ────────────────────────────────────────── */}
      <section className="bg-gray-950 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="text-center mb-14">
            <span className="inline-block bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="text-4xl font-black">Milestones That Shaped Us</h2>
          </div>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map(({ year, event }, i) => (
                <div
                  key={year}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div
                    className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}
                  >
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {event}
                    </p>
                  </div>
                  <div className="shrink-0 w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center font-black text-sm z-10 shadow-lg shadow-emerald-900/50">
                    {year.slice(2)}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`text-emerald-400 font-black text-lg ${i % 2 === 0 ? "text-left" : "text-right"}`}
                    >
                      {year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="inline-block bg-emerald-50 text-emerald-600 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            The People Behind The Magic
          </span>
          <h2 className="text-4xl font-black text-gray-900">Meet Our Team</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ name, role, bio, avatar, social }) => (
            <div
              key={name}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 bg-gray-100">
                <Image src={avatar} alt={name} fill className="object-cover" />
                {/* social overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <a
                    href={social.twitter}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors"
                  >
                    <FiTwitter className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={social.linkedin}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors"
                  >
                    <FiLinkedin className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={social.instagram}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors"
                  >
                    <FiInstagram className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-gray-900">{name}</h4>
                <p className="text-emerald-600 text-xs font-semibold mb-2">
                  {role}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">{bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-linear-to-br from-emerald-600 to-cyan-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <FiMapPin className="w-10 h-10 mx-auto mb-4 text-emerald-200" />
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-emerald-100 mb-8 max-w-lg mx-auto">
                Join 50,000+ travelers who have discovered the world with
                Wanderlust. Your next adventure is just one click away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-white text-emerald-700 font-bold px-8 py-3.5 rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
                >
                  Explore Destinations
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white/50 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

