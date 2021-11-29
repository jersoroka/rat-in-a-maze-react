export interface Position {
    row: number,
    column: number
}

export interface Square {
    id: number,
    pos: Position,
    isMazeWall: boolean,
    isRoute?: boolean
}