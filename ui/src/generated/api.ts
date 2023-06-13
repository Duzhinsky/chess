/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2023-06-05 00:38:51.

export interface PositionDto {
    x: number;
    y: number;
}

export interface BoardDto {
    figures: FigureDto[];
}

export interface FigureDto {
    type: FigureType;
    position: PositionDto;
    color: Color;
}

export interface MoveDto {
    type: MoveType;
    figure: FigureDto;
    to: PositionDto;
    rook?: FigureDto;
    taken?: FigureDto;
    turnInto?: FigureType;
}

export interface SessionDto {
    id: string;
    board: BoardDto;
    possibleMoves: MoveDto[];
}

export const enum FigureType {
    BISHOP = "BISHOP",
    KING = "KING",
    KNIGHT = "KNIGHT",
    PAWN = "PAWN",
    QUEEN = "QUEEN",
    ROCK = "ROCK",
}

export const enum Color {
    WHITE = "WHITE",
    BLACK = "BLACK",
}

export const enum MoveType {
    STEP = "STEP",
    TAKING = "TAKING",
    EN_PASSANT = "EN_PASSANT",
    TURNING = "TURNING",
    CASTLING = "CASTLING",
}
