# intrinsic-scale

> Replicate `background-size: cover/contain` for canvas/CSS/Node/… on any type of media.

[![gzipped size](https://badges.herokuapp.com/size/github/bfred-it/intrinsic-scale/master/dist/intrinsic-scale.browser.js?gzip=true&label=gzipped%20size)](#readme)
[![Travis build status](https://api.travis-ci.org/bfred-it/intrinsic-scale.svg?branch=master)](https://travis-ci.org/bfred-it/intrinsic-scale)
[![gzipped size](https://img.shields.io/npm/v/intrinsic-scale.svg)](https://www.npmjs.com/package/intrinsic-scale) 

Given a *original* height and width, and a *desired* height and width, get the `width`, `height`, and `scale` that the *original* object should have to fit the *desired* object.

Many libraries that take care of replicating `background-size`/`object-fit`’s `cover`/`contain` have this functionality embedded. You can use this function anywhere, from the browser to calculate sizing on a canvas, to node when doing some image file resizing.

This module doesn't concern itself with getting the sizes or applying the values. **You provide numbers, you get numbers.**

## Install

```sh
npm install --save intrinsic-scale
```

```js
import {cover, contain} import ('intrinsic-scale');
```

## Usage

```js
/*
Given an 50px 50px element in a 100px 200px parent
To be contains in its parent it must be of size 100px 100px
and be positioned at 0px 50px to be centered.
*/
let { width, height, x, y } = contain(100, 200, 50, 50);
console.log(width, height, x, y);
//100 100 0 50


/*
Given an 50px 50px element in a 100px 200px parent
To be covered in its parent it must be of size 200px 200px
and be positioned at -50px 0px to be centered.
*/
let { width, height, x, y } = cover(100, 200, 50, 50);
console.log(width, height, x, y);
//200 200 -50 0
```

## With browserify

```sh
npm install --save intrinsic-scale
```

```js
var getIntrinsicScale = require('intrinsic-scale');
```

## Dependencies

No dependencies. It works in the browser and in node.

## Used on

* http://www.syfy.com/ascension-quiz/ — Makes media fit a "passport photo" format (*media* being an uploaded image, a photo from Facebook or a webcam grab).
* http://bfred-it.github.io/art-cropper/ — Crops images making them fill a pre-set area.
* http://away.gorving.com/ — The video always covers the header

## License

Forked and extended from https://github.com/sroucheray/contain-cover

MIT © [Federico Brigante](http://twitter.com/bfred_it)
