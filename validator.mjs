import {computeCapture} from './captureUtil.mjs';
import {getAdjacentMatrix} from './commonUtils.mjs';

export const hasValidMove = (board, color) => {
    board.positions.some((row, rowIndex) => {
        return row.some((column, columnIndex) => {
            return isValidMove(board, color, {row: rowIndex, col: columnIndex});
        })
    })
}

const hasAdjacentOpponent = (board, color, move) => {
    const possibleHits = Object.values(getAdjacentMatrix(board, move));
    return possibleHits.some((location) => location && location !== color);   
}

const doesCaptureOpponet = (board, color, move) => {
    const adjacentSpaces = getAdjacentMatrix(board, move);
    const hits = Object.entries(adjacentSpaces).filter(([position, value]) => (value && value !== color)).map(([position]) => position);

    return hits.some((direction) => computeCapture(board, color, move, direction).length);
    
}


export const isValidMove = (board, color, move) => {

    if (board.positions[move.row][move.col]){
        console.log('Must play in empty space');
        return false;
    }
    if (!hasAdjacentOpponent(board, color, move)) {
        console.log("Must Play next to an opponent piece");
        return false;
    } 
    if (!doesCaptureOpponet(board, color, move) ) {
        console.log("Must capture opponent piece");
        return false
    }
    

    return true;
}