"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeInOnScroll,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "./MotionWrapper";

export default function StoryVault({ lang, theme = "dark", onOpenReservation }) {
  const pillars = [
    {
      icon: "🥟",
      title: { fr: "Pâte Pétrie & Façonnée Minute", en: "Dough Kneaded & Crimped Fresh" },
      desc: {
        fr: "Nos momos ne sont jamais industriels ni surgelés. Chaque feuille de pâte est abaissée et scellée à la main chaque matin pour une texture délicatement soyeuse.",
        en: "Our dumplings are never industrial or frozen. Each wrapper is rolled and hand-crimped daily to ensure an extraordinarily tender, silky texture.",
      },
    },
    {
      icon: "🍲",
      title: { fr: "Bouillons Clairs Mijotés 8 Heures", en: "8-Hour Slow Simmered Broths" },
      desc: {
        fr: "Nos soupes Thukpa et Gyathuk tirent leur profondeur d'un mijotage lent avec racines de gingembre, poivre noir sauvage et poivre de Timut de l'Himalaya.",
        en: "Our Thukpa and Gyathuk broths gain their soulful depth from 8-hour gentle simmering with mountain ginger roots and wild Timut peppercorns.",
      },
    },
    {
      icon: "🏛️",
      title: { fr: "La Magie des Voûtes en Pierre", en: "Subterranean Medieval Vaults" },
      desc: {
        fr: "Aménagée dans une ancienne cave voûtée médiévale de la rue Quincampoix, notre salle en sous-sol offre une acoustique feutrée et une atmosphère hors du temps.",
        en: "Housed inside a historic medieval stone-vaulted cellar on Rue Quincampoix, our underground room provides a serene, whisper-quiet atmosphere away from the city hustle.",
      },
    },
    {
      icon: "🍵",
      title: { fr: "L'Accueil Tibétain Traditionnel", en: "Authentic Tibetan Warmth" },
      desc: {
        fr: "Un service attentionné et bienveillant, prêt à vous initier aux rituels du thé au beurre salé (Po Cha) ou aux douceurs au Tsampa.",
        en: "Thoughtful and heartwarming hospitality, guiding you through the authentic customs of salted butter tea (Po Cha) and sweet Tsampa treats.",
      },
    },
  ];

  return (
    <section
      id="cave"
      className={`min-h-[calc(100dvh-3.5rem)] sm:min-h-[calc(100dvh-4rem)] flex flex-col justify-center py-8 sm:py-12 md:py-16 relative overflow-hidden border-t border-b w-full transition-colors duration-300 ${
        theme === "light"
          ? "bg-[#FAF7F2] border-stone-200"
          : "bg-[#161413] border-[#2D2824]"
      }`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B1E28]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header with FadeInOnScroll */}
        <FadeInOnScroll className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2.5 ${
            theme === "light"
              ? "bg-amber-50 border-amber-300 text-amber-900"
              : "bg-[#272320] border-[#3E3832] text-[#F59E0B]"
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === "fr" ? "L'Âme de Little Yak" : "The Soul of Little Yak"}</span>
          </div>
          <h2 className={`font-serif text-2xl sm:text-4xl lg:text-5xl font-bold mb-2.5 sm:mb-4 leading-tight ${
            theme === "light" ? "text-stone-900" : "text-white"
          }`}>
            {lang === "fr" ? (
              <>
                Quand les Voûtes de Paris <br />
                <span className="text-[#D97706] italic">Rencontrent l&apos;Himalaya</span>
              </>
            ) : (
              <>
                When Parisian Stone Vaults <br />
                <span className="text-[#D97706] italic">Embrace the Himalayas</span>
              </>
            )}
          </h2>
          <p className={`text-xs sm:text-sm md:text-base leading-relaxed ${
            theme === "light" ? "text-stone-600" : "text-[#A8A29E]"
          }`}>
            {lang === "fr"
              ? "Niché au 61 rue Quincampoix, entre les ruelles chargées d'histoire du Marais et l'énergie créative de Beaubourg, Little Yak est une escale secrète où le temps s'arrête pour célébrer la générosité tibétaine."
              : "Tucked away at 61 rue Quincampoix between the historic Marais and the vibrant energy of Beaubourg, Little Yak is a secret sanctuary where time slows down to savor Tibetan hospitality."}
          </p>
        </FadeInOnScroll>

        {/* Visual Storytelling Grid: Text (Left) + Image Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center mb-6 sm:mb-10">
          {/* Left Narrative with SlideInLeft */}
          <SlideInLeft className="lg:col-span-6 space-y-4">
            <div className={`p-5 sm:p-7 md:p-8 rounded-2xl border shadow-xl relative ${
              theme === "light"
                ? "bg-white border-stone-200 text-stone-900"
                : "bg-[#1F1C1A] border-[#38332E] text-white"
            }`}>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D97706] font-bold block mb-1.5">
                {lang === "fr" ? "Un Cadre Historique Unique" : "A Historic & Unique Setting"}
              </span>
              <h3 className={`font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 ${
                theme === "light" ? "text-stone-900" : "text-white"
              }`}>
                {lang === "fr" ? "Une Ancienne Cave Voûtée Médiévale" : "An Ancient Subterranean Stone Cellar"}
              </h3>
              <p className={`leading-relaxed text-xs sm:text-sm font-light mb-2.5 sm:mb-3 ${
                theme === "light" ? "text-stone-700" : "text-[#D6D3D1]"
              }`}>
                {lang === "fr"
                  ? "Descendez les marches en pierre pour pénétrer sous les magnifiques voûtes en pierre de taille typiques du vieux Paris. Remise en état avec un soin minutieux, la salle au sous-sol mêle tables en bois massif, lumière tamisée et objets d'artisanat himalayen."
                  : "Descend the stone stairs to uncover dramatic dressed-stone vaults typical of old historic Paris. Restored with meticulous passion, the subterranean room pairs heavy timber tables and dim amber lighting with authentic Himalayan craft."}
              </p>
              <p className={`leading-relaxed text-xs sm:text-sm font-light mb-4 ${
                theme === "light" ? "text-stone-700" : "text-[#D6D3D1]"
              }`}>
                {lang === "fr"
                  ? "Ici, loin de l'agitation des grands boulevards, les murmures des convives se mêlent aux arômes enveloppants de gingembre, de poivre de montagne et de thé au beurre salé."
                  : "Here, nestled safely away from bustling Parisian boulevards, peaceful conversations blend harmoniously with aromatic notes of ginger, mountain pepper, and freshly churned butter tea."}
              </p>

              <div className={`flex flex-wrap items-center gap-3 pt-3 border-t ${
                theme === "light" ? "border-stone-200" : "border-[#38332E]"
              }`}>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#D97706]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>{lang === "fr" ? "Salle climatisée & calme" : "Air-conditioned & quiet"}</span>
                </div>
                <div className={`flex items-center gap-1.5 text-xs font-semibold ${
                  theme === "light" ? "text-stone-800" : "text-[#FAF7F2]"
                }`}>
                  <span>🏷️</span>
                  <span>{lang === "fr" ? "Réservation recommandée" : "Booking recommended"}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Button with Spring Hover */}
            <div className="pt-1">
              <motion.button
                onClick={onOpenReservation}
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#F59E0B] hover:text-[#FBBF24] group transition-colors"
              >
                <span>{lang === "fr" ? "Réserver une table dans la cave" : "Reserve a table in the cellar"}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1.5 transition-transform" />
              </motion.button>
            </div>
          </SlideInLeft>

          {/* Right Imagery Collage with SlideInRight */}
          <SlideInRight className="lg:col-span-6 grid grid-cols-2 gap-2.5 sm:gap-4">
            <div className="space-y-2.5 sm:space-y-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative h-32 sm:h-44 md:h-56 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden border border-[#3E3832] shadow-xl group"
              >
                <img
                  src="/images/why-visit-us.webp"
                  alt="Salle voûtée Little Yak"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5 sm:p-4">
                  <span className="text-[10px] sm:text-xs font-semibold text-white">
                    {lang === "fr" ? "Ambiance feutrée en sous-sol" : "Intimate cellar seating"}
                  </span>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative h-24 sm:h-32 md:h-40 lg:h-44 rounded-xl sm:rounded-2xl overflow-hidden border border-[#3E3832] shadow-xl group"
              >
                <img
                  src="/images/momo-vegetarienen-menu.webp"
                  alt="Momos faits maison"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2 sm:p-3">
                  <span className="text-[10px] sm:text-xs font-semibold text-[#F59E0B]">
                    {lang === "fr" ? "Momos faits maison" : "Handmade momos"}
                  </span>
                </div>
              </motion.div>
            </div>

            <div className="space-y-2.5 sm:space-y-4 pt-3 sm:pt-6">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative h-24 sm:h-32 md:h-40 lg:h-44 rounded-xl sm:rounded-2xl overflow-hidden border border-[#3E3832] shadow-xl group"
              >
                <img
                  src="/images/laphing-nouilles-en-gelee-sauce-piquante-menu.webp"
                  alt="Laphing nouilles froides"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2 sm:p-3">
                  <span className="text-[10px] sm:text-xs font-semibold text-[#F59E0B]">
                    {lang === "fr" ? "Laphing traditionnel" : "Traditional Laphing"}
                  </span>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative h-32 sm:h-44 md:h-56 lg:h-64 rounded-xl sm:rounded-2xl overflow-hidden border border-[#3E3832] shadow-xl group"
              >
                <img
                  src="/images/5-little-yak.jpg"
                  alt="Détails du restaurant"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5 sm:p-4">
                  <span className="text-[10px] sm:text-xs font-semibold text-white">
                    {lang === "fr" ? "Voûtes en pierre du Marais" : "Historic Marais stone arches"}
                  </span>
                </div>
              </motion.div>
            </div>
          </SlideInRight>
        </div>

        {/* 4 Pillars Grid with Stagger Appear on Scroll */}
        <StaggerContainer
          staggerChildren={0.12}
          className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5"
        >
          {pillars.map((pillar, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className={`h-full p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border transition-colors shadow-lg group cursor-default ${
                  theme === "light"
                    ? "bg-white border-stone-200 hover:border-[#D97706]"
                    : "bg-[#1C1A18] border-[#332E2A] hover:border-[#D97706]/70"
                }`}
              >
                <div className="text-2xl sm:text-3xl mb-1.5 sm:mb-3 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h4 className={`font-serif text-xs sm:text-base font-bold mb-1 sm:mb-2 group-hover:text-[#D97706] transition-colors ${
                  theme === "light" ? "text-stone-900" : "text-white"
                }`}>
                  {pillar.title[lang]}
                </h4>
                <p className={`text-[10px] sm:text-xs leading-relaxed ${
                  theme === "light" ? "text-stone-600" : "text-[#A8A29E]"
                }`}>
                  {pillar.desc[lang]}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
