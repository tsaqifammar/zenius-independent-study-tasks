
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
toggleDarkModeButton.addEventListener('click', toggleDarkMode);

/* ============================================= */

/* ======= load design collection dynamically =========== */

function generateDesignCard(id, name, pic, loveCount, viewCount) {
  const designCard = document.createElement('div');
  designCard.classList.add('design')
  designCard.id = `design-${id}`;

  /* thumbnail */
  const thumbnail = document.createElement('img');
  thumbnail.src = `https://loremflickr.com/320/240/art?random=${pic}`;
  thumbnail.alt = 'design-thumbnail';

  /* description */
  const description = document.createElement('div');
  description.classList.add('design-desc');

  /* left part of description */
  const leftDesc = document.createElement('div');
  leftDesc.classList.add('design-desc-left');
  leftDesc.innerHTML = `
    <img src="./assets/profile_picture.png" alt="author-pic">
    <p>${name}</p>
  `;

  /* right part of description */
  const rightDesc = document.createElement('div');
  rightDesc.classList.add('design-desc-right');
  rightDesc.innerHTML = `
    <div>
      <span class="desc-item-icon">&#10084;</span>
      <span class="desc-item-value">${loveCount}</span>
    </div>
    <div>
      <span class="desc-item-icon">&#128065;</span>
      <span class="desc-item-value">${viewCount}</span>
    </div>
  `;

  description.appendChild(leftDesc);
  description.appendChild(rightDesc);

  designCard.appendChild(thumbnail);
  designCard.appendChild(description);
  return designCard;
}

function showDesignCollection(designs) {
  const currentCollection = document.getElementById('collection');

  const newCollection = [];
  designs.forEach(({name, pic, loveCount, viewCount}, idx) => {
    designCard = generateDesignCard(idx, name, pic, loveCount, viewCount);
    newCollection.push(designCard);
  });
  currentCollection.replaceChildren(...newCollection);
}

let designs = [
  { name: 'Tsaqif Ammar', tag: 'animation', pic: 1, loveCount: '1k', viewCount: '14k' },
  { name: 'Liam Olivia', tag: 'branding', pic: 2, loveCount: '1k', viewCount: '14k' },
  { name: 'Noah Emma', tag: 'branding', pic: 3, loveCount: '1k', viewCount: '14k' },
  { name: 'Oliver Evelyn', tag: 'mobile', pic: 4, loveCount: '1k', viewCount: '14k' },
  { name: 'Elijah Amelia', tag: 'illustration', pic: 5, loveCount: '1k', viewCount: '14k' },
  { name: 'James Ava', tag: 'print', pic: 6, loveCount: '1k', viewCount: '14k' },
  { name: 'Lucas Mia', tag: 'product-design', pic: 7, loveCount: '1k', viewCount: '14k' },
];

showDesignCollection(designs);

/* ============================================= */
