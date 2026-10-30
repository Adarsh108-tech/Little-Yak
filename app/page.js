"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StoryVault from "@/components/StoryVault";
import MenuSection from "@/components/MenuSection";
import TakeoutCartDrawer from "@/components/TakeoutCartDrawer";
import ReservationModal from "@/components/ReservationModal";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import LocationHours from "@/components/LocationHours";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [lang, setLang] = useState("fr");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Cart total count
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Add to cart handler
  const handleAddToCart = (dishItem) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) =>
          item.id === dishItem.id &&
          item.selectedOption === dishItem.selectedOption
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += dishItem.quantity || 1;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            ...dishItem,
            quantity: dishItem.quantity || 1,
          },
        ];
      }
    });
  };

  // Update quantity handler
  const handleUpdateQuantity = (dishId, selectedOption, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(dishId, selectedOption);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === dishId && item.selectedOption === selectedOption) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Remove item handler
  const handleRemoveItem = (dishId, selectedOption) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.id === dishId && item.selectedOption === selectedOption)
      )
    );
  };

  // Clear cart handler
  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="relative min-h-screen bg-[#121110] text-[#FAF7F2]">
      {/* Top Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onOpenReservation={() => setIsReservationOpen(true)}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* 2. Medieval Stone Vault & Heritage Story */}
        <StoryVault
          lang={lang}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* 3. Interactive Menu & Specialties */}
        <MenuSection
          lang={lang}
          onAddToCart={handleAddToCart}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* 4. High-Res Photo Gallery with Lightbox */}
        <GallerySection lang={lang} />

        {/* 5. Verified Customer Reviews & Review Form */}
        <ReviewsSection lang={lang} />

        {/* 6. Interactive FAQ Accordion */}
        <FaqSection lang={lang} />

        {/* 7. Opening Hours, Metro Access & Interactive Map */}
        <LocationHours
          lang={lang}
          onOpenReservation={() => setIsReservationOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        setLang={setLang}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Takeout Order Basket Drawer */}
      <TakeoutCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        lang={lang}
      />

      {/* Table Reservation Interactive Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        lang={lang}
      />

      {/* Floating Cart Button (with spring entrance) */}
      <AnimatePresence>
        {cartCount > 0 && !isCartOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-20 right-5 z-40 p-4 rounded-full bg-gradient-to-r from-[#8B1E28] to-[#991B1B] text-white shadow-2xl border border-[#F59E0B]/50 flex items-center gap-2.5 gold-glow cursor-pointer"
            title={lang === "fr" ? "Voir mon panier" : "View Basket"}
          >
            <ShoppingBag className="w-5 h-5 text-[#FBBF24]" />
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white text-[#8B1E28]">
              {cartCount}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar
        lang={lang}
        onOpenReservation={() => setIsReservationOpen(true)}
      />
    </div>
  );
}
