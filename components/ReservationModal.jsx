"use client";

import { useState, useEffect } from "react";
import { restaurantInfo } from "@/data/restaurantData";
import {
  X,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReservationModal({ isOpen, onClose, lang }) {
  const [step, setStep] = useState(1);
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState("2026-11-01");
  const [minDate, setMinDate] = useState("2026-11-01");
  const [time, setTime] = useState("19:30");
  const [seating, setSeating] = useState("vault");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
    setMinDate(today);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = `YAK-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingId(id);
    setStep(2);
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  const timeSlots = {
    lunch: ["12:00", "12:30", "13:00", "13:30", "14:00"],
    dinner: ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30"],
  };

  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Dîner chez Little Yak Paris (Cuisine Tibétaine)");
    const details = encodeURIComponent(
      `Réservation Little Yak\nRéférence: #${bookingId}\nCouverts: ${guests}\nEspace: ${
        seating === "vault" ? "Cave Voûtée" : "Salle Principale"
      }\nAdresse: 61 Rue Quincampoix, 75004 Paris\nTél: +33 1 88 48 09 70`
    );
    const location = encodeURIComponent("61 Rue Quincampoix, 75004 Paris");
    const dateFormatted = date.replace(/-/g, "");
    const timeFormatted = time.replace(":", "") + "00";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dateFormatted}T${timeFormatted}/${dateFormatted}T${timeFormatted}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={resetAndClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-xl bg-[#181614] border border-[#3E3832] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 border-b border-[#2D2824] bg-[#1E1B19] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#8B1E28]/40 border border-[#D97706]/40 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    {lang === "fr" ? "Réserver une Table" : "Book a Table"}
                  </h3>
                  <span className="text-[11px] text-[#A8A29E]">
                    {lang === "fr"
                      ? "Confirmation immédiate • Sans frais"
                      : "Instant Confirmation • No Booking Fees"}
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={resetAndClose}
                className="p-2 rounded-full bg-[#272320] text-[#A8A29E] hover:text-white hover:bg-[#38332E] transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto">
              {step === 1 ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Seating Area Preference */}
                  <div>
                    <label className="text-xs font-bold text-[#A8A29E] uppercase tracking-wider block mb-2">
                      {lang === "fr" ? "1. Choisir l'Ambiance de Salle" : "1. Choose Seating Ambience"}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSeating("vault")}
                        className={`p-3.5 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                          seating === "vault"
                            ? "bg-[#8B1E28]/30 border-[#F59E0B] text-white shadow-md"
                            : "bg-[#1E1C1A] border-[#332E2A] text-[#A8A29E] hover:text-white"
                        }`}
                      >
                        <span className="text-xl">🏛️</span>
                        <div>
                          <div className="font-bold text-xs sm:text-sm text-white">
                            {lang === "fr" ? "Cave Voûtée Médiévale" : "Medieval Stone Vault"}
                          </div>
                          <div className="text-[11px] text-[#A8A29E] mt-0.5">
                            {lang === "fr"
                              ? "Sous-sol intimiste en pierre de taille, feutré"
                              : "Intimate subterranean room with historic arches"}
                          </div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSeating("ground")}
                        className={`p-3.5 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                          seating === "ground"
                            ? "bg-[#8B1E28]/30 border-[#F59E0B] text-white shadow-md"
                            : "bg-[#1E1C1A] border-[#332E2A] text-[#A8A29E] hover:text-white"
                        }`}
                      >
                        <span className="text-xl">🪟</span>
                        <div>
                          <div className="font-bold text-xs sm:text-sm text-white">
                            {lang === "fr" ? "Salle Rez-de-Chaussée" : "Ground Floor Room"}
                          </div>
                          <div className="text-[11px] text-[#A8A29E] mt-0.5">
                            {lang === "fr"
                              ? "Accès de plain-pied, vue rue Quincampoix"
                              : "Street level access, warm vibrant dining"}
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="text-xs font-bold text-[#A8A29E] uppercase tracking-wider block mb-2">
                      {lang === "fr" ? "2. Nombre de Personnes" : "2. Number of Guests"}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["1", "2", "3", "4", "5", "6", "8", "10+"].map((num) => (
                        <motion.button
                          key={num}
                          type="button"
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setGuests(num)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors ${
                            guests === num
                              ? "bg-[#F59E0B] text-black border-[#F59E0B]"
                              : "bg-[#1E1C1A] text-[#FAF7F2] border-[#332E2A] hover:bg-[#2C2825]"
                          }`}
                        >
                          {num} {lang === "fr" ? "pers." : "guests"}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#A8A29E] uppercase tracking-wider block mb-1.5">
                        {lang === "fr" ? "3. Date" : "3. Date"}
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        min={minDate}
                        className="w-full bg-[#1E1C1A] border border-[#332E2A] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#A8A29E] uppercase tracking-wider block mb-1.5">
                        {lang === "fr" ? "4. Heure" : "4. Time"}
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-[#1E1C1A] border border-[#332E2A] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F59E0B]"
                      >
                        <optgroup label={lang === "fr" ? "Service du Midi" : "Lunch"}>
                          {timeSlots.lunch.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label={lang === "fr" ? "Service du Soir" : "Dinner"}>
                          {timeSlots.dinner.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Guest Information */}
                  <div className="space-y-3 pt-2">
                    <label className="text-xs font-bold text-[#A8A29E] uppercase tracking-wider block">
                      {lang === "fr" ? "5. Vos Coordonnées" : "5. Your Contact Details"}
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={lang === "fr" ? "Nom & Prénom *" : "Full Name *"}
                          className="w-full bg-[#1E1C1A] border border-[#332E2A] rounded-xl px-3 py-2 text-xs text-white placeholder-[#78716C] focus:outline-none focus:border-[#F59E0B]"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder={lang === "fr" ? "Numéro de Mobile *" : "Mobile Phone *"}
                          className="w-full bg-[#1E1C1A] border border-[#332E2A] rounded-xl px-3 py-2 text-xs text-white placeholder-[#78716C] focus:outline-none focus:border-[#F59E0B]"
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={
                          lang === "fr"
                            ? "Adresse Email (pour confirmation)"
                            : "Email Address (for confirmation)"
                        }
                        className="w-full bg-[#1E1C1A] border border-[#332E2A] rounded-xl px-3 py-2 text-xs text-white placeholder-[#78716C] focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder={
                          lang === "fr"
                            ? "Demande particulière (anniversaire, chaise haute, allergie...)"
                            : "Special request (anniversary, high chair, dietary note...)"
                        }
                        className="w-full bg-[#1E1C1A] border border-[#332E2A] rounded-xl px-3 py-2 text-xs text-white placeholder-[#78716C] focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#8B1E28] to-[#991B1B] hover:from-[#991B1B] hover:to-[#B91C1C] text-white font-bold text-sm shadow-xl border border-[#F59E0B]/30 flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-[#FBBF24]" />
                      <span>
                        {lang === "fr" ? "Confirmer la Réservation" : "Confirm My Reservation"}
                      </span>
                    </motion.button>
                    <p className="text-[11px] text-center text-[#78716C] mt-2">
                      {lang === "fr"
                        ? "Annulation libre • Nous conservons votre table 15 minutes."
                        : "Free cancellation • We hold your table for 15 minutes."}
                    </p>
                  </div>
                </form>
              ) : (
                /* Confirmation Screen */
                <div className="text-center py-6 space-y-5">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg"
                  >
                    <CheckCircle2 className="w-9 h-9" />
                  </motion.div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
                      {lang === "fr" ? "Réservation Confirmée !" : "Reservation Confirmed!"}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                      {lang === "fr" ? `Merci, ${name || "Cher invité"} !` : `Thank You, ${name || "Guest"}!`}
                    </h3>
                    <p className="text-xs text-[#A8A29E] mt-1">
                      {lang === "fr"
                        ? "Votre table est réservée chez Little Yak Paris."
                        : "Your table has been reserved at Little Yak Paris."}
                    </p>
                  </div>

                  {/* Booking Summary Ticket */}
                  <div className="p-5 rounded-2xl bg-[#221F1D] border border-[#38332E] text-left space-y-3 max-w-sm mx-auto text-xs shadow-md">
                    <div className="flex justify-between pb-2 border-b border-[#332E2A]">
                      <span className="text-[#A8A29E]">
                        {lang === "fr" ? "Référence :" : "Booking Ref:"}
                      </span>
                      <span className="font-bold text-[#F59E0B]">#{bookingId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A8A29E]">{lang === "fr" ? "Date :" : "Date:"}</span>
                      <span className="font-medium text-white">{date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A8A29E]">{lang === "fr" ? "Heure :" : "Time:"}</span>
                      <span className="font-medium text-white">{time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A8A29E]">
                        {lang === "fr" ? "Convives :" : "Guests:"}
                      </span>
                      <span className="font-medium text-white">
                        {guests} {lang === "fr" ? "personnes" : "guests"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A8A29E]">{lang === "fr" ? "Espace :" : "Room:"}</span>
                      <span className="font-medium text-[#F59E0B]">
                        {seating === "vault"
                          ? lang === "fr"
                            ? "Cave Voûtée"
                            : "Stone Vault"
                          : lang === "fr"
                          ? "Salle Rez-de-Chaussée"
                          : "Ground Floor"}
                      </span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-[#332E2A]">
                      <span className="text-[#A8A29E]">
                        {lang === "fr" ? "Adresse :" : "Address:"}
                      </span>
                      <span className="font-medium text-white text-right">
                        61 Rue Quincampoix, 75004 Paris
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={getGoogleCalendarUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-[#272320] hover:bg-[#38332E] text-white text-xs font-semibold border border-[#3E3832] transition-colors"
                    >
                      📅 {lang === "fr" ? "Ajouter à Google Agenda" : "Add to Google Calendar"}
                    </motion.a>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={resetAndClose}
                      className="px-6 py-2.5 rounded-xl bg-[#8B1E28] hover:bg-[#991B1B] text-white text-xs font-bold border border-[#F59E0B]/30 transition-colors"
                    >
                      {lang === "fr" ? "Fermer" : "Done"}
                    </motion.button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
