const recipes = [
  { name: "Creamy Garlic Chicken", image: "1.png" },
  { name: "Banana Smoothie", image: "2.png" },
  { name: "Cheesy Garlic Bread", image: "3.png" },
  { name: "Tuna Pasta Salad", image: "4.png" },
  { name: "Apple Cinnamon Oatmeal", image: "5.png" },
  { name: "Lemon Garlic Fish", image: "6.png" },
  { name: "Vegetable Couscous Bowl", image: "7.png" },
  { name: "Lemon Broccoli", image: "8.png" },
  { name: "Chicken Noodle Soup", image: "9.png" },
  { name: "Chicken Wrap", image: "10.png" },
  { name: "Bruschetta Toast", image: "11.png" },
  { name: "Peanut Butter Banana Toast", image: "12.png" },
  { name: "Mushroom Soup", image: "13.png" },
  { name: "Sweet Chilli Chicken", image: "14.png" },
  { name: "Strawberry Overnight Oats", image: "15.png" }
];

const recipesContainer = document.getElementById("recipes-container");
const searchInput = document.getElementById("searchInput");

function displayRecipes(recipeList) {
  recipesContainer.innerHTML = "";

  if (recipeList.length === 0) {
    recipesContainer.innerHTML = `<p class="no-results">No recipes found.</p>`;
    return;
  }

  recipeList.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="recipe-content">
        <h3>${recipe.name}</h3>
        <button>Add</button>
      </div>
    `;

    recipesContainer.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm)
  );

  displayRecipes(filteredRecipes);
});

displayRecipes(recipes);
