import {expect, describe, test} from 'vitest';
import resizeToFit from './index.js';

const SQUARE = {height: 200, width: 200};
const LANDSCAPE = {height: 100, width: 200};
const PORTRAIT = {height: 200, width: 100};

describe('contain', () => {
	describe('works with square parents', () => {
		test('and square children', () => {
			expect(resizeToFit('contain', {width: 50, height: 50}, SQUARE)).toEqual(
				{
					width: 200,
					height: 200,
					x: 0,
					y: 0,
				},
			);
		});

		test('and landscape children', () => {
			expect(
				resizeToFit('contain', {width: 100, height: 50}, SQUARE),
			).toEqual({
				width: 200,
				height: 100,
				x: 0,
				y: 50,
			});
		});

		test('and portrait children', () => {
			expect(
				resizeToFit('contain', {width: 50, height: 100}, SQUARE),
			).toEqual({
				width: 100,
				height: 200,
				x: 50,
				y: 0,
			});
		});
	});

	describe('works with landscape parents', () => {
		test('and square children', () => {
			expect(
				resizeToFit('contain', {width: 50, height: 50}, LANDSCAPE),
			).toEqual({
				width: 100,
				height: 100,
				x: 50,
				y: 0,
			});
		});

		test('and landscape children', () => {
			expect(
				resizeToFit('contain', {width: 100, height: 50}, LANDSCAPE),
			).toEqual({
				width: 200,
				height: 100,
				x: 0,
				y: 0,
			});
		});

		test('and portrait children', () => {
			expect(
				resizeToFit('contain', {width: 50, height: 100}, LANDSCAPE),
			).toEqual({
				width: 50,
				height: 100,
				x: 75,
				y: 0,
			});
		});
	});

	describe('works with portrait parents', () => {
		test('and square children', () => {
			expect(
				resizeToFit('contain', {width: 50, height: 50}, PORTRAIT),
			).toEqual({
				width: 100,
				height: 100,
				x: 0,
				y: 50,
			});
		});

		test('and landscape children', () => {
			expect(
				resizeToFit('contain', {width: 100, height: 50}, PORTRAIT),
			).toEqual({
				width: 100,
				height: 50,
				x: 0,
				y: 75,
			});
		});

		test('and portrait children', () => {
			expect(
				resizeToFit('contain', {width: 50, height: 100}, PORTRAIT),
			).toEqual({
				width: 100,
				height: 200,
				x: 0,
				y: 0,
			});
		});
	});
});

describe('cover', () => {
	describe('works with square parents', () => {
		test('and square children', () => {
			expect(resizeToFit('cover', {width: 50, height: 50}, SQUARE)).toEqual({
				width: 200,
				height: 200,
				x: 0,
				y: 0,
			});
		});

		test('and landscape children', () => {
			expect(resizeToFit('cover', {width: 100, height: 50}, SQUARE)).toEqual({
				width: 400,
				height: 200,
				x: -100,
				y: 0,
			});
		});

		test('and portrait children', () => {
			expect(resizeToFit('cover', {width: 50, height: 100}, SQUARE)).toEqual({
				width: 200,
				height: 400,
				x: 0,
				y: -100,
			});
		});
	});

	describe('works with landscape parents', () => {
		test('and square children', () => {
			expect(
				resizeToFit('cover', {width: 50, height: 50}, LANDSCAPE),
			).toEqual({
				width: 200,
				height: 200,
				x: 0,
				y: -50,
			});
		});

		test('and landscape children', () => {
			expect(
				resizeToFit('cover', {width: 100, height: 50}, LANDSCAPE),
			).toEqual({
				width: 200,
				height: 100,
				x: 0,
				y: 0,
			});
		});

		test('and portrait children', () => {
			expect(
				resizeToFit('cover', {width: 50, height: 100}, LANDSCAPE),
			).toEqual({
				width: 200,
				height: 400,
				x: 0,
				y: -150,
			});
		});
	});

	describe('works with portrait parents', () => {
		test('and square children', () => {
			expect(resizeToFit('cover', {width: 50, height: 50}, PORTRAIT)).toEqual(
				{
					width: 200,
					height: 200,
					x: -50,
					y: 0,
				},
			);
		});

		test('and landscape children', () => {
			expect(
				resizeToFit('cover', {width: 100, height: 50}, PORTRAIT),
			).toEqual({
				width: 400,
				height: 200,
				x: -150,
				y: 0,
			});
		});

		test('and portrait children', () => {
			expect(
				resizeToFit('cover', {width: 50, height: 100}, PORTRAIT),
			).toEqual({
				width: 100,
				height: 200,
				x: 0,
				y: 0,
			});
		});
	});
});
