import Cell from './cell';
import CellState from './cell_state';


export default class Game {

    constructor(grid) {
        this.numRows = grid.length;
        this.numCols = grid[0].length;

        this.grid = grid.map(row => row.map(cellState => new Cell(cellState)));
    }


    getCell(row, col) {
        return this.grid[row][col];
    }


    getNumberOfAlive(row, col) {
        let stateValues = {
            [CellState.ALIVE]: 1,
            [CellState.DEAD]: 0
        };

        let sum = 0;

        for (let rowOffset = - 1; rowOffset < 2; rowOffset++) {
            for (let cellOffset = - 1; cellOffset < 2; cellOffset++) {
                let x = (row + rowOffset),
                    y = (col + cellOffset);

                let cell = this.getCell(x, y);

                sum += stateValues[cell.state];
            }
        }

        sum -= this.getCell(row, col).state; // subtract current row + col - SELF

        return sum;
    }
}