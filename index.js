'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Spatial (error diffusion)
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

var burkes = [
  {
    x: 1,
    y: 0,
    weight: 8 / 32
  },
  {
    x: 2,
    y: 0,
    weight: 4 / 32
  },
  {
    x: -2,
    y: 1,
    weight: 2 / 32
  },
  {
    x: -1,
    y: 1,
    weight: 4 / 32
  },
  {
    x: 0,
    y: 1,
    weight: 8 / 32
  },
  {
    x: 1,
    y: 1,
    weight: 4 / 32
  },
  {
    x: 2,
    y: 1,
    weight: 2 / 32
  }
];

var floydSteinberg = [
  {
    x: 1,
    y: 0,
    weight: 7 / 16
  },
  {
    x: -1,
    y: 1,
    weight: 3 / 16
  },
  {
    x: 0,
    y: 1,
    weight: 5 / 16
  },
  {
    x: 1,
    y: 1,
    weight: 1 / 16
  }
];

var jarvisJudiceNinke = [
  {
    x: 1,
    y: 0,
    weight: 7 / 48
  },
  {
    x: 2,
    y: 0,
    weight: 5 / 48
  },
  {
    x: -2,
    y: 1,
    weight: 3 / 48
  },
  {
    x: -1,
    y: 1,
    weight: 5 / 48
  },
  {
    x: 0,
    y: 1,
    weight: 7 / 48
  },
  {
    x: 1,
    y: 1,
    weight: 5 / 48
  },
  {
    x: 2,
    y: 1,
    weight: 3 / 48
  },
  {
    x: -2,
    y: 2,
    weight: 1 / 48
  },
  {
    x: -1,
    y: 2,
    weight: 3 / 48
  },
  {
    x: 0,
    y: 2,
    weight: 5 / 48
  },
  {
    x: 1,
    y: 2,
    weight: 3 / 48
  },
  {
    x: 2,
    y: 2,
    weight: 1 / 48
  }
];

var sierra2 = [
  {
    x: 1,
    y: 0,
    weight: 4 / 16
  },
  {
    x: 2,
    y: 0,
    weight: 3 / 16
  },
  {
    x: -2,
    y: 1,
    weight: 1 / 16
  },
  {
    x: -1,
    y: 1,
    weight: 2 / 16
  },
  {
    x: 0,
    y: 1,
    weight: 3 / 16
  },
  {
    x: 1,
    y: 1,
    weight: 2 / 16
  },
  {
    x: 2,
    y: 1,
    weight: 1 / 16
  }
];

var sierra3 = [
  {
    x: 1,
    y: 0,
    weight: 5 / 32
  },
  {
    x: 2,
    y: 0,
    weight: 3 / 32
  },
  {
    x: -2,
    y: 1,
    weight: 2 / 32
  },
  {
    x: -1,
    y: 1,
    weight: 4 / 32
  },
  {
    x: 0,
    y: 1,
    weight: 5 / 32
  },
  {
    x: 1,
    y: 1,
    weight: 4 / 32
  },
  {
    x: 2,
    y: 1,
    weight: 2 / 32
  },
  {
    x: -1,
    y: 2,
    weight: 2 / 32
  },
  {
    x: 0,
    y: 2,
    weight: 3 / 32
  },
  {
    x: 1,
    y: 2,
    weight: 2 / 32
  }
];

var sierraLite = [
  {
    x: 1,
    y: 0,
    weight: 2 / 4
  },
  {
    x: -1,
    y: 1,
    weight: 1 / 4
  },
  {
    x: 0,
    y: 1,
    weight: 1 / 4
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

// Ordered (threshold)
var bayer16 = [
  0, 8, 2, 10,
  12, 4, 14, 6,
  3, 11, 1, 9,
  15, 7, 13, 5
];

var bayer64 = [
  0, 48, 12, 60, 3, 51, 15, 63,
  32, 16, 44, 28, 35, 19, 47, 31,
  8, 56, 4, 52, 11, 59, 7, 55,
  40, 24, 36, 20, 43, 27, 39, 23,
  2, 50, 14, 62, 1, 49, 13, 61,
  34, 18, 46, 30, 33, 17, 45, 29,
  10, 58, 6, 54, 9, 57, 5, 53,
  42, 26, 38, 22, 41, 25, 37, 21
];


var matrix = Object.freeze({
	atkinson: atkinson,
	burkes: burkes,
	floydSteinberg: floydSteinberg,
	jarvisJudiceNinke: jarvisJudiceNinke,
	sierra2: sierra2,
	sierra3: sierra3,
	sierraLite: sierraLite,
	stucki: stucki,
	bayer16: bayer16,
	bayer64: bayer64
});

var ordered = function (table) {
  if ( table === void 0 ) table = bayer64;

  var steps = Math.sqrt(table.length);
  var scale = table.length / 255;

  return function (input) {
    if ( input === void 0 ) input = { data: [], width: 0 };

    var frame = new Uint8ClampedArray(input.data.buffer);
    var width = input.width;

    var loop = function ( i, stop ) {
      var r = frame[i];
      var g = frame[i + 1];
      var b = frame[i + 2];

      var color = [r, g, b];

      var j = i * 0.25;

      var x = j % steps;
      var y = Math.floor(j / width) % steps;

      var limit = table[(x * steps) + y];
      var pixel = color.map(function (v) { return (v * scale > limit ? 255 : 0); });

      frame.set(pixel, i);
    };

    for (var i = 0, stop = frame.length; i < stop; i += 4) loop( i, stop );

    return input
  }
};

var spatial = function (model) {
  if ( model === void 0 ) model = floydSteinberg;

  var steps = model.length * 3;

  return function (input) {
    if ( input === void 0 ) input = { data: [], width: 0 };

    var data = input.data;
    var width = input.width;

    // Reformat lookup table
    var table = model.map(function (v) { return (v.x * 4) + (v.y * 4 * width); });

    for (var i = 0, stop = data.length; i < stop; i += 4) {
      var r = data[i];
      var g = data[i + 1];
      var b = data[i + 2];

      var color = [r, g, b];

      // Quantize (8 color palette)
      var pixel = color.map(function (v) { return (v > 127 ? 255 : 0); });

      // Compute error
      var error = color.map(function (v) { return (v > 127 ? v - 255 : v); });

      // Diffuse error
      for (var j = 0; j < steps; j += 1) {
        var x = j % 3;
        var y = Math.floor(j / 3);

        var e = error[x] * model[y].weight;
        var k = table[y] + x + i;

        data[k] += Math.floor(e);
      }

      data.set(pixel, i);
    }

    return input
  }
};

exports.ordered = ordered;
exports.spatial = spatial;
exports.matrix = matrix;

