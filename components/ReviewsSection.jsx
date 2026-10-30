"use client";

import { useState } from "react";
import { customerReviews } from "@/data/restaurantData";
import {
  Star,
  MessageSquare,
  CheckCircle2,
  PlusCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FadeInOnScroll,
  StaggerContainer,
  StaggerItem,
} from "./MotionWrapper";

export default function ReviewsSection({ lang }) {
  const [reviewsList, setReviewsList] = useState(customerReviews);
  const [showAddForm, setShowAddForm] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const [newRating, setNewRating] = useState(5);
  const [newName, setNewName] = useState("");
  const [newDish, setNewDish] = useState("Momos Traditionnels au Bœuf");
  const [newComment, setNewComment] = useState("");
  const [toastMessage, setToastMessage] = useState(null);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      author: newName,
      source: "Avis Récent",
      rating: newRating,
      date: lang === "fr" ? "À l'instant" : "Just now",
      comment: {
        fr: newComment,
        en: newComment,
      },
      dishTag: newDish,
    };

    setReviewsList([newRev, ...reviewsList]);
    setNewName("");
    setNewComment("");
    setShowAddForm(false);
    setToastMessage(
      lang === "fr"
        ? "Merci pour votre avis ! Il a été publié."
        : "Thank you for your review! It has been posted."
    );
    setTimeout(() => setToastMessage(null), 3500);
  };

  const scoreCategories = [
    { label: { fr: "Saveurs & Fraîcheur des Momos", en: "Flavors & Freshness" }, score: "4.9" },
    { label: { fr: "Ambiance de la Cave Voûtée", en: "Stone Vault Ambiance" }, score: "4.8" },
    { label: { fr: "Accueil & Hospitalité Tibétaine", en: "Tibetan Hospitality" }, score: "4.9" },
    { label: { fr: "Rapport Qualité / Prix", en: "Value for Money" }, score: "4.8" },
  ];

  return (
    <section id="avis" className="py-20 bg-[#121110] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with FadeInOnScroll */}
        <FadeInOnScroll className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#272320] border border-[#3E3832] text-xs font-semibold text-[#F59E0B] uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{lang === "fr" ? "Avis & Témoignages" : "Guest Reviews"}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Ce Que Nos Convives <br />
                <span className="text-[#F59E0B] italic">Aiment Chez Little Yak</span>
              </>
            ) : (
              <>
                What Our Guests <br />
                <span className="text-[#F59E0B] italic">Love About Little Yak</span>
              </>
            )}
          </h2>
          <p className="text-[#A8A29E] text-sm sm:text-base leading-relaxed">
            {lang === "fr"
              ? "Reconnu parmi les meilleures adresses tibétaines de Paris, plébiscité pour la générosité des momos et la beauté intime de notre cave en pierre."
              : "Celebrated among Paris's finest Tibetan tables, acclaimed for comforting dumplings and our intimate subterranean stone arches."}
          </p>
        </FadeInOnScroll>

        {/* Global Rating Score Showcase with Animated Progress Bars */}
        <FadeInOnScroll delay={0.1} className="bg-[#1A1816] rounded-3xl p-6 sm:p-10 border border-[#332E2A] shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Big Score */}
            <div className="lg:col-span-4 text-center lg:text-left lg:border-r border-[#2C2824] lg:pr-8">
              <div className="text-5xl sm:text-6xl font-serif font-bold text-[#F59E0B] mb-2">
                4.7 <span className="text-2xl text-white font-sans font-normal">/ 5</span>
              </div>
              <div className="flex justify-center lg:justify-start text-[#F59E0B] gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F59E0B]" />
                ))}
              </div>
              <div className="text-sm font-semibold text-white">
                {lang === "fr" ? "Note Globale d'Excellence" : "Overall Excellence Score"}
              </div>
              <p className="text-xs text-[#A8A29E] mt-1">
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
                      <span className="text-[#D6D3D1]">{item.label[lang]}</span>
                      <span className="text-[#F59E0B] font-bold">{item.score} / 5</span>
                    </div>
                    <div className="w-full bg-[#272320] rounded-full h-2 overflow-hidden">
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAddForm(!showAddForm)}
                className="px-5 py-3 rounded-full bg-[#8B1E28] hover:bg-[#991B1B] text-white text-xs font-bold flex items-center gap-2 border border-[#F59E0B]/30 shadow-lg"
              >
                <PlusCircle className="w-4 h-4 text-[#FBBF24]" />
                <span>
                  {showAddForm
                    ? lang === "fr"
                      ? "Fermer le formulaire"
                      : "Close Form"
                    : lang === "fr"
                    ? "Partager votre expérience"
                    : "Share Your Experience"}
                </span>
              </motion.button>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Success Toast */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-8 p-4 rounded-2xl bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-medium flex items-center gap-2.5 max-w-md mx-auto shadow-lg"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add Review Inline Form with AnimatePresence */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.96 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#1C1A18] border border-[#F59E0B]/40 shadow-2xl max-w-2xl mx-auto overflow-hidden"
            >
              <h3 className="font-serif text-xl font-bold text-white mb-4">
                {lang === "fr" ? "Laisser un avis sur Little Yak" : "Leave a review for Little Yak"}
              </h3>

              <form onSubmit={handleAddReview} className="space-y-4">
                {/* Star Rating Picker */}
                <div>
                  <label className="text-xs font-bold text-[#A8A29E] uppercase tracking-wider block mb-2">
                    {lang === "fr" ? "Votre Note Globale" : "Your Rating"}
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setNewRating(star)}
                        className="p-1 transition-transform hover:scale-125"
                      >
                        <Star
                          className={`w-7 h-7 ${
                            (hoverRating || newRating) >= star
                              ? "fill-[#F59E0B] text-[#F59E0B]"
                              : "text-[#443E38]"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-[#F59E0B] ml-2">
                      {newRating} / 5
                    </span>
                  </div>
                </div>

                {/* Name & Dish Recommended */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-[#A8A29E] block mb-1">
                      {lang === "fr" ? "Votre Nom ou Pseudo *" : "Your Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="Ex: Clara M."
                      className="w-full bg-[#161413] border border-[#332E2A] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[#A8A29E] block mb-1">
                      {lang === "fr" ? "Plat Recommandé" : "Recommended Dish"}
                    </label>
                    <select
                      value={newDish}
                      onChange={(e) => setNewDish(e.target.value)}
                      className="w-full bg-[#161413] border border-[#332E2A] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F59E0B]"
                    >
                      <option value="Momos Traditionnels au Bœuf">
                        Momos Traditionnels au Bœuf
                      </option>
                      <option value="Momos Épinards & Fromage">
                        Momos Épinards & Fromage (Veggie)
                      </option>
                      <option value="Momo Jhol Soup">Momo Jhol Soup (Bouillon)</option>
                      <option value="Laphing Nouilles Froides">
                        Laphing Nouilles Froides
                      </option>
                      <option value="Gyathuk Bœuf">Gyathuk Bœuf</option>
                      <option value="Thé au Beurre Salé (Po Cha)">
                        Thé au Beurre Salé (Po Cha)
                      </option>
                      <option value="Tsampa Pak">Tsampa Pak</option>
                    </select>
                  </div>
                </div>

                {/* Comment Field */}
                <div>
                  <label className="text-xs font-medium text-[#A8A29E] block mb-1">
                    {lang === "fr" ? "Votre Commentaire *" : "Your Review *"}
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder={
                      lang === "fr"
                        ? "Racontez votre expérience, l'ambiance de la cave, les saveurs..."
                        : "Share your experience, cellar atmosphere, tastes..."
                    }
                    className="w-full bg-[#161413] border border-[#332E2A] rounded-xl px-3 py-2 text-xs text-white placeholder-[#78716C] focus:outline-none focus:border-[#F59E0B]"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 rounded-xl text-xs text-[#A8A29E] hover:text-white"
                  >
                    {lang === "fr" ? "Annuler" : "Cancel"}
                  </button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-2 rounded-xl bg-[#8B1E28] hover:bg-[#991B1B] text-white text-xs font-bold border border-[#F59E0B]/30"
                  >
                    {lang === "fr" ? "Publier mon avis" : "Submit Review"}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews Cards Stagger on Scroll */}
        <StaggerContainer
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviewsList.map((rev) => (
            <StaggerItem key={rev.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="h-full p-6 rounded-2xl bg-[#191715] border border-[#2E2A26] flex flex-col justify-between hover:border-[#D97706]/50 transition-colors shadow-lg"
              >
                <div>
                  {/* Header: Author & Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B1E28] to-[#66121B] flex items-center justify-center font-serif text-sm font-bold text-white border border-[#D97706]/30">
                        {rev.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{rev.author}</h4>
                        <span className="text-[11px] text-[#78716C]">
                          {rev.source} • {rev.date}
                        </span>
                      </div>
                    </div>

                    <div className="flex text-[#F59E0B]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B]" />
                      ))}
                    </div>
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-[#D6D3D1] leading-relaxed italic mb-4">
                    "{rev.comment[lang]}"
                  </p>
                </div>

                {/* Tag for Recommended Dish */}
                {rev.dishTag && (
                  <div className="pt-3 border-t border-[#2A2622] flex items-center gap-1.5 text-[11px] text-[#A8A29E]">
                    <span className="text-[#F59E0B]">🥟</span>
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
