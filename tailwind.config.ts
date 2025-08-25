import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "var(--espresso)",
        latte: "var(--latte)",
        cream: "var(--cream)",
        sage: "var(--sage)",
        blush: "var(--blush)",
        caramel: "var(--caramel)",
        foam: "var(--foam)",
        border: "var(--latte)", // Add border color definition
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
        'mint-green': '#96CEB4',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        heading: ["var(--font-heading)"],
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
