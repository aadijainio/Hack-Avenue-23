const titles = [
  "Garbage pick-up",
  "Biodegradable garbage pickup",
  "Non-Biodegradable garbage pickup ",
  "Recycleable garbage pickup",
];

const descriptions = [
  "Prabhnoor singh requested garbage pickup at location given on the map.",
  "Aadi jain requested garbage pickup at location given on the map.",
  "Anurag choudhury requested garbage pickup at location given on the map.",
  "Dhuruv goyal requested garbage pickup at location given on the map.",
  "Yatin goyal requested garbage pickup at location given on the map.",
];

const numRequests = Math.floor(Math.random() * 10) + 1; // generate a random number of requests between 1 and 10

const requestsContainer = document.getElementById("requests-container");

for (let i = 0; i < numRequests; i++) {
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  const randomDescription =
    descriptions[Math.floor(Math.random() * descriptions.length)];

  const requestElement = document.createElement("div");
  requestElement.classList.add("request");
  requestElement.classList.add("boxy");

  const titleElement = document.createElement("h2");
  titleElement.innerText = randomTitle;

  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = randomDescription;
  const buttonElement = document.createElement("a");
  buttonElement.innerText = "maps";
  buttonElement.classList.add("map-btn");
  buttonElement.href = "https://www.google.com/maps";

  requestElement.appendChild(titleElement);
  requestElement.appendChild(descriptionElement);
  requestElement.appendChild(buttonElement);

  requestsContainer.appendChild(requestElement);
}
