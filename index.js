function fit(contains) {
	return (parentWidth, parentHeight, childWidth, childHeight) => {
		const doRatio = childWidth / childHeight;
		const cRatio = parentWidth / parentHeight;
		let width;
		let height;

		if (contains ? (doRatio > cRatio) : (doRatio < cRatio)) {
			width = parentWidth;
			height = width / doRatio;
		} else {
			height = parentHeight;
			width = height * doRatio;
		}

		return {
			width,
			height,
			x: (parentWidth - width) / 2,
			y: (parentHeight - height) / 2
		};
	};
}

export const contain = fit(true);
export const cover = fit(false);
