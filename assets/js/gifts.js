import { convertToCSS } from "./utils.js";

export const gifts = [
  {
    name: 'Flowers',
    description: 'Quintessential gift for Valentine\'s. Who doesn\'t want one?',
  }, {
    name: 'Fuggler',
    description: 'Hay…',
  }, {
    name: 'Ricky',
    description: `He looks so sad! It's time to bring him home to us, don't you think?`,
  }, {
    name: 'Heated Rivalry Jersey',
    description: `I can never compete with Shane or Ilya. If you can't beat them, join them eh?`,
  }, {
    name: 'Issy Lip Bait',
    description: `Either Good Girl or Salty, just let me know. Feel free to tag me in their next giveaway`,
  }, {
    name: 'BTS World Tour 2026 Manila Tickets',
    description: `UNAVAILABLE. No money.`,
  }, {
    name: 'Steamdeck',
    description: `UNAVAILABLE. No money.`,
  }, {
    name: 'Leon Kennedy',
    description: `UNAVAILABLE. You can't buy people.`,
  }
];

export function renderSectionGifts() {
  let sectionGifts = '';
  
  gifts.forEach((gift) => {

    sectionGifts += `
      <label for="gift-${convertToCSS(gift.name)}" class="card card--listing card--hover u-clickable">
        <input type="radio" name="gifts" id="gift-${convertToCSS(gift.name)}" value="gift-${convertToCSS(gift.name)}" class="radio js-radio-${convertToCSS(gift.name)}">
        <img src="./assets/images/gifts/${gift.name}.png" alt="" class="card__img card__img--bg">
        <div class="card__description card__description--footer">
          <h1 class="card__heading card__heading--footer">
            ${gift.name.toUpperCase()}
          </h1>
          <div class="card__body card__body--footer">
            <p>
              ${gift.description}
            </p>
          </div>
        </div>
      </label>
    `;
    
    document.querySelector('.js-flex-gifts').innerHTML = sectionGifts;
  });

  gifts.forEach((gift) => {
    document.querySelector(`.js-radio-${convertToCSS(gift.name)}`).addEventListener('click', () => {
      document.querySelector('.js-date-summary-card-gift').innerHTML = `
        <img src="./assets/images/gifts/${gift.name}.png" alt="${gift.name}" class="card__img card__img--bg">
        <div class="card__description card__description--footer">
          <div class="card__body">
            <p></p>
          </div>
          <h1 class="card__heading card__heading--L">
            GIFT: ${gift.name.toUpperCase()}
          </h1>
        </div>
      `
      document.querySelector('.js-date-summary-card-gift').classList.add('card--square');
    });
  });

}