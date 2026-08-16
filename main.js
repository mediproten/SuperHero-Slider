const data = [
  {
    id: 1,
    nama: "Captain America",
    text: "Steve Rogers, a weak soldier who transformed into the world's most powerful human after being injected with the Super-Soldier Serum. He is the symbol of justice, courage, and patriotism, fighting evil with his vibranium shield.",
    film: "Captain America: The First Avenger",
    img: "img/captainAmreica.png"
  },

  {
    id: 2,
    nama: "Hulk",
    text: "Bruce Banner, a brilliant scientist who turns into a massive green monster with infinite strength after a gamma radiation accident. The angrier he gets, the stronger he becomes.",
    film: "The Incredible Hulk",
    img: "img/Hulk.png"
  },

  {
    id: 3,
    nama: "Spider-Man",
    text: "Peter Parker, a teenager who was bitten by a radioactive spider and gained spider-like abilities. With great power comes great responsibility, he protects New York City.",
    film: "Spider-Man: No Way Home",
    img: "img/spiderman.png"
  },

  {
    id: 4,
    nama: "Batman",
    text: "Bruce Wayne, a billionaire who swore to fight crime after witnessing his parents' murder. With no superpowers, he uses his intelligence, wealth, and advanced technology to battle evil.",
    film: "The Dark Knight",
    img: "img/batman.png"
  },

  {
    id: 5,
    nama: "Superman",
    text: "Clark Kent, the last survivor of the planet Krypton, who came to Earth with extraordinary powers like flight, super strength, and heat vision. He is the symbol of hope and justice for all humanity.",
    film: "Man of Steel",
    img: "img/superman .png"
  }
];


// ----- loadig 
const loader = document.querySelector(".loader");

function preloadImages() {
  const images = data.map((character) => {
    return new Promise((resolve) => {
      const img = new Image();

      img.onload = resolve;
      img.onerror = resolve;

      img.src = character.img;
    });
  });

  return Promise.all(images);
}



// =========================
// ELEMENTS
// =========================

const boxCaracter = document.querySelector(".main-slider-div");


// =========================
// SHUFFLE DATA
// =========================

const shuffledData = [...data].sort(() => Math.random() - 0.5);


// =========================
// CURRENT INDEX
// =========================

let currentIndex = 0;

// --------------- randomIcon 
const favicons = [
  "img/captainAmreica.png",
  "img/Hulk.png",
  "img/spiderman.png",
  "img/batman.png",
  "img/superman.png"
];

const randomFavicon = favicons[
  Math.floor(Math.random() * favicons.length)
];

document.querySelector("#randomIcon").href = randomFavicon;

showCaracter();
// =========================
// SHOW CHARACTER
// =========================

function showCaracter() {

  const caracter = shuffledData[currentIndex];

  const caracterItem =`
    <div class="profile-div">

      <div class="profile-div-content">

        <div class="profile-name-div">
          <h1 class="plaiceholder">name :</h1>
          <h1>${caracter.nama}</h1>
        </div>

        <div class="maharat-box">
          <div class="circle"></div>
          <h2 class="maharat">${caracter.film}</h2>
        </div>

        <p class="profile-text">
          ${caracter.text}
        </p>

      </div>


      <hr class="hr-class">


      <div class="profile-img">
        <img
          src="${caracter.img}"
          alt="${caracter.nama}"
        >
      </div>

    </div>


    <div class="contorol-box">

      <i
        class="fas fa-angle-left"
        id="prevBtn"
        title="Previous"
      ></i>


      <hr class="hr-class">


      <button id="randomBtn">
        Set Random
      </button>


      <hr class="hr-class">


      <i
        class="fas fa-angle-right"
        id="nextBtn"
        title="Next"
      ></i>

    </div>
  `;


  boxCaracter.innerHTML = caracterItem;

// -----
  addEvents();
}


// =========================
// ADD BUTTON EVENTS
// =========================

function addEvents() {

  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");
  const randomBtn = document.querySelector("#randomBtn");


  // Previous
  prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = shuffledData.length - 1;
    }

    showCaracter();
  });


  // Next
  nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= shuffledData.length) {
      currentIndex = 0;
    }

    showCaracter();
  });


  // Random
  randomBtn.addEventListener("click", () => {

    let randomIndex;do {
      randomIndex = Math.floor(
        Math.random() * shuffledData.length
      );
    } while (
      randomIndex === currentIndex &&
      shuffledData.length > 1
    );


    currentIndex = randomIndex;

    showCaracter();
  });
}


// =========================
// START
// =========================
preloadImages().then(() => {
  loader.classList.add("hide");
});

 

// =================================== 👀:))))))))))   
const BestesChaper = () => {
  const onebestes = "MediProten";
  const adsPads = onebestes.padStart(onebestes.length + 3, "---").padEnd(onebestes.length + 6, "---");
  const bestes = adsPads.slice()
  console.log(bestes);

}
const now = new Date();
const year = now.getFullYear();
const X = Number(String(year).slice(-2)); 
BestesChaper()
setInterval(BestesChaper, X * 1000);

// ==================================== End ===============================================