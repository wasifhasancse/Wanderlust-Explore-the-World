"use client";

import { useState } from "react";
import { FaHotel, FaMountain, FaPlane } from "react-icons/fa";
import { FiCompass, FiMapPin, FiSearch } from "react-icons/fi";
import DateRangePicker from "./DateRangePicker";
import TripTypeSelect from "./TripTypeSelect";

const stats = [
  { value: "500+", label: "Tour Packages" },
  { value: "80+", label: "Countries" },
  { value: "12k+", label: "Happy Travelers" },
  { value: "98%", label: "Satisfaction Rate" },
];

const categories = [
  { icon: <FaPlane />, label: "Flights" },
  { icon: <FaHotel />, label: "Hotels" },
  { icon: <FaMountain />, label: "Adventures" },
  { icon: <FiCompass />, label: "Guided Tours" },
];

const tabs = ["Tours", "Hotels", "Flights", "Adventures"];

const HeroSection = () => {
  const [destination, setDestination] = useState("");
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [type, setType] = useState("");
  const [activeTab, setActiveTab] = useState("Tours");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-emerald-900 via-teal-800 to-cyan-900" />

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-teal-300 opacity-10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          <FiCompass className="text-base" />
          Discover the World with Wanderlust
        </span>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
          Explore the World, <span className="text-emerald-400">Your Way</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mb-10">
          Handpicked tours, luxury hotels, and unforgettable adventures — all in
          one place. Start your journey today.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.label}
              className="flex items-center gap-2 bg-white/10 hover:bg-emerald-500 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Card */}
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl">
          {/* Tabs */}
          <div className="flex px-5 pt-4 gap-1 border-b border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 pb-3 text-sm font-semibold border-b-2 transition-all duration-200 ${
                  activeTab === tab
                    ? "text-emerald-600 border-emerald-500"
                    : "text-gray-400 border-transparent hover:text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Fields */}
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {/* Destination */}
            <div className="flex-1 flex flex-col px-5 py-4">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <FiMapPin className="text-emerald-500" /> Destination
              </label>
              <input
                type="text"
                placeholder="Where do you want to go?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="outline-none text-gray-800 text-sm placeholder-gray-300 font-medium"
              />
            </div>

            {/* Date Range */}
            <div className="flex flex-col px-5 py-4 md:w-56 relative">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <FiCompass className="text-emerald-500" /> Dates
              </label>
              <DateRangePicker onChange={setDateRange} />
            </div>

            {/* Trip Type */}
            <div className="flex flex-col px-5 py-4 md:w-52 relative">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <FiCompass className="text-emerald-500" /> Trip type
              </label>
              <TripTypeSelect value={type} onChange={setType} />
            </div>

            {/* Search Button */}
            <div className="flex items-center p-3 md:px-4">
              <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold px-7 py-4 rounded-xl transition-all duration-200 text-sm shadow-md shadow-emerald-200 whitespace-nowrap">
                <FiSearch className="text-base" />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 w-full max-w-2xl">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-white">
                {stat.value}
              </span>
              <span className="text-sm text-white/60 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
