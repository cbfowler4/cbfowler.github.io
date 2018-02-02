export default (root) => {
  root.innerHTML = ('\
    <div class=\'welcome animated fadeIn\'>\
      <div class=\'intro\'>\
        <h1 id=\'intro-header\'>Hi. I make things for the web.</h1>\
        <p id=\'intro-paragraph\'>\
          I build full stack web applications. My goal is to continue to \
          learn and grow as a developer. Lately I\'ve grown interested in \
          UX design and block chain technology.\
        </p>\
      </div>\
      <div class=\'image\'>\
        <img  src="assets/images/avatar.jpeg" alt="" />\
      </div>\
    </div>\
  ');
};
