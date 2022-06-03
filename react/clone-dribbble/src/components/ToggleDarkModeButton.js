import { useState } from 'react';

/**
 * Component for the toggle dark mode button.
 */
function ToggleDarkModeButton() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    /**
     * If isDark is false, then add the class "dark" to <body>.
     * Else, remove it.
     * 
     * Adding a "dark" class to body will replace the css color
     * variables from light theme to dark theme. (e.g. primary = white -> black)
     */
    if (!isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    setIsDark((d) => !d);
  };

  return (
    <button id="toggle-dark-mode" type="button" onClick={toggleDarkMode}>
      &#9728;
    </button>
  );
}

export default ToggleDarkModeButton;
