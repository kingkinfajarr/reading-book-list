import { FaSun, FaMoon } from 'react-icons/fa';
import UseDarkMode from '../hooks/UseDarkMode';

const ToggleTheme = () => {
  const [colorTheme, setTheme] = UseDarkMode();
  return (
    <div
      className="text-green-500 bg-green-50 p-3 dark:text-green-50 dark:bg-green-500 dark: rounded-full transition-all duration-300"
      onClick={() => setTheme(colorTheme)}
    >
      {colorTheme === 'light' ? <FaSun /> : <FaMoon />}
    </div>
  );
};

export default ToggleTheme;
