import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/page/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--color-primary-100)",
          300: "var(--color-primary-300)",
          500: "var(--color-primary-500)",
          700: "var(--color-primary-700)",
          900: "var(--color-primary-900)",
        },
        secondary: {
          100: "var(--color-secondary-100)",
          300: "var(--color-secondary-300)",
          500: "var(--color-secondary-500)",
          700: "var(--color-secondary-700)",
          900: "var(--color-secondary-900)",
        },
        neutral: {
          100: "var(--color-neutral-100)",
          300: "var(--color-neutral-300)",
          500: "var(--color-neutral-500)",
          700: "var(--color-neutral-700)",
          900: "var(--color-neutral-900)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
        },
        status: {
          success: "var(--color-status-success)",
          error: "var(--color-status-error)",
          warning: "var(--color-status-warning)",
          info: "var(--color-status-info)",
        },
        gradient: {
          primary: "var(--color-gradient-primary)",
          secondary: "var(--color-gradient-secondary)",
          darkUi: "var(--color-gradient-darkUi)",
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};

export default config;
