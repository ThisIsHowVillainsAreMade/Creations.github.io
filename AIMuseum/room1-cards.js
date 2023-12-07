// CREATE CARDS
const column1 = document.querySelector(".column1");
const column2 = document.querySelector(".column2");
const column3 = document.querySelector(".column3");
const column4 = document.querySelector(".column4");

// Content to be inserted in cards and modals
const columnArray = [
  {
    // card1
    colonne: 1,
    h2: "Alan Turing, le pionnier",
    image: "./images/r1_img_1.png",
    height: "14rem",
    content:
      "Alan Turing, pionnier en informatique, jetta les bases théoriques de l'IA avec son concept de machine universelle. Son travail influença le développement des algorithmes et des modèles utilisés dans la création d'intelligences artificielles.",
  },
  {
    // card2
    colonne: 1,
    h2: "Naissance du terme IA",
    image: "./images/r1_img_2.png",
    height: "19rem",
    content:
      "Le terme Intelligence Artificielle a été introduit par John McCarthy lors d'une conférence en 1956, jetant les bases du domaine. ",
  },
  {
    // card3
    colonne: 1,
    h2: "Perceptron, père de l'IA",
    image: "./images/r1_img_3.png",
    height: "31rem",
    content:
      "Le perceptron, inventé par Frank Rosenblatt en 1957, est considéré comme le précurseur de l'IA. C'est le premier modèle de neurone artificiel, inspirant les réseaux de neurones modernes et stimulant le développement ultérieur de l'IA.",
  },
  {
    // card4
    colonne: 1,
    h2: "L'hiver de l'IA",
    image: "./images/r1_img_4.png",
    height: "23rem",
    content:
      "L'IA a connu un déclin dans les années 1970-1980, appelé l'hiver de l'IA, en raison de défis techniques.",
  },
  {
    // card5
    colonne: 1,
    h2: "L'ère des systèmes experts",
    image: "./images/r1_img_5.png",
    height: "18rem",
    content:
      "Les systèmes experts ont dominé les applications de l'IA dans les années 80, utilisant des règles logiques pour résoudre des problèmes spécifiques.",
  },
  {
    // card6
    colonne: 1,
    h2: "Deep Blue et Kasparov",
    image: "./images/r1_img_6.png",
    height: "29rem",
    content:
      "En 1997, Deep Blue battait le champion du monde d'échecs Garry Kasparov, démontrant la puissance de l'IA dans des tâches complexes.",
  },
  {
    // card7
    colonne: 1,
    h2: "Renaissance du réseau de neurones",
    image: "./images/r1_img_7.png",
    height: "22rem",
    content:
      "Dans les années 2000, la résurgence des réseaux de neurones a inauguré l'ère de l'apprentissage profond, propulsant des avancées notables grâce à des algorithmes améliorés, une puissance de calcul accrue et une abondance de données.",
  },
  {
    // card8
    colonne: 1,
    h2: "Boom du Big Data",
    image: "./images/r1_img_8.png",
    height: "16rem",
    content:
      "L'explosion des données dans les années 2010 a alimenté les capacités des algorithmes d'apprentissage machine, propulsant l'IA moderne.",
  },
  {
    // card9
    colonne: 1,
    h2: "Biais algorithmiques",
    image: "./images/r1_img_9.png",
    height: "23rem",
    content:
      "Les algorithmes d'IA peuvent refléter des préjugés, soulignant le besoin critique de garantir l'équité et la transparence.",
  },
  {
    // card10
    colonne: 2,
    h2: "Auto-encodeurs",
    image: "./images/r1_img_10.png",
    height: "19rem",
    content:
      "Nés dans les années 2000, les auto-encodeurs marquent l'union entre l'IA et la robotique. Sculpteurs numériques, ils compressent les données tout en insufflant une créativité nouvelle, redéfinissant ainsi la robotique avec des avancées notables dans la vision par ordinateur et la reconnaissance de formes.",
  },
  {
    // card11
    colonne: 2,
    h2: "Révolution des GANs",
    image: "./images/r1_img_11.png",
    height: "17rem",
    content:
      "Les Réseaux Génératifs Antagonistes (GANs), qui ont émergé en 2014, révolutionnent l'IA en permettant la génération d'images d'une réalisme exceptionnel. Cette approche antagoniste, avec un générateur et un discriminateur en opposition, propulse la création d'images authentiques, ouvrant de vastes possibilités créatives à l'IA, de l'art à la modélisation pratique.",
  },
  {
    // card12
    colonne: 2,
    h2: "Arrivée des Chatbots",
    image: "./images/r1_img_12.png",
    height: "19rem",
    content:
      "Les chatbots se sont répandus, offrant des conversations virtuelles courantes avec les utilisateurs. Leur montée en puissance témoigne d'une évolution dans la manière dont l'IA façonne les interactions quotidiennes en ligne.",
  },
  {
    // card13
    colonne: 2,
    h2: "L'IA dans la culture populaire ",
    image: "./images/r1_img_13.png",
    height: "28rem",
    content:
      "L'impact de l'IA dans la culture populaire est palpable, des androïdes de Star Trek à la familiarité quotidienne avec des assistants vocaux comme Siri. Ces représentations reflètent l'évolution de notre fascination pour l'IA, de la fiction à la réalité, marquant son intégration croissante dans nos vies.",
  },
  {
    // card14
    colonne: 2,
    h2: "Défi de Go",
    image: "./images/r1_img_14.png",
    height: "19rem",
    content:
      "En 2016, AlphaGo, développé par DeepMind, a battu le champion du monde de Go.",
  },
  {
    // card15
    colonne: 2,
    h2: "L'IA dans le secteur de la santé",
    image: "./images/r1_img_15.png",
    height: "30rem",
    content:
      "L'IA révolutionne la médecine en permettant des diagnostics précoces, comme la détection précoce des signes de cancers. Elle facilite également des traitements plus personnalisés en analysant les données génétiques et médicales, améliorant ainsi l'efficacité des interventions thérapeutiques.",
  },
  {
    // card16
    colonne: 2,
    h2: "L'IA sur les routes",
    image: "./images/r1_img_16.png",
    height: "16rem",
    content:
      "Les véhicules autonomes représentent une révolution majeure dans le transport grâce à l'intelligence artificielle. Ces technologies utilisent des algorithmes sophistiqués pour la perception, la prise de décision et la navigation.",
  },
  {
    // card17
    colonne: 2,
    h2: "La symbiose IA-Robot",
    image: "./images/r1_img_17.png",
    height: "19rem",
    content:
      "L'intégration de l'intelligence artificielle dans la robotique a déclenché une révolution. Des robots équipés d'algorithmes d'apprentissage perfectionnent leurs capacités, de la navigation précise à la prise de décision complexe, ouvrant la voie à des applications révolutionnaires.",
  },
  {
    // card18
    colonne: 2,
    h2: "Création artistique",
    image: "./images/r1_img_18.png",
    height: "28rem",
    content:
      "Des artistes collaborent avec des algorithmes d'IA, fusionnant créativité humaine et algorithmique.",
  },
  {
    // card19
    colonne: 3,
    h2: "L'IA dans l'éducation",
    image: "./images/r1_img_19.png",
    height: "25rem",
    content:
      "L'IA personnalise l'apprentissage, adaptant les cours aux besoins individuels des étudiants. Toutefois, des défis subsistent, notamment la dépendance technologique, la protection des données et les risques de biais, exigeant une mise en œuvre réfléchie.",
  },
  {
    // card20
    colonne: 3,
    h2: "IA et cybersécurité",
    image: "./images/r1_img_20.png",
    height: "21rem",
    content:
      "L'IA renforce la cybersécurité en anticipant et contrant les menaces, mais confrontée à des défis comme la sophistication des attaques. Trouver l'équilibre entre innovation et protection des données demeure crucial.",
  },
  {
    // card21
    colonne: 3,
    h2: "L'IA dans le sport",
    image: "./images/r1_img_21.png",
    height: "19rem",
    content:
      "L'IA révolutionne le sport avec des analyses avancées, des prévisions de performance et des entraînements personnalisés basés sur des données en temps réel. Cependant, des questions éthiques émergent autour de la confidentialité des données et de l'équité dans la compétition.",
  },
  {
    // card22
    colonne: 3,
    h2: "Chatbots médicaux",
    image: "./images/r1_img_22.png",
    height: "21rem",
    content:
      "Les chatbots médicaux, basés sur l'IA, offrent des conseils de santé personnalisés, améliorant l'accessibilité aux informations médicales. Malgré leur utilité, des préoccupations subsistent quant à la précision et à la confidentialité, soulignant la nécessité d'une intégration prudente dans les soins de santé.",
  },
  {
    // card23
    colonne: 3,
    h2: "Symphonie algorithmique",
    image: "./images/r1_img_23.png",
    height: "25rem",
    content:
      "Des algorithmes d'IA créent des compositions musicales, explorant de nouvelles frontières créatives.",
  },
  {
    // card24
    colonne: 3,
    h2: "Révélations du passé",
    image: "./images/r1_img_24.png",
    height: "17rem",
    content:
      "L'IA transforme l'archéologie en accélérant l'analyse des données pour la cartographie, la détection de sites et la reconstruction 3D. Son adoption nécessite une collaboration étroite entre archéologues et experts en IA pour garantir une interprétation précise.",
  },
  {
    // card25
    colonne: 3,
    h2: "IA et droit",
    image: "./images/r1_img_25.png",
    height: "24rem",
    content:
      "L'IA transforme le domaine juridique en automatisant des tâches, améliorant la recherche et facilitant la gestion des contrats. Toutefois, des défis émergent, notamment en matière de responsabilité et de transparence des décisions automatisées, soulevant des questions éthiques et réglementaires.",
  },
  {
    // card26
    colonne: 3,
    h2: "Cultiver avec précision",
    image: "./images/r1_img_26.png",
    height: "24rem",
    content:
      "L'IA révolutionne l'agriculture avec des technologies comme les drones et les capteurs, optimisant la gestion des cultures. Malgré ses avantages, des préoccupations subsistent sur l'accessibilité et la confidentialité des données.",
  },
  {
    // card27
    colonne: 3,
    h2: "IA et exploration spatiale",
    image: "./images/r1_img_27.png",
    height: "19rem",
    content:
      "L'IA joue un rôle crucial dans l'exploration spatiale en équipant les missions spatiales de capacités avancées. Des systèmes d'IA alimentent la navigation autonome, l'analyse des données astronomiques et facilitent la prise de décision en temps réel.",
  },
  {
    // card28
    colonne: 4,
    h2: "IA et jeux vidéo",
    image: "./images/r1_img_28.png",
    height: "19rem",
    content:
      "L'IA améliore les jeux vidéo avec des adversaires virtuels plus intelligents et réactifs.",
  },
  {
    // card29
    colonne: 4,
    h2: "IA et realité virtuelle",
    image: "./images/r1_img_29.png",
    height: "32rem",
    content:
      "L'IA enrichit les expériences de réalité virtuelle, créant des mondes plus réactifs et complexes.",
  },
  {
    // card30
    colonne: 4,
    h2: "Portrait de rêve",
    image: "./images/r1_img_30.png",
    height: "25rem",
    content:
      "Des IA génératives ont été utilisées pour générer des portraits d'individus qui n'existent pas, créant des visages uniques et parfois surréalistes.",
  },
  {
    // card31
    colonne: 4,
    h2: "Cuisine créative",
    image: "./images/r1_img_31.png",
    height: "18rem",
    content:
      "Des IA génératives ont été programmées pour inventer des recettes étranges et inhabituelles, allant de la pizza aux fraises aux tacos au chocolat.",
  },
  {
    // card32
    colonne: 4,
    h2: "Chant d'oiseau techno",
    image: "./images/r1_img_32.png",
    height: "19rem",
    content:
      "Une expérience a utilisé une IA pour transformer les chants d'oiseaux en musique techno, créant une expérience sonore unique.",
  },
  {
    // card33
    colonne: 4,
    h2: "Reconnaissance faciale",
    image: "./images/r1_img_33.png",
    height: "18rem",
    content:
      "Les systèmes de reconnaissance faciale basés sur l'IA sont utilisés dans la sécurité et les smartphones.",
  },
  {
    // card34
    colonne: 4,
    h2: "IA et médias sociaux",
    image: "./images/r1_img_34.png",
    height: "28rem",
    content:
      "Les algorithmes d'IA alimentent les recommandations et le filtrage sur les médias sociaux.",
  },
  {
    // card35
    colonne: 4,
    h2: "L'IA et l'environnement",
    image: "./images/r1_img_35.png",
    height: "20rem",
    content:
      "L'IA joue un rôle clé dans la surveillance des changements environnementaux grâce à des applications avancées, telles que l'analyse des données satellitaires et la modélisation climatique. Cependant, son déploiement massif nécessite une évaluation constante de son impact écologique. ",
  },
  {
    // card36
    colonne: 4,
    h2: "Traduction automatique",
    image: "./images/r1_img_36.png",
    height: "16rem",
    content:
      "L'IA transforme la traduction multilingue en proposant des solutions rapides et précises. Des systèmes basés sur des réseaux de neurones améliorent la fluidité des traductions, facilitant ainsi la communication mondiale.",
  },
];

// Function designed to create cards and insert title and image
function createCard(column, image, h2, height) {
  if (column === 1) {
    selectedColumn = column1;
  } else if (column === 2) {
    selectedColumn = column2;
  } else if (column === 3) {
    selectedColumn = column3;
  } else {
    selectedColumn = column4;
  }
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.style.height = height;
  selectedColumn.appendChild(newCard);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${image})`;
  cardImg.classList.add("background");
  newCard.appendChild(cardImg);

  cardTitle = document.createElement("h2");
  cardTitle.classList.add("title-s");
  cardTitle.innerHTML = h2;
  cardImg.appendChild(cardTitle);
}

for (let i = 0; i < columnArray.length; i++) {
  createCard(
    columnArray[i].colonne,
    columnArray[i].image,
    columnArray[i].h2,
    columnArray[i].height
  );
}

// OPEN MODAL
const cards = document.querySelectorAll(".card");
const modal = document.querySelector(".rOne-modal");
const modalBackground = document.querySelector(".rOne-modal-background");
const modalBody = document.querySelector(".rOne-modal-body");
const modalTitle = document.querySelector(".rOne-modal-title");
const modalContent = document.querySelector(".rOne-modal-content");
const modalCloseButton = document.querySelector(".rOne-modal-closebutton");
const overlay = document.querySelector(".rOne-overlay");
const body = document.querySelector(".rOne");

// Listening to the click on the card, to open modal and identify the title of the card the user clicked on
cards.forEach(function (card) {
  card.addEventListener("click", function (event) {
    modal.classList.add("modal-open");
    modalBody.classList.add("modal-open");
    overlay.classList.add("display-overlay");
    body.classList.add("no-scroll");
    const title = event.srcElement.innerHTML;
    modalTitle.innerHTML = title;
    // looking for the element containing the title in the array, to identify corresponding image and content
    const selectedObject = columnArray.find(
      (arrayElement) => arrayElement.h2 === title
    );
    modalBackground.style.backgroundImage = `url(${selectedObject.image})`;
    modalContent.innerHTML = selectedObject.content;
    console.log(selectedObject);
  });
});

// Listening to the click on the close button to close modal
modalCloseButton.addEventListener("click", function () {
  modal.classList.remove("modal-open");
  modal.classList.remove("modal-open");
  overlay.classList.remove("display-overlay");
  body.classList.remove("no-scroll");
});
