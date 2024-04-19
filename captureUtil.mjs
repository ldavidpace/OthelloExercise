
import { getAdjacentMatrix } from "./commonUtils.mjs";

export const collectCaptures = (board, color, move) => {
    const adjacentSpaces = getAdjacentMatrix(board, move);
    const hits = Object.entries(adjacentSpaces).filter(([position, value]) => (value && value !== color)).map(([position]) => position);

    return hits.reduce((acc, direction) => (
        acc.concat(computeCapture(board, color, move, direction))), []);
}

export const computeCapture = (board, color, move, direction) => {
    let columnOffset = 0, rowOffset = 0;

    if (direction.toLowerCase().includes('above')) {
        rowOffset = -1;
    } else if (direction.toLowerCase().includes('below')) {
        rowOffset = 1;
    }

    if (direction.toLowerCase().includes('right')) {
        columnOffset = 1;
    } else if (direction.toLowerCase().includes('left')) {
        columnOffset = -1;
    }
    
    let nextSpot = {col: parseInt(move.col) + columnOffset, row: parseInt(move.row) + rowOffset};
    const captures = [];

    while(board.positions[nextSpot.row]?.[nextSpot.col] && board.positions[nextSpot.row]?.[nextSpot.col] !== color) {
        captures.push(nextSpot);
        nextSpot = {row: nextSpot.row + rowOffset, col: nextSpot.col + columnOffset};
    }

    if (board.positions[nextSpot.row]?.[nextSpot.col] && board.positions[nextSpot.row]?.[nextSpot.col] === color) {
        return captures;
    } else return [];

    
}