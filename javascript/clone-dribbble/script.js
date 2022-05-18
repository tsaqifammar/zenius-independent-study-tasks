
/* ======= dark mode functionality =========== */

let isInDarkMode = false;

function toggleDarkMode() {
  if (!isInDarkMode) {
    document.body.classList.add('dark');
    isInDarkMode = true;
  } else {
    document.body.classList.remove('dark');
    isInDarkMode = false;
  }
}

const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
console.log(toggleDarkModeButton);
toggleDarkModeButton.addEventListener('click', toggleDarkMode);

/* ============================================= */
