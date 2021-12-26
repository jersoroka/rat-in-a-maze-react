import { Square } from "../types";

export function findAdjacentRoutes(pos: {row: number, column: number}, isRoute: boolean, grid: Square[][]) {
    let isLeft = findIsLeft(pos, isRoute, grid);
    let isRight = findIsRight(pos, isRoute, grid);
    let isTop = findIsTop(pos, isRoute, grid);
    let isBottom = findIsBottom(pos, isRoute, grid);

    if (isTop && isBottom) return 'square-top-bottom';
    if (isTop && isRight) return 'square-top-right';

    if (isLeft && isRight) return 'square-left-right';
    if (isLeft && isBottom) return 'square-left-bottom';

    if (isTop) return 'square-top';
    if (isBottom) return 'square-bottom';
    if (isLeft) return 'square-left';
    if (isRight) return 'square-right';
}

export function findIsLeft(pos: {row: number, column: number}, isRoute: boolean, grid: Square[][]) {
    if (pos.column === 0) return false;
    return isRoute && pos.column > 0 && pos.column < grid.length && grid[pos.row][pos.column - 1].isRoute;
}

export function findIsRight(pos: {row: number, column: number}, isRoute: boolean, grid: Square[][]) {
    if (pos.column === grid.length - 1) return false;
    return isRoute && pos.column >= 0 && pos.column < grid.length - 1 && grid[pos.row][pos.column + 1].isRoute;
}

export function findIsTop(pos: {row: number, column: number}, isRoute: boolean, grid: Square[][]) {
    if (pos.row === 0) return false;
    return isRoute && pos.row > 0 && pos.row <= grid.length - 1 && grid[pos.row - 1][pos.column].isRoute;
}

export function findIsBottom(pos: {row: number, column: number}, isRoute: boolean, grid: Square[][]) {
    if (pos.row === grid.length - 1) return false;
    return isRoute && pos.row >= 0 && pos.row < grid.length - 1 && grid[pos.row + 1][pos.column].isRoute;
}