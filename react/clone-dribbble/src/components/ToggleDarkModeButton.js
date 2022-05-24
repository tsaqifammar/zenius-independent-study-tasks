import { useState } from 'react';

function ToggleDarkModeButton() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
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
