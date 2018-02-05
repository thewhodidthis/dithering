(function () {
'use strict';

var atkinson = [
  {
    x: 1,
    y: 0,
    weight: 1 / 8
  },
  {
    x: 2,
    y: 0,
    weight: 1 / 8
  },
  {
    x: -1,
    y: 1,
    weight: 1 / 8
  },
  {
    x: 0,
    y: 1,
    weight: 1 / 8
  },
  {
    x: 1,
    y: 1,
    weight: 1 / 8
  },
  {
    x: 0,
    y: 2,
    weight: 1 / 8
  }
];

var stucki = [
  {
    x: 1,
    y: 0,
    weight: 8 / 42
  },
  {
    x: 2,
    y: 0,
    weight: 4 / 42
  },
  {
    x: -2,
    y: 1,
    weight: 2 / 42
  },
  {
    x: -1,
    y: 1,
    weight: 4 / 42
  },
  {
    x: 0,
    y: 1,
    weight: 8 / 42
  },
  {
    x: 1,
    y: 1,
    weight: 4 / 42
  },
  {
    x: 2,
    y: 1,
    weight: 2 / 42
  },
  {
    x: -2,
    y: 2,
    weight: 1 / 42
  },
  {
    x: -1,
    y: 2,
    weight: 2 / 42
  },
  {
    x: 0,
    y: 2,
    weight: 4 / 42
  },
  {
    x: 1,
    y: 2,
    weight: 2 / 42
  },
  {
    x: 2,
    y: 2,
    weight: 1 / 42
  }
];

var bayer16 = [
  0, 8, 2, 10,
  12, 4, 14, 6,
  3, 11, 1, 9,
  15, 7, 13, 5
];

var images = document.querySelectorAll('canvas img');
var boards = document.querySelectorAll('canvas');

if (window !== window.top) {
  document.documentElement.classList.add('is-iframe');
}

var params = [
  {
    nature: 'ordered',
    lookup: Array(4).fill(2)
  },
  {
    nature: 'ordered',
    lookup: [0, 2, 3, 1]
  },
  {
    nature: 'ordered',
    lookup: bayer16
  },
  {
    nature: 'spatial',
    lookup: atkinson
  },
  {
    nature: 'spatial',
    lookup: stucki
  }
];

Array.from(images).map(function (img) { return img.alt; }).forEach(function (src, i) {
  var config = params[i];
  var canvas = boards[i];
  var target = canvas.getContext('2d');

  var w = canvas.width;
  var h = canvas.height;

  var worker = new Worker('worker.js');

  worker.addEventListener('message', function (e) {
    target.putImageData(e.data.result, 0, 0);
  });

  var master = document.createElement('img');

  master.addEventListener('load', function () {
    target.drawImage(master, 0, 0);

    var source = target.getImageData(0, 0, w, h);

    worker.postMessage({ config: config, source: source });
  });

  master.setAttribute('src', src);
});

}());

