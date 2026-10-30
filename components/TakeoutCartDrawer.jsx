"use client";

import { useState } from "react";
import { restaurantInfo } from "@/data/restaurantData";
import {
  X,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  Clock,
  Phone,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TakeoutCartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  lang,
}) {
  const [pickupTime, setPickupTime] = useState("asap");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [notes, setNotes] = useState("");

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const generateWhatsAppMessage = () => {
    let msg = `*COMMANDE LITTLE YAK PARIS (À EMPORTER)*\n\n`;
    if (customerName) msg += `Nom: ${customerName}\n`;
    if (customerPhone) msg += `Téléphone: ${customerPhone}\n`;
    msg += `Heure de retrait: ${
      pickupTime === "asap" ? "Au plus vite (15-20 min)" : pickupTime
    }\n\n`;
    msg += `*ARTICLES :*\n`;
    cart.forEach((item) => {
      msg += `• ${item.quantity}x ${item.name} (${item.price.toFixed(2)}€)`;
      if (item.selectedOption) msg += ` - ${item.selectedOption}`;
      msg += `\n`;
    });
    msg += `\n*TOTAL : ${subtotal.toFixed(2)} €*\n`;
    if (notes) msg += `Notes spéciales : ${notes}\n`;
    return encodeURIComponent(msg);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="w-full max-w-md bg-[#161413] border-l border-[#2D2824] h-full flex flex-col justify-between shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-[#2D2824] flex items-center justify-between bg-[#1A1816]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#8B1E28]/40 border border-[#D97706]/40 flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    {lang === "fr" ? "Panier À Emporter" : "Takeaway Basket"}
                  </h3>
                  <span className="text-[11px] text-[#A8A29E]">
                    {cart.length}{" "}
                    {lang === "fr"
                      ? cart.length > 1
                        ? "articles sélectionnés"
                        : "article sélectionné"
                      : cart.length > 1
                      ? "items selected"
                      : "item selected"}
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full bg-[#272320] text-[#A8A29E] hover:text-white hover:bg-[#38332E] transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto">
                    <img
                      src="/logo.png"
                      alt="Little Yak"
                      className="w-full h-full object-contain opacity-80"
                    />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    {lang === "fr" ? "Votre panier est vide" : "Your basket is empty"}
                  </h4>
                  <p className="text-xs text-[#A8A29E] max-w-xs mx-auto">
                    {lang === "fr"
                      ? "Sélectionnez vos momos, nouilles et plats préférés sur notre carte pour préparer votre commande."
                      : "Choose your favorite momos, noodles, and specialties from our menu to begin your order."}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="mt-4 px-5 py-2 rounded-full bg-[#8B1E28] hover:bg-[#991B1B] text-white text-xs font-semibold"
                  >
                    {lang === "fr" ? "Découvrir la carte" : "Browse Menu"}
                  </motion.button>
                </div>
              ) : (
                <>
                  {/* Pickup Preparation Badge */}
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-[#241F1C] border border-[#3E3832] text-xs text-[#E7E5E4]">
                    <Clock className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    <span>
                      {lang === "fr"
                        ? "Préparation minute sur place • Prêt en 15 à 20 minutes"
                        : "Freshly cooked to order • Ready in 15 to 20 minutes"}
                    </span>
                  </div>

                  {/* Items List */}
                  <div className="space-y-3">
                    {cart.map((item, idx) => (
                      <div
                        key={`${item.id}-${idx}`}
                        className="p-3.5 rounded-xl bg-[#1C1A18] border border-[#2E2A26] flex items-center justify-between gap-3 shadow"
                      >
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium text-sm text-white truncate">
                            {item.name}
                          </h5>
                          {item.selectedOption && (
                            <span className="text-[11px] text-[#D97706] block">
                              {item.selectedOption}
                            </span>
                          )}
                          <span className="text-xs font-bold text-[#F59E0B]">
                            {(item.price * item.quantity).toFixed(2)} €
                          </span>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-2 bg-[#272320] rounded-lg px-2 py-1 border border-[#3E3832]">
                            <button
                              onClick={() =>
                                onUpdateQuantity(item.id, item.selectedOption, item.quantity - 1)
                              }
                              className="text-[#A8A29E] hover:text-white"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-bold text-white w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                onUpdateQuantity(item.id, item.selectedOption, item.quantity + 1)
                              }
                              className="text-[#A8A29E] hover:text-white"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.id, item.selectedOption)}
                            className="p-1 text-[#78716C] hover:text-rose-400 transition-colors"
                            title={lang === "fr" ? "Supprimer" : "Remove"}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pickup Time Choice */}
                  <div className="space-y-1.5 pt-2">
                    <label className="text-xs font-bold text-[#A8A29E] uppercase tracking-wider">
                      {lang === "fr" ? "Heure de retrait souhaitée" : "Estimated Pickup Time"}
                    </label>
                    <select
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full bg-[#1C1A18] border border-[#38332E] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F59E0B]"
                    >
                      <option value="asap">
                        {lang === "fr" ? "Au plus vite (15-20 min)" : "As soon as possible (15-20 min)"}
                      </option>
                      <option value="12h45">12:45</option>
                      <option value="13h15">13:15</option>
                      <option value="13h45">13:45</option>
                      <option value="19h15">19:15</option>
                      <option value="19h45">19:45</option>
                      <option value="20h15">20:15</option>
                      <option value="20h45">20:45</option>
                      <option value="21h15">21:15</option>
                    </select>
                  </div>

                  {/* Special Instructions */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#A8A29E] uppercase tracking-wider">
                      {lang === "fr" ? "Instructions spéciales" : "Special Instructions"}
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={
                        lang === "fr"
                          ? "Ex: Piment à part, baguettes supplémentaires..."
                          : "e.g., Chili on the side, extra chopsticks..."
                      }
                      className="w-full bg-[#1C1A18] border border-[#38332E] rounded-xl px-3 py-2 text-xs text-white placeholder-[#78716C] focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>

                  {/* Customer Contact details */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] text-[#A8A29E]">
                        {lang === "fr" ? "Votre Nom" : "Your Name"}
                      </label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Jean D."
                        className="w-full bg-[#1C1A18] border border-[#38332E] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-[#A8A29E]">
                        {lang === "fr" ? "Téléphone" : "Phone"}
                      </label>
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="06 12 34 56 78"
                        className="w-full bg-[#1C1A18] border border-[#38332E] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Drawer Footer with Actions */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-[#2D2824] bg-[#1A1816] space-y-3">
                {/* Subtotal */}
                <div className="flex items-center justify-between text-base">
                  <span className="font-medium text-[#A8A29E]">
                    {lang === "fr" ? "Total de la commande" : "Total Amount"}
                  </span>
                  <span className="font-serif text-2xl font-bold text-[#F59E0B]">
                    {subtotal.toFixed(2)} €
                  </span>
                </div>

                {/* Direct Phone Call Order */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${restaurantInfo.phoneRaw}`}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8B1E28] to-[#991B1B] hover:from-[#991B1B] hover:to-[#B91C1C] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg border border-[#F59E0B]/30"
                >
                  <Phone className="w-4 h-4 text-[#FBBF24]" />
                  <span>
                    {lang === "fr" ? "Commander par Téléphone" : "Call to Order"} ({restaurantInfo.phone})
                  </span>
                </motion.a>

                {/* Direct WhatsApp Order */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/33188480970?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{lang === "fr" ? "Envoyer la commande via WhatsApp" : "Send Order via WhatsApp"}</span>
                </motion.a>

                {/* Deliveroo link */}
                <a
                  href={restaurantInfo.deliverooUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-xl bg-[#00CDBC]/10 hover:bg-[#00CDBC]/20 text-[#00CDBC] border border-[#00CDBC]/30 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>
                    {lang === "fr" ? "Ou se faire livrer avec Deliveroo" : "Or get delivery via Deliveroo"}
                  </span>
                </a>

                {/* Clear button */}
                <div className="text-center pt-1">
                  <button
                    onClick={onClearCart}
                    className="text-[11px] text-[#78716C] hover:text-rose-400 underline transition-colors"
                  >
                    {lang === "fr" ? "Vider le panier" : "Clear basket"}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
