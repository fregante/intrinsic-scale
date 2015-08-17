'use strict';
/**
 * getIntrinsicScale
 * @param  {object}  peg   Original width/height of the object to scale
 * @param  {object}  hole  Container that the peg needs to fit into (css:contain) or cover completely (css:cover)
 * @param  {boolean} cover Whether it should cover the hole (true) or fit into it (false)
 * @return {object}        Size/scale of the peg and its delta with the container (useful to set negative margins, for example)
 */
Object.defineProperty(exports, '__esModule', {
	value: true
});

exports['default'] = function (peg, hole) {
	var cover = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	cover = !!cover; // bool cast

	peg.ratio = peg.width / peg.height;
	hole.ratio = hole.width / hole.height;

	// figure out which dimension should touch
	// i.e. 16:9 `peg` in square `hole` touches `height` (top and bottom) on `cover=true`
	var dimension = {};
	if (cover === peg.ratio < hole.ratio) {
		dimension.touching = 'height';
		dimension.following = 'width';
	} else {
		dimension.touching = 'width';
		dimension.following = 'height';
	}

	var pegSize = {};
	pegSize.delta = {};

	// calculate scale
	pegSize.scale = hole[dimension.touching] / peg[dimension.touching];

	// set touching dimension
	pegSize[dimension.touching] = hole[dimension.touching];
	pegSize.delta[dimension.touching] = 0;

	// set following dimension
	pegSize[dimension.following] = peg[dimension.following] * pegSize.scale;
	pegSize.delta[dimension.following] = pegSize[dimension.following] - hole[dimension.following];

	return pegSize;
};

module.exports = exports['default'];

