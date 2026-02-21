// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        float: "float 4s ease-in-out infinite",
        floatSlow: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
};
