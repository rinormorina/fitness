//load JSON File
var hero_title = document.querySelector("#hero_title");
var hero_desc = document.querySelector("#hero_desc");
var hero_btn = document.querySelector("#hero_btn");
var testimonials = document.querySelector("#testimonial_carousel");
var navigation_items = document.querySelector("#navigation_items");
var products = document.querySelector("#products_carousel");
var product_title = document.querySelector("#product_title");
// var platform_title = document.querySelector("#platform_title");
// var platform_overline = document.querySelector("#platform_overline");
// var platform_desc = document.querySelector("#platform_desc");
// var platform_btn = document.querySelector("#platform_btn");
var featureList1 = document.querySelector("#features_list_1");
var featureList2 = document.querySelector("#features_list_2");
var featuresMainTitle = document.querySelector("#features_mainTitle");
var featuresMainDesc = document.querySelector("#features_mainDesc");
var featuresSecondaryTitle = document.querySelector("#features_titleSecondary");
var featuresSecondaryDesc = document.querySelector("#features_descSecondary");
var featuresBtn = document.querySelector("#features_btn");
var gym_title = document.querySelector("#gym_title");
var gym_desc = document.querySelector("#gym_desc");
var gym_overline = document.querySelector("#gym_overline");
var gym_btn = document.querySelector("#gym_btn");
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

//nav elements
//CLASSES
//error
//success
//send_btn
//contact_title
const a = document.getElementById("CybotCookiebotDialogBody");
if (a) {
  a.addEventListener(onclick, function (e) {
    e.preventDefault();
  });
}
//set browser language
let userLang = navigator.language || navigator.userLanguage;

//get data from local File
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

readTextFile("./content/languages.json", function (text) {
  let data = JSON.parse(text);
  let domData;
  //choose data for DOM according to set browser lang
  userLang == "de-DE" || userLang == "de" //beginsWith()
    ? (domData = data.languages[1].deutsch)
    : (domData = data.languages[0].english);
  /**
   *
   * call functions to build DOM
   *
   *
   */
  add_static_info(domData);
  add_product_info(domData);
  add_faqs(domData);
  // add_testimonials(domData);
  add_features(domData);
});

function add_static_info(domData) {
  hero_title.innerHTML = domData.hero.title;
  hero_desc.innerHTML = domData.hero.desc;
  hero_btn.innerHTML = domData.hero.btn;
  product_title.innerHTML = domData.product.title;
  // platform_title.innerHTML = domData.platform.title;
  // platform_desc.innerHTML = domData.platform.desc;
  // platform_overline.innerHTML = domData.platform.overline;
  // platform_btn.innerHTML = domData.platform.buttonDesc;
  news_title.innerHTML = domData.newsletter.title;
  contact_title.innerHTML = domData.contact.title;
  gym_btn.innerHTML = domData.navigation[4].value;
  nav_contact.innerHTML = domData.navigation[4].value;
  faqTitle.innerHTML = domData.faq.title;
  featuresMainTitle.innerHTML = domData.feature.titleMain;

  featuresMainDesc.innerHTML = domData.feature.desc;

  gym_title.innerHTML = domData.gym.title;
  gym_overline.innerHTML = domData.gym.overline;
  gym_desc.innerHTML = domData.gym.desc;
  price_title.innerHTML = domData.price.title;
  price_desc.innerHTML = domData.price.desc;
  price_desc_2.innerHTML = domData.price.desc2;
  price_legals.innerHTML = domData.price.priceAnnotation;
  price_price.innerHTML = domData.price.priceTag;

  send_btn.innerHTML = domData.newsletter.button;
  send_btn1.innerHTML = domData.newsletter.button;
}

function add_features(domData) {
  let featureText = "";
  let feature = domData.feature.featureList1;
  for (let k = 0; k < 4; k++) {
    featureText +=
      '<div class="features-item-description"><div class="features-item-icon"><img loading="lazy" src="images/icon/icon-feature-' +
      feature[k].featureID +
      '.svg" alt="" /></div><div class="features-item-copy"><div class="features-item-title">' +
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
  for (let k = 4; k < 8; k++) {
    featureText +=
      '<div class="features-item-description feature-xl"><div class="features-item-icon"><img loading="lazy" src="images/icon/icon-feature-' +
      feature[k].featureID +
      '.svg" alt="" /></div><div class="features-item-copy"><div class="features-item-title">' +
      feature[k].featureTitle +
      "</div></div></div>";
  }
  featureText +=
    '<a href="#price" class="button-main anchor-link" id="features_btn">' +
    domData.feature.buttonDesc +
    "</a>";
  featureList2.innerHTML = featureText;
}

function add_product_info(domData) {
  let productElements = "";
  domData.product.carousel.forEach(function (i, k) {
    productElements +=
      '<div class="item"><article class="product-item"><div class="product-image-wrapper"><div class="product-page">' +
      i.page +
      '</div><div class="product-image"><img loading="lazy" src="images/product-image-' +
      i.productID +
      '.png" alt="" /></div></div><div class="product-copy"><div class="product-copy-number">' +
      i.productID +
      '</div><div class="title-main">' +
      i.productTitle +
      '</div><div class="description">' +
      i.prodcutDesc +
      "</div></div></article></div>";
  });
  products.innerHTML = productElements;
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

function add_testimonials() {
  let testimonialText = "";
  let quote = ["a", "b", "c", "d"];
  for (let i = 0; i < 4; i++) {
    testimonialText +=
      '<div class="item"><article class="testimonials-item"><div class="testimonials-copy"><div class="testimonials-quote">' +
      quote[i] +
      '</div><div class="testimonials-person">' +
      quote[i] +
      '</div><div class="testimonials-image"><img loading="lazy" src="/images/testimonials-img-' +
      i +
      '.jpg" alt="" /></div></div></article></div>';
  }
  testimonials.innerHTML = testimonialText;
}
add_testimonials();
