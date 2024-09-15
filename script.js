
//list with all the recipes
const recipe = [
  {
    name: 'Individual vegetarian lasagnes',
    cuisineType: ['Italian'],
    ingredients: [
      '1.2 kg cherry tomatoes',
      '5 sprigs of fresh thyme',
      'extra virgin olive oil',
      '2 shallots',
      '2 cloves of garlic',
      '500 g baby spinach',
      '8-12 fresh or dried lasagne sheets',
      '350 g ricotta cheese',
      'WHITE SAUCE',
      '600 ml milk',
      '25 g unsalted butter',
      '2 heaped tablespoons flour',
      '150 g vegetarian sharp, mature cheese',
      '100 g mozzarella'
    ],
    source: 'Jamie Oliver',
    totalTime: 130,
    url: 'http://www.jamieoliver.com/recipes/vegetables-recipes/individual-vegetarian-lasagnes/',
    image: './recipe-images/individual-vegetarian-lasagnes.jpg'
  },
  {
    name: 'Vegetarian Stir-Fried Garlic Scape',
    cuisineType: ['Balanced'],
    ingredients: [
      '8 oz. garlic scapes',
      '3 oz. baby corn',
      '3 oz. carrots',
      '1 oz. dried shiitake mushrooms',
      '1 clove of garlic sliced thinly',
      '3 slices of fresh ginger root',
      '2 tablespoons vegetable oil',
      '1/4 cup shaoxing cooking wine',
      '1/4 vegetarian stock or water',
      '1 tablespoon light soy sauce',
      '1 teaspoon sugar',
      '1 teaspoon cornstarch',
      '1/4 teaspoon ground white pepper'
    ],
    source: 'Red Cook',
    totalTime: null,
    url: 'http://redcook.net/2010/06/16/garlic-scape-an-off-menu-treat/',
    image: './recipe-images/vegetarian-stir-fried-garlic-s.jpg'
  },
  {
    name: 'Cheat’s cheesy focaccia',
    cuisineType: ['Italian'],
    ingredients: [
      '500g pack bread mix',
      '2 tbsp olive oil , plus a little extra for drizzling',
      '25g parmesan (or vegetarian alternative), grated',
      '75g dolcelatte cheese (or vegetarian alternative)'
    ],
    source: 'BBC Good Food',
    totalTime: 40,
    url: 'https://www.bbcgoodfood.com/recipes/cheats-cheesy-focaccia',
    image: './recipe-images/cheat’s-cheesy-focaccia.jpg'
  },
  {
    name: "Vegetarian Shepherd's Pie",
    cuisineType: ['Balanced', ' High-Fiber'],
    ingredients: [
      '2 tablespoons extra-virgin olive oil',
      '1 large onion, finely diced',
      '2 carrots, peeled and thinly sliced',
      '2 celery stalks, thinly sliced',
      '10 ounces cremini mushrooms, trimmed and sliced',
      '1 tablespoon tomato paste',
      "1 tablespoon vegetarian Worcestershire sauce, such as Annie's Naturals",
      '1 dried bay leaf',
      '1 cup French green lentils, picked over',
      'Kosher salt and freshly ground pepper',
      '1 cup frozen peas',
      '2 pounds Yukon Gold potatoes, scrubbed and cut into 1 1/2-inch pieces',
      '4 cloves garlic',
      '4 tablespoons unsalted butter',
      '1/2 cup whole milk, warmed'
    ],
    source: 'Martha Stewart',
    totalTime: 120,
    url: 'https://www.marthastewart.com/1535235/vegetarian-shepherds-pie',
    image: "./recipe-images/vegetarian-shepherd's-pie.jpg"
  },
  {
    name: 'Chicken Paprikash',
    cuisineType: ['Low-Carb'],
    ingredients: [
      '640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)',
      '1/2 teaspoon salt',
      '1/4 teaspoon black pepper',
      '1 tablespoon butter – cultured unsalted (or olive oil)',
      '240 grams onion sliced thin (1 large onion)',
      '70 grams Anaheim pepper chopped (1 large pepper)',
      '25 grams paprika (about 1/4 cup)',
      '1 cup chicken stock',
      '1/2 teaspoon salt',
      '1/2 cup sour cream',
      '1 tablespoon flour – all-purpose'
    ],
    source: 'No Recipes',
    totalTime: 80,
    url: 'http://norecipes.com/recipe/chicken-paprikash/',
    image: './recipe-images/chicken-paprikash.jpg'
  },
  {
    name: 'Baked Chicken',
    cuisineType: ['American'],
    ingredients: [
      '6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on',
      '1/2 teaspoon coarse salt',
      '1/2 teaspoon Mrs. Dash seasoning',
      '1/4 teaspoon freshly ground black pepper'
    ],
    source: 'Martha Stewart',
    totalTime: 90,
    url: 'http://www.marthastewart.com/318981/baked-chicken',
    image: './recipe-images/baked-chicken.jpg'
  },
  {
    name: 'Deep Fried Fish Bones',
    cuisineType: ['South east asian'],
    ingredients: ['8 small whiting fish or smelt', '4 cups vegetable oil'],
    source: 'Serious Eats',
    totalTime: 31,
    url: 'http://www.seriouseats.com/recipes/2011/03/deep-fried-fish-bones-recipe.html',
    image: './recipe-images/deep-fried-fish-bones.jpg'
  },
  {
    name: 'Burnt-Scallion Fish',
    cuisineType: ['Chinese'],
    ingredients: [
      '2 bunches scallions',
      '8 tbsp. butter',
      '2 8-oz. fish filets'
    ],
    source: 'Saveur',
    totalTime: 70,
    url: 'http://www.saveur.com/article/Recipes/Burnt-Scallion-Fish',
    image: './recipe-images/fish-dish.jpg'
  },
  {
    name: 'Curry-Crusted Fish',
    cuisineType: ['South east asian'],
    ingredients: [
      '3 slices bread , about 85g/3oz in total',
      '1 lime',
      '1.0 tbsp Korma curry paste',
      '4 thick white fish fillets'
    ],
    source: 'BBC Good Food',
    totalTime: 80,
    url: 'http://www.bbcgoodfood.com/recipes/4717/',
    image: './recipe-images/fish-dish.jpg'
  },
  {
    name: 'Meat Stock',
    cuisineType: ['American'],
    ingredients: [
      '2.5 pounds beef marrow bones',
      '1 large onion, quartered',
      '2 carrots, sliced',
      '1 leek, cleaned and sliced',
      '2 celery stalks, sliced',
      '2.5 pounds organic beef stew meat, cubed',
      '2 tablespoons tomato paste',
      '5 cloves garlic',
      '2 bay leaves',
      '3 sprigs thyme',
      '3 sprigs Italian parsley',
      '1/2 teaspoon black peppercorns'
    ],
    source: 'Food52',
    totalTime: 60,
    url: 'https://food52.com/recipes/3712-meat-stock',
    image: './recipe-images/meat.jpg'
  },
  {
    name: 'Homemade Meat Broth',
    cuisineType: ['American'],
    ingredients: [
      '1 teaspoon salt',
      '1 carrot, peeled',
      '1 medium onion, peeled',
      '2 or 3 celery stalks',
      '¼ red or yellow bell pepper, stripped of all its seeds',
      '1 small boiling potato, peeled',
      '1 ripe, fresh tomato, or 1 canned Italian plum tomato, drained of juice',
      '5 pounds assorted pieces of meat and bones (see meat suggestions above), of which no less than 1½ pounds is all meat'
    ],
    source: 'Cookstr',
    totalTime: 60,
    url: 'http://www.cookstr.com/recipes/il-brodo-homemade-meat-broth',
    image: './recipe-images/meat.jpg'
  },
  {
    name: 'Spice-Rubbed Grilled Flap Meat',
    cuisineType: ['South-american'],
    ingredients: [
      '1 tablespoon whole black peppercorns, toasted',
      '1 teaspoon coriander seed, toasted',
      '1 teaspoon fennel seed, toasted',
      '1 teaspoon cumin pods, toasted',
      '1 teaspoon red pepper flakes',
      '1/2 teaspoon dried oregano',
      '2 medium cloves garlic, minced (about 2 teaspoons)',
      '2 tablespoons vegetable or canola oil',
      '1 whole flap meat steak, 2 to 2 1/2 pounds',
      'Kosher salt'
    ],
    source: 'Serious Eats',
    totalTime: 240,
    url: 'http://www.seriouseats.com/recipes/2012/05/spice-rubbed-grilled-flap-meat-sirloin-tip-recipe.html',
    image: './recipe-images/grilled.jpg'
  }
]

function displayRecipes(recipes){
  //look after the HTML-element where we want to put our arrays at 
  const recipeList = document.getElementById("recipe-list");

  //create a empty string where the content will locate
  let html = '';

  //go through all the recipes with an forEach loop
  recipes.forEach((recipe) => {
    html += `
      <a href="${recipe.url}" target="_blank" style="text-decoration: none; color: inherit;">
        <div class="recipe">
          <img src="${recipe.image}" alt="${recipe.name}" width="100%">
          <h2>${recipe.name}</h2>
          <hr class="separator">
          <p><strong>Cuisine Type: </strong>${recipe.cuisineType}</p>
          <p><strong>Source: </strong>${recipe.source}</p>
          <p><strong>Total Time: </strong>${recipe.totalTime ? recipe.totalTime + ' minutes' : 'Unknown'}</p>
          <hr class="separator">
          <p><strong>Ingredients: </strong></p>
          <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
        </div>
      </a>
    `
  });

  recipeList.innerHTML = html;

};

displayRecipes(recipe)

//function for sort button shortest-longest time cooking 
function sortOnShortest(recipesTime) {
  recipesTime.sort((a, b) => a.totalTime - b.totalTime);

  displayRecipes(recipesTime);
};

//function for sort button longest-shortest time cooking 
function sortOnLongest(recipesTime) {
  recipesTime.sort((a, b) => b.totalTime - a.totalTime);

  displayRecipes(recipesTime);
};

//Event listener for make it possible to add a filters at the same time
document.getElementById("shortest-time").addEventListener("click", () => {
  sortOnShortest(recipe);  // Sort recpies when button activated 
});

document.getElementById("longest-time").addEventListener("click", () => {
  sortOnLongest(recipe);  // Sort recpies when button activated 
});

//show all recipes 
document.getElementById("filter-all").addEventListener("click", () => {
 displayRecipes(recipe);
});

//filter only italian recipes 
function filterItalian (recipes) {
  return recipes.filter(recipe => recipe.cuisineType.includes('Italian'));
};

document.getElementById("filter-italian").addEventListener("click", () => {
  const filteredItalianRecipes = filterItalian(recipe);
  displayRecipes(filteredItalianRecipes)
});

//filter only american or south american recipes
function filterAmerican (recipes) {
  return recipes.filter(recipe => 
    recipe.cuisineType.includes('American') ||
    recipe.cuisineType.includes('South-american')
  );
};

document.getElementById("filter-american").addEventListener("click", () => {
  const filteredAmericanRecipes = filterAmerican(recipe);
  displayRecipes(filteredAmericanRecipes)
});

//filter only asian recipes
function filterAsian (recipes) {
  return recipes.filter(recipe =>
    recipe.cuisineType.includes('Chinese') ||
    recipe.cuisineType.includes('South east asian')
  ); 
};

document.getElementById("filter-asian").addEventListener("click", () => {
  const filteredAsianRecipes = filterAsian(recipe);
  displayRecipes(filteredAsianRecipes)
});

//filter the rest of the cuisines
function filterOtherCuisines(recipes) {
  return recipes.filter(recipe => 
    recipe.cuisineType.includes('Balanced') ||
    recipe.cuisineType.includes('Low-Carb')
  );
};

document.getElementById("filter-other").addEventListener("click", () => {
  const filteredOtherKitchens = filterOtherCuisines(recipe);
  displayRecipes(filteredOtherKitchens)
});

//two variables that collect all the buttons in a container within class
const activeFilterButtons = document.querySelectorAll(".filter button");
const activeSortButtons = document.querySelectorAll(".timesort button");

//add eventlistener for each button
activeFilterButtons.forEach (button => {
  button.addEventListener('click', function() {
    activeFilterButtons.forEach(btn => btn.classList.remove('active'));
    //loop that goes through every button and makes sure that only one is active at a time

    this.classList.add('active');
    //adds the active class to the button that was just clicked
  });
});

//add eventlistener for each button
activeSortButtons.forEach (button => {
  button.addEventListener('click', function(){
    activeSortButtons.forEach(btn => btn.classList.remove('active'));
    //loop through every button and makes sure only one is active at the same time

    this.classList.add('active');
    //add active class to the button that was clicked
  });
});

//function that filter recipes name, cusine type and ingridients 
function searchRecipes(keyword, recipes) {
  return recipes.filter(recipe => {
    return (
      recipe.name.toLowerCase().includes(keyword.toLowerCase()) ||
      recipe.cuisineType.some(cuisine => cuisine.trim().toLowerCase().includes(keyword.toLowerCase())) ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(keyword.toLowerCase()))
      //.some for filtering inside the arrays 
    );
  });
}

document.getElementById('search-field').addEventListener("input", function () {
  const searchTerm = this.value; 
  //gets the value from input field
  const filteredRecipes = searchRecipes(searchTerm, recipe); 
  //filter the recipes
  displayRecipes(filteredRecipes); 
  //show the filtered recipes
});

//function for randomize a recipe
function getRandomRecipe (recipes) {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex]; 
  //return the random selected recipe
}

//eventlistener for random button
document.getElementById('randomRecipe').addEventListener("click", function() {

  activeFilterButtons.forEach(btn => btn.classList.remove('active'));
  activeSortButtons.forEach(btn => btn.classList.remove('active'));
  //removes the other filter and sort buttons when random is clicked

  const randomRecipe = getRandomRecipe(recipe);
  displayRecipes([randomRecipe]);
  //show the selected recipe
});