import { cloneDeep } from 'lodash';
import { isValidPos, solveMaze, solveMazeHelper } from '../components/MazeSolver';
import { Square } from '../types';
import { sampleMaze, sampleMazeSol, unsolvableMaze } from './testMazes';

describe('Maze solver helper functions', () => {
    let setIsRoute = jest.fn();

    describe('isValidPos', () => {
        it("should be true when (x, y) is at start or cheese", () => {
            expect(isValidPos(sampleMaze, 0, 0)).toBeTruthy();
            expect(isValidPos(sampleMaze, sampleMaze.length - 1, sampleMaze.length - 1)).toBeTruthy();
        });

        it("should be false when (x, y) is outside the maze", () => {
            expect(isValidPos(sampleMaze, -5, 0)).toBeFalsy();
            expect(isValidPos(sampleMaze, 0, -5)).toBeFalsy();
            expect(isValidPos(sampleMaze, sampleMaze.length, 3)).toBeFalsy();
            expect(isValidPos(sampleMaze, 3, sampleMaze.length)).toBeFalsy();
        });

        it("should be false when (x, y) is on a maze wall", () => {
            expect(isValidPos(sampleMaze, 0, 3)).toBeFalsy();
        });
    });

    describe('solveMazeHelper', () => {
        let mazeCopy: Square[][];
        let initialSolMaze: Square[][];

        beforeEach(() => {
            mazeCopy = cloneDeep(sampleMaze);
            initialSolMaze = cloneDeep(sampleMaze);
        })

        it("should return false when (x,y) is at an invalid position", async () => {
            expect(await solveMazeHelper(mazeCopy, 0, 3, initialSolMaze, setIsRoute)).toBeFalsy();
        });

        it("should return false when (x, y) isRoute is false", async () => {
            initialSolMaze[0][1].isRoute = false;
            expect(await solveMazeHelper(mazeCopy, 0, 1, initialSolMaze, setIsRoute)).toBeFalsy();

        });

        it("should return true if the current (x, y) is valid and solve the maze", async () => {
            expect(await solveMazeHelper(mazeCopy, 0, 0, initialSolMaze, setIsRoute)).toBeTruthy();
            expect(initialSolMaze).toEqual(sampleMazeSol);
        });
    });

    describe('solveMaze', () => {
        it('should return false if the maze is unsolvable', async () => {
            expect(await solveMaze(unsolvableMaze, setIsRoute)).toBeFalsy();
        });

        it('should return a completed maze if solvable', async () => {
            expect(await solveMaze(sampleMaze, setIsRoute)).toEqual(sampleMazeSol);
        });
    })
})
