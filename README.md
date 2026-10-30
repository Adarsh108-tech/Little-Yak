# Little Yak Paris — Tibetan Restaurant Website (Next.js)

A recreation and modern UX redesign of the [Little Yak - Restaurant Tibétain à Paris 75004](https://little-yak.onataste.fr/) website, built with **Next.js (App Router)**, **React 19**, **Tailwind CSS**, and **Lucide Icons**.

Located at **61 Rue Quincampoix, 75004 Paris** near the Centre Pompidou in the Marais / Châtelet district.

---

## 🚀 Getting Started

The application is fully installed and ready to run.

```bash
# Start the development server (runs at http://localhost:3000)
npm run dev

# Or build for production
npm run build
npm run start
```

---

## ✨ Key UX & UI Improvements Over the Original Website

| Feature | Original Website (`little-yak.onataste.fr`) | Our Recreated & Enhanced Next.js Version |
| :--- | :--- | :--- |
| **Visual Identity & Atmosphere** | Generic "OnaTaste Hub" third-party template with off-brand ads and external pizzeria/kebab links. | **Artisanal Tibetan & Parisian Cave aesthetic** with deep Himalayan garnet (`#8B1E28`), warm saffron amber (`#D97706`), traditional prayer-flag ribbon accent, and authentic high-resolution restaurant photos. |
| **Language & Accessibility** | Inconsistent mix of English and French text on the same page. | **Instant Bilingual Switcher (`FR` / `EN`)** allowing seamless browsing for both Parisian locals and international tourists visiting Beaubourg. |
| **Table Reservation Experience** | Only a raw `tel:` phone link with no booking form or availability. | **Interactive Table Reservation Module**: Select party size (1–10+), date, lunch/dinner slot, and choose seating ambience (**Medieval Stone Vault** vs. **Ground Floor**). Generates a booking reference `#YAK-XXXX` with 1-click **Add to Google Calendar**. |
| **Menu Browsing & Dietary Needs** | "Menu with prices coming soon" notice, unclickable dish names with no prices or details. | **Interactive Categorized Menu**: Filter by *Momos*, *Noodles & Soups*, *Himalayan Specialties*, *Drinks & Teas*, *Desserts*. Real prices, spice level indicators (🌶️), vegetarian/vegan filters (`🌱`), and real-time keyword search. |
| **Dish Cultural Details & Secrets** | Generic one-line placeholders. | **Dish Detail Modal**: High-res image, ingredients breakdown, preparation secret (e.g. 8-hour slow broth, hand-kneaded dough, wild Timut pepper), spice customization, and Steam vs. Pan-fried (Kothey) options. |
| **Takeaway & Delivery Experience** | None. Only raw static text. | **Interactive Takeaway Basket (Click & Collect Simulator)**: Add items to order, adjust quantities, choose pickup time, add special cooking instructions, and 1-click order via **Phone**, **WhatsApp formatted message**, or **Deliveroo**. |
| **The Historic Stone Vault Story** | Brief standard paragraph. | **Immersive Subterranean Vault Storytelling**: Highlights the 14th/16th-century dressed-stone vaulted cellar on Rue Quincampoix, Tibetan hospitality (*Tashi Delek*), and slow-food philosophy. |
| **Photo Gallery** | Static gallery thumbnails with basic layout. | **Interactive Filterable Gallery + Lightbox**: Filter by *Stone Vault*, *Handmade Dishes*, and *Atmosphere*. Fullscreen lightbox with zoom, caption descriptions, and keyboard arrows (`←`, `→`, `ESC`). |
| **Verified Customer Reviews** | Static text with non-working submission form. | **Interactive Reviews Showcase**: **4.7 / 5** rating breakdown (Food: 4.9, Vault Ambience: 4.8, Hospitality: 4.9, Value: 4.8) + real verified patron quotes (Lucie B., Erwan L., Zamzam, François D.) + **working interactive review submission form** that appends new reviews live with instant toast feedback. |
| **Hours, Metro & Interactive Map** | Empty `<ul>` for opening hours and raw unstyled map. | **Live Open/Closed Status**: Dynamic indicator based on current time, weekly schedule with "Today" highlighted, walking directions from **Rambuteau (Line 11)**, **Châtelet - Les Halles**, **Hôtel de Ville**, and 1-click navigation links for Google Maps, Apple Maps, and Waze. |
| **Mobile Experience** | Cluttered standard mobile layout. | **Fixed Mobile Quick-Action Toolbar**: Instant bottom access on mobile devices to **Call**, **Book a Table**, **View Menu**, and **Get Directions**. |

---

## 📁 Project Architecture

```
littleYak/
├── app/
│   ├── globals.css              # Custom Tibetan color palette, scrollbars & animations
│   ├── layout.js                # Root layout, Google Fonts (Playfair + Jakarta), JSON-LD Schema
│   └── page.js                  # Main landing page with unified client state (lang, cart, modals)
├── components/
│   ├── Navbar.jsx               # Header, Tibetan brand, live open status, language switch & cart counter
│   ├── Hero.jsx                 # Atmospheric hero with authentic vaulted cellar background & CTA
│   ├── StoryVault.jsx           # Medieval subterranean stone vault history & Himalayan craftsmanship
│   ├── MenuSection.jsx          # Filterable menu, dietary toggles, search, and dish cards
│   ├── DishModal.jsx            # Interactive dish modal with ingredients, spice levels, options
│   ├── TakeoutCartDrawer.jsx    # Click & Collect cart drawer with WhatsApp/Phone/Deliveroo checkout
│   ├── ReservationModal.jsx     # Step-by-step table booking with Google Calendar export
│   ├── GallerySection.jsx       # Category photo gallery with interactive fullscreen lightbox
│   ├── ReviewsSection.jsx       # Global rating score breakdown + live review submitter
│   ├── FaqSection.jsx           # Accordion FAQ answering common guest questions
│   ├── LocationHours.jsx        # Schedule with "Today" highlighted, Metro stops & Google Maps
│   ├── Footer.jsx               # Tibetan blessing, hours recap, contacts, and legal info
│   └── MobileStickyBar.jsx      # Mobile sticky bottom toolbar (Call, Book, Menu, Directions)
├── data/
│   └── restaurantData.js        # Authentic restaurant info, menu items, prices, hours, reviews, FAQs
└── public/
    └── images/                  # 17 authentic high-res restaurant photos & dishes from little-yak
```
