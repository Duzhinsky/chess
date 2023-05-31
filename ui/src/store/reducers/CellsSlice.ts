import { createSlice } from "@reduxjs/toolkit"
import { CellProps } from "../../components/CellComponent"
import { Colors } from "../../models/Colors"
import { Figure, FigureType } from "../../models/Figure"

interface CellsState {
  cells: CellProps[][]
}

const initialState: CellsState = new (class implements CellsState {
  cells: CellProps[][]

  constructor() {
    this.cells = []
    this.initCells()
    this.cells[3][4].figure = new Figure(Colors.WHITE, FigureType.PAWN)
  }

  private initCells() {
    for (let i = 0; i < 8; i++) {
      const row: CellProps[] = []
      for (let j = 0; j < 8; j++) {
        row.push({
          position: { x: j, y: i },
          figure: null,
          color: (i + j) % 2 ? Colors.BLACK : Colors.WHITE,
          available: false,
          isSelected: false,
          setIsSelected: () => {},
        })
      }
      this.cells.push(row)
    }
  }
})()

export const cellsSlice = createSlice({
  name: "cells",
  initialState,
  reducers: {},
})

export default cellsSlice.reducer
