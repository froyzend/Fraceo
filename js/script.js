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
      ],
      formes: [
        "Cercle - Circle",
        "Carré - Square",
        "Triangle - Triangle",
        "Rectangle - Rectangle",
        "Ovale - Oval",
      ],
    },
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
    ],
  },
  {
    category: "vêtements",
    title: "Les Vêtements",
    description: "Les mots pour décrire les vêtements et accessoires.",
    content: [
      "Robe - Dress",
      "Pantalon - Pants",
      "Chapeau - Hat",
      "Chaussures - Shoes",
      "Manteau - Coat",
      "Écharpe - Scarf",
    ],
  },
  {
    category: "transports",
    title: "Les Transports",
    description: "Les mots pour parler des moyens de transport.",
    content: [
      "Voiture - Car",
      "Train - Train",
      "Bus - Bus",
      "Bateau - Boat",
      "Avion - Airplane",
      "Vélo - Bicycle",
    ],
  },
  {
    category: "jours",
    title: "Les Jours de la Semaine, Les Saisons et Les Mois",
    description:
      "Les jours de la semaine, les saisons et les mois de l'année en français.",
    content: {
      jours: [
        "Lundi - Monday",
        "Mardi - Tuesday",
        "Mercredi - Wednesday",
        "Jeudi - Thursday",
        "Vendredi - Friday",
        "Samedi - Saturday",
        "Dimanche - Sunday",
      ],
      saisons: [
        "Printemps - Spring",
        "Été - Summer",
        "Automne - Autumn",
        "Hiver - Winter",
      ],
      mois: [
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
      "Jus - Juice",
      "Eau - Water",
      "Café - Coffee",
      "Thé - Tea",
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
  contentCards.innerHTML = "";
  vocabularyCards.forEach((data) => {
    contentCards.appendChild(createCard(data));
  });
  updateResultsCount();
}

function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("cardVocab");
  card.dataset.category = data.category;

  const title = document.createElement("h3");
  title.classList.add("card-title");
  title.textContent = data.title;

  const description = document.createElement("p");
  description.classList.add("card-description");
  description.textContent = data.description;

  const contentList = document.createElement("ul");
  if (Array.isArray(data.content)) {
    data.content.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      contentList.appendChild(listItem);
    });
  } else {
    for (const key in data.content) {
      const subCategory = document.createElement("h4");
      subCategory.textContent = key;
      contentList.appendChild(subCategory);
      data.content[key].forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        contentList.appendChild(listItem);
      });
    }
  }

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(contentList);
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

searchInput.addEventListener("input", (event) => {
  const query = event.target.value;
  searchCards(query);
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    generateCards(vocabularyCards);
    filterByCategory("all");
  });
});
