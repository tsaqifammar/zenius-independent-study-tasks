
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
  { name: 'Tsaqif Ammar', tag: 'animation', pic: 1, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Brock Cecil', tag: 'animation', pic: 2, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'David Raven', tag: 'animation', pic: 3, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Smith Zeta', tag: 'animation', pic: 4, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Zeta Smith', tag: 'animation', pic: 5, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Cecil Lilac', tag: 'animation', pic: 6, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Alpha Raven', tag: 'animation', pic: 7, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Ammar Tsaqif', tag: 'animation', pic: 8, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Smith Delta', tag: 'animation', pic: 9, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Delta David', tag: 'branding', pic: 10, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Irwin David', tag: 'branding', pic: 11, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Lilac Zeta', tag: 'illustration', pic: 12, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Smith Zeta', tag: 'illustration', pic: 13, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Delta Ammar', tag: 'illustration', pic: 14, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Bella Lilac', tag: 'mobile', pic: 15, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Zeta Byron', tag: 'print', pic: 16, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Delta Nolan', tag: 'product-design', pic: 17, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Brock Tsaqif', tag: 'product-design', pic: 18, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Smith Delta', tag: 'product-design', pic: 19, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Byron Raven', tag: 'product-design', pic: 20, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Raven Brock', tag: 'product-design', pic: 21, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'David Lilac', tag: 'product-design', pic: 22, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Byron Tsaqif', tag: 'product-design', pic: 23, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Alpha David', tag: 'product-design', pic: 24, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Smith Raven', tag: 'typography', pic: 25, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Tsaqif Irwin', tag: 'web-design', pic: 26, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Irwin Ammar', tag: 'web-design', pic: 27, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Irwin Delta', tag: 'web-design', pic: 28, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Delta Zeta', tag: 'web-design', pic: 29, loveCount: '1k', viewCount: '14k', isLoved: false },
  { name: 'Lilac Tsaqif', tag: 'web-design', pic: 30, loveCount: '1k', viewCount: '14k', isLoved: false },
];

showDesignCollection(designs);

/* ============================================= */

/* ======= 1. "filter by category" functionality =========== */
/* ============================================= */

/* ======= 2. "love a design" functionality =========== */

function toggleLove(id) {
  console.log(id);
  const designCardWithId = document.getElementById(`design-${id}`);
  const loveIcon = designCardWithId.getElementsByClassName('desc-item-icon')[0];
  if (!designs[id].isLoved) {
    designs[id].isLoved = true;
    loveIcon.classList.add('icon-active');
  } else {
    designs[id].isLoved = false;
    loveIcon.classList.remove('icon-active');
  }
}

const designCards = document.getElementsByClassName('design');
for (let design of designCards) {
  const designId = design.id.split('-')[1];
  const loveIcon = design.getElementsByClassName('desc-item-icon')[0];
  loveIcon.addEventListener('click', () => toggleLove(designId));
}

/* ============================================= */

/* ======= 3. dark mode functionality =========== */

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