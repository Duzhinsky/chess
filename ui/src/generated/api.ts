/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2023-06-04 16:04:28.

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

export type FigureType = "BISHOP" | "KING" | "KNIGHT" | "PAWN" | "QUEEN" | "ROCK";

export type Color = "WHITE" | "BLACK";

export type MoveType = "STEP" | "TAKING" | "EN_PASSANT" | "TURNING" | "CASTLING";
