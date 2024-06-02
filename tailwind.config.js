/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
     "./index.html",
      "./src/assets/generalcomp/Header.jsx",
      "./src/assets/generalcomp/Footer.jsx",
      "./src/assets/homepage/Home.jsx",
      "./src/assets/homepage/component/HomeHero.jsx",
      "./src/assets/homepage/component/TrustedInd.jsx",
      "./src/assets/homepage/component/OurService.jsx",
      "./src/assets/homepage/component/HomeFlagship.jsx",
      "./src/assets/homepage/component/HomeBerkey.jsx",
      "./src/assets/homepage/component/HomeCrowdeck.jsx",
      "./src/assets/homepage/component/HomeWhy.jsx",
      "./src/assets/homepage/component/HomeContact.jsx",
      "./src/assets/homepage/component/TestiMony.jsx",
      "./src/assets/errorpage/ErrorPage.jsx",
    ],
  theme: {
    extend: {},
  },
  plugins: [  require('@tailwindcss/forms'),],
};
