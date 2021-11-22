import { isValidPos } from '../components/MazeSolver';

describe('Maze solver helper functions', () => {
    const maze5x5: number[][] = [
        [1, 1, 1, 1, 0],
        [0, 0, 1, 0, 1],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1]]

    beforeAll(() => {
    });

    describe(`IsValidPos`, () => {
        it("should produce true when (x, y)) is at start or cheese", () => {
            expect(isValidPos(maze5x5, 0, 0)).toBeTruthy();
            expect(isValidPos(maze5x5, 4, 4)).toBeTruthy();
        });

        it("should produce false when (x, y) is outside the maze", () => {
            expect(isValidPos(maze5x5, -5, 0)).toBeFalsy();
            expect(isValidPos(maze5x5, 5, 5)).toBeFalsy();
        });

        it("should produce false when (x, y) is on a maze wall", () => {
            expect(isValidPos(maze5x5, 0, 4)).toBeFalsy();
        });
    });

})
