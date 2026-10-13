import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from './components/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1>Sudoku Game</h1>
        <Game />
        {/**
         * Comment in react
         
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>*/}
      </div>
    </>
  )
}

export default App
