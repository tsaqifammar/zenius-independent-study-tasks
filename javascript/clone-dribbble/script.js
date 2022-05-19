
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
  { name: 'Bella Brock', tag: 'animation', pic: 2, loveCount: '1k', viewCount: '14k' },
  { name: 'Brock Smith', tag: 'animation', pic: 3, loveCount: '1k', viewCount: '14k' },
  { name: 'David Alpha', tag: 'animation', pic: 4, loveCount: '1k', viewCount: '14k' },
  { name: 'Nolan Tsaqif', tag: 'animation', pic: 5, loveCount: '1k', viewCount: '14k' },
  { name: 'Raven Irwin', tag: 'animation', pic: 6, loveCount: '1k', viewCount: '14k' },
  { name: 'Lilac Tsaqif', tag: 'animation', pic: 7, loveCount: '1k', viewCount: '14k' },
  { name: 'David Alpha', tag: 'animation', pic: 8, loveCount: '1k', viewCount: '14k' },
  { name: 'David Cecil', tag: 'animation', pic: 9, loveCount: '1k', viewCount: '14k' },
  { name: 'Irwin Alpha', tag: 'branding', pic: 10, loveCount: '1k', viewCount: '14k' },
  { name: 'David Tsaqif', tag: 'branding', pic: 11, loveCount: '1k', viewCount: '14k' },
  { name: 'Byron Cecil', tag: 'illustration', pic: 12, loveCount: '1k', viewCount: '14k' },
  { name: 'Tsaqif Zeta', tag: 'illustration', pic: 13, loveCount: '1k', viewCount: '14k' },
  { name: 'Nolan Brock', tag: 'illustration', pic: 14, loveCount: '1k', viewCount: '14k' },
  { name: 'Smith Byron', tag: 'mobile', pic: 15, loveCount: '1k', viewCount: '14k' },
  { name: 'Byron Lilac', tag: 'print', pic: 16, loveCount: '1k', viewCount: '14k' },
  { name: 'Smith David', tag: 'product-design', pic: 17, loveCount: '1k', viewCount: '14k' },
  { name: 'Alpha Zeta', tag: 'product-design', pic: 18, loveCount: '1k', viewCount: '14k' },
  { name: 'Byron Tsaqif', tag: 'product-design', pic: 19, loveCount: '1k', viewCount: '14k' },
  { name: 'Cecil David', tag: 'product-design', pic: 20, loveCount: '1k', viewCount: '14k' },
  { name: 'Cecil Byron', tag: 'product-design', pic: 21, loveCount: '1k', viewCount: '14k' },
  { name: 'Zeta Delta', tag: 'product-design', pic: 22, loveCount: '1k', viewCount: '14k' },
  { name: 'Alpha Bella', tag: 'product-design', pic: 23, loveCount: '1k', viewCount: '14k' },
  { name: 'Zeta Brock', tag: 'product-design', pic: 24, loveCount: '1k', viewCount: '14k' },
  { name: 'Cecil Alpha', tag: 'typography', pic: 25, loveCount: '1k', viewCount: '14k' },
  { name: 'Delta Alpha', tag: 'web-design', pic: 26, loveCount: '1k', viewCount: '14k' },
  { name: 'David Lilac', tag: 'web-design', pic: 27, loveCount: '1k', viewCount: '14k' },
  { name: 'Alpha Byron', tag: 'web-design', pic: 28, loveCount: '1k', viewCount: '14k' },
  { name: 'Smith Irwin', tag: 'web-design', pic: 29, loveCount: '1k', viewCount: '14k' },
  { name: 'Ammar Irwin', tag: 'web-design', pic: 30, loveCount: '1k', viewCount: '14k' },
];

showDesignCollection(designs);

/* ============================================= */

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