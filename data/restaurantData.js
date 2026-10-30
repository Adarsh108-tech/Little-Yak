export const restaurantInfo = {
  name: "Little Yak",
  tibetanName: "གཡག་ཆུང་།",
  tagline: {
    fr: "Restaurant Tibétain & Népalaise à Paris 4e",
    en: "Tibetan & Nepalese Restaurant in Paris 4th",
  },
  address: "61 Rue Quincampoix, 75004 Paris, France",
  neighborhood: "Centre Pompidou / Châtelet - Le Marais",
  phone: "+33 1 88 48 09 70",
  phoneRaw: "+33188480970",
  email: "contact@littleyak-paris.fr",
  rating: 4.7,
  reviewsCount: 380,
  priceRange: "10€ - 20€",
  hours: [
    { day: { fr: "Lundi", en: "Monday" }, hours: "12:00 – 15:00 & 18:30 – 22:30", open: true },
    { day: { fr: "Mardi", en: "Tuesday" }, hours: "12:00 – 15:00 & 18:30 – 22:30", open: true },
    { day: { fr: "Mercredi", en: "Wednesday" }, hours: "12:00 – 22:30 (Non-stop)", open: true },
    { day: { fr: "Jeudi", en: "Thursday" }, hours: "12:00 – 22:30 (Non-stop)", open: true },
    { day: { fr: "Vendredi", en: "Friday" }, hours: "12:00 – 23:00 (Non-stop)", open: true },
    { day: { fr: "Samedi", en: "Saturday" }, hours: "12:00 – 23:00 (Non-stop)", open: true },
    { day: { fr: "Dimanche", en: "Sunday" }, hours: "12:00 – 22:30 (Non-stop)", open: true },
  ],
  transports: [
    { line: "M 11", station: "Rambuteau", walk: "3 min à pied / walk" },
    { line: "M 1, 4, 7, 11, 14", station: "Châtelet - Les Halles", walk: "5 min à pied / walk" },
    { line: "RER A, B, D", station: "Châtelet - Les Halles", walk: "6 min à pied / walk" },
    { line: "M 1, 11", station: "Hôtel de Ville", walk: "7 min à pied / walk" },
  ],
  deliverooUrl: "https://deliveroo.fr/fr/menu/paris/chatelet-les-halles/little-yak",
  mapsUrl: "https://maps.google.com/?q=Little+Yak+61+Rue+Quincampoix+75004+Paris",
};

export const menuCategories = [
  { id: "all", label: { fr: "Tous les plats", en: "All Dishes" } },
  { id: "momos", label: { fr: "🥟 Momos Faits Maison", en: "🥟 Handmade Momos" } },
  { id: "noodles", label: { fr: "🍜 Nouilles & Soupes", en: "🍜 Noodles & Soups" } },
  { id: "specialties", label: { fr: "🍲 Spécialités des Sommets", en: "🍲 Himalayan Specialties" } },
  { id: "drinks", label: { fr: "🍵 Thés & Boissons", en: "🍵 Teas & Beverages" } },
  { id: "desserts", label: { fr: "🍮 Douceurs & Desserts", en: "🍮 Sweet Treats" } },
];

export const menuItems = [
  {
    id: "momo-boeuf",
    category: "momos",
    name: "Momos Traditionnels au Bœuf",
    tibetan: "ཤ་མོག་མོག",
    price: 13.5,
    image: "/images/pate-menu.webp",
    badges: ["Best Seller", "Signature"],
    spicyLevel: 1, // 0 to 3
    isVegetarian: false,
    isVegan: false,
    description: {
      fr: "8 généreux raviolis tibétains pliés à la main, farcis au bœuf haché assaisonné au poivre du Sichuan tibétain (yerma), gingembre, oignons doux et coriandre. Servis vapeur ou grillés avec sauce maison piquante.",
      en: "8 generous handmade Tibetan dumplings filled with minced beef, seasoned with wild Tibetan Sichuan pepper (yerma), ginger, spring onions, and coriander. Served steamed or pan-fried with spicy house chili sauce.",
    },
    ingredients: {
      fr: ["Bœuf français haché", "Poivre de Timut/Yerma", "Oignons nouveaux", "Gingembre frais", "Sauce piment-tomate maison"],
      en: ["Minced French beef", "Timut/Yerma wild pepper", "Spring onions", "Fresh ginger", "Homemade chili-tomato sauce"],
    },
    options: ["Vapeur classique (Steamed)", "Grillé à la poêle (Kothey / Crispy pan-fried)"],
  },
  {
    id: "momo-vege",
    category: "momos",
    name: "Momos Épinards & Fromage Fondant",
    tibetan: "ཚོད་མོག་མོག",
    price: 12.5,
    image: "/images/momo-vegetarienen-menu.webp",
    badges: ["Végétarien", "Coup de Cœur"],
    spicyLevel: 0,
    isVegetarian: true,
    isVegan: false,
    description: {
      fr: "8 raviolis façonnés minute, garnis d'épinards frais hachés, de pommes de terre fondantes et de fromage doux à la mode himalayenne. Fondant et ultra-réconfortant.",
      en: "8 freshly folded dumplings filled with tender spinach, smooth crushed potato, and Himalayan mild cheese. Creamy, comforting, and deeply aromatic.",
    },
    ingredients: {
      fr: ["Épinards frais", "Fromage fondant doux", "Pommes de terre vapeur", "Échalotes", "Épices douces de montagne"],
      en: ["Fresh spinach", "Melted cheese", "Steamed potatoes", "Shallots", "Mountain mild spices"],
    },
    options: ["Vapeur classique (Steamed)", "Grillé à la poêle (Kothey)"],
  },
  {
    id: "momo-jhol",
    category: "momos",
    name: "Momo Jhol Soup (Bouillon Épicé)",
    tibetan: "ཁུ་བ་མོག་མོག",
    price: 15.0,
    image: "/images/4-little-yak.jpg",
    badges: ["Spécialité", "Épicé"],
    spicyLevel: 2,
    isVegetarian: false,
    isVegan: false,
    description: {
      fr: "8 raviolis au choix (Bœuf ou Végétarien) plongés dans un bouillon chaud et velouté à base de tomates rôties au feu de bois, sésame grillé, ail, coriandre et poivre de l'Himalaya.",
      en: "8 dumplings (Beef or Vegetarian) bathed in a hot, velvety broth crafted from fire-roasted tomatoes, toasted sesame, garlic, cilantro, and fragrant Himalayan spices.",
    },
    ingredients: {
      fr: ["Momos au choix", "Bouillon tomates rôties & sésame", "Coriandre fraîche", "Huile de piment tibétain", "Sésame torréfié"],
      en: ["Dumplings of choice", "Roasted tomato & sesame broth", "Fresh cilantro", "Tibetan chili oil", "Toasted sesame"],
    },
    options: ["Garniture Bœuf (Beef)", "Garniture Végétarienne (Veggie)"],
  },
  {
    id: "laphing",
    category: "noodles",
    name: "Laphing Épicé en Gelée Froide",
    tibetan: "ལཱ་ཕིང་།",
    price: 8.5,
    image: "/images/laphing-nouilles-en-gelee-sauce-piquante-menu.webp",
    badges: ["Street Food Must", "Vegan"],
    spicyLevel: 3,
    isVegetarian: true,
    isVegan: true,
    description: {
      fr: "Incontournable street food de Lhassa et Katmandou : rouleaux de nouilles de gelée de farine de blé fraîche, nappés d'une sauce piquante addictive à base de vinaigre noir, ail cru, sauce soja et huile de piment rouge croustillante.",
      en: "Lhasa's iconic street food: cold slippery wheat jelly noodles rolled and drenched in a spicy sauce of aged black vinegar, minced garlic, soy sauce, and aromatic crispy chili oil.",
    },
    ingredients: {
      fr: ["Gelée de blé artisanale", "Huile de piment maison croustillante", "Ail émincé", "Vinaigre noir de Chine", "Coriandre", "Sésame"],
      en: ["Handmade wheat jelly", "House crispy chili oil", "Minced garlic", "Black vinegar", "Cilantro", "Sesame"],
    },
    options: ["Piment Normal 🌶️🌶️", "Piment Fort de Lhassa 🌶️🌶️🌶️", "Piment Doux 🌶️"],
  },
  {
    id: "gyathuk",
    category: "noodles",
    name: "Gyathuk Traditionnel au Bœuf",
    tibetan: "རྒྱ་ཐུག",
    price: 14.5,
    image: "/images/3-little-yak.jpg",
    badges: ["Réconfortant", "Fait Maison"],
    spicyLevel: 1,
    isVegetarian: false,
    isVegan: false,
    description: {
      fr: "Grand bol de nouilles tibétaines artisanales fraîches dans un bouillon de bœuf mijoté pendant plus de 8 heures avec des herbes médicinales. Surmonté de lamelles de bœuf tendre, bok choy, radis blanc et cébette.",
      en: "Large bowl of artisanal Tibetan wheat noodles immersed in an 8-hour slow-cooked beef broth with mountain herbs. Garnished with tender braised beef slices, bok choy, daikon radish, and fresh scallions.",
    },
    ingredients: {
      fr: ["Nouilles fraîches", "Bœuf mijoté 8h", "Bouillon clair aromatique", "Bok choy croquant", "Daikon", "Ciboule"],
      en: ["Fresh noodles", "8h braised beef", "Clear aromatic broth", "Crunchy bok choy", "Daikon", "Scallions"],
    },
  },
  {
    id: "thukpa",
    category: "noodles",
    name: "Thukpa Rustique des Montagnes",
    tibetan: "ཐུག་པ།",
    price: 13.5,
    image: "/images/5-little-yak.jpg",
    badges: ["Populaire"],
    spicyLevel: 1,
    isVegetarian: false,
    isVegan: false,
    description: {
      fr: "La soupe de nouilles emblématique du Tibet quotidien. Bouillon réchauffant aux légumes sautés, ail, gingembre et garniture au choix (Poulet fermier ou Tofu bio).",
      en: "The quintessential daily Tibetan noodle soup. Warming broth loaded with sautéed vegetables, garlic, ginger, and your choice of farm chicken or organic tofu.",
    },
    ingredients: {
      fr: ["Nouilles de blé", "Légumes de saison", "Bouillon infusé au gingembre", "Épices de montagne"],
      en: ["Wheat noodles", "Seasonal vegetables", "Ginger-infused broth", "Mountain herbs"],
    },
    options: ["Poulet Fermier (Chicken)", "Végétarien / Tofu (Veggie)", "Bœuf Braisé (+1€)"],
  },
  {
    id: "wai-wai-chat",
    category: "noodles",
    name: "Wai Wai Sadheko (Nouilles Croquantes)",
    tibetan: "ཝཱའི་ཝཱའི་གྲང་མོ།",
    price: 7.5,
    image: "/images/nouilles-croquantes-menu.webp",
    badges: ["Street Food", "Croquant"],
    spicyLevel: 2,
    isVegetarian: true,
    isVegan: true,
    description: {
      fr: "Spécialité culte des cafés de Katmandou et de l'Himalaya : nouilles croustillantes assaisonnées crues avec oignons rouges, piments verts frais, jus de citron vert pressé, coriandre et épices chaat.",
      en: "Cult Himalayan & Kathmandu street snack: crunchy seasoned noodles tossed with minced red onions, fresh green chilies, squeezed lime juice, coriander, and tangy chaat spices.",
    },
    ingredients: {
      fr: ["Nouilles croustillantes", "Oignons rouges", "Piments verts", "Citron vert", "Coriandre", "Mélange d'épices Sadheko"],
      en: ["Crunchy noodles", "Red onion", "Green chilies", "Lime", "Coriander", "Sadheko spice blend"],
    },
  },
  {
    id: "tsampa-pak",
    category: "specialties",
    name: "Tsampa Pak Authentique",
    tibetan: "རྩམ་པ་ཕག",
    price: 14.0,
    image: "/images/tsampa-pak-menu.webp",
    badges: ["Plat Sacré", "Authentique"],
    spicyLevel: 0,
    isVegetarian: false,
    isVegan: false,
    description: {
      fr: "Le trésor nutritif des nomades tibétains : préparation à base de Tsampa (farine d'orge grillée des hauts plateaux), servie avec un ragoût savoureux de viande mijotée, légumes racines et beurre clarifié.",
      en: "The sacred nutritional staple of Tibetan nomads: prepared with Tsampa (roasted highland barley flour), served alongside slow-simmered savory meat stew, root vegetables, and clarified butter.",
    },
    ingredients: {
      fr: ["Farine d'orge grillée (Tsampa)", "Viande mijotée au beurre", "Légumes racines", "Bouillon tibétain"],
      en: ["Roasted barley flour (Tsampa)", "Slow-braised meat with butter", "Root vegetables", "Tibetan broth"],
    },
  },
  {
    id: "the-au-beurre",
    category: "drinks",
    name: "Thé au Beurre Salé (Po Cha)",
    tibetan: "བོད་ཇ། / ཇ་སྲུབ་མ།",
    price: 4.0,
    image: "/images/little-yak.webp",
    badges: ["Incontournable"],
    spicyLevel: 0,
    isVegetarian: true,
    isVegan: false,
    description: {
      fr: "La boisson nationale du Tibet par excellence. Thé noir de brique corsé baratté avec du beurre salé et du lait entier. Chaleureux, crémeux, surprenant et intensément réconfortant.",
      en: "Tibet's national drink. Robust brick black tea churned with salted butter and whole milk. Warm, velvety, uniquely savory, and deeply revitalizing.",
    },
    ingredients: {
      fr: ["Thé noir compressé du Tibet", "Beurre salé", "Lait entier", "Sel de roche"],
      en: ["Pressed Tibetan black tea", "Salted butter", "Whole milk", "Rock salt"],
    },
  },
  {
    id: "masala-chai",
    category: "drinks",
    name: "Masala Chai Maison Épicé",
    tibetan: "ཇ་མངར་མོ།",
    price: 4.5,
    image: "/images/bg-restaurant.webp",
    badges: ["Doux & Épicé"],
    spicyLevel: 0,
    isVegetarian: true,
    isVegan: false,
    description: {
      fr: "Thé noir infusé lentement avec cardamome verte, bâtons de cannelle, clous de girofle, poivre noir et gingembre frais écrasé, émulsionné au lait chaud.",
      en: "Slow-brewed black tea with whole green cardamom, cinnamon quills, cloves, black pepper, and crushed fresh ginger, simmered with warm creamy milk.",
    },
    ingredients: {
      fr: ["Thé noir", "Cardamome verte", "Cannelle", "Gingembre frais", "Lait", "Sucre brut"],
      en: ["Black tea", "Green cardamom", "Cinnamon", "Fresh ginger", "Milk", "Raw sugar"],
    },
  },
  {
    id: "biere-himalaya",
    category: "drinks",
    name: "Bière Népalaise & Tibétaine (Lhasa / Mustang)",
    tibetan: "ཆང་།",
    price: 6.0,
    image: "/images/7-little-yak.jpg",
    badges: ["Alcoolisé"],
    spicyLevel: 0,
    isVegetarian: true,
    isVegan: true,
    description: {
      fr: "Bière blonde artisanale brassée avec l'eau pure des glaciers de l'Himalaya et de l'orge locale. Rafraîchissante et dorée, idéale pour accompagner les momos épicés (33cl).",
      en: "Craft lager brewed with pristine Himalayan glacial water and local highland barley. Crisp and golden, the perfect companion to fiery momos (33cl).",
    },
    ingredients: {
      fr: ["Eau des glaciers", "Malt d'orge", "Houblon", "Levure"],
      en: ["Glacial water", "Barley malt", "Hops", "Yeast"],
    },
  },
  {
    id: "dessert-tsampa",
    category: "desserts",
    name: "Dessert Douceur Tsampa Pak & Miel Sauvage",
    tibetan: "རྩམ་པའི་མངར་ཟས།",
    price: 6.0,
    image: "/images/dessert-traditionnel-menu.webp",
    badges: ["Traditionnel"],
    spicyLevel: 0,
    isVegetarian: true,
    isVegan: false,
    description: {
      fr: "Pâte délicate d'orge grillée travaillée au miel des montagnes, beurre doux et fromage doux artisanal. Une texture subtile de noisette torréfiée très réputée lors des fêtes tibétaines.",
      en: "Delicate roasted highland barley confection gently folded with mountain honey, sweet butter, and mild artisanal cheese. A nutty, lightly sweet dessert cherished during Tibetan celebrations.",
    },
    ingredients: {
      fr: ["Farine Tsampa", "Miel de montagne", "Beurre doux", "Fromage doux"],
      en: ["Tsampa flour", "Mountain honey", "Sweet butter", "Mild cheese"],
    },
  },
  {
    id: "kheer-riz",
    category: "desserts",
    name: "Kheer aux Pistaches & Safran",
    tibetan: "འབྲས་ཐུག་མངར་མོ།",
    price: 5.5,
    image: "/images/8-little-yak.jpg",
    badges: ["Fait Maison"],
    spicyLevel: 0,
    isVegetarian: true,
    isVegan: false,
    description: {
      fr: "Riz au lait mijoté patiemment au lait entier parfumé à la cardamome et au safran, parsemé d'éclats de pistaches grillées et d'amandes effilées.",
      en: "Slow-simmered basmati rice pudding infused with fragrant green cardamom and pure saffron, garnished with crushed roasted pistachios and toasted almond flakes.",
    },
    ingredients: {
      fr: ["Riz parfumé", "Lait entier", "Safran", "Cardamome", "Pistaches", "Amandes"],
      en: ["Fragrant rice", "Whole milk", "Saffron", "Cardamom", "Pistachios", "Almonds"],
    },
  },
];

export const galleryPhotos = [
  {
    id: 1,
    src: "/images/1-little-yak.jpg",
    category: "vault",
    title: { fr: "La Cave Voûtée en Pierre de Taille", en: "Subterranean Medieval Stone Vault" },
    desc: {
      fr: "L'ancienne cave voûtée parisienne réaménagée avec sérénité, mobilier en bois et touches himalayennes.",
      en: "Historic Parisian stone-vaulted cellar redesigned with serenity, wooden tables, and warm Himalayan accents.",
    },
  },
  {
    id: 2,
    src: "/images/2-little-yak.jpg",
    category: "food",
    title: { fr: "Momos Frais Façonnés Main", en: "Fresh Handmade Steamed Momos" },
    desc: {
      fr: "Chaque ravioli est plié à la main chaque matin avec une pâte fine et une garniture juteuse.",
      en: "Each dumpling is crimped by hand every morning with delicate dough and juicy fillings.",
    },
  },
  {
    id: 3,
    src: "/images/3-little-yak.jpg",
    category: "food",
    title: { fr: "Bouillons & Nouilles Artisanales", en: "Artisanal Broths & Fresh Noodles" },
    desc: {
      fr: "Des soupes mijotées 8 heures avec les épices rapportées des vallées de l'Himalaya.",
      en: "Slow broths simmered for 8 hours with herbs brought directly from Himalayan valleys.",
    },
  },
  {
    id: 4,
    src: "/images/4-little-yak.jpg",
    category: "food",
    title: { fr: "Momo Jhol dans sa Sauce Pimentée", en: "Momo Jhol in Savory Sesame Sauce" },
    desc: {
      fr: "L'explosion de saveurs du bouillon rôti au poivre de Timut.",
      en: "A vibrant flavor burst of fire-roasted tomato broth and Timut pepper.",
    },
  },
  {
    id: 5,
    src: "/images/5-little-yak.jpg",
    category: "vault",
    title: { fr: "Ambiance Cosy & Lumière Tamisée", en: "Intimate Ambiance & Warm Lighting" },
    desc: {
      fr: "Un havre de paix et de déconnexion à 2 minutes du Centre Pompidou.",
      en: "A peaceful haven to unwind just 2 minutes away from the Pompidou Centre.",
    },
  },
  {
    id: 6,
    src: "/images/6-little-yak.jpg",
    category: "atmosphere",
    title: { fr: "Détails & Artisanat Tibétain", en: "Authentic Tibetan Artifacts" },
    desc: {
      fr: "Drapeaux de prières, moulins et souvenirs authentiques.",
      en: "Prayer flags, prayer wheels, and authentic memorabilia from Tibet.",
    },
  },
  {
    id: 7,
    src: "/images/7-little-yak.jpg",
    category: "food",
    title: { fr: "Table Festive & Convivialité", en: "Festive Himalayan Table" },
    desc: {
      fr: "Partage de plats parfumés entre amis et en famille.",
      en: "Generous dishes meant to be shared with friends and loved ones.",
    },
  },
  {
    id: 8,
    src: "/images/8-little-yak.jpg",
    category: "atmosphere",
    title: { fr: "L'Accueil Chaleureux de l'Équipe", en: "Warm Hospitality by Our Team" },
    desc: {
      fr: "Un sourire et une explication attentive pour chaque plat.",
      en: "Friendly guidance and genuine warmth for every guest discovering Tibetan food.",
    },
  },
];

export const customerReviews = [
  {
    id: "rev-1",
    author: "Lucie B.",
    source: "Google Reviews",
    rating: 5,
    date: "Il y a 2 semaines",
    comment: {
      fr: "Excellent !!! Les Momos sont délicieux ! Je reviendrai pour tester les nouilles. Il y a des choix végétariens super bons. Les serveuses étaient super sympa. Prix très abordable pour le quartier !",
      en: "Excellent! The Momos are incredible! I will definitely return to try the noodles. Wonderful vegetarian choices. The waitresses were super friendly. Very affordable for the Pompidou area!",
    },
    dishTag: "Momos Épinards & Fromage",
  },
  {
    id: "rev-2",
    author: "Erwan L.",
    source: "OnaTaste Awards",
    rating: 5,
    date: "Il y a 1 mois",
    comment: {
      fr: "Une délicieuse expérience ! Les salles au sous-sol sont typiques des anciennes caves du quartier, avec une architecture composée de voûtes en pierre de taille, aménagé avec goût dans un esprit de sérénité. La carte est courte et c'est un gage de qualité : tous les mets testés étaient délicieusement assaisonnés et les momos sont de véritables chefs-d'œuvre.",
      en: "A delightful experience! The subterranean rooms are typical of the historic neighborhood cellars, with dressed-stone vaults arranged with great taste and serenity. A focused menu is a mark of true quality: every dish was exquisitely seasoned and the momos are genuine masterpieces.",
    },
    dishTag: "Cave Voûtée & Momos Bœuf",
  },
  {
    id: "rev-3",
    author: "Zamzam",
    source: "Google Reviews",
    rating: 5,
    date: "Il y a 3 semaines",
    comment: {
      fr: "Superbe découverte ! Installées à l'étage du dessous, nous étions venues avec des amies et le cadre était intimiste et calme. J'ai pris les momos garnis d'épinards et de fromage dans une soupe épicée : un pur régal réconfortant. À recommander absolument !",
      en: "Superb discovery! Seated in the underground cellar, my friends and I enjoyed an intimate and calm setting. I had the spinach and cheese momos in spicy soup: sheer comforting bliss. Highly recommended!",
    },
    dishTag: "Momo Jhol Soup",
  },
  {
    id: "rev-4",
    author: "François D.",
    source: "Google Reviews",
    rating: 5,
    date: "Il y a 1 mois",
    comment: {
      fr: "Grande surprise issue de la street food de Katmandou avec le Wai Wai Chat aux nouilles très bien assaisonnées et croquantes ! Et les raviolis momos sont tendres et savoureux. Une belle immersion culturelle.",
      en: "Great surprise with the Kathmandu street food Wai Wai Chat: crispy, tangy noodles bursting with spices! And the momos are so tender and savory. A genuine cultural immersion.",
    },
    dishTag: "Wai Wai Chat & Gyathuk",
  },
  {
    id: "rev-5",
    author: "Sophie & Marc",
    source: "Google Reviews",
    rating: 5,
    date: "Il y a quelques jours",
    comment: {
      fr: "Le thé au beurre salé (Po Cha) m'a rappelé mon voyage au Ladakh ! Plats copieux, prix très raisonnables, et l'équipe prend le temps d'expliquer les traditions. On s'y sent merveilleusement bien.",
      en: "The salted butter tea (Po Cha) brought back fond memories of my trip to Ladakh! Hearty dishes, very fair prices, and the staff takes time to explain the traditions. We felt so welcome.",
    },
    dishTag: "Thé au Beurre Salé & Tsampa",
  },
];

export const faqList = [
  {
    q: {
      fr: "Qu'est-ce qui rend Little Yak unique à Paris ?",
      en: "What makes Little Yak unique in Paris?",
    },
    a: {
      fr: "Little Yak réunit l'authenticité de la cuisine ancestrale de l'Himalaya (momos faits main, tsampa, thé au beurre salé) et le charme historique d'une ancienne cave voûtée parisienne en pierre de taille, à deux pas du Centre Pompidou.",
      en: "Little Yak blends the authenticity of ancestral Himalayan culinary heritage (handmade momos, tsampa, salted butter tea) with the historic romance of a subterranean Parisian stone vault, just moments from Centre Pompidou.",
    },
  },
  {
    q: {
      fr: "Proposez-vous des options végétariennes et véganes ?",
      en: "Do you offer vegetarian and vegan options?",
    },
    a: {
      fr: "Oui, absolument ! La cuisine tibétaine fait la part belle aux recettes végétariennes. Nos momos épinards-fromage sont l'un de nos plus grands succès, et le Laphing (nouilles en gelée froide) ainsi que le Wai Wai Sadheko sont 100% végétaliens (végan).",
      en: "Yes, absolutely! Tibetan cuisine has a rich tradition of plant-based dishes. Our spinach & cheese momos are among our top sellers, while the Laphing cold noodles and Wai Wai Sadheko are 100% vegan.",
    },
  },
  {
    q: {
      fr: "Les plats sont-ils très pimentés ?",
      en: "Are your dishes very spicy?",
    },
    a: {
      fr: "Nos plats s'adaptent à toutes les sensibilités ! Nos momos et soupes traditionnelles ont des saveurs aromatiques douces (gingembre, yerma, cardamome). La sauce pimentée maison est servie à part ou dosable sur demande, du très doux jusqu'au piquant traditionnel des hauts plateaux.",
      en: "Our dishes cater to all palates! Traditional momos and broths feature fragrant yet mild spices (ginger, mild yerma, cardamom). House chili sauce is served on the side or customizable from mild to authentic Himalayan heat.",
    },
  },
  {
    q: {
      fr: "Comment réserver une table dans la cave voûtée ?",
      en: "How do I reserve a table in the stone-vaulted cellar?",
    },
    a: {
      fr: "Vous pouvez réserver directement en ligne sur ce site grâce à notre module interactif de réservation, ou nous appeler au +33 1 88 48 09 70. N'hésitez pas à préciser votre préférence pour la salle voûtée en sous-sol.",
      en: "You can book directly through our interactive online reservation tool on this site, or call us at +33 1 88 48 09 70. Feel free to mention your preference for the underground stone cellar.",
    },
  },
  {
    q: {
      fr: "Peut-on commander à emporter ou en livraison ?",
      en: "Can I order for takeaway or home delivery?",
    },
    a: {
      fr: "Oui ! Vous pouvez utiliser notre simulateur de panier à emporter pour préparer votre commande en Click & Collect, ou nous commander en livraison directe via Deliveroo.",
      en: "Yes! You can use our interactive takeaway basket to prepare your order for Click & Collect, or order home delivery directly via Deliveroo.",
    },
  },
  {
    q: {
      fr: "Quels sont les moyens de paiement acceptés ?",
      en: "Which payment methods are accepted?",
    },
    a: {
      fr: "Nous acceptons les cartes bancaires (Visa, Mastercard), Apple Pay / Google Pay, les titres-restaurant (carte et papier), ainsi que les espèces.",
      en: "We accept credit/debit cards (Visa, Mastercard), Apple Pay / Google Pay, French restaurant vouchers (Ticket Restaurant), and cash.",
    },
  },
];
