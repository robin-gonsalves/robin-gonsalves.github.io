const MenuItems = [{
    name: "Advent Windows 🪟",
    path: "advent.html"
  },
  {
    name: "Street Party 🎉",
    path: "party.html"
  },
  {
    name: "Street painting 🎨",
    path: "painting.html"
  }
];

MenuItems.forEach(({ name, path}) => {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.textContent = name;
  a.href = path;

  li.appendChild(a);
  document.querySelector("nav ul").appendChild(li);
});