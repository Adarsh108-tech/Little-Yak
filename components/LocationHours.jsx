"use client";

import { useState, useEffect } from "react";
import { restaurantInfo } from "@/data/restaurantData";
import {
  Clock,
  Phone,
  Navigation,
  Compass,
  Train,
} from "lucide-react";
import { motion } from "framer-motion";
import { FadeInOnScroll, SlideInLeft, SlideInRight } from "./MotionWrapper";

export default function LocationHours({ lang, onOpenReservation }) {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  useEffect(() => {
    const jsDay = new Date().getDay();
    const mappedIndex = jsDay === 0 ? 6 : jsDay - 1;
    setCurrentDayIndex(mappedIndex);
  }, []);

  return (
    <section id="acces" className="py-20 bg-[#121110] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with FadeInOnScroll */}
        <FadeInOnScroll className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#272320] border border-[#3E3832] text-xs font-semibold text-[#F59E0B] uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === "fr" ? "Accès & Informations Pratiques" : "Location & Practical Info"}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Au Cœur de Paris <br />
                <span className="text-[#F59E0B] italic">Entre Beaubourg et le Marais</span>
              </>
            ) : (
              <>
                In the Heart of Paris <br />
                <span className="text-[#F59E0B] italic">Between Beaubourg and Le Marais</span>
              </>
            )}
          </h2>
          <p className="text-[#A8A29E] text-sm sm:text-base leading-relaxed">
            {lang === "fr"
              ? "Situé dans la charmante rue piétonne Quincampoix, à seulement 150 mètres du Centre Pompidou et à 5 minutes de Châtelet."
              : "Located on charming Rue Quincampoix, just 150 meters from the Pompidou Centre and 5 minutes from Châtelet."}
          </p>
        </FadeInOnScroll>

        {/* Content Columns: Info & Hours (Left) + Interactive Map (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Hours & Practical Info with SlideInLeft */}
          <SlideInLeft className="lg:col-span-5 space-y-6">
            {/* Opening Hours Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#1A1816] border border-[#332E2A] shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#2C2824]">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#F59E0B]" />
                  <h3 className="font-serif text-lg font-bold text-white">
                    {lang === "fr" ? "Horaires d'Ouverture" : "Opening Hours"}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-bold text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {lang === "fr" ? "Ouvert 7j / 7" : "Open 7 Days / Week"}
                </span>
              </div>

              {/* Weekly Schedule Table */}
              <div className="space-y-2.5 text-xs">
                {restaurantInfo.hours.map((schedule, idx) => {
                  const isToday = idx === currentDayIndex;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-center justify-between p-2 rounded-xl transition-colors ${
                        isToday
                          ? "bg-[#8B1E28]/35 border border-[#F59E0B]/50 font-bold text-white shadow-md"
                          : "text-[#D6D3D1] hover:bg-[#24201D]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-ping" />
                        )}
                        <span>{schedule.day[lang]}</span>
                        {isToday && (
                          <span className="text-[10px] text-[#F59E0B] uppercase tracking-wider font-semibold">
                            ({lang === "fr" ? "Aujourd'hui" : "Today"})
                          </span>
                        )}
                      </div>
                      <span className={isToday ? "text-[#F59E0B]" : "text-[#A8A29E]"}>
                        {schedule.hours}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Metro & Public Transport */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#1A1816] border border-[#332E2A] shadow-xl">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#2C2824]">
                <Train className="w-5 h-5 text-[#F59E0B]" />
                <h3 className="font-serif text-lg font-bold text-white">
                  {lang === "fr" ? "Métro & Accès" : "Metro & Directions"}
                </h3>
              </div>

              <div className="space-y-2.5">
                {restaurantInfo.transports.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs p-2 rounded-lg bg-[#221F1D] border border-[#2E2A26]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded font-mono font-bold bg-[#8B1E28] text-white text-[10px]">
                        {item.line}
                      </span>
                      <span className="font-semibold text-white">{item.station}</span>
                    </div>
                    <span className="text-[#A8A29E] text-[11px]">{item.walk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact & Reservation shortcuts */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#241F1C] to-[#1A1816] border border-[#3E3832] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-base font-bold text-white">
                  {lang === "fr" ? "Une réservation ?" : "Want to reserve?"}
                </h4>
                <p className="text-xs text-[#A8A29E]">
                  {restaurantInfo.phone}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#8B1E28] hover:bg-[#991B1B] text-white text-xs font-bold border border-[#F59E0B]/30 shadow text-center"
              >
                {lang === "fr" ? "Réserver en ligne" : "Book Online"}
              </motion.button>
            </div>
          </SlideInLeft>

          {/* Right Column: Google Maps Embed with SlideInRight */}
          <SlideInRight className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative w-full h-[450px] sm:h-[500px] rounded-3xl overflow-hidden border border-[#332E2A] shadow-2xl bg-[#1C1A18]">
              <iframe
                title="Google Maps Little Yak Paris"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.629393358054!2d2.3506894!3d48.8617081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1bfc9937b9%3A0x37aaa12b49d92209!2sLittle%20Yak!5e0!3m2!1sfr!2sfr!4v1757590960782!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#161413]/95 backdrop-blur-md p-4 rounded-2xl border border-[#3E3832] shadow-2xl max-w-sm">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">🥟</span>
                  <span className="font-serif font-bold text-white text-sm">
                    Little Yak Paris
                  </span>
                </div>
                <p className="text-xs text-[#A8A29E] mb-3">
                  {restaurantInfo.address}
                </p>
                <div className="flex items-center gap-2">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={restaurantInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-3 rounded-lg bg-[#8B1E28] hover:bg-[#991B1B] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#FBBF24]" />
                    <span>{lang === "fr" ? "Itinéraire" : "Directions"}</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`tel:${restaurantInfo.phoneRaw}`}
                    className="py-1.5 px-3 rounded-lg bg-[#272320] hover:bg-[#38332E] text-white text-xs font-semibold border border-[#3E3832] flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>{lang === "fr" ? "Appeler" : "Call"}</span>
                  </motion.a>
                </div>
              </div>
            </div>

            {/* External Map Shortcuts */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#1A1816] border border-[#2E2A26] text-xs">
              <span className="text-[#A8A29E]">
                {lang === "fr" ? "Ouvrir votre application GPS préférée :" : "Open in your navigation app:"}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={restaurantInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#24201D] hover:bg-[#332E2A] text-white border border-[#38332E] transition-colors"
                >
                  Google Maps ↗
                </a>
                <a
                  href="https://maps.apple.com/?address=61+Rue+Quincampoix,75004+Paris,France"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#24201D] hover:bg-[#332E2A] text-white border border-[#38332E] transition-colors"
                >
                  Apple Maps ↗
                </a>
                <a
                  href="https://waze.com/ul?q=61+Rue+Quincampoix+Paris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#24201D] hover:bg-[#332E2A] text-white border border-[#38332E] transition-colors"
                >
                  Waze ↗
                </a>
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
