import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1
        className='text=2xl font-bold bg-base-300 p-4 text-secondary'
      >
        TCA Acquire
      </h1>
      <div className="p-4">
        <button
          className='btn btn-secondary btn-soft btn-xl'
        >
          Play Acquire
        </button>
        <h2
          className='mt-3 text-xl font-semi-bold'
        >
          Leaderboard
        </h2>
      </div>
    </div>
  )
}

export default App
