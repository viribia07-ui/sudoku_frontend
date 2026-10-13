import Tile from "./Tile";
import './Board.css'

export default function Board(props){
    console.log("Board props: ", props); //props.children.puzzle, props.children.solution
    
    return <div className="board">
        <div className="row">
            <Tile />
            <Tile numberValue={2}/>
            <Tile numberValue={null}/>
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
        </div>
        <div className="row">
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
        </div>
    </div>
}