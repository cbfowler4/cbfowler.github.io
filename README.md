# cbfowler4.github.io
Single page portfolio website built with JavaScript/CSS and bundled with Webpack


## Page Generation
Single page application built by dynamically generating the DOM elements based on hashchange events. A root JavaScript file will parse the current URL and determine which page should be generated. On a hashchange event, the ```renderContent``` function will be called.

```javascript
const renderContent = () => {
  const path = location.hash.slice(2);
  switch (path) {
    case "about":
      renderAbout(root);
      break;
    case "projects":
      renderProjects(root);
      break;
    case "contact":
      renderContact(root);
      break;
    case "gallery":
      renderGallery(root, images);
      break;
    default:
      renderHome(root);
  }
}
```

```renderContent``` calls a function and the function will alter the DOM. ```renderGallery``` is provided below as an example of the DOM manipulation.

```javascript 
export default (root, images) => {
  root.innerHTML = ('\
  <div class=gallery>\
    <h1>I\'m getting into photography, take a look at some of my recent pictures!</h1>\
    <ul id=gallery-list>\
    </ul>\
  </div>\
  '
  );

  const galleryList = document.getElementById('gallery-list');
  images.forEach((image) => {
    const listItem = document.createElement('li');
    listItem.appendChild(image);
    galleryList.appendChild(listItem);
  });
};
```
