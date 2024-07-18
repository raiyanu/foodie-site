// export default
async function fetchProduct() {
  const res = await fetch(
    "https://nxiwlt7k.api.sanity.io/v2022-03-07/data/query/production?query=*%5B%5D"
  );
  const data = await res.json();
  //   console.group("new fetch", data);
  getCategorey(data);
  return data;
}

const getCategorey = async (data) => {
  const filteredData = [];
  Object.keys(data.result).map((key) => {
    console.log("Category", data.result[key]);
    if (data.result[key]._type === "productCategory") {
      filteredData.push(data.result[key]);
    }
  });
  console.log("filteredData", filteredData);
};
fetchProduct();
