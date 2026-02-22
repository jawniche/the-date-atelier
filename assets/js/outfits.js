import { convertToCSS } from "./utils.js";

const outfits = [
  {
    id: '01',
    image: ''
  }, {
    id: '02',
    image: ''
  }, {
    id: '03',
    image: ''
  }, {
    id: '04',
    image: ''
  }, {
    id: '05',
    image: ''
  }, {
    id: '06',
    image: ''
  }, {
    id: '07',
    image: ''
  }, {
    id: '08',
    image: ''
  }
];

export function renderSectionOutfits() {
  let sectionOutfits = '';
    
  outfits.forEach((outfit) => {

    sectionOutfits += `
      <label for="outfit-${outfit.id}" class="card card--column card--hover u-clickable">
        <input type="radio" name="outfits" id="outfit-${outfit.id}" value="outfit-${outfit.id}" class="radio">
        <img src="./assets/images/outfits/outfit-${outfit.id}.jpg" class="card__img">
      </label>
    `;
  });

  document.querySelector('.js-flex-outfits').innerHTML = sectionOutfits;

  outfits.forEach((outfit) => {
    document.querySelector(`#outfit-${outfit.id}`).addEventListener('click', () => {
      document.querySelector('.js-date-summary-card-outfit').innerHTML = `
        <img src="./assets/images/outfits/outfit-${outfit.id}.jpg" alt="outfit-${outfit.id}" class="card__img card__img--bg">
        <div class="card__description card__description--footer">
          <h1 class="card__heading card__heading--L">
            OUTFIT
          </h1>
        </div>
      `;

      document.querySelector('.js-date-summary-card-outfit').classList.add('card--square');
    });
  });
}