//
// Chessboard
//
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
//

let chessBoard = (size) => {
    let board = '';
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            board += (x + y) % 2 ? ' ' : '#';
        }
        board += '\n';
    }

    return board;
}

console.log(chessBoard(8));