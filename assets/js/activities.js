import { convertToCSS } from "./utils.js";
import { renderSectionDateSummaryActivities } from "./date-summary.js";

export const activities = [
  {
    name: 'Dining',
    description: `<p>We dined for our first ever date at Pepper Lunch, Estancia. Funnily enough, we never ate at Pepper Lunch again (no complaints!).</p><p>But we sure as hell still dined a whole lot more.</p>`,
    options: [
      {
        name: 'Mendokoro Ramenba',
        image: 'No image attached.',
        locations: [
          {
            address: 'Makati',
            link: ''
          }, {
            address: 'BGC',
            link: ''
          }, {
            address: 'Katipunan',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Ramen Yushoken',
        image: 'No image attached.',
        locations: [
          {
            address: 'Capitol Commons',
            link: ''
          }, {
            address: 'Quezon City',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Genki Sushi',
        image: 'No image attached.',
        locations: [
          {
            address: 'SM Megamall',
            link: ''
          }, {
            address: 'UP Town Center',
            link: ''
          }, {
            address: 'SM Aura',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Tori Tori',
        image: 'No image attached.',
        locations: [
          {
            address: 'San Juan City',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Yabu',
        image: 'No image attached.',
        locations: [
          {
            address: 'Capitol Commons',
            link: ''
          }, {
            address: 'SM Megamall',
            link: ''
          }, {
            address: 'SM Aura',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Yayoi',
        image: 'No image attached.',
        locations: [
          {
            address: 'SM Megamall',
            link: ''
          }, {
            address: 'BGC',
            link: ''
          }, {
            address: 'UP Town Center',
            link: ''
          }
        ], 
        chosen: false
      }
    ],
    chosen: false
  }, {
    name: 'Rock Climbing',
    description: `<p>We've climbed separately so many times with other people, but we've yet to climb together. Will this be our chance?</p>`,
    options: [
      {
        name: 'Climb Central Manila',
        image: 'No image attached.',
        locations: [
          {
            address: 'Mandaluyong',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'The Bouldering Hive',
        image: 'No image attached.',
        locations: [
          {
            address: 'Makati',
            link: ''
          }, {
            address: 'Greenhills',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Boulder Space',
        image: 'No image attached.',
        locations: [
          {
            address: 'Quezon City',
            link: ''
          }
        ], 
        chosen: false
      }
    ],
    chosen: false
  }, {
    name: 'Art Gallery',
    description: `
      <p>
        You’re in front of a painting. I'll be like, "I'm looking at art."  You'll ask, "the painting?" I'll reply "No, you", and then we'll kiss and live happily ever after.
      </p>
      <p>
        No? Just me?
      </p>
    `,
    options: [
      {
        name: 'Metropolitan Museum of Manila',
        image: 'No image attached.',
        locations: [
          {
            address: 'BGC',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Mind Museum',
        image: 'No image attached.',
        locations: [
          {
            address: 'BGC',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Vargas Museum',
        image: 'No image attached.',
        locations: [
          {
            address: 'UP Diliman',
            link: ''
          }
        ], 
        chosen: false
      }
    ],
    chosen: false
  }, {
    name: 'Cafe',
    description: `
      <p>
        Being the workaholics that we are, we're probably going to do work instead of talk. If only I, instead, could do yo—
      </p>
    `,
    options: [
      {
        name: `Mollies World Cafe`,
        image: 'No image attached.',
        locations: [
          {
            address: 'Quezon City',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Yardstick Cafe',
        image: 'No image attached.',
        locations: [
          {
            address: 'San Juan City',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: `Coopers Coffee Haus`,
        image: 'No image attached.',
        locations: [
          {
            address: 'BGC',
            link: ''
          }, {
            address: 'Capitol Commons',
            link: ''
          }
        ], 
        chosen: false
      }
    ], 
    chosen: false
  }, {
    name: 'Picnic',
    description: `
      <p>
        In our often fast-paced lives, it's nice to sometimes unwind and connect with nature. We can play card games, eat some prepped food, and enjoy each other's company.
      </p>
    `,
    options: [
      {
        name: 'Sunken Garden',
        image: 'No image attached.',
        locations: [
          {
            address: 'Quezon City',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Capitol Commons Park',
        image: 'No image attached.',
        locations: [
          {
            address: 'Pasig City',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Maybunga Rainforest Park',
        image: 'No image attached.',
        locations: [
          {
            address: 'Pasig City',
            link: ''
          }
        ], 
        chosen: false
      }
    ], 
    chosen: false
  }, {
    name: 'KTV',
    description: `
      <p>
        The only time I'm actually sad about the romantic adage, "opposites attract". God probably said we'd be too powerful if I had a good voice.
      </p>
    `,
    options: [
      {
        name: 'Turtles',
        image: 'No image attached.',
        locations: [
          {
            address: 'Pasig City',
            link: ''
          }, {
            address: 'Quezon City',
            link: ''
          }
        ], 
        chosen: false
      }
    ], 
    chosen: false
  }, {
    name: 'Bowling and Billiards',
    description: `
      <p>
        I won't be arrogant this time. Mark my words, I will beat you.
      </p>
    `,
    options: [
      {
        name: `Paengs`,
        image: 'No image attached.',
        locations: [
          {
            address: 'Cubao',
            link: ''
          }, {
            address: 'Quezon City',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'SM Megamall Bowling Center',
        image: 'No image attached.',
        locations: [
          {
            address: 'Mandaluyong',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Studio 300',
        image: 'No image attached.',
        locations: [
          {
            address: 'Kapitolyo, Pasig',
            link: ''
          }, {
            address: 'Makati',
            link: ''
          }
        ], 
        chosen: false
      }
    ], 
    chosen: false
  }, {
    name: 'Ukay',
    description: `
      <p>
        I was never really a fashion guy…until I met you. Let's just say I'm grateful I did.
      </p>
    `,
    options: [
      {
        name: 'Fashion Depot',
        image: 'No image attached.',
        locations: [
          {
            address: 'Cubao',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Anonas Ukay Ukay',
        image: 'No image attached.',
        locations: [
          {
            address: 'Anonas',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Tutuban Mall',
        image: 'No image attached.',
        locations: [
          {
            address: 'Manila',
            link: ''
          }
        ], 
        chosen: false
      }
    ], 
    chosen: false
  }, {
    name: 'Massage',
    description: `
      <p>
        Sana nalang hindi tayo mapa-ungol sa sarap. (Anika, is dat u?)
      </p>
    `,
    options: [
      {
        name: 'Banahaw Heals Spa',
        image: 'No image attached.',
        locations: [
          {
            address: 'Mandaluyong City',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'K1 Wellnes and Beauty Spa',
        image: 'No image attached.',
        locations: [
          {
            address: 'Makati City',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: `IM Onsen Spa`,
        image: 'No image attached.',
        locations: [
          {
            address: 'Makati City',
            link: ''
          }
        ], 
        chosen: false
      }
    ], 
    chosen: false
  }, {
    name: 'Pottery',
    description: `
      <p>
        We've never done this type of "messy" activity together. I think it'd be a nice experience to create something with our hands.
      </p>
    `,
    options: [
      {
        name: 'Wabi Sabi Pottery Studio',
        image: 'No image attached.',
        locations: [
          {
            address: 'Kapitolyo',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Laro Ceramics',
        image: 'No image attached.',
        locations: [
          {
            address: 'Quezon City',
            link: ''
          }
        ], 
        chosen: false
      }
    ], 
    chosen: false
  }, {
    name: 'Internet Cafe',
    description: `
      <p>
        I love playing video games, but what I love even more is playing those games with you. Tara Valo! (or any game your prefer)
      </p>
    `,
    options: [
      {
        name: 'High Grounds Cafe',
        image: 'No image attached.',
        locations: [
          {
            address: 'Quezon City',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Techtite Esports Lounge',
        image: 'No image attached.',
        locations: [
          {
            address: 'Quezon City',
            link: ''
          }
        ], 
        chosen: false
      }
    ], 
    chosen: false
  }, {
    name: 'Nail Art',
    description: `
      <p>
        It'd be nice to get matching nails!
      </p>
    `,
    options: [
      {
        name: 'Claws Studio PH',
        image: 'No image attached.',
        locations: [
          {
            address: 'Mandaluyong',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Le Fleur Nails',
        image: '',
        locations: [
          {
            address: 'Krus Na Ligas',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Nelly Nails',
        image: '',
        locations: [
          {
            address: 'Quezon City',
            link: ''
          }
        ], 
        chosen: false
      }, {
        name: 'Ley Nails',
        image: '',
        locations: [
          {
            address: '',
            link: ''
          }
        ], 
        chosen: false
      }
    ], 
    chosen: false
  }
];

const animationTime = 250;

let selectedActivitiesAmount = 0;

function countSelectedActivities() {
  activities.forEach((activity) => {
    if (activity.chosen) {
      selectedActivitiesAmount++;
    }
  })

  return selectedActivitiesAmount;
}

export function renderSectionActivities() {
  let sectionActivitiesHTML = '';

  activities.forEach((activity) => {

    sectionActivitiesHTML += `
      <label for="checkbox-${convertToCSS(activity.name)}" class="card card--hover card--square u-clickable js-card-${convertToCSS(activity.name)}">
        <input type="checkbox" name="activity" id="checkbox-${convertToCSS(activity.name)}" class="checkbox">
        <img src="./assets/images/activities/${convertToCSS(activity.name)}.jpg" alt=${convertToCSS(activity.name)} class="card__img card__img--bg">
        <div class="card__description card__description--hover">
          <h1 class="card__heading">
            ${activity.name.toUpperCase()}
          </h1>
          <div class="card__body">
            ${activity.description}
          </div>
        </div>
      </label>
    `;
  });

  document.querySelector('.js-grid-activities').innerHTML = sectionActivitiesHTML;

  activities.forEach((activity) => {
    const checkbox = document.querySelector(`#checkbox-${convertToCSS(activity.name)}`);

    checkbox.addEventListener('change', () => {
      
      if (activity.chosen) {
        activity.chosen = false
        selectedActivitiesAmount--;
        removeSectionLocation(activity.name);

        if (selectedActivitiesAmount === 0) {
          setTimeout(() => {
            document.querySelector('.js-list-locations').innerHTML = `
              <div style="border-radius: 1rem;" class="section__content section__content--banner">
                <h1 style="font-family: 'Mondia' ;text-align: center; font-weight: animationTime;">
                  Please select an activity first.
                </h1>
              </div>
            `;
          }, animationTime);
          
        }

      } else {
        activity.chosen = true;
        selectedActivitiesAmount++;
        renderSectionLocations(activity.name);
      }
    });
  });
};

function renderSectionLocations(activityName) {
  let sectionLocationsHTML = '';
  
  activities.forEach((activity) => {

    if (activity.chosen) {
      let optionsHTML = '';

      activity.options.forEach((option) => {
        let locationsHTML = '';

        option.locations.forEach((location) => {
          locationsHTML += `
            <div class="card__badge u-clickable">
              ${location.address}
            </div>
          `
        });

        optionsHTML += `
          <label for="radio-${convertToCSS(option.name)}" class="card card--row card--hover u-clickable">
            <input type="radio" name="${activity.name}" id="radio-${convertToCSS(option.name)}" value="${convertToCSS(option.name)}" data-slug=${convertToCSS(option.name)} data-name=${option.name} class="radio">
            <img src="./assets/images/options/${encodeURIComponent(activity.name)}/${encodeURIComponent(option.name)}.jpg" alt="${convertToCSS(option.name)}" class="card__img card__img--bg">
            <div class="card__description card__description--hover card__description--centered">
              <h1 class="card__heading card__heading--L">
                ${option.name.toUpperCase()}
              </h1>
              <div class="card__list js-card__list">
                ${locationsHTML}
              </div>
            </div>
          </label>
        `

      });

      sectionLocationsHTML += `
        <article class="article js-article-${convertToCSS(activity.name)}">
          <h1 class="article__heading">
            ${activity.name.toUpperCase()}
          </h1>
          <div class="grid grid--rectangle">
            ${optionsHTML}
          </div>
        </article>
      `;
    } else {
      return;
    }
  });

  document.querySelector('.js-list-locations').innerHTML = sectionLocationsHTML;

  activities.forEach((activity) => {
    if (!activity.chosen) {
      return;
    }

    activity.options.forEach((option) => {
      if (option.chosen) {
        return;
      }

      const radio = document.querySelector(`#radio-${convertToCSS(option.name)}`);
  
      radio.addEventListener('change', () => {
        renderSectionDateSummaryActivities();
      });

    });


  });

  fadeIn(convertToCSS(activityName));
};

function fadeIn(activityName) {
  document.querySelector(`.js-article-${convertToCSS(activityName)}`).animate([
    { opacity: '0', transform: 'translateY(1rem)' },
    { opacity: '1', transform: 'translateY(0rem)' }
  ], {
    duration: animationTime,
    easing: 'ease-out'
  });
}

function removeSectionLocation(activityName) {
  document.querySelector(`.js-article-${convertToCSS(activityName)}`).animate([
    { opacity: '1', transform: 'translateY(0rem)' },
    { opacity: '0', transform: 'translateY(-2rem)' }
  ], {
    duration: animationTime,
    easing: 'ease-out'
  });

  setTimeout(() => {
    document.querySelector(`.js-article-${convertToCSS(activityName)}`).remove();
  }, animationTime);
}