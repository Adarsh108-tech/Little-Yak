"use client";

import { useState } from "react";
import { X, Plus, Minus, ShoppingBag, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function DishModal({ dish, lang, theme = "dark", onClose, onAddToCart }) {
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
        className={`relative w-full max-w-2xl border rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col ${
          theme === "light"
            ? "bg-white border-stone-200 text-stone-900"
            : "bg-[#1A1816] border-[#3E3832] text-white"
        }`}
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
        <div className="overflow-y-auto" data-lenis-prevent>
          {/* Dish Header Image */}
          <div className="relative h-64 sm:h-72 w-full bg-[#121110]">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${
              theme === "light" ? "from-white" : "from-[#1A1816]"
            }`} />

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
            <div className={`flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b pb-4 ${
              theme === "light" ? "border-stone-200" : "border-[#2E2A26]"
            }`}>
              <div>
                <h3 className={`font-serif text-2xl sm:text-3xl font-bold mb-1 ${
                  theme === "light" ? "text-stone-900" : "text-white"
                }`}>
                  {dish.name}
                </h3>
                <div className={`flex items-center gap-3 text-xs ${
                  theme === "light" ? "text-stone-500" : "text-[#A8A29E]"
                }`}>
                  {/* Spice meter */}
                  <div className="flex items-center gap-1">
                    <span className="font-medium">
                      {lang === "fr" ? "Épices :" : "Spiciness:"}
                    </span>
                    {dish.spicyLevel === 0 ? (
                      <span className="text-emerald-500 font-medium">
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

              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#D97706]">
                {dish.price.toFixed(2)} €
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D97706] mb-2">
                {lang === "fr" ? "Description & Tradition" : "Description & Heritage"}
              </h4>
              <p className={`text-sm sm:text-base leading-relaxed ${
                theme === "light" ? "text-stone-700" : "text-[#D6D3D1]"
              }`}>
                {dish.description[lang]}
              </p>
            </div>

            {/* Ingredients */}
            {dish.ingredients && (
              <div>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
                  theme === "light" ? "text-stone-500" : "text-[#A8A29E]"
                }`}>
                  {lang === "fr" ? "Ingrédients Principaux" : "Main Ingredients"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {dish.ingredients[lang].map((ing, i) => (
                    <span
                      key={i}
                      className={`px-2.5 py-1 rounded-md border text-xs ${
                        theme === "light"
                          ? "bg-stone-100 border-stone-200 text-stone-800"
                          : "bg-[#25211E] border-[#38332E] text-[#E7E5E4]"
                      }`}
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
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
                  theme === "light" ? "text-stone-500" : "text-[#A8A29E]"
                }`}>
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
                          ? "bg-[#8B1E28]/20 border-[#D97706] text-[#8B1E28] font-bold"
                          : theme === "light"
                          ? "bg-stone-50 border-stone-200 text-stone-700 hover:text-stone-900"
                          : "bg-[#25211E] border-[#38332E] text-[#A8A29E] hover:text-white"
                      }`}
                    >
                      <span>{opt}</span>
                      {selectedOption === opt && (
                        <Check className="w-4 h-4 text-[#D97706]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Add Button */}
            <div className={`pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
              theme === "light" ? "border-stone-200" : "border-[#2E2A26]"
            }`}>
              <div className={`flex items-center gap-3 border rounded-xl px-3 py-1.5 ${
                theme === "light"
                  ? "bg-stone-50 border-stone-300"
                  : "bg-[#241F1C] border-[#3E3832]"
              }`}>
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className={`p-1 rounded-lg transition-colors ${
                    theme === "light"
                      ? "text-stone-600 hover:text-stone-900 hover:bg-stone-200"
                      : "text-[#A8A29E] hover:text-white hover:bg-[#38332E]"
                  }`}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className={`w-8 text-center font-bold text-base ${
                  theme === "light" ? "text-stone-900" : "text-white"
                }`}>
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className={`p-1 rounded-lg transition-colors ${
                    theme === "light"
                      ? "text-stone-600 hover:text-stone-900 hover:bg-stone-200"
                      : "text-[#A8A29E] hover:text-white hover:bg-[#38332E]"
                  }`}
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
