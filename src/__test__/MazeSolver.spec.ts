import { isValidPos, solveMazeHelper } from '../components/MazeSolver';

describe('Maze solver helper functions', () => {
    const maze5x5: number[][] = [
        [1, 1, 1, 1, 0],
        [1, 0, 1, 0, 1],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1]
    ];

    const initialSol5x5: number[][] = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    const maze5x5WithNoSol: number[][] = [
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0]
    ];

    const solvedMaze5x5: number[][] = [
        [1, 1, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 1, 1]
    ];

    beforeAll(() => {
    });

    describe('isValidPos', () => {
        it("should be true when (x, y) is at start or cheese", () => {
            expect(isValidPos(maze5x5, 0, 0)).toBeTruthy();
            expect(isValidPos(maze5x5, maze5x5.length - 1, maze5x5.length - 1)).toBeTruthy();
        });

        it("should be false when (x, y) is outside the maze", () => {
            expect(isValidPos(maze5x5, -5, 0)).toBeFalsy();
            expect(isValidPos(maze5x5, 0, -5)).toBeFalsy();
            expect(isValidPos(maze5x5, maze5x5.length, 3)).toBeFalsy();
            expect(isValidPos(maze5x5, 3, maze5x5.length)).toBeFalsy();
        });

        it("should be false when (x, y) is on a maze wall", () => {
            expect(isValidPos(maze5x5, 0, 4)).toBeFalsy();
        });
    });

    describe('solveMazeHelper', () => {
        let passedSol5x5: number[][];

        beforeEach(() => {
            passedSol5x5 = [...initialSol5x5];
        });

        it("should be true when (x, y) is at the cheese and the solution maze is unchanged", () => {
            expect(solveMazeHelper(maze5x5, maze5x5.length - 1, maze5x5.length - 1, passedSol5x5)).toBeTruthy();
            expect(passedSol5x5).toEqual(initialSol5x5);
        });

        it("should be false when (x, y) is at an invalid position and the solution maze is unchanged", () => {
            expect(solveMazeHelper(maze5x5, maze5x5.length - 1, maze5x5.length, passedSol5x5)).toBeFalsy();
            expect(solveMazeHelper(maze5x5, maze5x5.length, maze5x5.length - 1, passedSol5x5)).toBeFalsy();
            expect(solveMazeHelper(maze5x5, -1, 0, passedSol5x5)).toBeFalsy();
            expect(solveMazeHelper(maze5x5, 0, -1, passedSol5x5)).toBeFalsy();
            expect(passedSol5x5).toEqual(initialSol5x5);
        });

        it("should be true when there exists a solution from the current (x, y) and the solution maze is updated with a solution", () => {
            const almostSol5x5 = [
                [1, 1, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 1, 0],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0]
            ];
            expect(solveMazeHelper(maze5x5, 4, 3, almostSol5x5)).toBeTruthy();
            expect(almostSol5x5).toEqual(solvedMaze5x5);
        });

        it("should be false when the maze is unsolvable and the solution maze only contains 0", () => {
            expect(solveMazeHelper(maze5x5WithNoSol, 0, 0, passedSol5x5)).toBeFalsy();
            expect(passedSol5x5).toEqual(initialSol5x5);
        });

        it("should be true when the maze is solvable and the only paths in the solution maze are ones that lead to the cheese", () => {
            expect(solveMazeHelper(maze5x5, 0, 0, initialSol5x5)).toBeTruthy();
            expect(initialSol5x5).toEqual(solvedMaze5x5);
        });
    });
})
