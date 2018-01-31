export default (root) => {
  root.innerHTML = ('\
    <div class=\'welcome\'>\
      <div class=\'intro animated fadeIn\'>\
        <h1 id=\'intro-header\'>Hi. I make things for the web.</h1>\
        <p id=\'intro-paragraph\'>\
          I build interactive web applications, from server to UX. I\'ve built it it all.\
        </p>\
      </div>\
      <div class=\'image animated fadeIn\'>\
        <img  src="assets/images/avatar.jpeg" alt="" />\
      </div>\
    </div>\
  ');
};
