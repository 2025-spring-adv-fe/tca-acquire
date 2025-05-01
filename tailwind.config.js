module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        acquire: {
          primary: "#F5DEB3",         // Off-white/yellow
          secondary: "#D9CAB3",       // Deep blue
          accent: "#FFD700",          // Luxor gold
          neutral: "#2C2C2C",         // Tower black
          "base-100": "#1C2E5B",      // Page background
          info: "#1E90FF",            // American blue
          success: "#228B22",         // Continental green
          warning: "#FFA500",         // Worldwide orange
          error: "#DC143C",           // Imperial red
        }
      }
    ],
  },
};
