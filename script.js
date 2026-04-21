const recipes = [
  { name:"Creamy Garlic Chicken", image:"1.png" },
  { name:"Vegetarian Stir Fry", image:"2.png" },
  { name:"Chocolate Lava Cake", image:"3.png" },
  { name:"Herb Roasted Potatoes", image:"4.png" },
  { name:"Creamy Spinach Pasta", image:"5.png" },
  { name:"Honey Garlic Chicken Bites", image:"6.png" },
  { name:"Vegetable Soup", image:"7.png" },
  { name:"Garlic Butter Pasta", image:"8.png" },
  { name:"Chicken Tacos", image:"9.png" },
  { name:"Tomato Mozzarella Salad", image:"10.png" },
  { name:"Egg Fried Rice", image:"11.png" },
  { name:"Berry Yogurt Parfait", image:"12.png" },
  { name:"Beef Meatballs", image:"13.png" },
  { name:"Garlic Green Beans", image:"14.png" },
  { name:"Simple Omelette", image:"15.png" },
  { name:"Chickpea Salad", image:"16.png" },
  { name:"Banana Smoothie", image:"17.png" },
  { name:"Cheesy Garlic Bread", image:"18.png" },
  { name:"Tuna Pasta Salad", image:"19.png" },
  { name:"Apple Cinnamon Oats", image:"20.png" },
  { name:"Lemon Butter Cod", image:"21.png" },
  { name:"Veggie Couscous Bowl", image:"22.png" },
  { name:"Garlic Lemon Broccoli", image:"23.png" },
  { name:"Chicken Noodle Soup", image:"24.png" },
  { name:"Avocado Chicken Wrap", image:"25.png" },
  { name:"Tomato Basil Bruschetta", image:"26.png" },
  { name:"Peanut Butter Banana Toast", image:"27.png" },
  { name:"Creamy Mushroom Soup", image:"28.png" },
  { name:"Sweet Chili Chicken", image:"29.png" },
  { name:"Strawberry Overnight Oats", image:"30.png" }
];

const recipesContainer = document.getElementById("recipes-container");
const searchInput = document.getElementById("searchInput");

function displayRecipes(recipeList) {
  recipesContainer.innerHTML = "";

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

  const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm)
  );

  displayRecipes(filtered);
});

displayRecipes(recipes);
