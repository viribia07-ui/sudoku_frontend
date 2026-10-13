import Tile from "./Tile";
import './Board.css'
import { useState } from "react";

export default function Board({ children={} }){
    //console.log("Board props: ", props); //props.children.puzzle, props.children.solution
    //console.log("Board children: ", children);
    const{puzzle = [], solution = []} = children
    console.log("puzzle: ", puzzle);
    console.log("solution: ", solution);

    const [currentBoard, setCurrentBoard] = useState([[]])
    const handleTileValueChange = (newNumber, rowIdx, colIdx) => {

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