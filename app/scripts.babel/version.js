console.log("Hello from version.js");

const biotope = Object.assign({}, window.biotope);

let data = {};
let detail = {};


if (Object.keys(biotope).length > 0) {
  if (biotope.components) {
    data.type = "Biotope Element";
    data.components = [];
    for(let component in biotope.components) {
      data.components.push(component);
    }
  } else {
    data.type = "Biotope";
  }
} else {
  data.type = null
}

const event = new CustomEvent('biotope_connectExtension', { detail:data });
window.dispatchEvent(event);
