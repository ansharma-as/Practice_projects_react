import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(15)

  const addValue = () => {
    setCount(count + 1)
  }

  const removeValue = () => {
    setCount(count - 1)
  }

  return (
    <>
      
      <div className="card">
        <button onClick={ addValue }>
          Add {count}
        </button>
        <br />
        <button onClick={ removeValue }>
          Remove {count}
        </button>
      
      </div>
      <div>Website by Strontium</div>
    </>
  )
}

export default App
