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

export default function Hero({ lang, onOpenReservation, onOpenCart }) {
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
      className="relative min-h-[92vh] flex items-center justify-center pt-20 sm:pt-28 pb-14 sm:pb-16 overflow-hidden"
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
        {/* Multi-layered dark gradient to ensure high readability and warm Himalayan mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/85 to-[#121110]/65" />
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
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        {/* Tibetan Greeting Badge */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.04 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#241F1C]/90 border border-[#D97706]/40 backdrop-blur-md mb-5 sm:mb-6 shadow-md transition-colors cursor-default"
        >
          <span className="text-[#F59E0B] text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
            {lang === "fr"
              ? "Tashi Delek བཀྲ་ཤིས་བདེ་ལེགས • Bienvenue chez Little Yak"
              : "Tashi Delek བཀྲ་ཤིས་བདེ་ལེགས • Welcome to Little Yak"}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse shrink-0" />
        </motion.div>

        {/* Rating & Recognition Banner */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 mb-4 bg-black/40 px-3.5 py-1 rounded-full border border-white/10 text-xs backdrop-blur-sm"
        >
          <div className="flex text-[#F59E0B]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B]" />
            ))}
          </div>
          <span className="font-bold text-white">4.7 / 5</span>
          <span className="text-[#A8A29E]">
            ({restaurantInfo.reviewsCount}+ {lang === "fr" ? "avis vérifiés" : "verified reviews"})
          </span>
          <span className="text-[#D97706]">• OnaTaste & Google</span>
        </motion.div>

        {/* Main Grand Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-tight"
        >
          Little Yak{" "}
          <span className="block text-2xl sm:text-4xl md:text-5xl font-normal text-[#F59E0B] italic mt-1 font-serif">
            {lang === "fr" ? "Saveurs du Tibet & Cave Voûtée" : "Himalayan Flavors & Stone Vault"}
          </span>
        </motion.h1>

        {/* Evocative Description */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-base sm:text-lg text-[#D6D3D1] mb-8 leading-relaxed font-light"
        >
          {lang === "fr"
            ? "Poussez la porte du 61 rue Quincampoix pour un voyage authentique sur le toit du monde. Momos artisanaux pétris à la main, bouillons parfumés et thé au beurre salé dans le cadre intimiste d'une cave voûtée en pierre du Marais."
            : "Step into 61 rue Quincampoix for an authentic journey to the roof of the world. Handmade crimped momos, slow-simmered Himalayan broths, and salted butter tea inside an intimate medieval stone vault near Centre Pompidou."}
        </motion.p>

        {/* Feature Highlights Pills with Stagger */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10 max-w-3xl"
        >
          {[
            { icon: "🥟", fr: "Momos faits main chaque matin", en: "Handmade momos folded daily" },
            { icon: "🏛️", fr: "Cave voûtée historique en sous-sol", en: "Historic underground stone vault" },
            { icon: "📍", fr: "À 150m du Centre Pompidou", en: "150m from Centre Pompidou" },
            { icon: "🌱", fr: "Options végétariennes & véganes", en: "Vegetarian & vegan choices" },
          ].map((pill, i) => (
            <motion.span
              key={i}
              variants={badgeVariants}
              whileHover={{ y: -3, scale: 1.03 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#272320]/80 border border-[#3E3832] text-xs font-medium text-[#FAF7F2] cursor-default shadow"
            >
              <span>{pill.icon}</span> {lang === "fr" ? pill.fr : pill.en}
            </motion.span>
          ))}
        </motion.div>

        {/* Call to Actions with Interactive Spring Hover */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
        >
          {/* Reserve Table */}
          <motion.button
            onClick={onOpenReservation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#8B1E28] via-[#991B1B] to-[#781822] hover:from-[#991B1B] hover:to-[#8B1E28] text-white text-sm font-bold shadow-xl hover:shadow-[#8B1E28]/50 transition-all border border-[#F59E0B]/40"
          >
            <Calendar className="w-4 h-4 text-[#FBBF24]" />
            <span>{lang === "fr" ? "Réserver une table" : "Book a Table"}</span>
          </motion.button>

          {/* View Menu */}
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#272320] hover:bg-[#38332E] text-[#FAF7F2] text-sm font-bold border border-[#443E38] hover:border-[#F59E0B] transition-all"
          >
            <Utensils className="w-4 h-4 text-[#F59E0B]" />
            <span>{lang === "fr" ? "Découvrir la carte & prix" : "View Menu & Prices"}</span>
          </motion.a>

          {/* Takeaway Pre-order */}
          <motion.button
            onClick={onOpenCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#1C1A18]/90 hover:bg-[#2B2724] text-[#E7E5E4] text-sm font-semibold border border-[#3E3832] hover:text-[#F59E0B] transition-all"
          >
            <ShoppingBag className="w-4 h-4 text-[#F59E0B]" />
            <span>{lang === "fr" ? "Commander à emporter" : "Takeaway Order"}</span>
          </motion.button>
        </motion.div>

        {/* Quick Contact & Metro Info Strip */}
        <motion.div
          variants={itemVariants}
          className="w-full pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#A8A29E]"
        >
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-[#D97706] shrink-0" />
            <span>61 Rue Quincampoix, 75004 Paris (Marais)</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#D97706] shrink-0" />
            <span>
              {lang === "fr" ? "Mer-Dim : 12h - 22h30 (Non-stop)" : "Wed-Sun: 12pm - 10:30pm (Non-stop)"}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-[#D97706] shrink-0" />
            <a href={`tel:${restaurantInfo.phoneRaw}`} className="hover:text-white transition-colors underline">
              {restaurantInfo.phone}
            </a>
          </div>
        </motion.div>

        {/* Subtle Scroll Down Prompt */}
        <motion.a
          variants={itemVariants}
          href="#cave"
          className="mt-8 text-[#A8A29E] hover:text-[#F59E0B] transition-colors flex flex-col items-center gap-1 text-xs"
        >
          <span>{lang === "fr" ? "Explorer l'expérience Little Yak" : "Explore the Little Yak Experience"}</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#D97706]" />
        </motion.a>
      </motion.div>
    </section>
  );
}
