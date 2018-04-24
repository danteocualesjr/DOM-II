const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logoImg = document.getElementById("logo-img");
logoImg.setAttribute("src", "img/logo.png");

// Event Listener: Click

logoImg.addEventListener('click', () => {
  alert("This is not a link!")
}); 

// IMAGES

let headerImage = document.getElementById("cta-img");
headerImage.setAttribute("src", "img/header-img.png")

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", "img/mid-page-accent.jpg")

// NAVIGATION

let services = document.getElementsByTagName("a")[0];
services.innerHTML = "Services";
let product = document.getElementsByTagName("a")[1];
product.innerHTML = "Product";
let vision = document.getElementsByTagName("a")[2];
vision.innerHTML = "Vision";
let features = document.getElementsByTagName("a")[3];
features.innerHTML = "Features";
let about = document.getElementsByTagName("a")[4];
about.innerHTML = "About"
let contact = document.getElementsByTagName("a")[5];
contact.innerHTML = "Contact";

// Event Listener: Mouseover

services.addEventListener('mouseover', () => {
  services.style.backgroundColor = "red";
}); 

product.addEventListener('mouseover', () => {
  product.style.backgroundColor = "orange";
}); 

vision.addEventListener('mouseover', () => {
  vision.style.backgroundColor = "yellow";
}); 

features.addEventListener('mouseover', () => {
  features.style.backgroundColor = "green";
}); 

about.addEventListener('mouseover', () => {
  about.style.backgroundColor = "blue";
}); 

contact.addEventListener('mouseover', () => {
  contact.style.backgroundColor = "violet";
}); 


// CTA

let h1Message = document.getElementsByTagName("h1")[0];
h1Message.innerHTML = "DOM Is Awesome";

let button = document.getElementsByTagName("button")[0];
button.innerHTML = "Get Started";

// Event Listener: Click

button.addEventListener('click', () => {
  button.style.height = '100px';
  button.style.backgroundColor = "orange";
}); 

// MAIN CONTENT

let featuresH4 = document.getElementsByTagName('h4')[0];
featuresH4.innerHTML = "Features";
let featureContent = document.getElementsByTagName('p')[0];
featureContent.innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let aboutH4 = document.getElementsByTagName('h4')[1];
aboutH4.innerHTML = "About";
let aboutContent = document.getElementsByTagName('p')[1];
aboutContent.innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let servicesH4 = document.getElementsByTagName('h4')[2];
servicesH4.innerHTML = "Services";
let servicesContent = document.getElementsByTagName('p')[2];
servicesContent.innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let productH4 = document.getElementsByTagName('h4')[3];
productH4.innerHTML = "Product"
let productContent = document.getElementsByTagName('p')[3];
productContent.innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let visionH4 = document.getElementsByTagName('h4')[4];
visionH4.innerHTML = "Vision";
let visionContent = document.getElementsByTagName('p')[4];
visionContent.innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// Event Listener: Mouse Over

featuresH4.addEventListener('mouseover', () => {
  featuresH4.style.backgroundColor = "red";
});
featureContent.addEventListener('mouseover', () => {
  featureContent.style.backgroundColor = "red";
});

aboutH4.addEventListener('mouseover', () => {
  aboutH4.style.backgroundColor = "orange";
});
aboutContent.addEventListener('mouseover', () => {
  aboutContent.style.backgroundColor = "orange";
});

servicesH4.addEventListener('mouseover', () => {
  servicesH4.style.backgroundColor = "yellow";
});
servicesContent.addEventListener('mouseover', () => {
  servicesContent.style.backgroundColor = "yellow";
});

productH4.addEventListener('mouseover', () => {
  productH4.style.backgroundColor = "green";
});
productContent.addEventListener('mouseover', () => {
  productContent.style.backgroundColor = "green";
});

visionH4.addEventListener('mouseover', () => {
  visionH4.style.backgroundColor = "blue";
});
visionContent.addEventListener('mouseover', () => {
  visionContent.style.backgroundColor = "blue";
});

// CONTACT

let contactH4 = document.getElementsByTagName('h4')[5];
contactH4.innerHTML = "Contact";
let address = document.getElementsByTagName('p')[5];
address.innerHTML = "123 Way 456 Street Somewhere, USA";
let phone = document.getElementsByTagName('p')[6];
phone.innerHTML = "1 (888) 888-8888";
let email = document.getElementsByTagName('p')[7];
email.innerHTML = "sales@greatidea.io";

// FOOTER

let footer = document.getElementsByTagName('p')[8];
footer.innerHTML = "Copyright Great Idea! 2018"