export const author = {
  name: "Richard J. Pryor",
  email: "rp12009@yahoo.com",
  title: "Science Fiction Author · Vietnam Veteran · Storyteller",
  location: "Table Rock Lake, Missouri",
  bio: `RICHARD J. PRYOR is a published writer with a life-long interest in science fiction and space adventures. He recently wrote Project Earth: Vice or Virtue, an exciting new adventure about aliens testing man's morality using the "seven deadly sins." This Outskirts Press book won "Honorable Mention" in Sci-Fi Genre at the recent 2022 LA Times Festival of Books (April 2022).`,
  bioExtended: `His interests began early in life with the old black and white broadcasts of Rod Serling's Twilight Zone series, blossomed with the Technicolor adventures in Gene Roddenberry's Star Trek series and continues with inspired stories from George Lucas' Star Wars series.`,
  bioService: `After service to his country in Vietnam (Army), he pledged to serve his community. For years, he keenly supported good government, affordable housing, diabetes research and hurricane victims.`,
  bioPersonal: `Today, he enjoys a fulfilled life in retirement with both family and friends on Table Rock Lake in Missouri with his wife, Mary Beth, and their Australian Labradoodle, Penny.`,
  award: "Honorable Mention — Sci-Fi Genre, 2022 LA Times Festival of Books",
  influences: ["The Twilight Zone", "Star Trek", "Star Wars"],
};

// ===== MAIN FEATURE: THE HIGH COUNCIL OF ORTHIA =====
export const featuredBook = {
  id: "high-council",
  title: "The High Council of Orthia",
  tagline: "The Sentients. The Watchers. The Wise.",
  series: "Book I of the Orthian Saga",
  cover: "/images/high-council.jpg",
  shortDescription: `The High Council of Sentients is comprised of five Gray Elders — enlightened vessels of truth and light that possess the total sum of all knowledge and wisdom ever gathered since their sentient life began eons ago.`,
  description: `Their expressed purpose is to seek out, establish and ensure "a higher order" for all life forms within the Universe. Despite their wisdom, knowledge and the genius of their technology, the Grays know that they need all the help they can get to meet their prime directive for promoting life, safeguarding peace and ensuring prosperity.`,
  descriptionFull: `Five Elders guide the Council: Ikolf, Htron, Tsae, Htuos, and Tsew. Together they weigh the fate of civilizations across the galaxy — including, at last, the small blue world called Earth.`,
  purchaseUrl:
    "https://www.amazon.com/High-Council-Orthia-Richard-Pryor-ebook/dp/B0BDGHJMPM?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.J7zf-nJVkbNQo1EEc_AejRszpTp7htPrVbsgvmUt77E.vr9T0bng_3qpfQLYGHWRXTOYb1J7-JmRir1kad2xbV0&dib_tag=AUTHOR",
  reviews: [],
};

// ===== THE FIVE GRAY ELDERS =====
export const elders = [
  {
    id: 1,
    name: "IKOLF",
    role: "Elder of Origins",
    description:
      "Keeper of the earliest memories of sentient life. Ikolf guides the Council through the ancient knowledge of how civilizations begin.",
  },
  {
    id: 2,
    name: "HTRON",
    role: "Elder of Order",
    description:
      "Guardian of the higher order. Htron ensures that all life forms within the Universe are held to the standards of the prime directive.",
  },
  {
    id: 3,
    name: "TSAE",
    role: "Elder of Truth",
    description:
      "Seer of what is real and what is not. Tsae's clarity of vision strips away deception, both within the Council and among the species they observe.",
  },
  {
    id: 4,
    name: "HTUOS",
    role: "Elder of Light",
    description:
      "Vessel of illumination. Htuos brings the light of knowledge to dark corners of the galaxy — including the testing of Earth's inhabitants.",
  },
  {
    id: 5,
    name: "TSEW",
    role: "Elder of Wisdom",
    description:
      "The final voice in every judgment. Tsew weighs the outcomes of all Council experiments and determines the fate of entire civilizations.",
  },
];

// ===== SECOND BOOK: PROJECT EARTH =====
export const projectEarth = {
  id: "project-earth",
  title: "Project Earth: Vice or Virtue",
  subtitle: "Commander Elau's Reconnaissance Mission",
  cover: "/images/project-earth.jpg",
  description: `The Orthians (more commonly called the "Grays") are a highly intelligent alien species. Only two days ago, the High Council of Sentients directed Commander Onhu Elau, the Grays' most senior leader, to reassess Earth's primary inhabitants — man.`,
  descriptionFull: `Upon the ship's arrival, the Gray Commander is truly impressed by how much human development and advancement has occurred. As part of the visit, the Commander decides to test man in order to present a more balanced view of his progress back to the High Council.`,
  descriptionFinal: `His interstellar experiment produces mixed results, but they reveal much about man's soul and his future. Put simply, if man passes the test, he will be accepted. If not, he will be left uninvited and totally alone for further development or possible extinction.`,
  purchaseUrl:
    "https://www.amazon.com/Project-Earth-Virtue-Richard-Pryor-ebook/dp/B09RTKKFCF?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.J7zf-nJVkbNQo1EEc_AejRszpTp7htPrVbsgvmUt77E.vr9T0bng_3qpfQLYGHWRXTOYb1J7-JmRir1kad2xbV0&dib_tag=AUTHOR",
  reviews: [],
};

// ===== THE SEVEN TESTS (Seven Deadly Sins) =====
export const sevenTests = [
  {
    id: "pride",
    number: "I",
    name: "PRIDE",
    latin: "Superbia",
    description:
      "The overvaluation of self. The first test — does man see himself above his fellow man and above the truth?",
  },
  {
    id: "greed",
    number: "II",
    name: "GREED",
    latin: "Avaritia",
    description:
      "The endless want for more. The second test — can man stop taking what does not belong to him?",
  },
  {
    id: "lust",
    number: "III",
    name: "LUST",
    latin: "Luxuria",
    description:
      "The unchecked desire. The third test — will base passion overwhelm noble purpose?",
  },
  {
    id: "envy",
    number: "IV",
    name: "ENVY",
    latin: "Invidia",
    description:
      "Sorrow at another's good. The fourth test — can man rejoice in his neighbor's success?",
  },
  {
    id: "gluttony",
    number: "V",
    name: "GLUTTONY",
    latin: "Gula",
    description:
      "The overindulgence of body. The fifth test — can man master the appetites of flesh?",
  },
  {
    id: "wrath",
    number: "VI",
    name: "WRATH",
    latin: "Ira",
    description:
      "The fury of vengeance. The sixth test — will righteous anger become destructive rage?",
  },
  {
    id: "sloth",
    number: "VII",
    name: "SLOTH",
    latin: "Acedia",
    description:
      "The failure of action. The seventh test — will man rise to meet his potential, or fall into comfort?",
  },
];

// ===== HUMAN ACHIEVEMENTS RECORDED =====
export const humanAchievements = [
  { year: "1796", event: "Developing proven vaccines" },
  { year: "1859", event: "Proposing a theory of evolution" },
  { year: "1885", event: "Creating the automobile" },
  { year: "1903", event: "Mastering flight" },
  { year: "1905", event: "Theories of relativity and quantum mechanics" },
  { year: "1957", event: "Creating digital photography images" },
  { year: "1969", event: "Traveling to their moon" },
  {
    year: "1969",
    event: "Creating the internet and electronic connection devices",
  },
  { year: "1971", event: "Creating electronic writing" },
  { year: "1973", event: "Creating adaptive digital music" },
];

export const navLinks = [
  { label: "Mission", sectionId: "home" },
  { label: "The Council", sectionId: "council" },
  { label: "Project Earth", sectionId: "project" },
  { label: "The Seven Tests", sectionId: "tests" },
  { label: "The Author", sectionId: "author" },
  { label: "Transmission", sectionId: "contact" },
];
