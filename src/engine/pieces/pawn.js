import Piece from './piece';
import board from '../board.js';
import findPiece from '../board.js';


import Square from "../square";
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let pawnPosition = board.findPiece(this);
        let moves = new Array(0);
        console.log(Player.WHITE);
        if (this.player === Player.WHITE ) {
            moves.push(Square.at(pawnPosition.row +1, pawnPosition.col)); }
        else  {
            moves.push(Square.at(pawnPosition.row -1, pawnPosition.col));
        }
        return moves;
}}
