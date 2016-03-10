# intrinsic-scale

> Replicate `background-size: cover/contain` for canvas/CSS/Node/… on any type of media.

> **Warning:** now this is just a copy of ES6-only [sroucheray/contain-cover](https://github.com/sroucheray/contain-cover). Use that module instead or download v1 of this if you need ES5 compatibility.

Given a *original* height and width, and a *desired* height and width, get the `width`, `height`, and `scale` that the *original* object should have to fit the *desired* object.

Many libraries that take care of replicating `background-size`/`object-fit`’s `cover`/`contain` have this functionality embedded. You can use this function anywhere, from the browser to calculate sizing on a canvas, to node when doing some image file resizing.

This module doesn't concern itself with getting the sizes or applying the values. **You provide numbers, you get numbers.**

## Usage

See usage on [contain-cover's repo.](https://github.com/sroucheray/contain-cover)

## Used on

* http://www.syfy.com/ascension-quiz/ — Makes media fit a "passport photo" format (*media* being an uploaded image, a photo from Facebook or a webcam grab).
* http://bfred-it.github.io/art-cropper/ — Crops images making them fill a pre-set area.

## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)
