
export const getAdjacentMatrix = (board, move) => {
    return {
        above: board.positions[move.row - 1]?.[move.col],
        aboveRight: board.positions[move.row - 1]?.[move.col + 1],
        right:board.positions[move.row]?.[move.col + 1],
        belowRight:board.positions[move.row + 1]?.[move.col + 1],
        below:board.positions[move.row + 1]?.[move.col],
        belowLeft:board.positions[move.row + 1]?.[move.col -1],
        left:board.positions[move.row]?.[move.col - 1 ],
        aboveLeft:board.positions[move.row - 1]?.[move.col - 1],
    }
}
