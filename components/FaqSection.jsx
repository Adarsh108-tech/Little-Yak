"use client";

import { useState } from "react";
import { faqList, restaurantInfo } from "@/data/restaurantData";
import { HelpCircle, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInOnScroll } from "./MotionWrapper";

export default function FaqSection({ lang }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#161413] relative border-t border-[#2D2824]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with FadeInOnScroll */}
        <FadeInOnScroll className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#272320] border border-[#3E3832] text-xs font-semibold text-[#F59E0B] uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === "fr" ? "Foire Aux Questions" : "Frequently Asked Questions"}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Tout Savoir Pour Préparer <br />
                <span className="text-[#F59E0B] italic">Votre Visite Chez Little Yak</span>
              </>
            ) : (
              <>
                Everything You Need to Know <br />
                <span className="text-[#F59E0B] italic">Before Visiting Little Yak</span>
              </>
            )}
          </h2>
          <p className="text-[#A8A29E] text-sm sm:text-base">
            {lang === "fr"
              ? "Des réponses claires sur nos spécialités tibétaines, nos options diététiques et l'accès à notre cave historique."
              : "Clear answers on our Tibetan specialties, dietary options, and accessing our historic cellar."}
          </p>
        </FadeInOnScroll>

        {/* Accordion Items */}
        <div className="space-y-3">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeInOnScroll key={index} delay={index * 0.05}>
                <div className="rounded-2xl bg-[#1C1A18] border border-[#332E2A] overflow-hidden transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-[#F59E0B] transition-colors"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold">
                      {item.q[lang]}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`w-7 h-7 rounded-full bg-[#272320] border border-[#3E3832] flex items-center justify-center shrink-0 ${
                        isOpen ? "bg-[#8B1E28] text-white" : "text-[#A8A29E]"
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
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#D6D3D1] leading-relaxed border-t border-[#2A2622]">
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
        <FadeInOnScroll delay={0.2} className="mt-10 p-6 rounded-2xl bg-[#1F1C1A] border border-[#38332E] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-base font-bold text-white">
              {lang === "fr" ? "Une question sans réponse ?" : "Have an unanswered question?"}
            </h4>
            <p className="text-xs text-[#A8A29E]">
              {lang === "fr"
                ? "Notre équipe se fera un plaisir de vous répondre par téléphone."
                : "Our friendly team is always happy to guide you over the phone."}
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`tel:${restaurantInfo.phoneRaw}`}
            className="px-5 py-2.5 rounded-full bg-[#272320] hover:bg-[#38332E] text-white text-xs font-semibold border border-[#3E3832] flex items-center gap-2 hover:border-[#F59E0B] transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>{restaurantInfo.phone}</span>
          </motion.a>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
