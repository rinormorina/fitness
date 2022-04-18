
var testimonials = document.querySelector("#testimonial_carousel");
var navigation_items = document.querySelector("#navigation_items");
var products = document.querySelector("#products_carousel");
var languageBtn = document.querySelector(".language-btn");
var featureList1 = document.querySelector("#features_list_1");
var featureList2 = document.querySelector("#features_list_2");
var featuresSecondaryTitle = document.querySelector("#features_titleSecondary");
var featuresSecondaryDesc = document.querySelector("#features_descSecondary");
var featuresBtn = document.querySelector("#features_btn");
var price_title = document.querySelector("#price_title");
var price_desc = document.querySelector("#price_desc");
var price_desc_2 = document.querySelector("#price_desc_2");
var price_price = document.querySelector("#price_price");
var price_legals = document.querySelector("#price_legals");
var news_title = document.querySelector("#news_title");
var blogEntries = document.querySelector("#blog_entries");
var news_title = document.querySelector("#newsletter_title");
var contact_title = document.querySelector("#contact_title");
var faqTitle = document.querySelector("#faq_title");
var faq_content = document.querySelector("#faq_content");
var nav_contact = document.querySelector("#nav_contact");
var send_btn = document.querySelector(".send_btn");
var send_btn1 = document.querySelector(".send_btn1");


const a = document.getElementById("CybotCookiebotDialogBody");
if (a) {
  a.addEventListener(onclick, function (e) {
    e.preventDefault();
  });
}

var userLang = "de";

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}    

languageBtn.addEventListener("click", function () {
  if (userLang == "de") {
    userLang = "en";
    readTextFile("./content/languages.json", function (text) {
      let data = JSON.parse(text);
      let domData;
      userLang == "de" 
        ? (domData = data.languages[1].deutsch)
        : (domData = data.languages[0].english);
     
      add_static_info(domData);
      add_faqs(domData);
      add_features(domData);
    });
  } else if (userLang == "en") {
    userLang = "de";

    readTextFile("./content/languages.json", function (text) {
      let data = JSON.parse(text);
      let domData;

      userLang == "de"
        ? (domData = data.languages[1].deutsch)
        : (domData = data.languages[0].english);
    

      add_static_info(domData);
      add_faqs(domData);
      add_features(domData);
    });
  }
});

readTextFile("./content/languages.json", function (text) {
  let data = JSON.parse(text);
  let domData;

  userLang == "de" 
    ? (domData = data.languages[1].deutsch)
    : (domData = data.languages[0].english);
 

  add_static_info(domData);
  add_faqs(domData);
  add_features(domData);
});

function add_static_info(domData) {
 
  news_title.innerHTML = domData.newsletter.title;
  contact_title.innerHTML = domData.contact.title;
  nav_contact.innerHTML = domData.navigation[4].value;
  faqTitle.innerHTML = domData.faq.title;
  send_btn.innerHTML = domData.newsletter.button;
  send_btn1.innerHTML = domData.newsletter.button;
}

function add_features(domData) {
  let featureText = "";
  let feature = domData.feature.featureList1;
  for (let k = 0; k < 4; k++) {
    featureText +=
      '<div class="features-item-description"><div class="features-item-copy"><div class="features-item-title">' +
      feature[k].featureTitle +
      '</div><div class="features-item-caption">' +
      feature[k].featureDesc +
      "</div></div></div>";
  }
  featureList1.innerHTML = featureText;
  featureText = "";

  featureText =
    '<div class="title-main" id="features_titleSecondary">' +
    domData.feature.titleSecondary +
    '</div><div class="features-description" id="features_descSecondary">' +
    domData.feature.descSecondary +
    "</div>";

}


function add_faqs(domData) {
  let faqElements = "";
  domData.faq.questions.forEach(function (i, k) {
    faqElements +=
      '<div class="faqs-row"><div class="faqs-title">' +
      i.question +
      '<div class="faqs-icon"><img loading="lazy" src="images/icon/icon-arrow-down.svg" alt="" /></div></div><div class="faqs-paragraph">' +
      i.answer +
      "</div> </div>";
  });
  faq_content.innerHTML = faqElements;
}

function add_testimonials(domData) {
  let testimonialText = "";
  domData.testimonials.forEach(function (i, k) {
    testimonialText +=
      '<div class="item"><article class="testimonials-item"><div class="testimonials-copy"><div class="testimonials-quote">' +
      i.quote +
      '</div><div class="testimonials-person">' +
      i.coach +
      '</div></div><div class="testimonials-image"><img loading="lazy" src="images/testimonials-img-' +
      i.id +
      '.jpg" alt="" /></div></article></div>';
  });
  testimonials.innerHTML = testimonialText;
}
