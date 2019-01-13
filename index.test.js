const {contain, cover} = require('./index');

const SQUARE = {height: 200, width: 200};
const LANDSCAPE = {height: 100, width: 200};
const PORTRAIT = {height: 200, width: 100};

describe('contain', () => {
	describe('works with square parents', () => {
		describe('and square children', () => {
			const result = {
				width: 200,
				height: 200,
				x: 0,
				y: 0
			};

			test('when passing width and height', () => {
				expect(contain(SQUARE.width, SQUARE.height, 50, 50)).toEqual(result);
			});

			test('when passing a ratio', () => {
				expect(contain(SQUARE.width, SQUARE.height, 1)).toEqual(result);
			});
		});

		describe('and landscape children', () => {
			const result = {
				width: 200,
				height: 100,
				x: 0,
				y: 50
			};

			test('when passing width and height', () => {
				expect(contain(SQUARE.width, SQUARE.height, 100, 50)).toEqual(result);
			});

			test('when passing a ratio', () => {
				expect(contain(SQUARE.width, SQUARE.height, 2)).toEqual(result);
			});
		});

		describe('and portrait children', () => {
			const result = {
				width: 100,
				height: 200,
				x: 50,
				y: 0
			};

			test('when passing width and height', () => {
				expect(contain(SQUARE.width, SQUARE.height, 50, 100)).toEqual(result);
			});

			test('when passing a ratio', () => {
				expect(contain(SQUARE.width, SQUARE.height, 0.5)).toEqual(result);
			});
		});
	});

	describe('works with landscape parents', () => {
		describe('and square children', () => {
			const result = {
				width: 100,
				height: 100,
				x: 50,
				y: 0
			};

			test('when passing width and height', () => {
				expect(contain(LANDSCAPE.width, LANDSCAPE.height, 50, 50)).toEqual(result);
			});

			test('when passing a ratio', () => {
				expect(contain(LANDSCAPE.width, LANDSCAPE.height, 1)).toEqual(result);
			});
		});

		describe('and landscape children', () => {
			const result = {
				width: 200,
				height: 100,
				x: 0,
				y: 0
			};

			test('when passing width and height', () => {
				expect(contain(LANDSCAPE.width, LANDSCAPE.height, 100, 50)).toEqual(result);
			});

			test('when passing a ratio', () => {
				expect(contain(LANDSCAPE.width, LANDSCAPE.height, 2)).toEqual(result);
			});
		});

		describe('and portrait children', () => {
			const result = {
				width: 50,
				height: 100,
				x: 75,
				y: 0
			};

			test('when passing width and height', () => {
				expect(contain(LANDSCAPE.width, LANDSCAPE.height, 50, 100)).toEqual(result);
			});

			test('when passing a ratio', () => {
				expect(contain(LANDSCAPE.width, LANDSCAPE.height, 0.5)).toEqual(result);
			});
		});
	});

	describe('works with portrait parents', () => {
		describe('and square children', () => {
			const result = {
				width: 100,
				height: 100,
				x: 0,
				y: 50
			};

			test('when passing width and height', () => {
				expect(contain(PORTRAIT.width, PORTRAIT.height, 50, 50)).toEqual(result);
			});

			test('when passing a ratio', () => {
				expect(contain(PORTRAIT.width, PORTRAIT.height, 1)).toEqual(result);
			});
		});

		describe('and landscape children', () => {
			const result = {
				width: 100,
				height: 50,
				x: 0,
				y: 75
			};

			test('when passing width and height', () => {
				expect(contain(PORTRAIT.width, PORTRAIT.height, 100, 50)).toEqual(result);
			});

			test('when passing a ratio', () => {
				expect(contain(PORTRAIT.width, PORTRAIT.height, 2)).toEqual(result);
			});
		});

		describe('and portrait children', () => {
			const result = {
				width: 100,
				height: 200,
				x: 0,
				y: 0
			};

			test('when passing width and height', () => {
				expect(contain(PORTRAIT.width, PORTRAIT.height, 50, 100)).toEqual(result);
			});

			test('when passing a ratio', () => {
				expect(contain(PORTRAIT.width, PORTRAIT.height, 0.5)).toEqual(result);
			});
		});
	});
});

describe('cover', () => {
	describe('works with square parents', () => {
		describe('and square children', () => {
			const result = {
				width: 200,
				height: 200,
				x: 0,
				y: 0
			};

			test('when passing width and height', () => {
				expect(cover(SQUARE.width, SQUARE.height, 50, 50)).toEqual(result);
			});

			test('when passing a ratio', () => {
				expect(cover(SQUARE.width, SQUARE.height, 1)).toEqual(result);
			});
		});

		describe('and landscape children', () => {
			const result = {
				width: 400,
				height: 200,
				x: -100,
				y: 0
			};

			test('when passing width and height', () => {
				expect(cover(SQUARE.width, SQUARE.height, 100, 50)).toEqual(result);
			});

			test('when passing a ratio', () => {
				expect(cover(SQUARE.width, SQUARE.height, 2)).toEqual(result);
			});
		});

		describe('and portrait children', () => {
			const result = {
				width: 200,
				height: 400,
				x: 0,
				y: -100
			};

			test('when passing width and height', () => {
				expect(cover(SQUARE.width, SQUARE.height, 50, 100)).toEqual(result);
			});

			test('when passing a ratio', () => {
				expect(cover(SQUARE.width, SQUARE.height, 0.5)).toEqual(result);
			});
		});
	});

	describe('works with landscape parents', () => {
		describe('and square children', () => {
			const result = {
				width: 200,
				height: 200,
				x: 0,
				y: -50
			};

			test('when passing width and height', () => {
				expect(cover(LANDSCAPE.width, LANDSCAPE.height, 50, 50)).toEqual(result);
			});

			test('when passing a ratio', () => {
				expect(cover(LANDSCAPE.width, LANDSCAPE.height, 1)).toEqual(result);
			});
		});

		describe('and landscape children', () => {
			const result = {
				width: 200,
				height: 100,
				x: 0,
				y: 0
			};

			test('when passing width and height', () => {
				expect(cover(LANDSCAPE.width, LANDSCAPE.height, 100, 50)).toEqual(result);
			});

			test('when passing a ratio', () => {
				expect(cover(LANDSCAPE.width, LANDSCAPE.height, 2)).toEqual(result);
			});
		});

		describe('and portrait children', () => {
			const result = {
				width: 200,
				height: 400,
				x: 0,
				y: -150
			};

			test('when passing width and height', () => {
				expect(cover(LANDSCAPE.width, LANDSCAPE.height, 50, 100)).toEqual(result);
			});

			test('when passing a ratio', () => {
				expect(cover(LANDSCAPE.width, LANDSCAPE.height, 0.5)).toEqual(result);
			});
		});
	});

	describe('works with portrait parents', () => {
		describe('and square children', () => {
			const result = {
				width: 200,
				height: 200,
				x: -50,
				y: 0
			};

			test('when passing width and height', () => {
				expect(cover(PORTRAIT.width, PORTRAIT.height, 50, 50)).toEqual(result);
			});

			test('when passing a ratio', () => {
				expect(cover(PORTRAIT.width, PORTRAIT.height, 1)).toEqual(result);
			});
		});

		describe('and landscape children', () => {
			const result = {
				width: 400,
				height: 200,
				x: -150,
				y: 0
			};

			test('when passing width and height', () => {
				expect(cover(PORTRAIT.width, PORTRAIT.height, 100, 50)).toEqual(result);
			});

			test('when passing a ratio', () => {
				expect(cover(PORTRAIT.width, PORTRAIT.height, 2)).toEqual(result);
			});
		});

		describe('and portrait children', () => {
			const result = {
				width: 100,
				height: 200,
				x: 0,
				y: 0
			};

			test('when passing width and height', () => {
				expect(cover(PORTRAIT.width, PORTRAIT.height, 50, 100)).toEqual(result);
			});

			test('when passing a ratio', () => {
				expect(cover(PORTRAIT.width, PORTRAIT.height, 0.5)).toEqual(result);
			});
		});
	});
});
