import Tile from "./Tile";
import './Board.css'

export default function Board(){
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