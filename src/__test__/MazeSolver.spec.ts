import { isValidPos, solveMaze, solveMazeHelper } from '../components/MazeSolver';
import { Square } from '../types';

describe('Maze solver helper functions', () => {
    // const maze5x5: number[][] = [
    //     [1, 1, 1, 1, 0],
    //     [1, 0, 1, 0, 1],
    //     [0, 0, 1, 1, 0],
    //     [0, 0, 0, 1, 0],
    //     [0, 1, 1, 1, 1]
    // ];

    const maze5x5: Square[][] = [
        [
            {id: 1, pos: {row: 0, column: 0}, isMazeWall: false},
            {id: 2, pos: {row: 0, column: 1}, isMazeWall: false},
            {id: 3, pos: {row: 0, column: 2}, isMazeWall: false},
            {id: 4, pos: {row: 0, column: 3}, isMazeWall: false},
            {id: 5, pos: {row: 0, column: 4}, isMazeWall: true}
        ],
        [
            {id: 6, pos: {row: 1, column: 0}, isMazeWall: false},
            {id: 7, pos: {row: 1, column: 1}, isMazeWall: true},
            {id: 8, pos: {row: 1, column: 2}, isMazeWall: false},
            {id: 9, pos: {row: 1, column: 3}, isMazeWall: true},
            {id: 10, pos: {row: 1, column: 4}, isMazeWall: false}
        ],
        [
            {id: 11, pos: {row: 2, column: 0}, isMazeWall: true},
            {id: 12, pos: {row: 2, column: 1}, isMazeWall: true},
            {id: 13, pos: {row: 2, column: 2}, isMazeWall: false},
            {id: 14, pos: {row: 2, column: 3}, isMazeWall: false},
            {id: 15, pos: {row: 2, column: 4}, isMazeWall: true}
        ],
        [
            {id: 16, pos: {row: 3, column: 0}, isMazeWall: true},
            {id: 17, pos: {row: 3, column: 1}, isMazeWall: true},
            {id: 18, pos: {row: 3, column: 2}, isMazeWall: true},
            {id: 19, pos: {row: 3, column: 3}, isMazeWall: false},
            {id: 20, pos: {row: 3, column: 4}, isMazeWall: true}
        ],
        [
            {id: 21, pos: {row: 4, column: 0}, isMazeWall: true},
            {id: 22, pos: {row: 4, column: 1}, isMazeWall: false},
            {id: 23, pos: {row: 4, column: 2}, isMazeWall: false},
            {id: 24, pos: {row: 4, column: 3}, isMazeWall: false},
            {id: 25, pos: {row: 4, column: 4}, isMazeWall: false}
        ],
    ]

    const initialSol5x5: number[][] = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];
    // FIXME: 1 is path
    
    const maze5x5WithNoSol: Square[][] = [
        [
            {id: 1, pos: {row: 0, column: 0}, isMazeWall: true},
            {id: 2, pos: {row: 0, column: 1}, isMazeWall: false},
            {id: 3, pos: {row: 0, column: 2}, isMazeWall: false},
            {id: 4, pos: {row: 0, column: 3}, isMazeWall: false},
            {id: 5, pos: {row: 0, column: 4}, isMazeWall: false}
        ],
        [
            {id: 6, pos: {row: 1, column: 0}, isMazeWall: true},
            {id: 7, pos: {row: 1, column: 1}, isMazeWall: false},
            {id: 8, pos: {row: 1, column: 2}, isMazeWall: false},
            {id: 9, pos: {row: 1, column: 3}, isMazeWall: false},
            {id: 10, pos: {row: 1, column: 4}, isMazeWall: false}
        ],
        [
            {id: 11, pos: {row: 2, column: 0}, isMazeWall: true},
            {id: 12, pos: {row: 2, column: 1}, isMazeWall: false},
            {id: 13, pos: {row: 2, column: 2}, isMazeWall: false},
            {id: 14, pos: {row: 2, column: 3}, isMazeWall: false},
            {id: 15, pos: {row: 2, column: 4}, isMazeWall: false}
        ],
        [
            {id: 16, pos: {row: 3, column: 0}, isMazeWall: true},
            {id: 17, pos: {row: 3, column: 1}, isMazeWall: false},
            {id: 18, pos: {row: 3, column: 2}, isMazeWall: false},
            {id: 19, pos: {row: 3, column: 3}, isMazeWall: false},
            {id: 20, pos: {row: 3, column: 4}, isMazeWall: false}
        ],
        [
            {id: 21, pos: {row: 4, column: 0}, isMazeWall: true},
            {id: 22, pos: {row: 4, column: 1}, isMazeWall: false},
            {id: 23, pos: {row: 4, column: 2}, isMazeWall: false},
            {id: 24, pos: {row: 4, column: 3}, isMazeWall: false},
            {id: 25, pos: {row: 4, column: 4}, isMazeWall: false}
        ],
    ]

    const solvedMaze5x5: number[][] = [
        [1, 1, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 1, 1]
    ];

    beforeAll(() => {
    });

    describe('isValidPos', () => { // fixed
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

    describe('solveMazeHelper', () => { //TODO: will need to be refactored when you replace return type
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

    describe('solveMaze', () => {
        fit('should return false if the maze is unsolvable', () => {
            expect(solveMaze(maze5x5WithNoSol)).toBeFalsy();
        });

        fit('should return a completed maze if solvable', () => {
            expect(solveMaze(maze5x5)).toEqual(solvedMaze5x5);
        });
    })
})
