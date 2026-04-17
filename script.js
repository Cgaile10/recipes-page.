const recipes = [
"Creamy Garlic Chicken","Vegetarian Stir Fry","Chocolate Lava Cake",
"Herb Roasted Potatoes","Creamy Spinach Pasta","Honey Garlic Chicken",
"Vegetable Soup","Garlic Butter Pasta","Chicken Tacos",
"Tomato Mozzarella Salad","Egg Fried Rice","Berry Yogurt Parfait",
"Beef Meatballs","Garlic Green Beans","Simple Omelette",
"Chickpea Salad","Banana Smoothie","Cheesy Garlic Bread",
"Tuna Pasta Salad","Apple Cinnamon Oats","Lemon Butter Cod",
"Veggie Couscous Bowl","Garlic Lemon Broccoli","Chicken Noodle Soup",
"Avocado Chicken Wrap","Bruschetta","Peanut Butter Toast",
"Mushroom Soup","Sweet Chili Chicken","Overnight Oats"
];

const grid = document.getElementById("grid");

recipes.forEach((r,i)=>{
const card = document.createElement("div");
card.className="card";

card.innerHTML = `
<img src="https://picsum.photos/300?random=${i}">
<h3>${r}</h3>
<button onclick="save('${r}')">❤️ Add</button>
`;

grid.appendChild(card);
});

function save(name){
let favs = JSON.parse(localStorage.getItem("favs")) || [];
favs.push(name);
localStorage.setItem("favs",JSON.stringify(favs));
alert("Saved!");
}
