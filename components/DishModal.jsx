"use client";

import { useState } from "react";
import { X, Plus, Minus, ShoppingBag, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function DishModal({ dish, lang, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(
    dish.options ? dish.options[0] : null
  );
  const [addedNotice, setAddedNotice] = useState(false);

  if (!dish) return null;

  const handleAdd = () => {
    onAddToCart({
      ...dish,
      selectedOption,
      quantity,
    });
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      onClose();
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        className="relative w-full max-w-2xl bg-[#1A1816] border border-[#3E3832] rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors border border-white/20"
        >
          <X className="w-5 h-5" />
        </motion.button>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto">
          {/* Dish Header Image */}
          <div className="relative h-64 sm:h-72 w-full bg-[#121110]">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816] via-[#1A1816]/30 to-transparent" />

            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {dish.badges?.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#8B1E28]/90 text-white border border-[#D97706]/40 shadow"
                >
                  {badge}
                </span>
              ))}
              {dish.isVegetarian && (
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-900/90 text-emerald-200 border border-emerald-500/30">
                  🌱 {lang === "fr" ? "Végétarien" : "Vegetarian"}
                </span>
              )}
            </div>

            {/* Tibetan Script Badge */}
            {dish.tibetan && (
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-[#D97706]/40 text-[#F59E0B] text-sm font-serif">
                {dish.tibetan}
              </div>
            )}
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Title & Price */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-[#2E2A26] pb-4">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                  {dish.name}
                </h3>
                <div className="flex items-center gap-3 text-xs text-[#A8A29E]">
                  {/* Spice meter */}
                  <div className="flex items-center gap-1">
                    <span className="text-[#A8A29E] font-medium">
                      {lang === "fr" ? "Épices :" : "Spiciness:"}
                    </span>
                    {dish.spicyLevel === 0 ? (
                      <span className="text-[#10B981] font-medium">
                        {lang === "fr" ? "Doux / Non pimenté" : "Mild / Not spicy"}
                      </span>
                    ) : (
                      <span className="flex text-amber-500">
                        {[...Array(dish.spicyLevel)].map((_, i) => (
                          <span key={i}>🌶️</span>
                        ))}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#F59E0B]">
                {dish.price.toFixed(2)} €
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D97706] mb-2">
                {lang === "fr" ? "Description & Tradition" : "Description & Heritage"}
              </h4>
              <p className="text-[#D6D3D1] text-sm sm:text-base leading-relaxed">
                {dish.description[lang]}
              </p>
            </div>

            {/* Ingredients */}
            {dish.ingredients && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A8A29E] mb-2.5">
                  {lang === "fr" ? "Ingrédients Principaux" : "Main Ingredients"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {dish.ingredients[lang].map((ing, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#25211E] border border-[#38332E] text-xs text-[#E7E5E4]"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Options selection if applicable */}
            {dish.options && dish.options.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A8A29E] mb-2.5">
                  {lang === "fr" ? "Choisir votre option" : "Select Your Option"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {dish.options.map((opt, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedOption(opt)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-medium border text-left flex items-center justify-between transition-all ${
                        selectedOption === opt
                          ? "bg-[#8B1E28]/40 border-[#F59E0B] text-white"
                          : "bg-[#25211E] border-[#38332E] text-[#A8A29E] hover:text-white"
                      }`}
                    >
                      <span>{opt}</span>
                      {selectedOption === opt && (
                        <Check className="w-4 h-4 text-[#F59E0B]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Add Button */}
            <div className="pt-4 border-t border-[#2E2A26] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 bg-[#241F1C] border border-[#3E3832] rounded-xl px-3 py-1.5">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 rounded-lg text-[#A8A29E] hover:text-white hover:bg-[#38332E] transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-bold text-white text-base">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 rounded-lg text-[#A8A29E] hover:text-white hover:bg-[#38332E] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAdd}
                className="w-full sm:w-auto flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#8B1E28] to-[#991B1B] hover:from-[#991B1B] hover:to-[#B91C1C] text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg border border-[#F59E0B]/30"
              >
                {addedNotice ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{lang === "fr" ? "Ajouté au panier !" : "Added to Basket!"}</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#FBBF24]" />
                    <span>
                      {lang === "fr" ? "Ajouter au panier à emporter" : "Add to Takeaway"} •{" "}
                      {(dish.price * quantity).toFixed(2)} €
                    </span>
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
