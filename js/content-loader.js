import fetchProduct from "./fetchProduct.js";

// async function fetchContentData(dataPath) {
//   try {
//     const response = await fetch(dataPath);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const menuData = await response.json();
//     // console.log(menuData);
//     appendMenuData(menuData);
//   } catch (error) {
//     console.error("Fetch error:", error);
//     if (errCount == 0) {
//       fetchContentData("../data.json");
//       errCount++;
//     }
//   }
//   await masonry_init();
// }
// (async () => {
//   const productSets = await fetchProduct();
//   console.log(productSets);
// })();
const main = document.querySelector("main");

const AddFoodItem = async (categoryId, category, sortCategorey) => {
  let catagoreyName = "Other";
  for (let key in sortCategorey) {
    if (sortCategorey[key].id === categoryId) {
      catagoreyName = sortCategorey[key].title;
    }
  }

  let sectionNav = document.getElementById("section_nav");
  const link = document.createElement("a");
  link.href = `#${catagoreyName.replace(/\s+/g, "_").toLowerCase()}`;
  link.textContent = catagoreyName.toUpperCase();
  link.onclick = () =>
    highlight(catagoreyName.replace(/\s+/g, "_").toLowerCase());
  sectionNav.appendChild(link);

  const article = document.createElement("article");
  article.classList.add("list");
  article.id = catagoreyName.replace(/\s+/g, "_").toLowerCase();

  // Create and append category heading
  const heading = document.createElement("h2");
  heading.textContent = catagoreyName.toUpperCase();
  article.appendChild(heading);

  // Create and append list of items
  const ul = document.createElement("ul");
  category.forEach((item) => {
    console.log(item);
    const li = document.createElement("li");

    const spanItem = document.createElement("span");
    const h3 = document.createElement("h3");
    h3.textContent = item.title;
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
};

let errCount = 0;
function appendMenuData(data, sortCategorey) {
  // console.log(data.menu);
  const menu = Object.entries(data.menu);
  for (let [categoryId, category] of menu) {
    console.log(categoryId, category);
    AddFoodItem(categoryId, category, sortCategorey);
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  // await fetchContentData("/foodie-site/data.json");
  (async function fetchContentData(dataPath) {
    const productSets = await fetchProduct();
    console.log(productSets.content, productSets.categorey);
    appendMenuData(productSets.content, productSets.categorey);
    await masonry_init();
  })();
});

// console.group(await fetchProduct());

/** 
 function appendMenuData(data, sortCategorey) {
  console.log(data);
  const main = document.querySelector("main");
  Object.values(data.menu).forEach((category) => {
    for (let item of data.menu) {
      console.log(item);
    }
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
 */
