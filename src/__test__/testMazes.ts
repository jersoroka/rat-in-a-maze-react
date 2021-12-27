import { Square } from "../types";

export const sampleMaze: Square[][] = [
    [
        {
            "id": 1,
            "pos": {
                "row": 0,
                "column": 0
            },
            "isMazeWall": false
        },
        {
            "id": 2,
            "pos": {
                "row": 0,
                "column": 1
            },
            "isMazeWall": false
        },
        {
            "id": 3,
            "pos": {
                "row": 0,
                "column": 2
            },
            "isMazeWall": false
        },
        {
            "id": 4,
            "pos": {
                "row": 0,
                "column": 3
            },
            "isMazeWall": true
        },
        {
            "id": 5,
            "pos": {
                "row": 0,
                "column": 4
            },
            "isMazeWall": false
        }
    ],
    [
        {
            "id": 6,
            "pos": {
                "row": 1,
                "column": 0
            },
            "isMazeWall": true
        },
        {
            "id": 7,
            "pos": {
                "row": 1,
                "column": 1
            },
            "isMazeWall": false
        },
        {
            "id": 8,
            "pos": {
                "row": 1,
                "column": 2
            },
            "isMazeWall": false
        },
        {
            "id": 9,
            "pos": {
                "row": 1,
                "column": 3
            },
            "isMazeWall": false
        },
        {
            "id": 10,
            "pos": {
                "row": 1,
                "column": 4
            },
            "isMazeWall": false
        }
    ],
    [
        {
            "id": 11,
            "pos": {
                "row": 2,
                "column": 0
            },
            "isMazeWall": false
        },
        {
            "id": 12,
            "pos": {
                "row": 2,
                "column": 1
            },
            "isMazeWall": false
        },
        {
            "id": 13,
            "pos": {
                "row": 2,
                "column": 2
            },
            "isMazeWall": true
        },
        {
            "id": 14,
            "pos": {
                "row": 2,
                "column": 3
            },
            "isMazeWall": true
        },
        {
            "id": 15,
            "pos": {
                "row": 2,
                "column": 4
            },
            "isMazeWall": false
        }
    ],
    [
        {
            "id": 16,
            "pos": {
                "row": 3,
                "column": 0
            },
            "isMazeWall": true
        },
        {
            "id": 17,
            "pos": {
                "row": 3,
                "column": 1
            },
            "isMazeWall": false
        },
        {
            "id": 18,
            "pos": {
                "row": 3,
                "column": 2
            },
            "isMazeWall": false
        },
        {
            "id": 19,
            "pos": {
                "row": 3,
                "column": 3
            },
            "isMazeWall": true
        },
        {
            "id": 20,
            "pos": {
                "row": 3,
                "column": 4
            },
            "isMazeWall": false
        }
    ],
    [
        {
            "id": 21,
            "pos": {
                "row": 4,
                "column": 0
            },
            "isMazeWall": false
        },
        {
            "id": 22,
            "pos": {
                "row": 4,
                "column": 1
            },
            "isMazeWall": true
        },
        {
            "id": 23,
            "pos": {
                "row": 4,
                "column": 2
            },
            "isMazeWall": true
        },
        {
            "id": 24,
            "pos": {
                "row": 4,
                "column": 3
            },
            "isMazeWall": false
        },
        {
            "id": 25,
            "pos": {
                "row": 4,
                "column": 4
            },
            "isMazeWall": false
        }
    ]
];

export const sampleMazeSol: Square[][] = [
    [
        {
            "id": 1,
            "pos": {
                "row": 0,
                "column": 0
            },
            "isMazeWall": false,
            "isRoute": true
        },
        {
            "id": 2,
            "pos": {
                "row": 0,
                "column": 1
            },
            "isMazeWall": false,
            "isRoute": true
        },
        {
            "id": 3,
            "pos": {
                "row": 0,
                "column": 2
            },
            "isMazeWall": false
        },
        {
            "id": 4,
            "pos": {
                "row": 0,
                "column": 3
            },
            "isMazeWall": true
        },
        {
            "id": 5,
            "pos": {
                "row": 0,
                "column": 4
            },
            "isMazeWall": false
        }
    ],
    [
        {
            "id": 6,
            "pos": {
                "row": 1,
                "column": 0
            },
            "isMazeWall": true
        },
        {
            "id": 7,
            "pos": {
                "row": 1,
                "column": 1
            },
            "isMazeWall": false,
            "isRoute": true
        },
        {
            "id": 8,
            "pos": {
                "row": 1,
                "column": 2
            },
            "isMazeWall": false,
            "isRoute": true
        },
        {
            "id": 9,
            "pos": {
                "row": 1,
                "column": 3
            },
            "isMazeWall": false,
            "isRoute": true
        },
        {
            "id": 10,
            "pos": {
                "row": 1,
                "column": 4
            },
            "isMazeWall": false,
            "isRoute": true
        }
    ],
    [
        {
            "id": 11,
            "pos": {
                "row": 2,
                "column": 0
            },
            "isMazeWall": false
        },
        {
            "id": 12,
            "pos": {
                "row": 2,
                "column": 1
            },
            "isMazeWall": false,
            "isRoute": false
        },
        {
            "id": 13,
            "pos": {
                "row": 2,
                "column": 2
            },
            "isMazeWall": true
        },
        {
            "id": 14,
            "pos": {
                "row": 2,
                "column": 3
            },
            "isMazeWall": true
        },
        {
            "id": 15,
            "pos": {
                "row": 2,
                "column": 4
            },
            "isMazeWall": false,
            "isRoute": true
        }
    ],
    [
        {
            "id": 16,
            "pos": {
                "row": 3,
                "column": 0
            },
            "isMazeWall": true
        },
        {
            "id": 17,
            "pos": {
                "row": 3,
                "column": 1
            },
            "isMazeWall": false,
            "isRoute": false
        },
        {
            "id": 18,
            "pos": {
                "row": 3,
                "column": 2
            },
            "isMazeWall": false,
            "isRoute": false
        },
        {
            "id": 19,
            "pos": {
                "row": 3,
                "column": 3
            },
            "isMazeWall": true
        },
        {
            "id": 20,
            "pos": {
                "row": 3,
                "column": 4
            },
            "isMazeWall": false,
            "isRoute": true
        }
    ],
    [
        {
            "id": 21,
            "pos": {
                "row": 4,
                "column": 0
            },
            "isMazeWall": false
        },
        {
            "id": 22,
            "pos": {
                "row": 4,
                "column": 1
            },
            "isMazeWall": true
        },
        {
            "id": 23,
            "pos": {
                "row": 4,
                "column": 2
            },
            "isMazeWall": true
        },
        {
            "id": 24,
            "pos": {
                "row": 4,
                "column": 3
            },
            "isMazeWall": false
        },
        {
            "id": 25,
            "pos": {
                "row": 4,
                "column": 4
            },
            "isMazeWall": false,
            "isRoute": true
        }
    ]
];

export const unsolvableMaze = [
    [
        {
            "id": 1,
            "pos": {
                "row": 0,
                "column": 0
            },
            "isMazeWall": false
        },
        {
            "id": 2,
            "pos": {
                "row": 0,
                "column": 1
            },
            "isMazeWall": true
        },
        {
            "id": 3,
            "pos": {
                "row": 0,
                "column": 2
            },
            "isMazeWall": false
        },
        {
            "id": 4,
            "pos": {
                "row": 0,
                "column": 3
            },
            "isMazeWall": false
        },
        {
            "id": 5,
            "pos": {
                "row": 0,
                "column": 4
            },
            "isMazeWall": false
        }
    ],
    [
        {
            "id": 6,
            "pos": {
                "row": 1,
                "column": 0
            },
            "isMazeWall": true
        },
        {
            "id": 7,
            "pos": {
                "row": 1,
                "column": 1
            },
            "isMazeWall": true
        },
        {
            "id": 8,
            "pos": {
                "row": 1,
                "column": 2
            },
            "isMazeWall": false
        },
        {
            "id": 9,
            "pos": {
                "row": 1,
                "column": 3
            },
            "isMazeWall": false
        },
        {
            "id": 10,
            "pos": {
                "row": 1,
                "column": 4
            },
            "isMazeWall": false
        }
    ],
    [
        {
            "id": 11,
            "pos": {
                "row": 2,
                "column": 0
            },
            "isMazeWall": false
        },
        {
            "id": 12,
            "pos": {
                "row": 2,
                "column": 1
            },
            "isMazeWall": false
        },
        {
            "id": 13,
            "pos": {
                "row": 2,
                "column": 2
            },
            "isMazeWall": false
        },
        {
            "id": 14,
            "pos": {
                "row": 2,
                "column": 3
            },
            "isMazeWall": false
        },
        {
            "id": 15,
            "pos": {
                "row": 2,
                "column": 4
            },
            "isMazeWall": false
        }
    ],
    [
        {
            "id": 16,
            "pos": {
                "row": 3,
                "column": 0
            },
            "isMazeWall": false
        },
        {
            "id": 17,
            "pos": {
                "row": 3,
                "column": 1
            },
            "isMazeWall": false
        },
        {
            "id": 18,
            "pos": {
                "row": 3,
                "column": 2
            },
            "isMazeWall": false
        },
        {
            "id": 19,
            "pos": {
                "row": 3,
                "column": 3
            },
            "isMazeWall": false
        },
        {
            "id": 20,
            "pos": {
                "row": 3,
                "column": 4
            },
            "isMazeWall": false
        }
    ],
    [
        {
            "id": 21,
            "pos": {
                "row": 4,
                "column": 0
            },
            "isMazeWall": false
        },
        {
            "id": 22,
            "pos": {
                "row": 4,
                "column": 1
            },
            "isMazeWall": false
        },
        {
            "id": 23,
            "pos": {
                "row": 4,
                "column": 2
            },
            "isMazeWall": false
        },
        {
            "id": 24,
            "pos": {
                "row": 4,
                "column": 3
            },
            "isMazeWall": false
        },
        {
            "id": 25,
            "pos": {
                "row": 4,
                "column": 4
            },
            "isMazeWall": false
        }
    ]
]