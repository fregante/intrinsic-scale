function fit(contains) {
	return (parentWidth, parentHeight, childWidth, childHeight) => {
		const doRatio = typeof childHeight === 'number' ?
			childWidth / childHeight :
			childWidth;
		const cRatio = parentWidth / parentHeight;
		let width = parentWidth;
		let height = parentHeight;

		if (contains ? (doRatio > cRatio) : (doRatio < cRatio)) {
			height = width / doRatio;
		} else {
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
