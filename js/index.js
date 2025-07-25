// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  // renderWhiteSauce();
  // renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  const sauce = document.querySelector('section.sauce');
  sauce.classList.toggle('sauce-white');
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const pizzaCrust = document.querySelector('section.crust');
  pizzaCrust.classList.toggle('crust-gluten-free');
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document
    .querySelector('.btn.btn-pepperoni')
    .classList.toggle('active', state.pepperoni);
  document
    .querySelector('.btn.btn-mushrooms')
    .classList.toggle('active', state.mushrooms);
  document
    .querySelector('.btn.btn-green-peppers')
    .classList.toggle('active', state.greenPeppers);
  document
    .querySelector('.btn.btn-sauce')
    .classList.toggle('active', state.whiteSauce);
  document
    .querySelector('.btn.btn-crust')
    .classList.toggle('active', state.glutenFreeCrust);
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceList = document.querySelector('.panel.price ul');
  const totalElement = document.querySelector('.panel.price strong');

  priceList.innerHTML = ''; // Clear current list
  let total = basePrice;

  for (let ingredient in ingredients) {
    if (state[ingredient]) {
      const item = document.createElement('li');
      item.textContent = `$${ingredients[ingredient].price} ${ingredients[ingredient].name}`;
      priceList.appendChild(item);
      total += ingredients[ingredient].price;
    }
  }

  totalElement.textContent = `$${total}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderButtons();
  renderWhiteSauce();
  renderPrice();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderButtons();
  renderPrice();
  renderGlutenFreeCrust();
});
