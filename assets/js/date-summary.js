import { convertToCSS, convertDashToSpace } from './utils.js';
import { activities } from './activities.js'

export function renderSectionDateSummaryActivities() {
  const chosenActivities = activities.filter(activity => activity.chosen);
  let sectionActivities = '';

  chosenActivities.forEach((activity) => {
    
    const chosenOptionSlug = document.querySelector(`input[name="${activity.name}"]:checked`)?.dataset.slug;
    console.log(chosenOptionSlug);
    const chosenOptionName = convertDashToSpace(document.querySelector(`input[name="${activity.name}"]:checked`)?.dataset.slug);

    sectionActivities += `
      <div class="flex flex--stretch-x">
        <div class="card card--no-hover">
          <img src="./assets/images/activities/${convertToCSS(activity.name)}.jpg" alt="${activity.name}" class="card__img card__img--bg">
          <div class="card__description card__description--bg-img">
            <div class="card__body card__body--margin-none">
              <p>
                ACTIVITY
              </p>
            </div>
            <h1 class="card__heading card__heading--L">
              ${activity.name.toUpperCase()}
            </h1>
          </div>
        </div>
        <div class="card card--no-hover">
          <img src="./assets/images/options/${convertToCSS(activity.name)}/${chosenOptionSlug}.jpg" alt="${chosenOptionSlug}" class="card__img card__img--bg">
          <div class="card__description card__description--bg-img">
            <div class="card__body card__body--margin-none">
              <p>
                LOCATION
              </p>
            </div>
            <h1 class="card__heading card__heading--L">
              ${chosenOptionName.toUpperCase()}
            </h1>
          </div>
        </div>
      </div>
    `

    document.querySelector('.js-date-summary__section-activities').innerHTML = sectionActivities;
  });

}

const confirmButton = document.querySelector('.js-form__button-date-summary-confirm');
let confirmed = false;

const dateSummaryEmailSubject = `Hello, Date Atelier! I'd like to book a date ❤️`;
const dateSummaryEmailBody = `Hallo, Date Atelier! \n \n I'd like to book a date with the following details:`;

confirmButton.addEventListener('click', () => {
  if (!confirmed) {
    alert('Before submitting, please ensure that each activity has a location selected. If sure, please download the date summary and confirm the booking. Attach the image to the email.');

    confirmButton.innerHTML = 'IT\'S A DATE!'
    document.querySelector('.js-date-summary').classList.remove('u-box-shadow-glow--spin');
    confirmButton.classList.add('form__button--invert');
    confirmButton.classList.add('u-box-shadow-glow--spin');    

    confirmed = true;
  } else {
    window.open(`mailto:hello.thedateatelier@gmail.com?subject=${encodeURIComponent(dateSummaryEmailSubject)}&body=${encodeURIComponent(dateSummaryEmailBody)}`, '_blank');
  }
});

document.querySelector('.js-form__button-date-summary-download').addEventListener('click', () => {
  alert('Downloading! Please attach the image to the email.');
  modernScreenshot.domToPng(document.querySelector('.js-date-summary'), {
    scale: 5
  }).then(dataUrl => {
    const link = document.createElement('a')
    link.download = 'screenshot.png'
    link.href = dataUrl
    link.click()
  });
});