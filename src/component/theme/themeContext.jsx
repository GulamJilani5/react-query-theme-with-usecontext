// ThemeContext.js
import { createContext, useState, useContext, useEffect } from "react";

// Create a context for the theme
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Get the theme from localStorage or default to 'light'
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const bodyEl = document.body;
    // Apply the stored theme to the body
    bodyEl.classList.add(theme);
  }, [theme]);

  // Function to toggle the theme between light and dark
  const toggleTheme = () => {
    const bodyEl = document.body;

    const newTheme = theme === "light" ? "dark" : "light";

    bodyEl.classList.remove(theme); // Remove the old theme
    bodyEl.classList.add(newTheme); // Add the new theme
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save the theme to localStorage
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
