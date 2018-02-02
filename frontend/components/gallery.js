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
