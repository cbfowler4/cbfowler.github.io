export default (root) => {
  root.innerHTML = ('\
    <main class=\'projects\'>\
      <div class=\'p2 animated fadeIn darkimg\'>\
        <content>\
          <h3>Blockstreet</h3>\
          <p>An end to end learning and development platform for blockchain technologies</p>\
           <ul>\
             <li><a target="_blank" href=\'https://www.youtube.com/watch?v=og-7jC1UYxE\'>Demo</a></li>\
             <li>|</li> \
             <li><a target="_blank" href=\'https://github.com/blockstreetboys/blockstreet\'>Repo</a></li>\
           </ul>\
         </content>\
         <aside>\
           <a target="_blank" href=\'https://devpost.com/software/blockstreet\'><img src=\'assets\\images\\blockstreet.png\'></a>\
         </aside>\
      </div>\
      <div class=\'p1 animated fadeIn\'>\
        <aside>\
          <a target="_blank" href=\'http://seaside.bryanfowler.io\'><img src=\'assets\\images\\seaside.png\'></a>\
        </aside>\
        <content>\
          <h3>Seaside</h3>\
          <p>An AirBnB inspired full stack application\
           using Ruby on Rails, React and Redux</p>\
           <ul>\
             <li><a target="_blank" href=\'http://seaside.bryanfowler.io\'>Live</a></li>\
             <li>|</li> \
             <li><a target="_blank" href=\'http://www.github.com/cbfowler4/seaside\'>Repo</a></li>\
           </ul>\
         </content>\
      </div>\
      <div class=\'p2 animated fadeIn\'>\
        <content>\
          <h3>GitBuckets</h3>\
          <p>An interactive data visualization using JavaScript and the D3 library</p>\
          <ul>\
            <li><a target="_blank" href=\'http://bryanfowler.io/gitBuckets\'>Live</a></li> \
            <li>|</li> \
            <li><a target="_blank" href=\'http://www.github.com/cbfowler4/gitbuckets\'>Repo</a></li>\
          </ul>\
        </content>\
        <aside>\
          <a target="_blank" href=\'http://bryanfowler.io/gitBuckets\'><img src=\'assets\\images\\gitBuckets.png\'></a>\
        </aside>\
      </div>\
    </main>'
   );
};
