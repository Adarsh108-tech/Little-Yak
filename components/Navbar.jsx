"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { restaurantInfo } from "@/data/restaurantData";
import {
  Phone,
  Calendar,
  ShoppingBag,
  Menu as MenuIcon,
  X,
  Globe,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function Navbar({
  lang,
  setLang,
  cartCount,
  onOpenCart,
  onOpenReservation,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Scroll Progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Calculate if open in Paris time
    const checkOpen = () => {
      const now = new Date();
      const parisHours = (now.getUTCHours() + 1) % 24;
      const isOpen = parisHours >= 12 && parisHours < 23;
      setIsOpenNow(isOpen);
    };
    checkOpen();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#accueil", icon: "🥟", label: { fr: "Accueil", en: "Home" } },
    { href: "#cave", icon: "🏛️", label: { fr: "La Cave Voûtée", en: "The Stone Vault" } },
    { href: "#menu", icon: "🍜", label: { fr: "La Carte & Prix", en: "Menu & Prices" } },
    { href: "#galerie", icon: "📸", label: { fr: "Galerie Photos", en: "Gallery" } },
    { href: "#avis", icon: "⭐", label: { fr: "Avis Clients", en: "Reviews" } },
    { href: "#acces", icon: "📍", label: { fr: "Accès & Horaires", en: "Hours & Map" } },
  ];

  return (
    <>
      {/* Top Tibetan Cultural Prayer Flag Ribbon */}
      <div className="w-full h-1 bg-prayer-flags fixed top-0 left-0 z-50 opacity-90 pointer-events-none" />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#FBBF24] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Main Header Container - Compact on mobile (py-2), spacious on desktop (sm:py-3.5) */}
      <header
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#141210]/95 backdrop-blur-md shadow-2xl py-1.5 sm:py-3 border-b border-[#2D2824]"
            : "bg-gradient-to-b from-[#121110]/95 via-[#121110]/75 to-transparent py-2 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-1.5 sm:gap-4">
            {/* Brand Logo & Company Name */}
            <motion.a
              href="#accueil"
              className="flex items-center gap-2 sm:gap-2.5 group min-w-0 shrink"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {/* Official Company Logo */}
              <div className="relative w-7 h-7 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Little Yak Logo"
                  className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Company Title */}
              <div className="flex flex-col min-w-0 justify-center">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-white group-hover:text-[#F59E0B] transition-colors leading-tight whitespace-nowrap">
                    Little Yak
                  </span>
                  <span className="hidden md:inline-block text-[10px] font-medium text-[#D97706] tracking-widest px-1.5 py-0.5 rounded bg-[#D97706]/10 border border-[#D97706]/30 shrink-0">
                    {restaurantInfo.tibetanName}
                  </span>
                </div>
                {/* Subtitle hidden on mobile to prevent clutter and truncation */}
                <span className="hidden sm:block text-[10px] text-[#A8A29E] tracking-wider uppercase leading-none mt-0.5">
                  {lang === "fr" ? "Restaurant Tibétain • Paris 4e" : "Tibetan Dining • Paris 4th"}
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation Links (Large Screens >= 1024px) */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs xl:text-sm font-medium text-[#E7E5E4] hover:text-[#F59E0B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D97706] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
                >
                  {link.label[lang]}
                </a>
              ))}
            </nav>

            {/* Right Side Actions Bar - Compact on Mobile */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              {/* Language Switcher */}
              <motion.button
                onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1 px-1.5 sm:px-2.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold rounded-full bg-[#24201D] hover:bg-[#38332E] text-[#FAF7F2] border border-[#3E3832] transition-colors"
                title={lang === "fr" ? "Switch to English" : "Passer en Français"}
                aria-label="Toggle language"
              >
                <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F59E0B] shrink-0" />
                <span className="uppercase font-mono text-[10px] sm:text-xs leading-none">
                  {lang}
                </span>
              </motion.button>

              {/* Takeout Cart Button */}
              <motion.button
                onClick={onOpenCart}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.92 }}
                className="relative p-1.5 sm:p-2 rounded-full bg-[#24201D] hover:bg-[#38332E] text-[#FAF7F2] border border-[#3E3832] transition-colors flex items-center justify-center"
                title={lang === "fr" ? "Voir le panier à emporter" : "View Takeaway Basket"}
                aria-label="Takeaway basket"
              >
                <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F59E0B]" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#8B1E28] text-white text-[9px] sm:text-[11px] font-bold rounded-full flex items-center justify-center border border-[#FAF7F2]/40 shadow-sm"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.button>

              {/* Reservation CTA Button (Visible on sm: and up) */}
              <motion.button
                onClick={onOpenReservation}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#8B1E28] to-[#991B1B] hover:from-[#991B1B] hover:to-[#B91C1C] text-white text-xs font-semibold shadow-md hover:shadow-[#8B1E28]/40 transition-all border border-[#F59E0B]/30 whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-[#FBBF24]" />
                <span>{lang === "fr" ? "Réserver" : "Book"}</span>
              </motion.button>

              {/* Mobile Hamburger Trigger */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 rounded-lg bg-[#24201D] text-[#FAF7F2] hover:bg-[#38332E] border border-[#3E3832] transition-colors flex items-center justify-center"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#F59E0B]" />
                ) : (
                  <MenuIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Fullscreen Slide-Over Drawer with Backdrop Blur */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Darkened Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-[48px] sm:top-[56px] bg-black/80 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Drawer Content Panel */}
              <motion.div
                initial={{ opacity: 0, y: -15, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -15, height: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-[48px] sm:top-[56px] left-0 right-0 z-50 bg-[#161413] border-b border-[#38332E] shadow-2xl lg:hidden max-h-[calc(100vh-56px)] overflow-y-auto"
              >
                <div className="p-4 sm:p-5 space-y-3.5">
                  {/* Status Banner with Logo */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#201D1B] border border-[#332E2A] text-xs">
                    <div className="flex items-center gap-2">
                      <img
                        src="/logo.png"
                        alt="Little Yak"
                        className="w-5 h-5 object-contain"
                      />
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isOpenNow ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                        }`}
                      />
                      <span className="font-semibold text-white text-[11px] sm:text-xs">
                        {isOpenNow
                          ? lang === "fr"
                            ? "Ouvert aujourd'hui • 12h00 – 22h30"
                            : "Open Today • 12:00 PM – 10:30 PM"
                          : lang === "fr"
                          ? "Ouvre à 12h00"
                          : "Opens at 12:00 PM"}
                      </span>
                    </div>
                    <span className="text-[#F59E0B] font-serif font-bold text-xs">
                      {restaurantInfo.tibetanName}
                    </span>
                  </div>

                  {/* Navigation Links with Icons */}
                  <nav className="grid grid-cols-1 gap-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium text-[#FAF7F2] hover:text-[#F59E0B] hover:bg-[#25211E] transition-colors border border-transparent hover:border-[#38332E]"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base">{link.icon}</span>
                          <span>{link.label[lang]}</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-[#78716C]" />
                      </a>
                    ))}
                  </nav>

                  {/* Action Buttons Inside Menu */}
                  <div className="pt-2 border-t border-[#2D2824] space-y-2">
                    {/* Book Table CTA */}
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenReservation();
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#8B1E28] to-[#991B1B] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg border border-[#F59E0B]/30"
                    >
                      <Calendar className="w-4 h-4 text-[#FBBF24]" />
                      <span>{lang === "fr" ? "Réserver une table" : "Book a Table"}</span>
                    </motion.button>

                    {/* Quick Call */}
                    <motion.a
                      whileTap={{ scale: 0.98 }}
                      href={`tel:${restaurantInfo.phoneRaw}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#241F1C] border border-[#3E3832] text-[#FAF7F2] font-semibold text-xs flex items-center justify-center gap-2 hover:border-[#F59E0B] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>{lang === "fr" ? "Appeler le" : "Call us"} {restaurantInfo.phone}</span>
                    </motion.a>

                    {/* Language Switcher Bar inside menu */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-[#1C1A18] border border-[#2E2A26] text-xs">
                      <span className="text-[#A8A29E] text-[11px]">
                        {lang === "fr" ? "Langue :" : "Language:"}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setLang("fr")}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors ${
                            lang === "fr"
                              ? "bg-[#D97706] text-black shadow"
                              : "text-[#A8A29E] hover:text-white"
                          }`}
                        >
                          FR Français
                        </button>
                        <button
                          onClick={() => setLang("en")}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors ${
                            lang === "en"
                              ? "bg-[#D97706] text-black shadow"
                              : "text-[#A8A29E] hover:text-white"
                          }`}
                        >
                          EN English
                        </button>
                      </div>
                    </div>

                    {/* Address & Metro Quick Reminder */}
                    <div className="pt-1 text-[11px] text-[#78716C] flex items-center justify-between px-1">
                      <div className="flex items-center gap-1.5 truncate">
                        <MapPin className="w-3 h-3 text-[#D97706] shrink-0" />
                        <span className="truncate">61 Rue Quincampoix, 75004 Paris</span>
                      </div>
                      <a
                        href={restaurantInfo.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F59E0B] hover:underline font-semibold shrink-0 ml-2"
                      >
                        Plan ↗
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
