/// CONNECTING-HTML-CSS-JS-DEMO

// const getRandomNumber = (max) => {
//     return Math.floor(Math.random() * (max + 1));
// };
// console.log(getRandomNumber(10));
// console.log(getRandomNumber(100));

// const getCurrentTime = () => {
//     const currentDate = new Date();
//     return currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
// };
// console.log(`The current time is ${getCurrentTime()}.`);

// // Reading and Changing Text Content
// const appearanceHeading = document.getElementById('facts__heading');
// appearanceHeading.textContent = 'Qualities and Traits of a Crab';

// // Changing Styles
// const importantFact = document.getElementById('facts__fact--important');
// importantFact.className = `${importantFact.className} highlight`;

// // Creating New Elements
// const newAppearanceFact = document.createElement('li');
// newAppearanceFact.textContent = 'covered in sand (when on a sandy beach)';

// const appearanceList = document.getElementById('facts__list');
// appearanceList.appendChild(newAppearanceFact);



/// ADDING-ONCLICK-HANDLING-DEMO

// const addCrab = () => {
//   const newCrab = document.createElement('span');
//   const crabContainer = document.querySelector('#crabContainer');
//   newCrab.textContent = '🦀';
//   crabContainer.appendChild(newCrab);
// };

// const registerEventHandlers = () => {
//   const crabButton = document.querySelector('#addCrabButton');
//   crabButton.addEventListener('click', addCrab);
// };

// document.addEventListener('DOMContentLoaded', registerEventHandlers);



/// FORESHADOWING-STATE-DEMO

const state = {
  crabCount: 0,
};

// Adding the event object + other functionality to modify state and then modify the DOM
const addCrab = (event) => {
  console.log('in addCrab:', event);
  
  state.crabCount += 1;
  const crabCountContainer = document.querySelector('#crabCount');
  crabCountContainer.textContent = `Crab Count: ${state.crabCount}`;

  const newCrab = document.createElement('span');
  const crabContainer = document.querySelector('#crabContainer');
  newCrab.textContent = '🦀';
  crabContainer.appendChild(newCrab);
};

const registerEventHandlers = (event) => {
  console.log('in registerEventHandlers:', event);

  const crabButton = document.querySelector('#addCrabButton');
  crabButton.addEventListener('click', addCrab);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);