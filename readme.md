# intrinsic-scale [![module size](https://badge-size.herokuapp.com/bfred-it/intrinsic-scale/master/dist/intrinsic-scale.min.js) ![module gzipped size](https://badge-size.herokuapp.com/bfred-it/intrinsic-scale/master/dist/intrinsic-scale.min.js?compression=gzip)](https://github.com/bfred-it/intrinsic-scale/blob/master/dist/intrinsic-scale.min.js)

> Replicate `background-size: cover/contain` for canvas/CSS/Node/… on any type of media.

Given a *original* height and width, and a *desired* height and width, get the `width`, `height`, and `scale` that the *original* object should have to fit the *desired* object.

Many libraries that take care of replicating `background-size: cover` (or `contain`) have this functionality embedded. You can use this function anywhere, from the browser to calculate sizing on a canvas, to node when doing some image file resizing.

This module doesn't concern itself with getting the sizes or applying the values. **You provide numbers, you get numbers.**

## Usage

```js
var peg = {width: 16, height: 9}; // 16:9 peg
var hole = {height: 100, width: 100}; // square hole
var pegCoversHole = getIntrinsicScale(peg, hole, true);
/*==> {
	scale: 6.25,
	width: 100,
	height: 56.25,
	delta: {
		height: -43.75
		width: 0
	}
}
*/

var pegFitsInHole = getIntrinsicScale(peg, hole, false);
/*==> {
	scale: 11.11,
	width: 177.77,
	height: 56.25,
	delta: {
		height: 0
		width: 77.77
	}
}
*/
```

## With browserify

```sh
npm install --save intrinsic-scale
```

```js
var getIntrinsicScale = require('intrinsic-scale');
```

## API

### `getIntrinsicScale(media[, scale])`

parameter | description
--- | ---
object
object
boolean
object

**`peg`** | Type: `object`, *required* <br> Original width/height of the object to scale
**`hole`** | Type: `object`, *required* <br> Container that the peg needs to fit into (css:contain) or cover completely (css:cover)
**`cover`** | Type: `boolean`, *default:true* <br> Whether it should cover the hole (`true`) or fit into it (`false`)
`@returns` | Type: `object` <br> Size/scale of the peg and its delta with the container (useful to set negative margins, for example). See usage.
 
## Files

Here's an explanation of the files included in this repo

* `index.js`: source file, in ES6
* `dist/intrinsic-scale.js`: browser-ready file with AMD or a global variable called `getIntrinsicScale`
* `dist/intrinsic-scale.min.js`: same as above, minified
* `dist/intrinsic-scale.node.js`: used by node/browserify with `require('intrinsic-scale')`

## Dependencies

No dependencies. It works in the browser and in node.

## Used on

* http://www.syfy.com/ascension-quiz/ — Makes media fit a "passport photo" format (*media* being an uploaded image, a photo from Facebook or a webcam grab).
* http://bfred-it.github.io/art-cropper/ — Crops images making them fill a pre-set area.
* 
## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)
