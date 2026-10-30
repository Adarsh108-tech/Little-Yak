"use client";

import { useState } from "react";
import { faqList, restaurantInfo } from "@/data/restaurantData";
import { HelpCircle, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInOnScroll } from "./MotionWrapper";

export default function FaqSection({ lang, theme = "dark" }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`min-h-[calc(100dvh-3.5rem)] sm:min-h-[calc(100dvh-4rem)] flex flex-col justify-center py-8 sm:py-12 md:py-16 relative border-t overflow-hidden w-full transition-colors duration-300 ${
        theme === "light"
          ? "bg-[#FAF7F2] border-stone-200"
          : "bg-[#161413] border-[#2D2824]"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header with FadeInOnScroll */}
        <FadeInOnScroll className="text-center mb-6 sm:mb-10 max-w-3xl mx-auto">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2.5 ${
            theme === "light"
              ? "bg-amber-50 border-amber-300 text-amber-900"
              : "bg-[#272320] border-[#3E3832] text-[#F59E0B]"
          }`}>
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === "fr" ? "Foire Aux Questions" : "Frequently Asked Questions"}</span>
          </div>
          <h2 className={`font-serif text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight ${
            theme === "light" ? "text-stone-900" : "text-white"
          }`}>
            {lang === "fr" ? (
              <>
                Tout Savoir Pour Préparer <br />
                <span className="text-[#D97706] italic">Votre Visite Chez Little Yak</span>
              </>
            ) : (
              <>
                Everything You Need to Know <br />
                <span className="text-[#D97706] italic">Before Visiting Little Yak</span>
              </>
            )}
          </h2>
          <p className={`text-xs sm:text-sm md:text-base leading-relaxed ${
            theme === "light" ? "text-stone-600" : "text-[#A8A29E]"
          }`}>
            {lang === "fr"
              ? "Des réponses claires sur nos spécialités tibétaines, nos options diététiques et l'accès à notre cave historique."
              : "Clear answers on our Tibetan specialties, dietary options, and accessing our historic cellar."}
          </p>
        </FadeInOnScroll>

        {/* Accordion Items */}
        <div className="space-y-2.5 sm:space-y-3">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeInOnScroll key={index} delay={index * 0.05}>
                <div className={`rounded-xl sm:rounded-2xl border overflow-hidden transition-colors ${
                  theme === "light"
                    ? "bg-white border-stone-200 shadow-sm"
                    : "bg-[#1C1A18] border-[#332E2A]"
                }`}>
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className={`w-full p-3.5 sm:p-5 text-left flex items-center justify-between gap-3 sm:gap-4 transition-colors ${
                      theme === "light"
                        ? "text-stone-900 hover:text-[#D97706]"
                        : "text-white hover:text-[#F59E0B]"
                    }`}
                  >
                    <span className="font-serif text-base sm:text-lg font-bold">
                      {item.q[lang]}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 ${
                        isOpen
                          ? "bg-[#8B1E28] text-white border-[#8B1E28]"
                          : theme === "light"
                          ? "bg-stone-100 border-stone-300 text-stone-600"
                          : "bg-[#272320] border-[#3E3832] text-[#A8A29E]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className={`px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                          theme === "light"
                            ? "text-stone-700 border-stone-200"
                            : "text-[#D6D3D1] border-[#2A2622]"
                        }`}>
                          {item.a[lang]}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInOnScroll>
            );
          })}
        </div>

        {/* Direct Help Callout */}
        <FadeInOnScroll delay={0.2} className={`mt-10 p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left ${
          theme === "light"
            ? "bg-white border-stone-200 shadow-sm"
            : "bg-[#1F1C1A] border-[#38332E]"
        }`}>
          <div>
            <h4 className={`font-serif text-base font-bold ${
              theme === "light" ? "text-stone-900" : "text-white"
            }`}>
              {lang === "fr" ? "Une question sans réponse ?" : "Have an unanswered question?"}
            </h4>
            <p className={`text-xs ${theme === "light" ? "text-stone-600" : "text-[#A8A29E]"}`}>
              {lang === "fr"
                ? "Notre équipe se fera un plaisir de vous répondre par téléphone."
                : "Our friendly team is always happy to guide you over the phone."}
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`tel:${restaurantInfo.phoneRaw}`}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold border flex items-center gap-2 transition-colors shrink-0 ${
              theme === "light"
                ? "bg-stone-100 hover:bg-stone-200 text-stone-900 border-stone-300 hover:border-[#D97706]"
                : "bg-[#272320] hover:bg-[#38332E] text-white border-[#3E3832] hover:border-[#F59E0B]"
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-[#D97706]" />
            <span>{restaurantInfo.phone}</span>
          </motion.a>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
