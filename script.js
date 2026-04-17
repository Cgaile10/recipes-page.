const recipes = [
  { name:"Creamy Garlic Chicken", img:"images/1.png" },
  { name:"Vegetarian Stir Fry", img:"images/2.png" },
  { name:"Chocolate Lava Cake", img:"images/3.png" },
  { name:"Herb Roasted Potatoes", img:"images/4.png" },
  { name:"Creamy Spinach Pasta", img:"images/5.png" },
  { name:"Honey Garlic Chicken Bites", img:"images/6.png" },
  { name:"Vegetable Soup", img:"images/7.png" },
  { name:"Garlic Butter Pasta", img:"images/8.png" },
  { name:"Chicken Tacos", img:"images/9.png" },
  { name:"Tomato Mozzarella Salad", img:"images/10.png" },
  { name:"Egg Fried Rice", img:"images/11.png" },
  { name:"Berry Yogurt Parfait", img:"images/12.png" },
  { name:"Beef Meatballs", img:"images/13.png" },
  { name:"Garlic Green Beans", img:"images/14.png" },
  { name:"Simple Omelette", img:"images/15.png" },
  { name:"Chickpea Salad", img:"images/16.png" },
  { name:"Banana Smoothie", img:"images/17.png" },
  { name:"Cheesy Garlic Bread", img:"images/18.png" },
  { name:"Tuna Pasta Salad", img:"images/19.png" },
  { name:"Apple Cinnamon Oats", img:"images/20.png" },
  { name:"Lemon Butter Cod", img:"images/21.png" },
  { name:"Veggie Couscous Bowl", img:"images/22.png" },
  { name:"Garlic Lemon Broccoli", img:"images/23.png" },
  { name:"Chicken Noodle Soup", img:"images/24.png" },
  { name:"Avocado Chicken Wrap", img:"images/25.png" },
  { name:"Tomato Basil Bruschetta", img:"images/26.png" },
  { name:"Peanut Butter Banana Toast", img:"images/27.png" },
  { name:"Creamy Mushroom Soup", img:"images/28.png" },
  { name:"Sweet Chili Chicken", img:"images/29.png" },
  { name:"Strawberry Overnight Oats", img:"images/30.png" }
];

const grid = document.getElementById("grid");
const search = document.getElementById("search");

function render(filter="") {
  grid.innerHTML = "";

  recipes
    .filter(r => r.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(r => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${r.img}" alt="${r.name}">
        <h3>${r.name}</h3>
        <button onclick="save('${r.name}')">❤️ Add</button>
      `;

      grid.appendChild(card);
    });
}

function save(name){
  let favs = JSON.parse(localStorage.getItem("favs")) || [];
  favs.push(name);
  localStorage.setItem("favs", JSON.stringify(favs));
  alert(name + " saved!");
}

search.addEventListener("input", e => render(e.target.value));

render();
