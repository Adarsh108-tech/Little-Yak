"use client";

import { customerReviews } from "@/data/restaurantData";
import { Star, MessageSquare, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeInOnScroll,
  StaggerContainer,
  StaggerItem,
} from "./MotionWrapper";

export default function ReviewsSection({ lang, theme = "dark" }) {
  const scoreCategories = [
    { label: { fr: "Saveurs & Fraîcheur des Momos", en: "Flavors & Freshness" }, score: "4.9" },
    { label: { fr: "Ambiance de la Cave Voûtée", en: "Stone Vault Ambiance" }, score: "4.8" },
    { label: { fr: "Accueil & Hospitalité Tibétaine", en: "Tibetan Hospitality" }, score: "4.9" },
    { label: { fr: "Rapport Qualité / Prix", en: "Value for Money" }, score: "4.8" },
  ];

  return (
    <section
      id="avis"
      className={`min-h-[calc(100dvh-3.5rem)] sm:min-h-[calc(100dvh-4rem)] flex flex-col justify-center py-8 sm:py-12 md:py-16 relative overflow-hidden w-full transition-colors duration-300 ${
        theme === "light" ? "bg-[#F1E9DE]" : "bg-[#121110]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header with FadeInOnScroll */}
        <FadeInOnScroll className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2.5 ${
            theme === "light"
              ? "bg-amber-50 border-amber-300 text-amber-900"
              : "bg-[#272320] border-[#3E3832] text-[#F59E0B]"
          }`}>
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{lang === "fr" ? "Avis & Témoignages" : "Guest Reviews"}</span>
          </div>
          <h2 className={`font-serif text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight ${
            theme === "light" ? "text-stone-900" : "text-white"
          }`}>
            {lang === "fr" ? (
              <>
                Ce Que Nos Convives <br />
                <span className="text-[#D97706] italic">Aiment Chez Little Yak</span>
              </>
            ) : (
              <>
                What Our Guests <br />
                <span className="text-[#D97706] italic">Love About Little Yak</span>
              </>
            )}
          </h2>
          <p className={`text-xs sm:text-sm md:text-base leading-relaxed ${
            theme === "light" ? "text-stone-600" : "text-[#A8A29E]"
          }`}>
            {lang === "fr"
              ? "Reconnu parmi les meilleures adresses tibétaines de Paris, plébiscité pour la générosité des momos et la beauté intime de notre cave en pierre."
              : "Celebrated among Paris's finest Tibetan tables, acclaimed for comforting dumplings and our intimate subterranean stone arches."}
          </p>
        </FadeInOnScroll>

        {/* Global Rating Score Showcase with Animated Progress Bars */}
        <FadeInOnScroll delay={0.1} className={`rounded-2xl sm:rounded-3xl p-4 sm:p-8 border shadow-xl mb-6 sm:mb-10 ${
          theme === "light" ? "bg-stone-50 border-stone-200" : "bg-[#1A1816] border-[#332E2A]"
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Big Score */}
            <div className={`lg:col-span-4 text-center lg:text-left lg:border-r lg:pr-8 ${
              theme === "light" ? "border-stone-200" : "border-[#2C2824]"
            }`}>
              <div className="text-5xl sm:text-6xl font-serif font-bold text-[#D97706] mb-2">
                4.7 <span className={`text-2xl font-sans font-normal ${theme === "light" ? "text-stone-800" : "text-white"}`}>/ 5</span>
              </div>
              <div className="flex justify-center lg:justify-start text-[#D97706] gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D97706]" />
                ))}
              </div>
              <div className={`text-sm font-semibold ${theme === "light" ? "text-stone-900" : "text-white"}`}>
                {lang === "fr" ? "Note Globale d'Excellence" : "Overall Excellence Score"}
              </div>
              <p className={`text-xs mt-1 ${theme === "light" ? "text-stone-500" : "text-[#A8A29E]"}`}>
                {lang === "fr"
                  ? "Basé sur plus de 380 avis sur Google Reviews et OnaTaste."
                  : "Based on 380+ reviews across Google Reviews and OnaTaste."}
              </p>
            </div>

            {/* Middle Breakdown Bars with Motion on Scroll */}
            <div className="lg:col-span-5 space-y-3">
              {scoreCategories.map((item, idx) => {
                const targetPercentage = (parseFloat(item.score) / 5) * 100;
                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className={theme === "light" ? "text-stone-700" : "text-[#D6D3D1]"}>{item.label[lang]}</span>
                      <span className="text-[#D97706] font-bold">{item.score} / 5</span>
                    </div>
                    <div className={`w-full rounded-full h-2 overflow-hidden ${
                      theme === "light" ? "bg-stone-200" : "bg-[#272320]"
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${targetPercentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                        className="bg-gradient-to-r from-[#D97706] to-[#F59E0B] h-full rounded-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Review CTA */}
            <div className="lg:col-span-3 text-center lg:text-right flex flex-col items-center lg:items-end justify-center">
              <motion.a
                href="https://share.google/9sMi8A1NipGgZVFov"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-[#8B1E28] hover:bg-[#991B1B] text-white text-xs font-bold flex items-center gap-2 border border-[#F59E0B]/30 shadow-lg"
              >
                <PlusCircle className="w-4 h-4 text-[#FBBF24]" />
                <span>
                  {lang === "fr"
                    ? "Partager votre expérience"
                    : "Share Your Experience"}
                </span>
              </motion.a>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Reviews Cards Stagger on Scroll */}
        <StaggerContainer
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {customerReviews.map((rev) => (
            <StaggerItem key={rev.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className={`h-full p-6 rounded-2xl border flex flex-col justify-between transition-colors shadow-lg ${
                  theme === "light"
                    ? "bg-white border-stone-200 hover:border-[#D97706] shadow-md"
                    : "bg-[#191715] border-[#2E2A26] hover:border-[#D97706]/50"
                }`}
              >
                <div>
                  {/* Header: Author & Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B1E28] to-[#66121B] flex items-center justify-center font-serif text-sm font-bold text-white border border-[#D97706]/30">
                        {rev.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className={`text-sm font-bold ${
                          theme === "light" ? "text-stone-900" : "text-white"
                        }`}>{rev.author}</h4>
                        <span className={`text-[11px] ${
                          theme === "light" ? "text-stone-500" : "text-[#78716C]"
                        }`}>
                          {rev.source} • {rev.date}
                        </span>
                      </div>
                    </div>

                    <div className="flex text-[#D97706]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D97706]" />
                      ))}
                    </div>
                  </div>

                  {/* Quote Body */}
                  <p className={`text-xs sm:text-sm leading-relaxed italic mb-4 ${
                    theme === "light" ? "text-stone-700" : "text-[#D6D3D1]"
                  }`}>
                    &ldquo;{rev.comment[lang]}&rdquo;
                  </p>
                </div>

                {/* Tag for Recommended Dish */}
                {rev.dishTag && (
                  <div className={`pt-3 border-t flex items-center gap-1.5 text-[11px] ${
                    theme === "light" ? "border-stone-200 text-stone-600" : "border-[#2A2622] text-[#A8A29E]"
                  }`}>
                    <span className="text-[#D97706]">🥟</span>
                    <span>{rev.dishTag}</span>
                  </div>
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
