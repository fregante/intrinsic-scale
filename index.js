export default function resizeToFit(mode, source, target) {
	if (mode !== 'cover' && mode !== 'contain') {
		throw new TypeError('Invalid mode');
	}

	const sourceRatio = source.width / source.height;
	const targetRatio = target.width / target.height;
	let {width} = target;
	let {height} = target;

	if (mode === 'contain' ? (sourceRatio > targetRatio) : (sourceRatio < targetRatio)) {
		height = width / sourceRatio;
	} else {
		width = height * sourceRatio;
	}

	return {
		width,
		height,
		x: (target.width - width) / 2,
		y: (target.height - height) / 2,
	};
}
