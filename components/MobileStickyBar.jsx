"use client";

import { restaurantInfo } from "@/data/restaurantData";
import { Phone, Calendar, Utensils, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileStickyBar({ lang, onOpenReservation }) {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.5 }}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#161413]/95 backdrop-blur-lg border-t border-[#2E2A26] px-3 py-2 shadow-2xl safe-area-bottom"
    >
      <div className="grid grid-cols-4 gap-1.5 text-center">
        {/* Call Now */}
        <motion.a
          whileTap={{ scale: 0.9 }}
          href={`tel:${restaurantInfo.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#A8A29E] hover:text-white hover:bg-[#25211E] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#F59E0B] mb-1" />
          <span className="text-[10px] font-semibold leading-tight">
            {lang === "fr" ? "Appeler" : "Call"}
          </span>
        </motion.a>

        {/* Book Table */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          onClick={onOpenReservation}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#8B1E28] text-white shadow-md border border-[#F59E0B]/30"
        >
          <Calendar className="w-4 h-4 text-[#FBBF24] mb-1" />
          <span className="text-[10px] font-bold leading-tight">
            {lang === "fr" ? "Réserver" : "Book"}
          </span>
        </motion.button>

        {/* View Menu */}
        <motion.a
          whileTap={{ scale: 0.9 }}
          href="#menu"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#A8A29E] hover:text-white hover:bg-[#25211E] transition-colors"
        >
          <Utensils className="w-4 h-4 text-[#F59E0B] mb-1" />
          <span className="text-[10px] font-semibold leading-tight">
            {lang === "fr" ? "La Carte" : "Menu"}
          </span>
        </motion.a>

        {/* Directions */}
        <motion.a
          whileTap={{ scale: 0.9 }}
          href={restaurantInfo.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#A8A29E] hover:text-white hover:bg-[#25211E] transition-colors"
        >
          <Navigation className="w-4 h-4 text-[#F59E0B] mb-1" />
          <span className="text-[10px] font-semibold leading-tight">
            {lang === "fr" ? "S'y rendre" : "Directions"}
          </span>
        </motion.a>
      </div>
    </motion.div>
  );
}
