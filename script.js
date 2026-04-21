const recipes = [
  { name: "Creamy Garlic Chicken", image: "1.png" },
  { name: "Vegetarian Stir Fry", image: "2.png" },
  { name: "Chocolate Lava Cake", image: "3.png" },
  { name: "Herb Roasted Potatoes", image: "4.png" },
  { name: "Creamy Spinach Pasta", image: "5.png" },
  { name: "Honey Garlic Chicken", image: "6.png" },
  { name: "Garlic Butter Pasta", image: "7.png" },
  { name: "Chicken Tacos", image: "8.png" },
  { name: "Tomato Mozzarella Salad", image: "9.png" },
  { name: "Egg Fried Rice", image: "10.png" },
  { name: "Berry Yogurt Parfait", image: "11.png" },
  { name: "Beef Meatballs", image: "12.png" },
  { name: "Simple Omelette", image: "13.png" },
  { name: "Chickpea Salad", image: "14.png" },
  { name: "Banana Smoothie", image: "15.png" }
];

const container = document.getElementById("recipes-container");

recipes.forEach(recipe => {
  const card = document.createElement("div");
  card.className = "recipe-card";

  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}">
    <h3>${recipe.name}</h3>
    <button>Add</button>
  `;

  container.appendChild(card);
});
