import Tile from "./Tile";
import './Board.css'
import { useState } from "react";

export default function Board({ children={}, onWin }){
    //console.log("Board props: ", props); //props.children.puzzle, props.children.solution
    //console.log("Board children: ", children);
    const{puzzle = [], solution = []} = children
    console.log("puzzle: ", puzzle);
    console.log("solution: ", solution);

    const [currentBoard, setCurrentBoard] = useState(Array.from({length: 9}, (val, key)=>[]))
    
    const checkWin = (board)=>{
        console.log("board: ", board);
        
        let numberDiff = false
        let matches = 0
        //"Merge" board with puzzle, check with solution
        board.forEach((boardRow, rowIdx) => {
            boardRow.forEach((boardCellValue, colIdx)=>{
                if(boardCellValue==solution[rowIdx][colIdx]){
                    //marad false
                    matches++
                } else{
                    numberDiff = true
                }
            })
        });

        let puzzleNulls = 0
        board.forEach((puzzleRow, rowIdx)=>{
            puzzleRow.forEach((puzzleCellValue, colIdx)=>{
                if(!puzzleCellValue) puzzleNulls++
            })
        });

        if(!numberDiff && matches==puzzleNulls){
            console.log("Solved puzzle!");
            onWin()
        }
    }
    
    const handleTileValueChange = (newNumber, rowIdx, colIdx) => {
        console.log("handleTileValueChange, newNumber, rowIdx, colIdx: ",newNumber, rowIdx, colIdx);
        setCurrentBoard((prev)=>{
            const newBoard = prev.slice()
            newBoard[rowIdx][colIdx] = newNumber
            return newBoard
        })
    }

    return <div className="board">
        {puzzle.map((row, rowIdx)=>
            <div className="row" key={rowIdx}>
                {row.map((value, colIdx)=>
                <Tile
                    key={colIdx}
                    numberValue={value}
                    rowidx={rowIdx}
                    colidx={colIdx}
                    onTileValueChange={handleTileValueChange}
                />)}
            </div>
        )}
    </div>
}