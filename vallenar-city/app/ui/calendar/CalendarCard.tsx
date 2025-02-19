"use client";

import { useState, useEffect } from "react";
import React from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [formattedMonth, setFormattedMonth] = useState("");

  useEffect(() => {
    // Se asegura de que el mes se formatee solo en el cliente
    setFormattedMonth(
      currentDate
        .toLocaleString("es-ES", { month: "long" })
        .charAt(0)
        .toUpperCase() +
        currentDate.toLocaleString("es-ES", { month: "long" }).slice(1)
    );
  }, [currentDate]);

  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [view, setView] = useState("calendar"); // "calendar" o "selectedDay"
  const today = new Date();

  const daysInWeek = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];
  const detailDaysInWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const handleClick = (day: number) => {
    setSelectedDay(day);
    setView("selectedDay");
  };

  const handleBackToCalendar = () => {
    setView("calendar");
  };

  const getDayOfWeek = (day: number | null) => {
    if (day === null) return "";
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    return detailDaysInWeek[date.getDay()];
  };

  return (
    <div className="w-96">
      <header className="flex justify-between items-center p-1 bg-slate-200 border-slate-300 border-2 w-[400px]">
        <button onClick={handlePrevMonth}>{"<"}</button>
        <h2>
          {formattedMonth} {currentDate.getFullYear()}
        </h2>
        <button onClick={handleNextMonth}>{">"}</button>
      </header>
      {view === "calendar" ? (
        <div className="grid grid-cols-7 w-[400px]">
          {daysInWeek.map((day, index) => (
            <div key={`${day}-${index}`} className="text-center font-bold">
              {day}
            </div>
          ))}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div
              key={`empty-${i}`}
              className="text-center bg-slate-200 border-2 border-slate-300"
            ></div>
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const todayClass = isToday(i + 1)
              ? "bg-green-400 hover:bg-green-700 border-2 border-black"
              : "bg-slate-200 border-2 border-slate-300 hover:bg-slate-400";

            return (
              <div
                key={i}
                className={`text-center p-2 cursor-pointer ${todayClass}`}
                onClick={() => handleClick(i + 1)}
              >
                {i + 1}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-slate-200 w-[400px] border-2 border-t-0 border-slate-300">
          <h3 className="p-1">
            {getDayOfWeek(selectedDay)} {selectedDay}
          </h3>
          <h3 className="p-1">Eventos</h3>
          <p className="p-1">
            Eventos, evento 2, evento 3
            {/* Aquí se mostrará la información de la base de datos */}
          </p>
          <button
            className="relative py-1 px-2 m-1 left-[85%] bg-slate-600 rounded-xl text-slate-50 hover:bg-slate-800"
            onClick={handleBackToCalendar}
          >
            Atrás
          </button>
        </div>
      )}
    </div>
  );
};

export default Calendar;
