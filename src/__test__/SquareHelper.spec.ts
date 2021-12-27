import { findAdjacentRoutes, findIsBottom, findIsLeft, findIsRight, findIsTop } from '../components/SquareHelper';
import { Square } from '../types';
import { sampleMaze, sampleMazeSol, unsolvableMaze } from './testMazes';

describe('Square styling helpers', () => {

    describe('findIsLeft', () => {
        it('should return false when at the first column', () => {
            expect(findIsLeft({row: 0, column: 0}, true, sampleMaze)).toBeFalsy();
        });

        it('should return false when not a route', () => {
            expect(findIsLeft({row: 0, column: 2}, false, sampleMazeSol)).toBeFalsy();
        });

        it('should return false if column is out of range', () => {
            expect(findIsLeft({row: 0, column: sampleMaze.length}, false, sampleMazeSol)).toBeFalsy();
        });

        it('should return false if left column is not a route', () => {
            expect(findIsLeft({row: 0, column: 3}, true, sampleMazeSol)).toBeFalsy();
        });

        it('should return true if a route, column is in range, and left column is route', () => {
            expect(findIsLeft({row: 0, column: 1}, true, sampleMazeSol)).toBeTruthy();
        });
    });

    describe('findIsRight', () => {
        it('should return false when at the last column', () => {
            expect(findIsRight({row: 0, column: sampleMaze.length - 1}, true, sampleMaze)).toBeFalsy();
        });

        it('should return false when not a route', () => {
            expect(findIsRight({row: 0, column: 2}, false, sampleMazeSol)).toBeFalsy();
        });

        it('should return false if column is out of range', () => {
            expect(findIsRight({row: 0, column: sampleMaze.length}, false, sampleMazeSol)).toBeFalsy();
        });

        it('should return false if right column is not a route', () => {
            expect(findIsRight({row: 0, column: 1}, true, sampleMazeSol)).toBeFalsy();
        });

        it('should return true if a route, column is in range, and right column is route', () => {
            expect(findIsRight({row: 0, column: 0}, true, sampleMazeSol)).toBeTruthy();
        });
    });

    describe('findIsTop', () => {
        it('should return false when at the first row', () => {
            expect(findIsTop({row: 0, column: 0}, true, sampleMaze)).toBeFalsy();
        });

        it('should return false when not a route', () => {
            expect(findIsTop({row: 0, column: 2}, false, sampleMazeSol)).toBeFalsy();
        });

        it('should return false if row is out of range', () => {
            expect(findIsTop({row: sampleMaze.length, column: 0}, true, sampleMazeSol)).toBeFalsy();
        });

        it('should return false if row above is not a route', () => {
            expect(findIsTop({row: 1, column: 2}, true, sampleMazeSol)).toBeFalsy();
        });

        it('should return true if a route, row is in range, and top row is route', () => {
            expect(findIsTop({row: 1, column: 1}, true, sampleMazeSol)).toBeTruthy();
        });
    });

    describe('findIsBottom', () => {
        it('should return false when at the last row', () => {
            expect(findIsBottom({row: sampleMaze.length - 1, column: 0}, true, sampleMaze)).toBeFalsy();
        });

        it('should return false when not a route', () => {
            expect(findIsBottom({row: 0, column: 2}, false, sampleMazeSol)).toBeFalsy();
        });

        it('should return false if row is out of range', () => {
            expect(findIsBottom({row: sampleMaze.length, column: 0}, true, sampleMazeSol)).toBeFalsy();
        });

        it('should return false if row below is not a route', () => {
            expect(findIsBottom({row: 0, column: 0}, true, sampleMazeSol)).toBeFalsy();
        });

        it('should return true if a route, row is in range, and bottom row is route', () => {
            expect(findIsBottom({row: 0, column: 2}, true, sampleMazeSol)).toBeTruthy();
        });

    });

    describe('findAdjacentRoutes', () => {

        it('should return appropriate styling based on position in solution maze', () => {
            expect(findAdjacentRoutes({row: 2, column: 4}, true, sampleMazeSol)).toEqual('square-top-bottom');
            expect(findAdjacentRoutes({row: 1, column: 1}, true, sampleMazeSol)).toEqual('square-top-right');
            expect(findAdjacentRoutes({row: 1, column: 2}, true, sampleMazeSol)).toEqual('square-left-right');
            expect(findAdjacentRoutes({row: 1, column: 4}, true, sampleMazeSol)).toEqual('square-left-bottom');
            expect(findAdjacentRoutes({row: 4, column: 4}, true, sampleMazeSol)).toEqual('square-top');
            expect(findAdjacentRoutes({row: 0, column: 0}, true, sampleMazeSol)).toEqual('square-right');
        });

        it('should not return additional styling if the position is not a route or adjacent to a route', () => {
            expect(findAdjacentRoutes({row: 1, column: 0}, false, sampleMazeSol)).toBeUndefined();
        });
    });
})