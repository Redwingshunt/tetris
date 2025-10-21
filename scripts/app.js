document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    const squares = Array.from(document.querySelectorAll(".grid div"));
    const scoreDisplay = document.querySelector("#score");
    const startBtn = document.querySelector('#start-button');
    const width = 10;
    // console.log(squares);

    // blockPosition = currentPosition + (row * width) + column


    /* 

    4 tetromino shapes, each consists of 4 rotations and 4 divs//grids and formulas to position them correctly
    
    Each tetromino is represented as an array of arrays, where each inner array represents a rotation of the tetromino. The numbers in the inner arrays correspond to\
    the positions of the blocks in a one-dimensional representation of the grid
     currentPosition = 4,
     width = 10, * will form no. of rows, + will give number of columns.

    0  1  2  3  4  5  6  7  8  9
    10 11 12 13 14 15 16 17 18 19
    20 21 22 23 24 25 26 27 28 29

    since arrays are zero based index, the first row will be 0-9, second row 10-19 and so on.
    so  currentPosition +index will give correct possiton  of each block.
    
    
    */
    const lTetromino = [
        [1, width + 1, width * 2 + 1, 2], // 5,15,25,6
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ];

    const zTetromino = [
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1]
    ];

    const tTetromino = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
    ];

    const oTetromino = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ];

    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ];

    // theTetrominoes will hold all the tetromino shapes
    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    let currentPosition = 4;
    let current = theTetrominoes[0][1]; // ✅ CORRECTED LINE



    //randomw selection of tetromino
    let random  = Math.floor(Math.random()*theTetrominoes.length);
    let random2  = Math.floor(Math.random()*theTetrominoes.length);
    console.log(random);
    current = theTetrominoes[random][random2];
    console.log(current);


    // draw the shape
    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino');
        });
    }

    draw();
});
