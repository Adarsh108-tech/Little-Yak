"use client";

import { useState, useMemo } from "react";
import { menuCategories, menuItems } from "@/data/restaurantData";
import {
  Utensils,
  Search,
  Plus,
  Flame,
  Leaf,
  Check,
  ShoppingBag,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DishModal from "./DishModal";
import { FadeInOnScroll } from "./MotionWrapper";

export default function MenuSection({ lang, onAddToCart, onOpenCart }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterVege, setFilterVege] = useState(false);
  const [filterSpicy, setFilterSpicy] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [quickAddAlert, setQuickAddAlert] = useState(null);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }
      if (filterVege && !item.isVegetarian) {
        return false;
      }
      if (filterSpicy && item.spicyLevel === 0) {
        return false;
      }
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const nameMatch = item.name.toLowerCase().includes(q);
        const descMatch = item.description[lang].toLowerCase().includes(q);
        const tibetanMatch = item.tibetan?.toLowerCase().includes(q);
        const ingMatch = item.ingredients?.[lang]?.some((ing) =>
          ing.toLowerCase().includes(q)
        );
        return nameMatch || descMatch || tibetanMatch || ingMatch;
      }
      return true;
    });
  }, [activeCategory, filterVege, filterSpicy, searchQuery, lang]);

  const handleQuickAdd = (e, dish) => {
    e.stopPropagation();
    onAddToCart({
      ...dish,
      quantity: 1,
      selectedOption: dish.options ? dish.options[0] : null,
    });
    setQuickAddAlert(dish.id);
    setTimeout(() => setQuickAddAlert(null), 1200);
  };

  return (
    <section id="menu" className="py-20 bg-[#121110] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with FadeInOnScroll */}
        <FadeInOnScroll className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#272320] border border-[#3E3832] text-xs font-semibold text-[#F59E0B] uppercase tracking-widest mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>{lang === "fr" ? "La Carte & Spécialités" : "Our Menu & Specialties"}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Traditions Culinaires <br />
                <span className="text-[#F59E0B] italic">Des Hauts Plateaux du Tibet</span>
              </>
            ) : (
              <>
                Culinary Traditions <br />
                <span className="text-[#F59E0B] italic">From the Roof of the World</span>
              </>
            )}
          </h2>
          <p className="text-[#A8A29E] text-sm sm:text-base leading-relaxed">
            {lang === "fr"
              ? "Tous nos plats sont préparés sur place avec des ingrédients frais, des farces généreuses et un équilibre subtil d'épices de l'Himalaya. Cliquez sur un plat pour voir ses secrets de préparation."
              : "All dishes are freshly prepared on site with genuine ingredients, wholesome fillings, and a delicate balance of Himalayan herbs. Click any dish to reveal its preparation secrets."}
          </p>
        </FadeInOnScroll>

        {/* Filter Controls Toolbar */}
        <FadeInOnScroll delay={0.1} className="space-y-4 mb-10">
          {/* Category Tabs with Animated Pill indicator */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
            {menuCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors z-10 ${
                    isActive ? "text-white" : "text-[#A8A29E] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-gradient-to-r from-[#8B1E28] to-[#991B1B] rounded-full border border-[#F59E0B]/40 shadow-lg -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute inset-0 bg-[#1E1C1A] rounded-full border border-[#332E2A] -z-10" />
                  )}
                  {cat.label[lang]}
                </button>
              );
            })}
          </div>

          {/* Search Bar & Dietary Quick Toggles */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#78716C] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === "fr"
                    ? "Rechercher un plat, ingrédient..."
                    : "Search dish, ingredient..."
                }
                className="w-full bg-[#1E1C1A] border border-[#332E2A] rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-[#78716C] focus:outline-none focus:border-[#F59E0B] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#A8A29E] hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Dietary Toggles */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <motion.button
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilterVege(!filterVege)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
                  filterVege
                    ? "bg-emerald-950/80 text-emerald-300 border-emerald-500/60"
                    : "bg-[#1E1C1A] text-[#A8A29E] border-[#332E2A] hover:text-white"
                }`}
              >
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === "fr" ? "Végétarien uniquement" : "Vegetarian only"}</span>
              </motion.button>

              <motion.button
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilterSpicy(!filterSpicy)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
                  filterSpicy
                    ? "bg-rose-950/80 text-rose-300 border-rose-500/60"
                    : "bg-[#1E1C1A] text-[#A8A29E] border-[#332E2A] hover:text-white"
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-rose-400" />
                <span>{lang === "fr" ? "Plats Épicés" : "Spicy only"}</span>
              </motion.button>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Menu Cards Grid with Stagger & Layout Animations */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#1A1816] rounded-2xl border border-[#2D2824]">
            <Utensils className="w-10 h-10 text-[#78716C] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-xl font-bold text-white mb-1">
              {lang === "fr" ? "Aucun plat trouvé" : "No dishes found"}
            </h3>
            <p className="text-xs text-[#A8A29E]">
              {lang === "fr"
                ? "Essayez de modifier votre recherche ou vos filtres."
                : "Try adjusting your search query or dietary filters."}
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((dish) => (
                <motion.div
                  key={dish.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedDish(dish)}
                  className="group cursor-pointer bg-[#191715] rounded-2xl border border-[#2F2A26] overflow-hidden flex flex-col justify-between shadow-lg hover:border-[#D97706]/60 transition-colors"
                >
                  {/* Image Section */}
                  <div className="relative h-48 w-full bg-[#131110] overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#191715] via-transparent to-transparent opacity-80" />

                    {/* Badges Overlay */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {dish.badges?.[0] && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#8B1E28]/95 text-white border border-[#D97706]/30 shadow">
                          {dish.badges[0]}
                        </span>
                      )}
                      {dish.isVegetarian && (
                        <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-900/90 text-emerald-200 border border-emerald-500/30">
                          🌱 Veggie
                        </span>
                      )}
                    </div>

                    {/* Tibetan Script */}
                    {dish.tibetan && (
                      <div className="absolute bottom-2.5 right-3 text-xs font-serif text-[#F59E0B] bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded border border-[#D97706]/30">
                        {dish.tibetan}
                      </div>
                    )}
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Header: Title and Price */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#F59E0B] transition-colors leading-snug">
                          {dish.name}
                        </h3>
                        <span className="font-serif text-lg font-bold text-[#F59E0B] shrink-0">
                          {dish.price.toFixed(2)} €
                        </span>
                      </div>

                      {/* Short Description */}
                      <p className="text-xs text-[#A8A29E] leading-relaxed line-clamp-2 mb-3">
                        {dish.description[lang]}
                      </p>
                    </div>

                    {/* Footer of Card */}
                    <div className="pt-3 border-t border-[#2A2622] flex items-center justify-between">
                      {/* Spice indicator */}
                      <div className="flex items-center gap-1 text-[11px]">
                        {dish.spicyLevel === 0 ? (
                          <span className="text-emerald-400 font-medium">
                            {lang === "fr" ? "Doux" : "Mild"}
                          </span>
                        ) : (
                          <span className="text-amber-500">
                            {[...Array(dish.spicyLevel)].map((_, i) => (
                              <span key={i}>🌶️</span>
                            ))}
                          </span>
                        )}
                      </div>

                      {/* Actions: View / Quick Add */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#A8A29E] group-hover:text-white px-2 py-1 transition-colors">
                          {lang === "fr" ? "Détails" : "Details"}
                        </span>

                        <motion.button
                          type="button"
                          whileTap={{ scale: 0.85 }}
                          onClick={(e) => handleQuickAdd(e, dish)}
                          className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 shadow transition-colors ${
                            quickAddAlert === dish.id
                              ? "bg-emerald-600 text-white"
                              : "bg-[#272320] text-[#F59E0B] hover:bg-[#8B1E28] hover:text-white border border-[#3E3832]"
                          }`}
                          title={lang === "fr" ? "Ajouter au panier à emporter" : "Add to takeaway cart"}
                        >
                          {quickAddAlert === dish.id ? (
                            <Check className="w-3.5 h-3.5" />
                          ) : (
                            <Plus className="w-3.5 h-3.5" />
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Takeaway Order Notice Card with FadeInOnScroll */}
        <FadeInOnScroll delay={0.2} className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1C1816] via-[#241F1C] to-[#1C1816] border border-[#38332E] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#8B1E28]/40 border border-[#D97706]/40 flex items-center justify-center shrink-0">
              <ShoppingBag className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                {lang === "fr" ? "Click & Collect ou Livraison à Domicile" : "Click & Collect or Home Delivery"}
              </h4>
              <p className="text-xs sm:text-sm text-[#A8A29E]">
                {lang === "fr"
                  ? "Préparez votre commande en 2 clics avec notre panier ou commandez sur Deliveroo."
                  : "Assemble your order in seconds with our takeaway basket or order via Deliveroo."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenCart}
              className="flex-1 md:flex-initial px-5 py-2.5 rounded-full bg-[#8B1E28] hover:bg-[#991B1B] text-white text-xs font-bold border border-[#F59E0B]/30 shadow text-center transition-all"
            >
              {lang === "fr" ? "Voir mon panier" : "View my basket"}
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="https://deliveroo.fr/fr/menu/paris/chatelet-les-halles/little-yak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial px-5 py-2.5 rounded-full bg-[#00CDBC]/20 hover:bg-[#00CDBC]/30 text-[#00CDBC] border border-[#00CDBC]/40 text-xs font-bold text-center transition-all"
            >
              Deliveroo ↗
            </motion.a>
          </div>
        </FadeInOnScroll>
      </div>

      {/* Selected Dish Interactive Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedDish && (
          <DishModal
            dish={selectedDish}
            lang={lang}
            onClose={() => setSelectedDish(null)}
            onAddToCart={onAddToCart}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
