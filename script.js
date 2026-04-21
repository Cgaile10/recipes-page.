const recipes = [
  { name: "Creamy Garlic Chicken", image: "1.png" },
  { name: "Chickpea Salad", image: "2.png" },
  { name: "Banana Smoothie", image: "3.png" },
  { name: "Cheesy Garlic Bread", image: "4.png" },
  { name: "Tuna Pasta Salad", image: "5.png" },
  { name: "Apple Cinnamon Oatmeal", image: "6.png" },
  { name: "Lemon Garlic Fish", image: "7.png" },
  { name: "Vegetable Couscous Bowl", image: "8.png" },
  { name: "Roasted Broccoli", image: "9.png" },
  { name: "Chicken Noodle Soup", image: "10.png" },
  { name: "Chicken Wrap", image: "11.png" },
  { name: "Tomato Bruschetta", image: "12.png" },
  { name: "Banana Toast", image: "13.png" },
  { name: "Mushroom Soup", image: "14.png" },

  { name: "Vegetarian Stir Fry", image: "15.png" },
  { name: "Chocolate Lava Cake", image: "16.png" },
  { name: "Herb Roasted Potatoes", image: "17.png" },
  { name: "Creamy Spinach Pasta", image: "18.png" },
  { name: "Honey Garlic Chicken", image: "19.png" },
  { name: "Garlic Butter Pasta", image: "20.png" },
  { name: "Chicken Tacos", image: "21.png" },
  { name: "Tomato Mozzarella Salad", image: "22.png" },
  { name: "Berry Yogurt Parfait", image: "23.png" }
];

const container = document.getElementById("recipes-container");
const searchInput = document.getElementById("search");

function displayRecipes(list) {
  container.innerHTML = "";

  list.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
      <h3>${recipe.name}</h3>
      <button>Add</button>
    `;

    container.appendChild(card);
  });
}

displayRecipes(recipes);

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm)
  );

  displayRecipes(filteredRecipes);
});
