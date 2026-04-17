const recipes = [
  { name: "Chickpea Salad", image: "images/1.png" },
  { name: "Banana Smoothie", image: "images/2.png" },
  { name: "Cheesy Garlic Bread", image: "images/3.png" },
  { name: "Tuna Pasta Salad", image: "images/4.png" },
  { name: "Apple Cinnamon Oatmeal", image: "images/5.png" },
  { name: "Lemon Butter Fish", image: "images/6.png" },
  { name: "Couscous Veg Bowl", image: "images/7.png" },
  { name: "Roasted Broccoli", image: "images/8.png" },
  { name: "Chicken Soup", image: "images/9.png" },
  { name: "Chicken Wrap", image: "images/10.png" },
  { name: "Bruschetta", image: "images/11.png" },
  { name: "Peanut Butter Banana Toast", image: "images/12.png" },
  { name: "Mushroom Soup", image: "images/13.png" },
  { name: "Sweet Chili Chicken", image: "images/14.png" },
  { name: "Strawberry Yogurt Jar", image: "images/15.png" }
];

const container = document.getElementById("recipe-container");
const searchInput = document.getElementById("search");

function displayRecipes(filteredRecipes) {
  container.innerHTML = "";

  filteredRecipes.forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <button>Add</button>
    `;

    container.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm)
  );

  displayRecipes(filtered);
});

// Load all recipes on start
displayRecipes(recipes);
