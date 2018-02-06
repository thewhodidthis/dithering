(function () {
'use strict';

if (window !== window.top) {
  document.documentElement.classList.add('is-iframe');
}

var params = [
  {
    nature: 'ordered',
    lookup: 'bayer16'
  },
  {
    nature: 'ordered',
    lookup: 'bayer64'
  },
  {
    nature: 'spatial',
    lookup: 'atkinson'
  },
  {
    nature: 'spatial',
    lookup: 'sierra2'
  },
  {
    nature: 'spatial',
    lookup: 'stucki'
  }
];

var boards = document.querySelectorAll('canvas');
var ref = document.querySelector('img');
var master = ref.src;

Array.from(boards).forEach(function (canvas, i) {
  var target = canvas.getContext('2d');
  var worker = new Worker('worker.js');

  worker.addEventListener('message', function (e) {
    target.putImageData(e.data.result, 0, 0);
  });

  var buffer = document.createElement('img');

  buffer.addEventListener('load', function () {
    target.drawImage(buffer, 0, 0);

    var source = target.getImageData(0, 0, canvas.width, canvas.height);

    worker.postMessage({ config: params[i], source: source });
  });

  buffer.setAttribute('src', master);
});

}());

