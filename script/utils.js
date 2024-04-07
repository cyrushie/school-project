export class Theme {
  static setTheme(themeProperties) {
    const theme = themeProperties
      ? themeProperties
      : {
          background500: "#21212d",
          background400: "#272435",
          background300: "#484755aa",
          background3000: "#484755dd",
          primaryColor: "#f3b375",
          secondaryColor: "#66577e",
          
          lightColor500: "#e3e0f1",
          lightColor600: "#afb1ad",
          lightColor700: "#958f99",

          
          smallLogo: "tako-small.png",
          bigLogo: "tako.png",
          focusedTheme: ".tako-background",
        };

    return localStorage.setItem("themeProperties", JSON.stringify(theme));
  }

  static getTheme() {
    return JSON.parse(localStorage.getItem("themeProperties"));
  }
}