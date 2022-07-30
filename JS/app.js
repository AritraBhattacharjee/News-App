

import {str} from './key.js'

console.log("JS file loaded");
let apikey = str
// let source = `bbc-news`;
let source = `the-times-of-india`;
let url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`;

let newsAccordion = document.getElementById("newsAccordion");
let news = `
<div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
`;

// getting the  news

let xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.onload = function () {
  if (this._status = 200) {
    let json = JSON.parse(this.responseText);
    // console.log(json);
    let articles = json.articles;
    // console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
    //   console.log(element);

     let newss = `
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading${index}">
            <button
              class="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse${index}"
              aria-expanded="false"
              aria-controls="collapse${index}"
            >
            <b>Breaking News ${index+1}: </b> ${element["title"]}
            </button>
          </h2>
          <div
            id="collapse${index}"
            class="accordion-collapse collapse "
            aria-labelledby="heading${index}"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              ${element["description"]}. Read more <a href="${element["url"]}" target="_blank"> here</a>
            </div>
            </div>
            </div>`
          
    //   console.log(element["url"]);
      newsHtml += newss;
      // newsHtml +=newhtml
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};
xhr.send();
