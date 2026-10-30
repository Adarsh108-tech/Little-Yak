"use client";

import { restaurantInfo } from "@/data/restaurantData";
import {
  Calendar,
  Utensils,
  ShoppingBag,
  Star,
  MapPin,
  Clock,
  Phone,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ lang, theme = "dark", onOpenReservation, onOpenCart }) {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="accueil"
      className="relative min-h-[calc(100dvh-3.5rem)] sm:min-h-[calc(100dvh-4rem)] flex items-center justify-center pt-14 sm:pt-20 pb-8 sm:pb-12 overflow-hidden w-full"
    >
      {/* Background Image with Ambient Breathing Zoom Animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/1-little-yak.jpg')",
        }}
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Multi-layered dark or light gradient to ensure high readability */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "light"
              ? "bg-gradient-to-t from-white via-white/92 to-white/80"
              : "bg-gradient-to-t from-[#121110] via-[#121110]/85 to-[#121110]/65"
          }`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.15)_0%,transparent_70%)]" />
      </motion.div>

      {/* Floating Warm Golden Orbs for Himalayan Atmosphere */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-[#8B1E28]/15 rounded-full blur-2xl pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Main Content with Stagger Motion */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full"
      >
        {/* Tibetan Greeting Badge */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.04 }}
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border backdrop-blur-md mb-2.5 sm:mb-4 shadow-md transition-colors cursor-default ${
            theme === "light"
              ? "bg-amber-50/90 border-amber-300 text-amber-900"
              : "bg-[#241F1C]/90 border-[#D97706]/40 text-[#F59E0B]"
          }`}
        >
          <span className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${
            theme === "light" ? "text-amber-800" : "text-[#F59E0B]"
          }`}>
            {lang === "fr"
              ? "Tashi Delek བཀྲ་ཤིས་བདེ་ལེགས • Bienvenue chez Little Yak"
              : "Tashi Delek བཀྲ་ཤིས་བདེ་ལེགས • Welcome to Little Yak"}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse shrink-0" />
        </motion.div>

        {/* Rating & Recognition Banner */}
        <motion.div
          variants={itemVariants}
          className={`flex items-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-3 px-3 py-0.5 sm:py-1 rounded-full border text-[11px] sm:text-xs backdrop-blur-sm shadow-sm ${
            theme === "light"
              ? "bg-white/85 border-stone-200 text-stone-800"
              : "bg-black/40 border-white/10 text-white"
          }`}
        >
          <div className="flex text-[#F59E0B]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#F59E0B]" />
            ))}
          </div>
          <span className={`font-bold ${theme === "light" ? "text-stone-900" : "text-white"}`}>4.7 / 5</span>
          <span className={theme === "light" ? "text-stone-600" : "text-[#A8A29E]"}>
            ({restaurantInfo.reviewsCount}+ {lang === "fr" ? "avis vérifiés" : "verified reviews"})
          </span>
          <span className="text-[#D97706] hidden sm:inline">• OnaTaste & Google</span>
        </motion.div>

        {/* Main Grand Heading */}
        <motion.h1
          variants={itemVariants}
          className={`font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 sm:mb-3 leading-tight ${
            theme === "light" ? "text-stone-950" : "text-white"
          }`}
        >
          Little Yak{" "}
          <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#D97706] italic mt-0.5 sm:mt-1 font-serif">
            {lang === "fr" ? "Saveurs du Tibet & Cave Voûtée" : "Himalayan Flavors & Stone Vault"}
          </span>
        </motion.h1>

        {/* Evocative Description */}
        <motion.p
          variants={itemVariants}
          className={`max-w-2xl text-xs sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed font-light px-2 sm:px-0 ${
            theme === "light" ? "text-stone-700" : "text-[#D6D3D1]"
          }`}
        >
          {lang === "fr"
            ? "Poussez la porte du 61 rue Quincampoix pour un voyage authentique sur le toit du monde. Momos artisanaux pétris à la main, bouillons parfumés et thé au beurre salé dans le cadre intimiste d'une cave voûtée en pierre du Marais."
            : "Step into 61 rue Quincampoix for an authentic journey to the roof of the world. Handmade crimped momos, slow-simmered Himalayan broths, and salted butter tea inside an intimate medieval stone vault near Centre Pompidou."}
        </motion.p>

        {/* Feature Highlights Pills with Stagger */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 mb-4 sm:mb-6 max-w-3xl"
        >
          {[
            { icon: "🥟", fr: "Momos faits main", en: "Handmade momos folded daily" },
            { icon: "🏛️", fr: "Cave voûtée historique", en: "Historic stone vault" },
            { icon: "📍", fr: "À 150m du Pompidou", en: "150m from Pompidou" },
            { icon: "🌱", fr: "Options végétariennes", en: "Vegetarian & vegan" },
          ].map((pill, i) => (
            <motion.span
              key={i}
              variants={badgeVariants}
              whileHover={{ y: -2, scale: 1.02 }}
              className={`inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 rounded-lg border text-[10px] sm:text-xs font-medium cursor-default shadow-sm ${
                theme === "light"
                  ? "bg-white/95 border-stone-200 text-stone-800"
                  : "bg-[#272320]/80 border-[#3E3832] text-[#FAF7F2]"
              }`}
            >
              <span>{pill.icon}</span> {lang === "fr" ? pill.fr : pill.en}
            </motion.span>
          ))}
        </motion.div>

        {/* Call to Actions with Interactive Spring Hover */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto mb-5 sm:mb-8"
        >
          {/* Reserve Table */}
          <motion.button
            onClick={onOpenReservation}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#8B1E28] via-[#991B1B] to-[#781822] hover:from-[#991B1B] hover:to-[#8B1E28] text-white text-xs sm:text-sm font-bold shadow-xl transition-all border border-[#F59E0B]/40"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FBBF24]" />
            <span>{lang === "fr" ? "Réserver une table" : "Book a Table"}</span>
          </motion.button>

          {/* View Menu */}
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold border transition-all ${
              theme === "light"
                ? "bg-stone-100 hover:bg-stone-200 text-stone-900 border-stone-300 shadow-sm"
                : "bg-[#272320] hover:bg-[#38332E] text-[#FAF7F2] border-[#443E38] hover:border-[#F59E0B]"
            }`}
          >
            <Utensils className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D97706]" />
            <span>{lang === "fr" ? "Découvrir la carte & prix" : "View Menu & Prices"}</span>
          </motion.a>

          {/* Takeaway Pre-order */}
          <motion.button
            onClick={onOpenCart}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
              theme === "light"
                ? "bg-white hover:bg-stone-50 text-stone-800 border-stone-300 shadow-sm hover:text-[#D97706]"
                : "bg-[#1C1A18]/90 hover:bg-[#2B2724] text-[#E7E5E4] border-[#3E3832] hover:text-[#F59E0B]"
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D97706]" />
            <span>{lang === "fr" ? "Commander à emporter" : "Takeaway Order"}</span>
          </motion.button>
        </motion.div>

        {/* Quick Contact & Metro Info Strip */}
        <motion.div
          variants={itemVariants}
          className={`w-full pt-3 sm:pt-4 border-t grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-[11px] sm:text-xs ${
            theme === "light" ? "border-stone-200 text-stone-600" : "border-white/10 text-[#A8A29E]"
          }`}
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D97706] shrink-0" />
            <span className="truncate">61 Rue Quincampoix, 75004 Paris</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D97706] shrink-0" />
            <span>
              {lang === "fr" ? "Mer-Dim : 12h - 22h30" : "Wed-Sun: 12pm - 10:30pm"}
            </span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D97706] shrink-0" />
            <a href={`tel:${restaurantInfo.phoneRaw}`} className={`transition-colors underline ${theme === "light" ? "hover:text-stone-900" : "hover:text-white"}`}>
              {restaurantInfo.phone}
            </a>
          </div>
        </motion.div>

        {/* Subtle Scroll Down Prompt */}
        <motion.a
          variants={itemVariants}
          href="#cave"
          className={`mt-3 sm:mt-5 transition-colors flex flex-col items-center gap-0.5 text-[10px] sm:text-xs ${
            theme === "light" ? "text-stone-500 hover:text-stone-900" : "text-[#A8A29E] hover:text-[#F59E0B]"
          }`}
        >
          <span>{lang === "fr" ? "Explorer l'expérience Little Yak" : "Explore the Little Yak Experience"}</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#D97706]" />
        </motion.a>
      </motion.div>
    </section>
  );
}
