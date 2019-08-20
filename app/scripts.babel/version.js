console.log("Hello from version.js");

const biotopeElements = Object.assign({}, window.biotope);

let components = [];
let detail = {};

if (biotopeElements.components) {
  for(let component in biotopeElements.components) {
    components.push(component) 
  }
  detail = {
    components,
    window
  }
} 
const event = new CustomEvent('biotope_connectExtension', { detail:components });
window.dispatchEvent(event);
