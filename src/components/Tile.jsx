import './Tile.css'

export default function Tile({numberValue = 1}){
    return <div className='tile'>
        {numberValue??<input type='number' min={1} max={9} step={1}/>}
    </div>
}