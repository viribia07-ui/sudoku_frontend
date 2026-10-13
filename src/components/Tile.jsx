import './Tile.css'

export default function Tile({numberValue = 1}){
    return <div className='tile'>
        {numberValue}
    </div>
}