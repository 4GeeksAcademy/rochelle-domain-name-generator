import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let pronouns = ["my", "her"];
  let adjectives = ["terrific", "wonderful", "amazing", "pretty"];
  let nouns = ["jogger", "musichall", "castle", "hotel"];
  // Array to store generated domain names
  let domains = [];

  const generateDomains = () => {
    for (let i = 0; i < pronouns.length; i++) {
      for (let j = 0; j < adjectives.length; j++) {
        for (let k = 0; k < nouns.length; k++) {
          let domain = pronouns[i] + adjectives[j] + nouns[k] + ".com";
          domains.push(domain);
        }
      }
    }
    displayDomains();
  };

  // Display domain names
  const displayDomains = () => {
    const domainContainer = document.getElementById("domainContainer");
    domainContainer.innerHTML = "";

    domains.forEach(domain => {
      const domainElement = document.createElement("p");
      domainElement.textContent = domain;
      domainContainer.appendChild(domainElement);
    });
  };

  // Get the "generate" button element from the DOM
  const generateButton = document.getElementById("generateButton");
  generateButton.addEventListener("click", generateDomains);
};
