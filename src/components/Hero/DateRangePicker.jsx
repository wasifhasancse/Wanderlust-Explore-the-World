"use client";

import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

function formatDate(date) {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
}

function isSameDay(a, b) {
  if (!a || !b) return false;
  return a.toDateString() === b.toDateString();
}

function isInRange(day, start, end) {
  if (!start || !end) return false;
  return day > start && day < end;
}

function MonthGrid({
  year,
  month,
  startDate,
  endDate,
  hoverDate,
  onDayClick,
  onDayHover,
  today,
}) {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));

  const rangeEnd =
    endDate ||
    (startDate && hoverDate && hoverDate > startDate ? hoverDate : null);

  return (
    <div className="flex-1">
      <p className="text-center text-sm font-bold text-gray-700 mb-3">
        {MONTHS[month]} {year}
      </p>
      <div className="grid grid-cols-7 mb-1">
        {DAYS.map((d) => (
          <div
            key={d}
            className="text-center text-xs font-semibold text-gray-400 py-1"
          >
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {cells.map((date, i) => {
          if (!date) return <div key={`empty-${i}`} />;

          const isStart = isSameDay(date, startDate);
          const isEnd = isSameDay(date, endDate);
          const inRange = isInRange(date, startDate, rangeEnd);
          const isToday = isSameDay(date, today);
          const isPast = date < today && !isToday;
          const isSelected = isStart || isEnd;
          const isRangeStart = isStart && rangeEnd;
          const isRangeEnd =
            isEnd || (isSameDay(date, hoverDate) && startDate && !endDate);

          return (
            <div
              key={`day-${date.getDate()}`}
              className={`flex items-center justify-center h-9
                ${inRange ? "bg-emerald-50" : ""}
                ${isRangeStart ? "rounded-l-full" : ""}
                ${isRangeEnd ? "rounded-r-full" : ""}
              `}
            >
              <button
                disabled={isPast}
                onClick={() => !isPast && onDayClick(date)}
                onMouseEnter={() => onDayHover(date)}
                className={`w-9 h-9 rounded-full text-sm transition-all duration-150 flex items-center justify-center
                  ${isPast ? "text-gray-200 cursor-not-allowed" : "cursor-pointer"}
                  ${isSelected ? "bg-emerald-600 text-white font-bold hover:bg-emerald-700" : ""}
                  ${isToday && !isSelected ? "ring-1 ring-emerald-400 text-emerald-600 font-semibold" : ""}
                  ${!isSelected && !isPast && !isToday ? "text-gray-700 hover:bg-emerald-100" : ""}
                `}
              >
                {date.getDate()}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const DateRangePicker = ({ onChange }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);
  const [leftMonth, setLeftMonth] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  const ref = useRef(null);

  const rightMonth =
    leftMonth.month === 11
      ? { year: leftMonth.year + 1, month: 0 }
      : { year: leftMonth.year, month: leftMonth.month + 1 };

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleDayClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
      } else if (isSameDay(date, startDate)) {
        setStartDate(null);
      } else {
        setEndDate(date);
      }
    }
  };

  const handleApply = () => {
    onChange?.({ startDate, endDate });
    setIsOpen(false);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    setStartDate(null);
    setEndDate(null);
    onChange?.({ startDate: null, endDate: null });
  };

  const prevMonth = () =>
    setLeftMonth((prev) =>
      prev.month === 0
        ? { year: prev.year - 1, month: 11 }
        : { year: prev.year, month: prev.month - 1 },
    );

  const nextMonth = () =>
    setLeftMonth((prev) =>
      prev.month === 11
        ? { year: prev.year + 1, month: 0 }
        : { year: prev.year, month: prev.month + 1 },
    );

  const displayText =
    startDate && endDate
      ? `${formatDate(startDate)} – ${formatDate(endDate)}`
      : startDate
        ? `${formatDate(startDate)} – ...`
        : null;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full text-left"
      >
        <span
          className={`text-sm font-medium ${displayText ? "text-gray-800" : "text-gray-300"}`}
        >
          {displayText || "Add dates"}
        </span>
        {startDate && (
          <FiX
            className="ml-auto text-gray-300 hover:text-gray-500 transition-colors"
            onClick={handleClear}
          />
        )}
      </button>

      {isOpen && (
        <div
          className="absolute top-[calc(100%+12px)] left-0 z-100 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5"
          style={{ width: "620px" }}
        >
          {/* Calendar grid */}
          <div className="flex gap-6">
            {/* Left month */}
            <div className="flex-1">
              <div className="relative mb-2 flex items-center justify-center">
                <button
                  onClick={prevMonth}
                  className="absolute left-0 p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
                >
                  <FiChevronLeft className="text-lg" />
                </button>
                <span className="text-sm font-bold text-gray-700">
                  {MONTHS[leftMonth.month]} {leftMonth.year}
                </span>
              </div>
              <div className="grid grid-cols-7 mb-1">
                {DAYS.map((d) => (
                  <div
                    key={d}
                    className="text-center text-xs font-semibold text-gray-400 py-1"
                  >
                    {d}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7">
                {(() => {
                  const cells = [];
                  const firstDay = getFirstDayOfMonth(
                    leftMonth.year,
                    leftMonth.month,
                  );
                  const daysInMonth = getDaysInMonth(
                    leftMonth.year,
                    leftMonth.month,
                  );
                  for (let i = 0; i < firstDay; i++) cells.push(null);
                  for (let d = 1; d <= daysInMonth; d++)
                    cells.push(new Date(leftMonth.year, leftMonth.month, d));
                  const rangeEnd =
                    endDate ||
                    (startDate && hoverDate && hoverDate > startDate
                      ? hoverDate
                      : null);
                  return cells.map((date, i) => {
                    if (!date) return <div key={`l-empty-${i}`} />;
                    const isStart = isSameDay(date, startDate);
                    const isEnd = isSameDay(date, endDate);
                    const inRange = isInRange(date, startDate, rangeEnd);
                    const isToday = isSameDay(date, today);
                    const isPast = date < today && !isToday;
                    const isSelected = isStart || isEnd;
                    const isRangeStart = isStart && !!rangeEnd;
                    const isRangeEnd =
                      isEnd ||
                      (isSameDay(date, hoverDate) &&
                        startDate &&
                        !endDate &&
                        hoverDate > startDate);
                    return (
                      <div
                        key={`l-day-${date.getDate()}`}
                        className={`flex items-center justify-center h-9
                          ${inRange ? "bg-emerald-50" : ""}
                          ${isRangeStart ? "rounded-l-full" : ""}
                          ${isRangeEnd ? "rounded-r-full" : ""}
                        `}
                      >
                        <button
                          disabled={isPast}
                          onClick={() => !isPast && handleDayClick(date)}
                          onMouseEnter={() => setHoverDate(date)}
                          className={`w-9 h-9 rounded-full text-sm flex items-center justify-center transition-all duration-150
                            ${isPast ? "text-gray-200 cursor-not-allowed" : "cursor-pointer"}
                            ${isSelected ? "bg-emerald-600 text-white font-bold hover:bg-emerald-700" : ""}
                            ${isToday && !isSelected ? "ring-1 ring-emerald-400 text-emerald-600 font-semibold" : ""}
                            ${!isSelected && !isPast && !isToday ? "text-gray-700 hover:bg-emerald-100" : ""}
                          `}
                        >
                          {date.getDate()}
                        </button>
                      </div>
                    );
                  });
                })()}
              </div>
            </div>

            {/* Divider */}
            <div className="w-px bg-gray-100" />

            {/* Right month */}
            <div className="flex-1">
              <div className="relative mb-2 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-700">
                  {MONTHS[rightMonth.month]} {rightMonth.year}
                </span>
                <button
                  onClick={nextMonth}
                  className="absolute right-0 p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
                >
                  <FiChevronRight className="text-lg" />
                </button>
              </div>
              <div className="grid grid-cols-7 mb-1">
                {DAYS.map((d) => (
                  <div
                    key={d}
                    className="text-center text-xs font-semibold text-gray-400 py-1"
                  >
                    {d}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7">
                {(() => {
                  const cells = [];
                  const firstDay = getFirstDayOfMonth(
                    rightMonth.year,
                    rightMonth.month,
                  );
                  const daysInMonth = getDaysInMonth(
                    rightMonth.year,
                    rightMonth.month,
                  );
                  for (let i = 0; i < firstDay; i++) cells.push(null);
                  for (let d = 1; d <= daysInMonth; d++)
                    cells.push(new Date(rightMonth.year, rightMonth.month, d));
                  const rangeEnd =
                    endDate ||
                    (startDate && hoverDate && hoverDate > startDate
                      ? hoverDate
                      : null);
                  return cells.map((date, i) => {
                    if (!date) return <div key={`r-empty-${i}`} />;
                    const isStart = isSameDay(date, startDate);
                    const isEnd = isSameDay(date, endDate);
                    const inRange = isInRange(date, startDate, rangeEnd);
                    const isToday = isSameDay(date, today);
                    const isPast = date < today && !isToday;
                    const isSelected = isStart || isEnd;
                    const isRangeStart = isStart && !!rangeEnd;
                    const isRangeEnd =
                      isEnd ||
                      (isSameDay(date, hoverDate) &&
                        startDate &&
                        !endDate &&
                        hoverDate > startDate);
                    return (
                      <div
                        key={`r-day-${date.getDate()}`}
                        className={`flex items-center justify-center h-9
                          ${inRange ? "bg-emerald-50" : ""}
                          ${isRangeStart ? "rounded-l-full" : ""}
                          ${isRangeEnd ? "rounded-r-full" : ""}
                        `}
                      >
                        <button
                          disabled={isPast}
                          onClick={() => !isPast && handleDayClick(date)}
                          onMouseEnter={() => setHoverDate(date)}
                          className={`w-9 h-9 rounded-full text-sm flex items-center justify-center transition-all duration-150
                            ${isPast ? "text-gray-200 cursor-not-allowed" : "cursor-pointer"}
                            ${isSelected ? "bg-emerald-600 text-white font-bold hover:bg-emerald-700" : ""}
                            ${isToday && !isSelected ? "ring-1 ring-emerald-400 text-emerald-600 font-semibold" : ""}
                            ${!isSelected && !isPast && !isToday ? "text-gray-700 hover:bg-emerald-100" : ""}
                          `}
                        >
                          {date.getDate()}
                        </button>
                      </div>
                    );
                  });
                })()}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-400 font-medium">
              {startDate && endDate
                ? `${formatDate(startDate)} – ${formatDate(endDate)}`
                : startDate
                  ? `${formatDate(startDate)} — select end date`
                  : "Select check-in date"}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setStartDate(null);
                  setEndDate(null);
                  setIsOpen(false);
                }}
                className="px-4 py-2 text-sm font-semibold text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                disabled={!startDate}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-bold rounded-xl transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
