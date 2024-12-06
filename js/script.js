const contentCards = document.getElementById("contentCards");
const filterButtons = document.querySelectorAll(".filter-btn");
const resultsCount = document.getElementById("resultsCount");
const searchInput = document.getElementById("searchInput");
const vocabularyCards = [
  {
    category: "couleurs",
    title: "Les Couleurs et Les Formes",
    description: "Les mots pour décrire les couleurs et les formes.",
    content: {
      couleurs: [
        "Rouge - Red",
        "Bleu - Blue",
        "Vert - Green",
        "Jaune - Yellow",
        "Noir - Black",
        "Blanc - White",
        "Rose - Pink",
        "Violet - Purple",
        "Marron - Brown",
        "Orange - Orange",
        "Gris - Gray",
        "Beige - Beige",
        "Turquoise - Turquoise",
        "Argent - Silver",
        "Or - Gold",
      ],
      formes: [
        "Carré - Square",
        "Cercle - Circle",
        "Triangle - Triangle",
        "Rectangle - Rectangle",
        "Ovale - Oval",
        "Losange - Rhombus",
      ],
    },
  },
  {
    category: "qualité",
    title: "Les Adjectifs de Qualité",
    description: "Adjectifs pour décrire des choses.",
    content: [
      "Grand - Big",
      "Petit - Small",
      "Beau - Beautiful",
      "Laid - Ugly",
      "Bon - Good",
      "Mauvais - Bad",
      "Nouveau - New",
      "Vieux - Old",
      "Grand - Tall",
      "Petit - Short",
      "Fort - Strong",
      "Faible - Weak",
      "Intelligent - Intelligent",
      "Bête - Stupid",
      "Joyeux - Happy",
      "Triste - Sad",
      "Chaleureux - Warm",
      "Froid - Cold",
      "Rapide - Fast",
      "Lent - Slow",
    ],
  },
  {
    category: "verbes",
    title: "Les Verbes Communs",
    description: "Verbes d'usage courant.",
    content: [
      "Être - To be",
      "Avoir - To have",
      "Faire - To do/make",
      "Aller - To go",
      "Parler - To speak",
      "Manger - To eat",
      "Boire - To drink",
      "Dormir - To sleep",
      "Travailler - To work",
      "Voir - To see",
      "Dire - To say/tell",
      "Penser - To think",
      "Vouloir - To want",
      "Pouvoir - To be able to",
      "Devoir - To have to/must",
      "Venir - To come",
      "Prendre - To take",
      "Lire - To read",
      "Écrire - To write",
      "Jouer - To play",
      "Chanter - To sing",
      "Regarder - To watch",
      "Attendre - To wait",
      "Comprendre - To understand",
    ],
  },
  {
    category: "prépositions",
    title: "Les Prépositions",
    description: "Mots qui montrent la relation entre les mots.",
    content: [
      "À - To/At",
      "De - From/Of",
      "En - In",
      "Sur - On",
      "Sous - Under",
      "Dans - In",
      "Avec - With",
      "Sans - Without",
      "Pour - For",
      "Contre - Against",
      "Par - By",
      "Depuis - Since",
      "Jusqu'à - Until",
      "Pendant - During",
      "Après - After",
      "Avant - Before",
      "Entre - Between",
      "Derrière - Behind",
      "Devant - In front of",
      "Autour de - Around",
      "Près de - Near",
    ],
  },
  {
    category: "possessif",
    title: "Les Adjectifs Possessifs",
    description: "Adjectifs indiquant la possession.",
    content: [
      "Mon - My",
      "Ton - Your (singular informal)",
      "Son - His/Her/Its",
      "Notre - Our",
      "Votre - Your (formal/plural)",
      "Leur - Their",
      "Mes - My (plural)",
      "Tes - Your (plural informal)",
      "Ses - His/Her/Its (plural)",
      "Nos - Our (plural)",
      "Vos - Your (plural formal)",
      "Leurs - Their (plural)",
      "Ma - My (feminine singular)",
      "Ta - Your (feminine singular informal)",
      "Sa - His/Her/Its (feminine singular)",
      "Notre - Our (feminine singular)",
      "Votre - Your (feminine singular formal/plural)",
      "Leur - Their (feminine singular)",
    ],
  },
  {
    category: "emotions",
    title: "Les Émotions",
    description: "Mots pour décrire les émotions.",
    content: [
      "Heureux - Happy",
      "Triste - Sad",
      "Colérique - Angry",
      "Peureux - Afraid",
      "Surpris - Surprised",
      "Fatigué - Tired",
      "Amoureux - In love",
      "Calme - Calm",
      "Excité - Excited",
      "Enervé - Annoyed",
      "Déçu - Disappointed",
      "Fier - Proud",
      "Jalou - Jealous",
      "Malheureux - Unhappy",
      "Paisible - Peaceful",
      "Nerveux - Nervous",
      "Stressé - Stressed",
      "Relaxé - Relaxed",
      "Optimiste - Optimistic",
      "Pessimiste - Pessimistic",
    ],
  },
  {
    category: "animaux",
    title: "Les Animaux",
    description: "Les mots pour décrire les animaux communs.",
    content: [
      "Chat - Cat",
      "Chien - Dog",
      "Oiseau - Bird",
      "Poisson - Fish",
      "Lapin - Rabbit",
      "Cheval - Horse",
      "Vache - Cow",
      "Mouton - Sheep",
      "Cochon - Pig",
      "Poule - Hen",
      "Lion - Lion",
      "Tigre - Tiger",
      "Éléphant - Elephant",
      "Singe - Monkey",
      "Ours - Bear",
      "Serpent - Snake",
      "Souris - Mouse",
      ,
      "Oiseau - Bird",
    ],
  },
  {
    category: "métiers",
    title: "Les Métiers",
    description: "Les noms des professions courantes.",
    content: [
      "Professeur - Teacher",
      "Médecin - Doctor",
      "Ingénieur - Engineer",
      "Boulanger - Baker",
      "Écrivain - Writer",
      "Artiste - Artist",
      "Infirmière - Nurse",
      "Policier - Police Officer",
      "Pompier - Firefighter",
      "Chanteur - Singer",
      "Cuisinier - Cook",
      "Architecte - Architect",
      "Avocat - Lawyer",
      "Pilote - Pilot",
      "Programmeur - Programmer",
      "Mécanicien - Mechanic",
      "Agriculteur - Farmer",
      "Vendeur - Salesperson",
      "Coiffeur - Hairdresser",
      "Secrétaire - Secretary",
      "Ouvrier - Worker",
    ],
  },
  {
    category: "vêtements",
    title: "Les Vêtements",
    description: "Les mots pour décrire les vêtements et accessoires.",
    content: [
      "Robe - Dress",
      "Pantalon - Pants",
      "Chemise - Shirt",
      "Chaussures - Shoes",
      "Chapeau - Hat",
      "Manteau - Coat",
      "Jupe - Skirt",
      "Pull - Sweater",
      "Sac à main - Handbag",
      "Gants - Gloves",
      "Écharpe - Scarf",
      "Ceinture - Belt",
      "Cravate - Tie",
      "Costume - Suit",
      "Robe - Dress",
      "Pantalon - Pants",
      "Chemise - Shirt",
      "Chaussures - Shoes",
      "Chapeau - Hat",
      "Manteau - Coat",
    ],
  },
  {
    category: "transports",
    title: "Les Transports",
    description: "Les mots pour parler des moyens de transport.",
    content: [
      "Voiture - Car",
      "Train - Train",
      "Avion - Airplane",
      "Bateau - Boat",
      "Vélo - Bicycle",
      "Bus - Bus",
      "Moto - Motorcycle",
      "Scooter - Scooter",
      "Taxi - Taxi",
      "Camion - Truck",
      "Métro - Subway",
      "Tramway - Tram",
      "Ferry - Ferry",
      "Hélicoptère - Helicopter",
      "Vaisseau spatial - Spaceship",
      "Voiture - Car",
      "Train - Train",
      "Avion - Airplane",
      "Bateau - Boat",
      "Vélo - Bicycle",
    ],
  },
  {
    category: "jours",
    items: [
      {
        title: "Les Jours de la Semaine",
        description: "Tous les jours de la semaine en français.",
        content: [
          "Lundi - Monday",
          "Mardi - Tuesday",
          "Mercredi - Wednesday",
          "Jeudi - Thursday",
          "Vendredi - Friday",
          "Samedi - Saturday",
          "Dimanche - Sunday",
        ],
      },
      {
        title: "Les Saisons",
        description: "Les quatre saisons de l'année.",
        content: [
          "Printemps - Spring",
          "Été - Summer",
          "Automne - Autumn",
          "Hiver - Winter",
        ],
      },
      {
        title: "Les Mois de l'Année",
        description: "Tous les mois de l'année en français.",
        content: [
          "Janvier - January",
          "Février - February",
          "Mars - March",
          "Avril - April",
          "Mai - May",
          "Juin - June",
          "Juillet - July",
          "Août - August",
          "Septembre - September",
          "Octobre - October",
          "Novembre - November",
          "Décembre - December",
        ],
      },
    ],
  },

  {
    category: "famille",
    title: "La Famille et Les Relations",
    description: "Les membres de la famille et des relations sociales.",
    content: [
      "Père - Father",
      "Mère - Mother",
      "Frère - Brother",
      "Sœur - Sister",
      "Grand-père - Grandfather",
      "Grand-mère - Grandmother",
      "Oncle - Uncle",
      "Tante - Aunt",
      "Cousin - Cousin (Male)",
      "Cousine - Cousin (Female)",
      "Ami - Friend",
    ],
  },
  {
    category: "corps",
    title: "Le Corps Humain",
    description: "Les parties du corps humain.",
    content: [
      "Tête - Head",
      "Œil - Eye",
      "Oreille - Ear",
      "Bouche - Mouth",
      "Nez - Nose",
      "Main - Hand",
      "Pied - Foot",
      "Bras - Arm",
      "Jambe - Leg",
      "Doigt - Finger",
      "Orteil - Toe",
      "Cheveux - Hair",
      "Dent - Tooth",
      "Ongle - Nail",
      "Cou - Neck",
      "Épaule - Shoulder",
      "Genou - Knee",
      "Coude - Elbow",
      "Poignet - Wrist",
      "Dos - Back",
      "Cœur - Heart",
    ],
  },
  {
    category: "objets",
    title: "Les Objets Quotidiens",
    description: "Les objets du quotidien et leur usage.",
    content: [
      "Téléphone - Phone",
      "Ordinateur - Computer",
      "Cahier - Notebook",
      "Stylo - Pen",
      "Clé - Key",
      "Sac - Bag",
      "Montre - Watch",
      "Table - Table",
      "Chaise - Chair",
      "Lampe - Lamp",
      "Livre - Book",
      "Télévision - Television",
      "Lit - Bed",
      "Miroir - Mirror",
      "Fourchette - Fork",
      "Couteau - Knife",
      "Cuillère - Spoon",
      "Assiette - Plate",
      "Verre - Glass",
      "Tasse - Cup",
      "Chaussettes - Socks",
    ],
  },
  {
    category: "nourriture",
    title: "La Nourriture et Les Boissons",
    description: "Les mots pour décrire la nourriture et les boissons.",
    content: [
      "Pomme - Apple",
      "Pain - Bread",
      "Lait - Milk",
      "Fromage - Cheese",
      "Viande - Meat",
      "Eau - Water",
      "Jus - Juice",
      "Café - Coffee",
      "Thé - Tea",
      "Yaourt - Yogurt",
      "Œuf - Egg",
      "Salade - Salad",
      "Poisson - Fish",
      "Légumes - Vegetables",
      "Fruits - Fruits",
      "Riz - Rice",
      "Pâtes - Pasta",
      "Fromage - Cheese",
      "Pain - Bread",
      "Lait - Milk",
      "Viande - Meat",
    ],
  },
];
function filterByCategory(category) {
  const cards = document.querySelectorAll(".cardVocab");
  let visibleCount = 0;
  cards.forEach((card) => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });
  updateResultsCount();
}

function searchCards(query) {
  const cards = document.querySelectorAll(".cardVocab");
  let visibleCount = 0;
  cards.forEach((card) => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    const description = card
      .querySelector(".card-description")
      .textContent.toLowerCase();
    if (
      title.includes(query.toLowerCase()) ||
      description.includes(query.toLowerCase())
    ) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });
  updateResultsCount();
}

function generateCards(vocabularyCards) {
  contentCards.innerHTML = ""; // Clear existing cards
  vocabularyCards.forEach((data) => {
    // Iterate through items if it's an array
    if (Array.isArray(data.content)) {
      data.content.forEach((item) => {
        const newItem = {
          category: data.category,
          title: item, // Use the item itself as the title
          description: data.description, // Keep the category description
        };
        contentCards.appendChild(createCard(newItem));
      });
    } else if (data.items) {
      // Handle nested items (jours)
      data.items.forEach((item) => {
        item.content.forEach((subItem) => {
          const newItem = {
            category: data.category,
            title: subItem,
            description: item.description,
          };
          contentCards.appendChild(createCard(newItem));
        });
      });
    } else {
      //Handle the case where data.content is an object with subcategories (like couleurs)
      for (const key in data.content) {
        data.content[key].forEach((item) => {
          const newItem = {
            category: data.category,
            title: item,
            description: data.description,
          };
          contentCards.appendChild(createCard(newItem));
        });
      }
    }
  });
  updateResultsCount();
}

function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("cardVocab");
  card.dataset.category = data.category;

  const title = document.createElement("h3");
  title.classList.add("card-title");
  title.textContent = data.title; // Use item as title

  const description = document.createElement("p");
  description.classList.add("card-description");
  description.textContent = data.description;

  card.appendChild(title);
  card.appendChild(description);
  return card;
}

function updateResultsCount() {
  const visibleCards = document.querySelectorAll(
    '.cardVocab:not([style*="display: none"])'
  );
  resultsCount.textContent = `${visibleCards.length} aides`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    filterByCategory(category);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      const query = event.target.value;
      searchCards(query);
    });
  } else {
    console.error("Элемент searchInput не найден.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    generateCards(vocabularyCards);
    filterByCategory("all");
  });
});
