import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const fetchSiteDetails = async () => {
  try {
    const res = await fetch(
      "https://nxiwlt7k.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%22detail%22%5D%5B0%5D"
    );
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (error) {
    console.error(error);
    console.error("File: js/cms.js");
    console.error("Error: Error in cms.js file");
  }
};

const useDetails = async () => {
  const data = await fetchSiteDetails();
  try {
    const details = {
      SiteName: data.result.SiteName,
      Slogans: data.result.Slogans,
      Email: data.result.Email,
      Telephone: data.result.Telephone,
      Mobile: data.result.Mobile,
      Address: data.result.Address,
      HelpPageContent: data.result.HelpPageContent,
      AboutPageContent: data.result.AboutPageContent,
      FaqPageContent: data.result.FAQPageContent,
    };
    // console.table(details);

    document.getElementById("title").innerText =
      `${details.SiteName}`.toUpperCase() + " | Home";
    const siteFirstName = `${details.SiteName}`.split(" ")[0].toLowerCase();
    const siteSecondName = `${details.SiteName}`.split(" ")[1].toLowerCase();

    document.getElementById("FsiteName").innerText =
      siteFirstName.toUpperCase();
    document.getElementById("SsiteName").innerText =
      siteSecondName.toUpperCase();

    document.getElementById("mob").innerText = details.Mobile;
    document.getElementById("tel").innerText = details.Telephone;
    document.getElementById("email").innerText = details.Email;
    document.getElementById("address").innerText = details.Address;
    try {
      var aboutPageTemplate = document.createElement("template");
      aboutPageTemplate.innerHTML = marked.parse(details.AboutPageContent);
      var result = aboutPageTemplate.content.children;
      document.getElementById("aboutPage").append(...result);
    } catch (error) {}
    try {
      var faqPageTemplate = document.createElement("template");
      faqPageTemplate.innerHTML = marked.parse(details.FaqPageContent);
      var result = faqPageTemplate.content.children;
      document.getElementById("faqPage").append(...result);
    } catch (error) {}
    try {
      var helpPageTemplate = document.createElement("template");
      helpPageTemplate.innerHTML = marked.parse(details.HelpPageContent);
      var result = helpPageTemplate.content.children;
      document.getElementById("helpPage").append(...result);
    } catch (error) {}
  } catch (error) {
    console.error(error);
    console.error("File: js/cms.js");
    console.error("Error: Error in cms.js file");
  }
};

useDetails();
