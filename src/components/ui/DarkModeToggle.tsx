import { SunIcon, MoonIcon } from "@/assets/icons/icons";
import { useTheme } from "@/contexts/ThemeContext";

export function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-secondary-600 hover:text-primary-500 hover:bg-secondary-100 dark:text-secondary-400 dark:hover:text-primary-400 dark:hover:bg-secondary-800 transition-colors"
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      {theme === "dark" ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
}
