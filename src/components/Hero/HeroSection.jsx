'use client';

import { useState } from 'react';
import { FiSearch, FiMapPin, FiCalendar, FiCompass } from 'react-icons/fi';
import { FaPlane, FaHotel, FaMountain } from 'react-icons/fa';

const stats = [
  { value: '500+', label: 'Tour Packages' },
  { value: '80+', label: 'Countries' },
  { value: '12k+', label: 'Happy Travelers' },
  { value: '98%', label: 'Satisfaction Rate' },
];

const categories = [
  { icon: <FaPlane />, label: 'Flights' },
  { icon: <FaHotel />, label: 'Hotels' },
  { icon: <FaMountain />, label: 'Adventures' },
  { icon: <FiCompass />, label: 'Guided Tours' },
];

const HeroSection = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900" />

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
          Explore the World,{' '}
          <span className="text-emerald-400">Your Way</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mb-10">
          Handpicked tours, luxury hotels, and unforgettable adventures — all in one place. Start your journey today.
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

        {/* Search Bar */}
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-4 flex flex-col md:flex-row gap-3">
          {/* Destination */}
          <div className="flex items-center gap-2 flex-1 border border-gray-200 rounded-xl px-4 py-3">
            <FiMapPin className="text-emerald-500 text-lg shrink-0" />
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full outline-none text-gray-700 text-sm placeholder-gray-400"
            />
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 md:w-44">
            <FiCalendar className="text-emerald-500 text-lg shrink-0" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full outline-none text-gray-500 text-sm"
            />
          </div>

          {/* Type */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 md:w-40">
            <FiCompass className="text-emerald-500 text-lg shrink-0" />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full outline-none text-gray-500 text-sm bg-transparent"
            >
              <option value="">Type</option>
              <option value="tour">Tour</option>
              <option value="hotel">Hotel</option>
              <option value="adventure">Adventure</option>
              <option value="flight">Flight</option>
            </select>
          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 shrink-0">
            <FiSearch className="text-lg" />
            Search
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 w-full max-w-2xl">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-white">{stat.value}</span>
              <span className="text-sm text-white/60 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
