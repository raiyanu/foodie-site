async function fetchContentData() {
  try {
    const response = await fetch("/data.json"); // Ensure the correct path to your JSON file
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const menuData = await response.json();
    console.log(menuData);
    appendMenuData(menuData);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

function appendMenuData(data) {
  const main = document.querySelector("main");

  Object.values(data.menu).forEach((category) => {
    // Create and append nav item
    // console.log(category);

    let sectionNav = document.getElementById("section_nav");
    const link = document.createElement("a");
    link.href = `#${category.catagorey.replace(/\s+/g, "_").toLowerCase()}`;
    link.textContent = category.catagorey.toUpperCase();
    link.onclick = () =>
      highlight(category.catagorey.replace(/\s+/g, "_").toLowerCase());
    sectionNav.appendChild(link);

    // Create article for each category
    const article = document.createElement("article");
    article.classList.add("list");
    article.id = category.catagorey.replace(/\s+/g, "_").toLowerCase();

    // Create and append category heading
    const heading = document.createElement("h2");
    heading.textContent = category.catagorey.toUpperCase();
    article.appendChild(heading);

    // Create and append list of items
    const ul = document.createElement("ul");
    category.item.forEach((item) => {
      const li = document.createElement("li");

      const spanItem = document.createElement("span");
      const h3 = document.createElement("h3");
      h3.textContent = item.name;
      const p = document.createElement("p");
      p.textContent = item.description;

      spanItem.appendChild(h3);
      spanItem.appendChild(p);

      const spanPrice = document.createElement("span");
      const h1 = document.createElement("h1");
      h1.innerHTML = `<span></span>${item.price.toFixed(2)}`;

      spanPrice.appendChild(h1);

      li.appendChild(spanItem);
      li.appendChild(spanPrice);
      ul.appendChild(li);
    });

    article.appendChild(ul);
    main.appendChild(article);
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  await fetchContentData();
  await masonry_init();
});
