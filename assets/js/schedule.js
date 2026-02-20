const dateTodayHTML = `
  ${dayjs().format('MMMM DD, YYYY | HH:mm').toUpperCase()} <br>
  ${dayjs().format('dddd').toUpperCase()}
`;

const dateEarliestHTML = `
  ${dayjs().add(6, 'days').format('MMMM DD, YYYY | HH:mm').toUpperCase()} <br>
  ${dayjs().add(6, 'days').format('dddd').toUpperCase()}
`;

const dateTimeMin = dayjs().add(6, 'days');

export function renderSectionSchedule() {

  document.querySelector('.js-date-time').innerHTML = `
    <input type="datetime-local" value="${dateTimeMin.format('YYYY-MM-DDTHH:mm')}" min="${dateTimeMin.format('YYYY-MM-DDTHH:mm')}" name="input-schedule" id="input-schedule" class="date-time__input js-date-time__input">
    <button class="form__button js-date-time__button">
      CONFIRM
    </button>
  `

  document.querySelector('.js-card__heading-today').innerHTML = dateTodayHTML;
  document.querySelector('.js-card__heading-earliest').innerHTML = dateEarliestHTML;
  
  setInterval(() => {
    document.querySelector('.js-card__heading-today').innerHTML = dateTodayHTML;
    document.querySelector('.js-card__heading-earliest').innerHTML = dateEarliestHTML;
  }, 60000);

  inputDateAndTime();
  
  document.querySelector('.js-date-time__input').addEventListener('keydown', (key) => {

    if (key === 'Enter') {
      inputDateAndTime();
    } else {
      return;
    }

  });
}

export function inputDateAndTime() {
  
  const inputElementDateAndTime = document.querySelector('.js-date-time__input');

  document.querySelector('.js-date-time__button').addEventListener('click', () => {
    const selectedDate = dayjs(inputElementDateAndTime.value);
    
    if (selectedDate.isBefore(dateTimeMin)) {
      alert('Please select a date at least 5 days from now.');
      return;
    }

    const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const dateObject = new Date(inputElementDateAndTime.value);
    const year = dateObject.getFullYear();
    const month = months[dateObject.getMonth()];
    const date = dateObject.getDate().toString().padStart(2, '0');
    const day = days[dateObject.getDay()];
    const hours = dateObject.getHours().toString().padStart(2, '0');
    const minutes = dateObject.getMinutes().toString().padStart(2, '0');
    
    document.querySelector('.js-card-date-time').innerHTML = `
      <div class="card__description">
        <div class="card__body card__body--margin-none">
          <p style="font-size: 0.89rem">
            DATE WILL BE ON
          </p>
        </div>
        <h1 class="card__heading js-card__heading-confirmed-booking">
          ${month.toUpperCase()} ${date}, ${year} | ${hours}:${minutes} <br> ${day.toUpperCase()}
        </h1>
      </div>
    `;

    document.querySelector('.js-date-summary-schedule').innerHTML = `${month.toUpperCase()} ${date}, ${year} (${day.toUpperCase()}) | ${hours}:${minutes}`

  });
}