import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        heading: ["var(--font-heading)"],
        subheading: ["var(--font-subheading)"],
        playful: ["var(--font-playful)"],
      },
      colors: {
        // Updated color palette according to guidelines
        "deep-coffee-brown": "var(--deep-coffee-brown)",
        "creamy-latte": "var(--creamy-latte)",
        "caramel": "var(--caramel)",
        "mint-green": "var(--mint-green)",
        "cherry-red": "var(--cherry-red)",
        // Legacy colors for compatibility
        espresso: "var(--espresso)",
        latte: "var(--latte)",
        cream: "var(--cream)",
        sage: "var(--sage)",
        blush: "var(--blush)",
        foam: "var(--foam)",
        border: "var(--latte)",
        // Coffee theme colors for compatibility
        'coffee-dark': '#2C1810',
        'coffee-brown': '#4B3621',
        'coffee-light': '#F7F4F1',
        'coffee-gold': '#D4A574',
        'coffee-cream': '#F0E6D3',
        'charcoal': '#666666',
        // Modern accent colors
        'warm-peach': '#FFB5A7',
        'soft-rose': '#F4C2C2',
      },
      keyframes: {
        bounce: {
          "0%, 100%": { 
            transform: "translateY(0) rotate(-1deg)",
          },
          "50%": {
            transform: "translateY(-15px) rotate(2deg)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        }
      },
      animation: {
        bounce: "bounce 3s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        float: "float 3s ease-in-out infinite"
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
