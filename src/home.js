function createHomePage(content) {
  let container = document.createElement("div");
  container.setAttribute("id", "container");
  content.appendChild(container);

  let name = document.createElement("h1");
  name.textContent = "My Little Pizzeria";
  content.appendChild(name);

  let item = document.createElement("div");
  item.setAttribute("class", "item");

  let testimonial = document.createElement("p");
  testimonial.textContent =
    "Best Pizza in NYC by far. Had it when I first game and have never looked back";

  let kindSoul = document.createElement("h3");
  kindSoul.textContent = "Josh";

  item.appendChild(testimonial);
  item.appendChild(kindSoul);

  content.appendChild(item);

  let item2 = document.createElement("div");
  item2.setAttribute("class", "item");

  let hoursHeader = document.createElement("h2");
  hoursHeader.textContent = "Hours";

  let hours = document.createElement("p");
  hours.textContent = "Monday 1-4";

  item2.appendChild(hoursHeader);
  item2.appendChild(hours);

  content.appendChild(item2);

  let item3 = document.createElement("div");
  item3.setAttribute("class", "item");

  let locHeader = document.createElement("h2");
  locHeader.textContent = "Location";

  let location = document.createElement("p");
  location.textContent = "Around the corner";

  item3.appendChild(locHeader);
  item3.appendChild(location);

  content.appendChild(item3);
}

export { createHomePage };
