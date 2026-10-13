import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Board from "./Board";

export default function Game(){
    const [gameData, setGameData] = useState({})

    const handleWin = ()=>{
        console.log("handleWin start");
        toast.success("Successfully solved!")
        
    }

    const getSudokuData= async () => {
        fetch(`/api/sudoku?difficulty=${difficulty}`)
        .then(async (json)=>{ //ez lehet async
            //console.log("JSON: ", json);
            const data = await json.json()
            //console.log("data: ", data);
            setGameData(data)
        })
        .catch(console.warn)
        .finally(()=>{})
    }

    useEffect(()=>{
        //useEffect callback az nem lehet async
        //TODO- base url?
        getSudokuData("medium")
    }, [])

    const handleSelectDifficulty = (e)=>{
        getSudokuData(newDifficulty)
    }

    return <div>
        {/*<p>TODO - comment out this -gameData json: {JSON.stringify(gameData)}</p>*/}
        <div>
            <label htmlFor="difficulty">Difficulty: </label>
            <select defaultValue="medium" name="difficulty" onChange={handleSelectDifficulty}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
        
        <Board onWin={handleWin}>{gameData}</Board>
        
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="colored"
        />
        {/*<button onClick={handleWin}>TODO toast now</button>*/}
    </div>
}