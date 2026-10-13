import { useEffect, useState } from "react";
import Board from "./Board";

export default function Game(){
    const [gameData, setGameData] = useState({})

    const handleWin = ()=>{
        console.log("handleWin start");
        
    }

    useEffect(()=>{
        //useEffect callback az nem lehet async
        //TODO- base url?
        fetch(`http://localhost:8080/sudoku`)
        .then(async (json)=>{ //ez lehet async
            console.log("JSON: ", json);
            const data = await json.json()
            console.log("data: ", data);
            setGameData(data)
        })
        .catch(console.warn)
        .finally(()=>{})
    }, [])

    return <div>
        {/*<p>TODO - comment out this -gameData json: {JSON.stringify(gameData)}</p>*/}
        <Board onWin={handleWin}>{gameData}</Board>
    </div>
}