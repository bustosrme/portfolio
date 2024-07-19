import { useTheme } from "../../context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";
import '../../assets/css/switch.css';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      id="theme-switch"
      aria-label="Toggle Dark Mode"
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:border-white dark:bg-gray-950"
      onClick={() => {
        if (!document.startViewTransition) toggleTheme()
          document.startViewTransition(toggleTheme);
      }}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}