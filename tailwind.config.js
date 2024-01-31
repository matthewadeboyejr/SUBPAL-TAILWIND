/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/pages/*.html"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass"],
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba(8, 9, 9, 0.7), rgba(8, 9, 9, 0.7)), url('https://ik.imagekit.io/et8vxrzxxdj/pexels-keira-burton-6146931__2__kg-YHWL1tkT.jpg')",
      },
    },
  },
  plugins: [],
};
