import { Theme } from "./utils.js ";

const hamburger = document.querySelector(".ham");
const navBar = document.querySelector(".main-header");
const subHeader = document.querySelector(".sub-header");

const backBtn = document.querySelector(".back-btn");

const themeContainer = document.querySelector(".theme-container");
const themeOverlay = document.querySelector(".theme-overlay");
// const themeBtn = document.querySelector(".theme-setting");
const themeGrid = document.querySelector(".theme-grid");

class UI {
    toggleFunctionality() {
        hamburger.addEventListener("click", () => {
            this.toggleTheme();
        });
    }

    navbarFunctionality() {
                  backBtn.addEventListener("click", () => {
              window.history.back();
            })
      
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
    ui.navbarFunctionality();
    ui.toggleFunctionality();
});
