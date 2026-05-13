"use client";

import Image from "next/image";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import {
  FiChevronLeft,
  FiChevronRight,
  FiMessageCircle,
  FiStar,
} from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Sophie Laurent",
    role: "Travel Blogger",
    location: "Paris, France",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    tour: "Santorini Luxury Escape",
    review:
      "Absolutely breathtaking experience from start to finish. Wanderlust handled every detail flawlessly — the hotels, the transfers, the guided tours. I felt like a VIP the entire time. I've already booked my next trip!",
  },
  {
    id: 2,
    name: "James Okafor",
    role: "Adventure Enthusiast",
    location: "Lagos, Nigeria",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    tour: "Machu Picchu Adventure",
    review:
      "The Machu Picchu itinerary was perfectly balanced — challenging hikes paired with cultural immersion. Our guide was incredibly knowledgeable and fun. Wanderlust truly exceeded every expectation.",
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    role: "Photographer",
    location: "Tokyo, Japan",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    tour: "Kyoto Cultural Journey",
    review:
      "As a photographer, I was blown away by every location we visited. The timing of each stop was perfect for golden-hour shots. Wanderlust clearly understands what travelers actually need.",
  },
  {
    id: 4,
    name: "Carlos Méndez",
    role: "Family Traveler",
    location: "Mexico City, Mexico",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    tour: "Bali Family Retreat",
    review:
      "Traveling with three kids can be stressful, but Wanderlust made it seamless. Kid-friendly activities, great accommodations, and 24/7 support. Our family will never travel any other way.",
  },
  {
    id: 5,
    name: "Amara Diallo",
    role: "Solo Explorer",
    location: "Dakar, Senegal",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    rating: 5,
    tour: "Cape Town Discovery",
    review:
      "As a solo traveler, safety was my biggest concern. Wanderlust put every worry to rest. The local guides were wonderful and I made friends for life on this trip. Truly a 5-star experience.",
  },
];

const StarRow = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <FiStar
        key={i}
        className={`text-sm ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"}`}
      />
    ))}
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () =>
    setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const t = testimonials[active];

  return (
    <section className="relative bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-emerald-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-teal-100 rounded-full opacity-30 blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            <FiMessageCircle className="text-sm" />
            Traveler Reviews
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            What Our{" "}
            <span className="relative inline-block text-emerald-600">
              Travelers Say
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-emerald-300 rounded-full opacity-60" />
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-base leading-relaxed">
            Real stories from real explorers. Join thousands who have made
            Wanderlust their trusted travel partner.
          </p>
        </div>

        {/* Overall rating strip */}
        <div className="flex flex-wrap justify-center gap-8 mb-14">
          {[
            { label: "Overall Rating", value: "4.9/5" },
            { label: "Recommend Us", value: "98%" },
            { label: "Reviews", value: "12,400+" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-gray-900">
                {s.value}
              </span>
              <span className="text-sm text-gray-400 mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Featured review card */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100">
            {/* Large quote mark */}
            <FaQuoteLeft className="text-5xl text-emerald-100 mb-4" />

            <StarRow rating={t.rating} />

            <p className="text-gray-700 text-lg leading-relaxed mt-4 font-medium">
              &ldquo;{t.review}&rdquo;
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-emerald-200 shrink-0">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-400">
                  {t.role} · {t.location}
                </p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-xs text-gray-400 font-medium">Tour</p>
                <p className="text-sm font-semibold text-emerald-600">
                  {t.tour}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-200 hover:border-emerald-400 hover:bg-emerald-50 flex items-center justify-center transition-all duration-200 text-gray-500 hover:text-emerald-600"
              >
                <FiChevronLeft />
              </button>
              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-6 h-2 bg-emerald-500"
                        : "w-2 h-2 bg-gray-200 hover:bg-emerald-200"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-gray-200 hover:border-emerald-400 hover:bg-emerald-50 flex items-center justify-center transition-all duration-200 text-gray-500 hover:text-emerald-600"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>

          {/* Side: stacked mini-cards */}
          <div className="flex flex-col gap-4">
            {testimonials
              .filter((_, i) => i !== active)
              .slice(0, 3)
              .map((rev) => (
                <button
                  key={rev.id}
                  onClick={() => setActive(testimonials.indexOf(rev))}
                  className="group bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all duration-200 text-left flex items-start gap-4"
                >
                  <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-gray-100 shrink-0 mt-0.5">
                    <Image
                      src={rev.avatar}
                      alt={rev.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <p className="font-bold text-gray-900 text-sm">
                        {rev.name}
                      </p>
                      <StarRow rating={rev.rating} />
                    </div>
                    <p className="text-xs text-gray-400 mb-1">{rev.tour}</p>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {rev.review}
                    </p>
                  </div>
                </button>
              ))}

            {/* Trust badges */}
            <div className="bg-linear-to-r from-emerald-600 to-teal-600 rounded-2xl p-5 flex items-center gap-4 mt-2">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                <FiStar className="text-white text-xl fill-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">
                  Trusted by 12,000+ travelers
                </p>
                <p className="text-emerald-100 text-xs mt-0.5">
                  98% would recommend Wanderlust to a friend
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
