console.log("Hello from devtools.js")

var panels = chrome.devtools.panels;
panels.create(
    "Biotope",
    "images/biotope.png",
    "app/panel.html",
    function(panel) { 
        console.log("123") 
    });


panels.elements.createSidebarPane(
  "Biotope DevTools",
  function(sidebar) {
    panels.elements.onSelectionChanged.addListener(function() {
        console.log("hi from inside the function devtools.js");
      // The chosen element in the element panel
      // has changed. We can now update the sidebar
      // contents...
 });
});