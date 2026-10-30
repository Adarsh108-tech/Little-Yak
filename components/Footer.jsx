"use client";

import { restaurantInfo } from "@/data/restaurantData";
import { Phone, MapPin, Clock, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInOnScroll } from "./MotionWrapper";

export default function Footer({ lang, theme = "dark", setLang, onOpenReservation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`border-t relative transition-colors duration-300 ${
      theme === "light"
        ? "bg-stone-100 text-stone-600 border-stone-200"
        : "bg-[#0E0D0C] text-[#A8A29E] border-[#24201D]"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-24 lg:pb-16">
        <FadeInOnScroll className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <img
                  src="/logo.png"
                  alt="Little Yak Logo"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
              <div>
                <span className={`font-serif text-2xl font-bold block leading-tight ${
                  theme === "light" ? "text-stone-900" : "text-white"
                }`}>
                  Little Yak
                </span>
                <span className="text-xs text-[#D97706] font-serif">
                  {restaurantInfo.tibetanName}
                </span>
              </div>
            </div>

            <p className={`text-xs leading-relaxed ${
              theme === "light" ? "text-stone-600" : "text-[#8C857F]"
            }`}>
              {lang === "fr"
                ? "Restaurant traditionnel tibétain & népalais à Paris 4e. Momos façonnés minute, spécialités réconfortantes et salle voûtée en pierre médiévale."
                : "Traditional Tibetan & Nepalese restaurant in Paris 4th. Handmade steamed & pan-fried dumplings, slow broths, and medieval stone vault dining."}
            </p>

            <div className="pt-1">
              <span className={`inline-block px-3 py-1 rounded-full border text-[11px] ${
                theme === "light"
                  ? "bg-white border-stone-200 text-[#D97706]"
                  : "bg-[#1C1A18] border-[#2E2A26] text-[#F59E0B]"
              }`}>
                {lang === "fr" ? "བཀྲ་ཤིས་བདེ་ལེགས • Tashi Delek" : "བཀྲ་ཤིས་བདེ་ལེགས • Tashi Delek"}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className={`font-serif text-sm font-bold uppercase tracking-wider ${
              theme === "light" ? "text-stone-900" : "text-white"
            }`}>
              {lang === "fr" ? "Navigation" : "Quick Links"}
            </h4>
            <ul className="space-y-2 text-xs">
              {["accueil", "cave", "menu", "galerie", "avis", "acces"].map((hash) => {
                const labels = {
                  accueil: { fr: "Accueil", en: "Home" },
                  cave: { fr: "La Cave Voûtée", en: "The Stone Vault" },
                  menu: { fr: "La Carte & Spécialités", en: "Menu & Dishes" },
                  galerie: { fr: "Galerie de Photos", en: "Photo Gallery" },
                  avis: { fr: "Avis Clients", en: "Customer Reviews" },
                  acces: { fr: "Accès & Horaires", en: "Hours & Location" },
                };
                return (
                  <li key={hash}>
                    <a href={`#${hash}`} className={`transition-colors ${
                      theme === "light" ? "text-stone-600 hover:text-[#D97706]" : "hover:text-[#F59E0B]"
                    }`}>
                      {labels[hash][lang]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Practical Contacts */}
          <div className="space-y-3">
            <h4 className={`font-serif text-sm font-bold uppercase tracking-wider ${
              theme === "light" ? "text-stone-900" : "text-white"
            }`}>
              {lang === "fr" ? "Contact & Réservation" : "Contact & Bookings"}
            </h4>
            <div className={`space-y-2.5 text-xs ${
              theme === "light" ? "text-stone-600" : "text-[#8C857F]"
            }`}>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>61 Rue Quincampoix, 75004 Paris</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D97706] shrink-0" />
                <a href={`tel:${restaurantInfo.phoneRaw}`} className={`transition-colors ${
                  theme === "light" ? "hover:text-stone-900" : "hover:text-white"
                }`}>
                  {restaurantInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>
                  {lang === "fr" ? "Service continu : 12h - 22h30" : "Continuous service: 12pm - 10:30pm"}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenReservation}
                className="px-4 py-2 rounded-xl bg-[#8B1E28] hover:bg-[#991B1B] text-white text-xs font-semibold border border-[#F59E0B]/30"
              >
                {lang === "fr" ? "Réserver une table" : "Book a Table"}
              </motion.button>
            </div>
          </div>

          {/* Language & Local Information */}
          <div className="space-y-3">
            <h4 className={`font-serif text-sm font-bold uppercase tracking-wider ${
              theme === "light" ? "text-stone-900" : "text-white"
            }`}>
              {lang === "fr" ? "Langue & Quartier" : "Language & Area"}
            </h4>
            <p className={`text-xs leading-relaxed ${
              theme === "light" ? "text-stone-600" : "text-[#8C857F]"
            }`}>
              {lang === "fr"
                ? "Proche de Rambuteau, Châtelet-Les Halles, Hôtel de Ville et du Centre Pompidou."
                : "Steps from Rambuteau, Châtelet-Les Halles, City Hall and the Centre Pompidou."}
            </p>

            {/* Language Switcher Buttons */}
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => setLang("fr")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                  lang === "fr"
                    ? "bg-[#D97706] text-black border-[#D97706]"
                    : theme === "light"
                    ? "bg-white text-stone-800 border-stone-300 hover:bg-stone-50"
                    : "bg-[#1E1C1A] text-white border-[#332E2A] hover:bg-[#2C2825]"
                }`}
              >
                Français
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                  lang === "en"
                    ? "bg-[#D97706] text-black border-[#D97706]"
                    : theme === "light"
                    ? "bg-white text-stone-800 border-stone-300 hover:bg-stone-50"
                    : "bg-[#1E1C1A] text-white border-[#332E2A] hover:bg-[#2C2825]"
                }`}
              >
                English
              </button>
            </div>

            {/* Back to Top */}
            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#D97706] hover:text-[#B45309] transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>{lang === "fr" ? "Haut de page" : "Back to top"}</span>
              </button>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] ${
          theme === "light" ? "border-stone-200 text-stone-500" : "border-[#1F1C1A] text-[#6B6560]"
        }`}>
          <div>
            © 2026 Little Yak Paris.{" "}
            {lang === "fr"
              ? "Tous droits réservés. Restaurant tibétain authentique à Paris 4e."
              : "All rights reserved. Authentic Tibetan restaurant in Paris 4th."}
          </div>

          <div className="flex items-center gap-4">
            <a href="#accueil" className={`transition-colors ${theme === "light" ? "hover:text-stone-900" : "hover:text-white"}`}>
              {lang === "fr" ? "Mentions Légales" : "Legal Notice"}
            </a>
            <span>•</span>
            <a href="#accueil" className={`transition-colors ${theme === "light" ? "hover:text-stone-900" : "hover:text-white"}`}>
              {lang === "fr" ? "Confidentialité" : "Privacy Policy"}
            </a>
            <span>•</span>
            <span className={theme === "light" ? "text-stone-500" : "text-[#8C857F]"}>
              {lang === "fr" ? "Fait avec amour pour l'Himalaya" : "Crafted with love for the Himalayas"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
