// ========================================
// PAGES
// ========================================

const page1 = document.getElementById("page1");

const page2 = document.getElementById("page2");

const page3 = document.getElementById("page3");

const page4 = document.getElementById("page4");


// ========================================
// BUTTONS
// ========================================

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const continueBtn =
    document.getElementById("continueBtn");

const surpriseBtn =
    document.getElementById("surpriseBtn");


// ========================================
// MUSIC
// ========================================

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicBtn =
    document.getElementById("musicBtn");

let musicPlaying = false;


// ========================================
// START MUSIC
// ========================================

function startMusic() {

    backgroundMusic.volume = 0.35;

    backgroundMusic.play()

        .then(() => {

            musicPlaying = true;

            musicBtn.textContent = "🔊";

        })

        .catch((error) => {

            console.log(
                "Music could not start:",
                error
            );

        });

}


// ========================================
// MUSIC BUTTON
// ========================================

musicBtn.addEventListener("click", () => {

    if (musicPlaying) {

        backgroundMusic.pause();

        musicPlaying = false;

        musicBtn.textContent = "🔇";

    }

    else {

        backgroundMusic.play();

        musicPlaying = true;

        musicBtn.textContent = "🔊";

    }

});


// ========================================
// NO BUTTON RUNS AWAY
// ========================================

noBtn.addEventListener("mouseenter", () => {

    const maxX =
        window.innerWidth -
        noBtn.offsetWidth -
        30;

    const maxY =
        window.innerHeight -
        noBtn.offsetHeight -
        30;


    const randomX =
        Math.random() * maxX;


    const randomY =
        Math.random() * maxY;


    noBtn.style.position = "fixed";

    noBtn.style.left =
        `${randomX}px`;

    noBtn.style.top =
        `${randomY}px`;

});


// ========================================
// YES → PAGE 2
// ========================================

yesBtn.addEventListener("click", () => {

    // Start music
    startMusic();


    // Change page
    page1.classList.add("hidden");

    page2.classList.remove("hidden");

});


// ========================================
// PAGE 2 → PAGE 3
// ========================================

continueBtn.addEventListener("click", () => {

    const selectedMonths =
        document.getElementById("months").value;


    console.log(
        "Selected months:",
        selectedMonths
    );


    page2.classList.add("hidden");

    page3.classList.remove("hidden");

});


// ========================================
// PAGE 3 → LOVE LETTER
// ========================================

surpriseBtn.addEventListener("click", () => {

    page3.classList.add("hidden");

    page4.classList.remove("hidden");

});