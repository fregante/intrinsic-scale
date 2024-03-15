/**
 * Get the size and position of a child element to fit inside a container element without cropping it (like background-size: contain)
 */
export function contain(
	containerWidth: number,
	containerHeight: number,
	childWidth: number,
	childHeight: number,
): {width: number; height: number; x: number; y: number};

/**
 * Get the size and position of a child element to cover the container element (like background-size: cover)
 */
export function cover(
	containerWidth: number,
	containerHeight: number,
	childWidth: number,
	childHeight: number,
): {width: number; height: number; x: number; y: number};
