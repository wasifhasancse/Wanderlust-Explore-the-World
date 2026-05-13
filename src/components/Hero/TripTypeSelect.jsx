"use client";

import { useEffect, useRef, useState } from "react";
import { FaHotel, FaMountain, FaPlane, FaUmbrellaBeach } from "react-icons/fa";
import { FiCheck, FiChevronDown, FiCompass } from "react-icons/fi";

const options = [
  {
    value: "tour",
    label: "Guided Tours",
    icon: FiCompass,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    value: "hotel",
    label: "Hotels",
    icon: FaHotel,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    value: "adventure",
    label: "Adventure",
    icon: FaMountain,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    value: "flight",
    label: "Flights",
    icon: FaPlane,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    value: "beach",
    label: "Beach",
    icon: FaUmbrellaBeach,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
];

const TripTypeSelect = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find((o) => o.value === value);
  const SelectedIcon = selected?.icon;

  return (
    <div className="relative w-full" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full text-left"
      >
        {selected ? (
          <>
            <span
              className={`inline-flex items-center justify-center w-6 h-6 rounded-md ${selected.bg}`}
            >
              <SelectedIcon className={`text-sm ${selected.color}`} />
            </span>
            <span className="text-sm font-medium text-gray-800">
              {selected.label}
            </span>
          </>
        ) : (
          <span className="text-sm font-medium text-gray-300">Select type</span>
        )}
        <FiChevronDown
          className={`ml-auto text-gray-400 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-[calc(100%+12px)] left-0 z-100 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-52">
          <div className="p-1.5">
            {options.map((opt) => {
              const Icon = opt.icon;
              const isActive = value === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150
                    ${isActive ? "bg-emerald-50 text-emerald-700" : "text-gray-600 hover:bg-gray-50"}
                  `}
                >
                  <span
                    className={`inline-flex items-center justify-center w-7 h-7 rounded-lg ${opt.bg}`}
                  >
                    <Icon className={`text-sm ${opt.color}`} />
                  </span>
                  <span>{opt.label}</span>
                  {isActive && (
                    <FiCheck className="ml-auto text-emerald-500 font-bold" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TripTypeSelect;
