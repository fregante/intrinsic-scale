type Size = {
	width: number;
	height: number;
};

/**
 * Get the size and position of a child element to fit inside a container element
 *
 * @param mode "contain" will make the child fit inside the container, "cover" will make the child cover the container, matching the behavior of background-size
 * @param source The size of the child element
 * @param target The size of the container element
 */
export default function resizeToFit(
	mode: 'contain' | 'cover',
	source: Size,
	target: Size,
): {width: number; height: number; x: number; y: number};
