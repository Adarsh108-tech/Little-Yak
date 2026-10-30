"use client";

import { useState, useEffect } from "react";
import { galleryPhotos } from "@/data/restaurantData";
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInOnScroll } from "./MotionWrapper";

export default function GallerySection({ lang }) {
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const tabs = [
    { id: "all", label: { fr: "Toutes les photos", en: "All Photos" } },
    { id: "vault", label: { fr: "La Cave Voûtée", en: "The Stone Vault" } },
    { id: "food", label: { fr: "Nos Plats Faits Maison", en: "Handmade Dishes" } },
    { id: "atmosphere", label: { fr: "Ambiance & Décor", en: "Atmosphere & Decor" } },
  ];

  const filteredPhotos = galleryPhotos.filter(
    (photo) => activeTab === "all" || photo.category === activeTab
  );

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === 0 ? filteredPhotos.length - 1 : prev - 1
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === filteredPhotos.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredPhotos]);

  const currentPhoto =
    lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section id="galerie" className="py-20 bg-[#161413] relative border-t border-[#2D2824]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with FadeInOnScroll */}
        <FadeInOnScroll className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#272320] border border-[#3E3832] text-xs font-semibold text-[#F59E0B] uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>{lang === "fr" ? "Galerie de Photos" : "Photo Gallery"}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Instantanés d'un Voyage <br />
                <span className="text-[#F59E0B] italic">Entre Paris et Lhassa</span>
              </>
            ) : (
              <>
                Snapshots of a Journey <br />
                <span className="text-[#F59E0B] italic">Between Paris and Lhasa</span>
              </>
            )}
          </h2>
          <p className="text-[#A8A29E] text-sm sm:text-base leading-relaxed">
            {lang === "fr"
              ? "Découvrez en images la chaleur des voûtes en pierre, le soin apporté au façonnage de chaque momo et la convivialité qui règne dans notre restaurant."
              : "Explore our cozy subterranean stone arches, the delicate hand-folding of each dumpling, and the welcoming warmth of our Parisian Tibetan home."}
          </p>
        </FadeInOnScroll>

        {/* Tab Filters with layout indicator */}
        <FadeInOnScroll delay={0.1} className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap z-10 ${
                  isActive ? "text-white" : "text-[#A8A29E] hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeGalleryPill"
                    className="absolute inset-0 bg-[#8B1E28] rounded-full border border-[#F59E0B]/40 shadow-md -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <div className="absolute inset-0 bg-[#1E1C1A] rounded-full border border-[#332E2A] -z-10" />
                )}
                {tab.label[lang]}
              </button>
            );
          })}
        </FadeInOnScroll>

        {/* Photos Grid with AnimatePresence & Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -5 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer border border-[#332E2A] bg-[#1F1C1A] shadow-lg"
              >
                <img
                  src={photo.src}
                  alt={photo.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-serif text-sm font-bold text-white">
                      {photo.title[lang]}
                    </h4>
                    <Maximize2 className="w-4 h-4 text-[#F59E0B]" />
                  </div>
                  <p className="text-[11px] text-[#D6D3D1] line-clamp-2">
                    {photo.desc[lang]}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {lightboxIndex !== null && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Previous Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev === 0 ? filteredPhotos.length - 1 : prev - 1
                );
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors border border-white/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Next Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev === filteredPhotos.length - 1 ? 0 : prev + 1
                );
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors border border-white/10"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Image & Caption Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="max-w-4xl w-full flex flex-col items-center max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-h-[72vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center bg-black">
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.title[lang]}
                  className="max-w-full max-h-[72vh] object-contain"
                />
              </div>

              <div className="mt-4 text-center text-white max-w-xl">
                <div className="text-xs text-[#F59E0B] font-bold uppercase tracking-widest mb-1">
                  {lightboxIndex + 1} / {filteredPhotos.length}
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold">
                  {currentPhoto.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-[#A8A29E] mt-1">
                  {currentPhoto.desc[lang]}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
