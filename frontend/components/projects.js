export default (root) => {
  root.innerHTML = ('\
    <main class=\'projects\'>\
      <div class=\'p1 animated fadeIn\'>\
        <aside>\
          <img src=\'assets\\images\\seaside.png\'>\
        </aside>\
        <content>\
          <h3>Seaside</h3>\
          <p>An AirBnB inspired full stack application\
           using Ruby on Rails, React and Redux</p>\
           <ul>\
             <li><a href=\'seaside.bryanfowler.io\'>Live</a></li>\
             <li>|</li> \
             <li><a href=\'#\'>Repo</a></li>\
           </ul>\
         </content>\
      </div>\
      <div class=\'p2 animated fadeIn\'>\
        <content>\
          <h3>gitBuckets</h3>\
          <p>An interactive data visualization using JavaScript</p>\
          <ul>\
            <li><a href=\'bryanfowler.io\\gitBuckets\'>Live</a></li> \
            <li>|</li> \
            <li><a href=\'www.github.com\\cbfowler4\\gitbuckets\'>Repo</a></li>\
          </ul>\
        </content>\
        <aside>\
        <img src=\'assets\\images\\gitBuckets.png\'>\
        </aside>\
      </div>\
    </main>'
   );
};
