import { Theme } from "./utils.js ";

const hamburger = document.querySelector(".ham");
const navBar = document.querySelector(".main-header");
const subHeader = document.querySelector(".sub-header");

const themeContainer = document.querySelector(".theme-container");
const themeOverlay = document.querySelector(".theme-overlay");
// const themeBtn = document.querySelector(".theme-setting");
const themeGrid = document.querySelector(".theme-grid");

const heroImage = document.querySelector(".hero-image img");

let isDown = false;
let startX;
let scrollLeft;
class UI {
    toggleFunctionality() {
        hamburger.addEventListener("click", () => {
            this.toggleTheme();
        });
    }

    navbarFunctionality() {
        window.addEventListener("scroll", () => {
            const navHeight = navBar.offsetHeight;
            const stickyPoint = navHeight - navHeight / 4;
            console.log({
                stickyPoint,
                navHeight
            });
            if (window.pageYOffset >= stickyPoint) {
                navBar.style.position = "fixed";
                subHeader.classList.add("show-sub-header");
            } else {
                navBar.style.position = "relative";
                subHeader.classList.remove("show-sub-header");
            }
        });
    }

    cardFunctionality() {
        let currentSlideIndex =
            parseInt(localStorage.getItem("currentIndex")) || 0;
        const slides = document.getElementsByClassName("slide");
        const slideCount = slides.length;

        slides[slideCount - 1].style.left = "-100%";

        function moveLeft(e) {
            e.preventDefault();
            currentSlideIndex++;
            localStorage.setItem("currentIndex", currentSlideIndex);
            if (currentSlideIndex < slideCount) {
                updateSlideVisibility();
                updateSlidePosition(currentSlideIndex - 1, "-100%", "0");
                console.log("advance, i = " + currentSlideIndex);
            } else {
                resetSlides();
                console.log("back to start, i = " + currentSlideIndex);
            }
        }

        function moveRight(e) {
            e.preventDefault();
            if (currentSlideIndex > 0) {
                currentSlideIndex--;
                localStorage.setItem("currentIndex", currentSlideIndex);
                updateSlideVisibility();
                updateSlidePosition(currentSlideIndex + 1, "100%", "0");
            } else {
                currentSlideIndex = slideCount - 1;
                localStorage.setItem("currentIndex", currentSlideIndex);
                resetSlides();
                console.log("end, i = " + currentSlideIndex);
            }
        }

        function updateSlideVisibility() {
            slides[currentSlideIndex].style.visibility = "visible";
        }

        function updateSlidePosition(index, leftValue, currentLeftValue) {
            slides[index].style.left = leftValue;
            slides[currentSlideIndex].style.left = currentLeftValue;
        }

        function resetSlides() {
            currentSlideIndex = 0;
            localStorage.setItem("currentIndex", currentSlideIndex);
            updateSlideVisibility();
            updateSlidePosition(slideCount - 1, "-100%", "0");
            for (let x = 1; x < slideCount - 1; x++) {
                slides[x].style.visibility = "hidden";
                slides[x].style.left = "100%";
            }
        }

        document.getElementById("prev").onclick = moveRight;
        document.getElementById("next").onclick = moveLeft;
        updateSlideVisibility();
        updateSlidePosition(currentSlideIndex, "100%", "0");
    }

    card2Functionality() {
        let currentSlideIndex =
            parseInt(localStorage.getItem("currentIndex2")) || 0;
        const slides = document.getElementsByClassName("slide2");
        const slideCount = slides.length;

        slides[slideCount - 1].style.left = "-100%";

        function moveLeft(e) {
            e.preventDefault();
            currentSlideIndex++;
            localStorage.setItem("currentIndex2", currentSlideIndex);
            if (currentSlideIndex < slideCount) {
                updateSlideVisibility();
                updateSlidePosition(currentSlideIndex - 1, "-100%", "0");
                console.log("advance, i = " + currentSlideIndex);
            } else {
                resetSlides();
                console.log("back to start, i = " + currentSlideIndex);
            }
        }

        function moveRight(e) {
            e.preventDefault();
            if (currentSlideIndex > 0) {
                currentSlideIndex--;
                localStorage.setItem("currentIndex2", currentSlideIndex);
                updateSlideVisibility();
                updateSlidePosition(currentSlideIndex + 1, "100%", "0");
            } else {
                currentSlideIndex = slideCount - 1;
                localStorage.setItem("currentIndex2", currentSlideIndex);
                resetSlides();
                console.log("end, i = " + currentSlideIndex);
            }
        }

        function updateSlideVisibility() {
            slides[currentSlideIndex].style.visibility = "visible";
        }

        function updateSlidePosition(index, leftValue, currentLeftValue) {
            slides[index].style.left = leftValue;
            slides[currentSlideIndex].style.left = currentLeftValue;
        }

        function resetSlides() {
            currentSlideIndex = 0;
            localStorage.setItem("currentIndex2", currentSlideIndex);
            updateSlideVisibility();
            updateSlidePosition(slideCount - 1, "-100%", "0");
            for (let x = 1; x < slideCount - 1; x++) {
                slides[x].style.visibility = "hidden";
                slides[x].style.left = "100%";
            }
        }

        document.getElementById("prev2").onclick = moveRight;
        document.getElementById("next2").onclick = moveLeft;
        updateSlideVisibility();
        updateSlidePosition(currentSlideIndex, "100%", "0");
    }

    themeFunctionality() {
        themeGrid.addEventListener("click", e => {
            const element = e.target;
            const themeProperties = this.getThemeProperty(element);

            if (e.target.matches("#green-apple")) {
                themeProperties.smallLogo = "green-apple-small.png";
                themeProperties.bigLogo = "green-apple.png";
                themeProperties.focusedTheme = ".green-apple-background";
                this.setTheme(themeProperties);
                Theme.setTheme(themeProperties);
            }
            if (e.target.matches("#midnight-dusk")) {
                themeProperties.smallLogo = "midnight-dusk-small.png";
                themeProperties.bigLogo = "midnight-dusk.png";
                themeProperties.focusedTheme = ".midnight-dusk-background";
                this.setTheme(themeProperties);
                Theme.setTheme(themeProperties);
            }
            if (e.target.matches("#strawberry-daiquiri")) {
                themeProperties.smallLogo = "strawberry-daiquiri-small.png";
                themeProperties.bigLogo = "strawberry-daiquiri.png";
                themeProperties.focusedTheme =
                    ".strawberry-daiquiri-background";
                this.setTheme(themeProperties);
                Theme.setTheme(themeProperties);
            }
            if (e.target.matches("#tako")) {
                themeProperties.smallLogo = "tako-small.png";
                themeProperties.bigLogo = "tako.png";
                themeProperties.focusedTheme = ".tako-background";
                this.setTheme(themeProperties);
                Theme.setTheme(themeProperties);
            }
            if (e.target.matches("#teal-and-turquoise")) {
                themeProperties.smallLogo = "teal-and-turquoise-small.png";
                themeProperties.bigLogo = "teal-and-turquoise.png";
                themeProperties.focusedTheme = ".teal-and-turquoise-background";
                this.setTheme(themeProperties);
                Theme.setTheme(themeProperties);
            }
            if (e.target.matches("#tidal-wave")) {
                themeProperties.smallLogo = "tidal-wave-small.png";
                themeProperties.bigLogo = "tidal-wave.png";
                themeProperties.focusedTheme = ".tidal-wave-background";
                this.setTheme(themeProperties);
                Theme.setTheme(themeProperties);
            }
            if (e.target.matches("#yin-and-yang")) {
                themeProperties.smallLogo = "yin-and-yang-small.png";
                themeProperties.bigLogo = "yin-and-yang.png";
                themeProperties.focusedTheme = ".yin-and-yang-background";
                this.setTheme(themeProperties);
                Theme.setTheme(themeProperties);
            }
            if (e.target.matches("#yotsuba")) {
                themeProperties.smallLogo = "yotsuba-small.png";
                themeProperties.bigLogo = "yotsuba.png";
                themeProperties.focusedTheme = ".yotsuba-background";
                this.setTheme(themeProperties);
                Theme.setTheme(themeProperties);
            }
            if (e.target.matches("#natural-sky")) {
                themeProperties.smallLogo = "natural-sky-small.png";
                themeProperties.bigLogo = "natural-sky.png";
                themeProperties.focusedTheme = ".natural-sky-background";
                this.setTheme(themeProperties);
                Theme.setTheme(themeProperties);
            }
            if (e.target.matches("#lavender")) {
                themeProperties.smallLogo = "lavender-small.png";
                themeProperties.bigLogo = "lavender.png";
                themeProperties.focusedTheme = ".lavender-background";
                this.setTheme(themeProperties);
                Theme.setTheme(themeProperties);
            }
        });
    }

    setTheme(themeProperties) {
        const root = document.documentElement;

        const themeBackgrounds = document.querySelectorAll(".theme-cell > div");
        themeBackgrounds.forEach(background => {
            background.classList.remove("focus-theme");
        });

        const themeBackground = document.querySelector(
            themeProperties.focusedTheme
        );

        heroImage.src = `./assets/${themeProperties.bigLogo}`;

        themeBackground.classList.add("focus-theme");

        root.style.setProperty("--primary-color", themeProperties.primaryColor);
        root.style.setProperty(
            "--secondary-color",
            themeProperties.secondaryColor
        );
        root.style.setProperty(
            "--background-color-500",
            themeProperties.background500
        );
        root.style.setProperty(
            "--background-color-400",
            themeProperties.background400
        );
        root.style.setProperty(
            "--background-color-300",
            themeProperties.background300
        );
        root.style.setProperty(
            "--background-color-300-0",
            themeProperties.background3000
        );
        root.style.setProperty(
            "--light-color-500",
            themeProperties.lightColor500
        );
        root.style.setProperty(
            "--light-color-600",
            themeProperties.lightColor600
        );
        root.style.setProperty(
            "--light-color-700",
            themeProperties.lightColor700
        );
    }

    getThemeProperty(element) {
        const computedStyle = window.getComputedStyle(element);

        const themeProperties = {};
        themeProperties.primaryColor =
            computedStyle.getPropertyValue("--primary-color");
        themeProperties.secondaryColor =
            computedStyle.getPropertyValue("--secondary-color");
        themeProperties.background500 = computedStyle.getPropertyValue(
            "--background-color-500"
        );
        themeProperties.background400 = computedStyle.getPropertyValue(
            "--background-color-400"
        );
        themeProperties.background300 = computedStyle.getPropertyValue(
            "--background-color-300"
        );
        themeProperties.background3000 = computedStyle.getPropertyValue(
            "--background-color-300-0"
        );
        themeProperties.lightColor500 =
            computedStyle.getPropertyValue("--light-color-500");
        themeProperties.lightColor600 =
            computedStyle.getPropertyValue("--light-color-600");
        themeProperties.lightColor700 =
            computedStyle.getPropertyValue("--light-color-700");

        return themeProperties;
    }

    toggleTheme() {
        themeContainer.classList.toggle("show-theme-container");
        themeOverlay.classList.toggle("show-theme-overlay");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    if (!Theme.getTheme()) Theme.setTheme();
    const themeProperties = Theme.getTheme();

    const ui = new UI();
    ui.setTheme(themeProperties);
    ui.themeFunctionality();
    ui.toggleFunctionality();
    ui.navbarFunctionality();
    ui.cardFunctionality();
    ui.card2Functionality();
});
