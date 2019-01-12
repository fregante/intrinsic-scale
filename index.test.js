const {contain, cover} = require('./index');

const SQUARE = {height: 200, width: 200};
const LANDSCAPE = {height: 100, width: 200};
const PORTRAIT = {height: 200, width: 100};

describe('contain', () => {
	describe('works with square parents', () => {
		test('and square children', () => {
			const result = {
				width: 200,
				height: 200,
				x: 0,
				y: 0
			};
			expect(contain(SQUARE.width, SQUARE.height, 50, 50)).toEqual(result);
		});

		test('and landscape children', () => {
			const result = {
				width: 200,
				height: 100,
				x: 0,
				y: 50
			};
			expect(contain(SQUARE.width, SQUARE.height, 100, 50)).toEqual(result);
		});

		test('and portrait children', () => {
			const result = {
				width: 100,
				height: 200,
				x: 50,
				y: 0
			};
			expect(contain(SQUARE.width, SQUARE.height, 50, 100)).toEqual(result);
		});
	});

	describe('works with landscape parents', () => {
		test('and square children', () => {
			const result = {
				width: 100,
				height: 100,
				x: 50,
				y: 0
			};
			expect(contain(LANDSCAPE.width, LANDSCAPE.height, 50, 50)).toEqual(result);
		});

		test('and landscape children', () => {
			const result = {
				width: 200,
				height: 100,
				x: 0,
				y: 0
			};
			expect(contain(LANDSCAPE.width, LANDSCAPE.height, 100, 50)).toEqual(result);
		});

		test('and portrait children', () => {
			const result = {
				width: 50,
				height: 100,
				x: 75,
				y: 0
			};
			expect(contain(LANDSCAPE.width, LANDSCAPE.height, 50, 100)).toEqual(result);
		});
	});

	describe('works with portrait parents', () => {
		test('and square children', () => {
			const result = {
				width: 100,
				height: 100,
				x: 0,
				y: 50
			};
			expect(contain(PORTRAIT.width, PORTRAIT.height, 50, 50)).toEqual(result);
		});

		test('and landscape children', () => {
			const result = {
				width: 100,
				height: 50,
				x: 0,
				y: 75
			};
			expect(contain(PORTRAIT.width, PORTRAIT.height, 100, 50)).toEqual(result);
		});

		test('and portrait children', () => {
			const result = {
				width: 100,
				height: 200,
				x: 0,
				y: 0
			};
			expect(contain(PORTRAIT.width, PORTRAIT.height, 50, 100)).toEqual(result);
		});
	});
});

describe('cover', () => {
	describe('works with square parents', () => {
		test('and square children', () => {
			const result = {
				width: 200,
				height: 200,
				x: 0,
				y: 0
			};
			expect(cover(SQUARE.width, SQUARE.height, 50, 50)).toEqual(result);
		});

		test('and landscape children', () => {
			const result = {
				width: 400,
				height: 200,
				x: -100,
				y: 0
			};
			expect(cover(SQUARE.width, SQUARE.height, 100, 50)).toEqual(result);
		});

		test('and portrait children', () => {
			const result = {
				width: 200,
				height: 400,
				x: 0,
				y: -100
			};
			expect(cover(SQUARE.width, SQUARE.height, 50, 100)).toEqual(result);
		});
	});

	describe('works with landscape parents', () => {
		test('and square children', () => {
			const result = {
				width: 200,
				height: 200,
				x: 0,
				y: -50
			};
			expect(cover(LANDSCAPE.width, LANDSCAPE.height, 50, 50)).toEqual(result);
		});

		test('and landscape children', () => {
			const result = {
				width: 200,
				height: 100,
				x: 0,
				y: 0
			};
			expect(cover(LANDSCAPE.width, LANDSCAPE.height, 100, 50)).toEqual(result);
		});

		test('and portrait children', () => {
			const result = {
				width: 200,
				height: 400,
				x: 0,
				y: -150
			};
			expect(cover(LANDSCAPE.width, LANDSCAPE.height, 50, 100)).toEqual(result);
		});
	});

	describe('works with portrait parents', () => {
		test('and square children', () => {
			const result = {
				width: 200,
				height: 200,
				x: -50,
				y: 0
			};
			expect(cover(PORTRAIT.width, PORTRAIT.height, 50, 50)).toEqual(result);
		});

		test('and landscape children', () => {
			const result = {
				width: 400,
				height: 200,
				x: -150,
				y: 0
			};
			expect(cover(PORTRAIT.width, PORTRAIT.height, 100, 50)).toEqual(result);
		});

		test('and portrait children', () => {
			const result = {
				width: 100,
				height: 200,
				x: 0,
				y: 0
			};
			expect(cover(PORTRAIT.width, PORTRAIT.height, 50, 100)).toEqual(result);
		});
	});
});
