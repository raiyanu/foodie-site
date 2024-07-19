// export default
const CMSApiLink =
  "https://nxiwlt7k.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%22product%22+%7C%7C+_type%3D%3D%22productCategory%22%5D";

const findCategoryTitle = (id, data) => {
  let title = "";
  Object.keys(data.result).map((key) => {
    if (data.result[key]._id === id) {
      title = data.result[key].title;
    }
  });
  return title;
};

async function fetchProduct() {
  const res = await fetch(CMSApiLink);
  const data = await res.json();
  //   console.group("new fetch", data);
  // lopp(data);
  const productSets = getCategorey(data);
  return productSets;
}

// for debugging , yeah console.log is the best friend
const lopp = async (data) => {
  Object.keys(data.result).map((key) => {
    if (data.result[key]._type === "product") {
      try {
        console.log(data.result[key].productCategory._ref);
      } catch (error) {
        console.log("=============>[ Error on this object ]<===========");
        console.log(data.result[key]);
      }
    }
  });
};

const getCategorey = async (data) => {
  let content = {
    menu: [],
  };
  let categorey = [];
  console.log(content);

  Object.keys(data.result).map((key) => {
    if (data.result[key]._type === "product") {
      console.log(data.result[key]);
      if (content.menu[data.result[key].productCategory._ref] == undefined) {
        // console.log(data.result[key].productCategory._ref);
        categorey.push(data.result[key].productCategory._ref);
        content.menu[data.result[key].productCategory._ref] = [];
      }
      content.menu[data.result[key].productCategory._ref].push(
        data.result[key]
      );
    }
  });
  console.log(content);
  console.log(categorey);
  let sortCategorey = [];
  categorey.forEach((categoreyItem) => {
    sortCategorey.push({
      id: categoreyItem,
      title: findCategoryTitle(categoreyItem, data),
    });
  });
  return {
    content: content,
    categorey: sortCategorey,
  };
};

export default fetchProduct;
