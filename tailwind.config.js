export default {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      colors: {
        primary_Text: "var(--color-primary-text)",
        secondary_Text: "var(--color-secondary-text)",
        primary_Background: "var(--color-primary-background)",
        secondary_Background: "var(--color-secondary-background)",
      },
    },
  },
};
