(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _example = require('./modules/example');

var _activeMenu = require('./modules/active-menu');

require('./modules/toggle');

require('./modules/gridVideos');

require('./modules/map');

require('./modules/comments');

},{"./modules/active-menu":2,"./modules/comments":3,"./modules/example":4,"./modules/gridVideos":5,"./modules/map":6,"./modules/toggle":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var activeMenu = exports.activeMenu = function activeMenu() {
    var menu = document.getElementById('main-menu');
    if (menu) {
        var links = Array.from(menu.querySelectorAll('a'));
        links.map(function (link) {
            if (link.href === location.href || link.href === location.href.slice(0, -1)) link.classList.add('active');
        });
    }
};

},{}],3:[function(require,module,exports){
'use strict';

var commentsImage = document.getElementById('commentsImage');
var mediaComments = matchMedia('(min-width:768px)');

if (commentsImage) {

  var setImage = function setImage(mql) {
    mql.matches ? commentsImage.innerHTML = '<img src="https://firebasestorage.googleapis.com/v0/b/poramoralascalles-1ce75.appspot.com/o/img%2F7-img.png?alt=media&token=3b9faeba-8ed0-4d6d-8983-8b2c254cf06c" style="max-width: 284px;">' : commentsImage.innerHTML = '';
  };

  setImage(mediaComments);
  mediaComments.addListener(setImage);
}

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Este es un ejemplo de como exportar funciones desde un archivo
// En index.js se importan estas funciones

var saludo = exports.saludo = function saludo() {
  console.log('Hola mundo');
};

var despedida = exports.despedida = function despedida() {
  console.log('Adiós mundo');
};

},{}],5:[function(require,module,exports){
'use strict';

var gridVideos = document.getElementById('gridVideos');
var mql = matchMedia('(min-width:992px)');

if (gridVideos) {

  !sessionStorage.getItem('videos') && fetch(' https://my-json-server.typicode.com/RobertoQuintero/calles/video', { method: 'GET' }).then(function (resp) {
    return resp.json();
  }).then(function (response) {
    sessionStorage.setItem('videos', JSON.stringify(response));
  }).catch(function (err) {
    return console.log('Este es el error: ' + err);
  });

  var getVideos = function getVideos() {
    var videosList = JSON.parse(sessionStorage.getItem('videos'));
    var setVideos = videosList.map(function (v) {
      return '\n  <div class="col-lg-6 mb-3">\n  <iframe src="https://www.youtube.com/embed/' + v.video_url_id + ' " frameborder="0" class=\'youtube-iframe\'></iframe>\n  </div>';
    });
    var content = setVideos.reduce(function (a, b) {
      return a + b;
    }, ' ');
    return content;
  };

  var getImages = function getImages() {
    var videosList = JSON.parse(sessionStorage.getItem('videos'));
    var setImages = videosList.map(function (v) {
      return '\n  <div class=\'col-md-6\'>\n    <div class=\'d-flex image-card\'>\n      <div class="yt-img-container">\n        <img class=\'yt-img\' src=\'' + v.image_url + '\' alt=\'' + v.title + '\'/>\n      </div>\n      <div class="yt-text-container">\n        <h2 class=\'yt-text-title\'>' + v.title + '</h2>\n        <h4 class=\'yt-text-singer\'>' + v.singer + '</h4>\n        <a href=\'' + v.video_url + '\' target=\'_blank\' rel="noopener noreferrer" class="btn btn-danger">Mirar</a>\n      </div>\n    </div>\n  </div>\n  ';
    });
    var content = setImages.reduce(function (a, b) {
      return a + b;
    }, ' ');
    return content;
  };

  var youtubeMedia = function youtubeMedia(mql) {
    !sessionStorage.getItem('videos') ? gridVideos.innerHTML = '<h1>Cargando..</h1>' : mql.matches ? gridVideos.innerHTML = getVideos() : gridVideos.innerHTML = getImages();
  };

  youtubeMedia(mql);
  mql.addListener(youtubeMedia);

  addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      youtubeMedia(mql);
    }, 2000);
  });
}

},{}],6:[function(require,module,exports){
'use strict';

var map = document.getElementById('map');
var mql = matchMedia('(min-width:992px)');

if (map) {

    var showMap = function showMap(mql) {
        mql.matches ? map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.399783034326!2d-97.46268088554405!3d20.530817309967027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85da6ac087aedd9d%3A0xb35a02f5e8512372!2sParque%20Benito%20Ju%C3%A1rez!5e0!3m2!1ses-419!2smx!4v1581991432754!5m2!1ses-419!2smx" width="100%" height="200" frameborder="0" style="border:0;" allowfullscreen=""></iframe>' : map.innerHTML = '<a href="https://goo.gl/maps/cxibu6C14biFyZH46" target="_blank" class="btn button-help mt-3">Ver mapa</a>';
    };

    showMap(mql);
    mql.addListener(showMap);
}

},{}],7:[function(require,module,exports){
'use strict';

var toggleButton = document.getElementById('toggle-button'),
    mainMenu = document.getElementById('main-menu');

toggleButton.addEventListener('click', function () {
  mainMenu.classList.toggle('show');
});

},{}]},{},[1]);

//# sourceMappingURL=scripts.js.map
