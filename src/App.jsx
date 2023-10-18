import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function startGame() {
    // setCount(60);
    timer(60, callback);
  }
  
  function timer(seconds, cb) {
    var remaningTime = seconds;
    window.setTimeout(function() {
      cb();
      setCount(remaningTime);
      console.log(remaningTime);
      if (remaningTime > 0) {
        timer(remaningTime - 1, cb); 
      }
    }, 1000);
  }
  
  var callback = function() {
    console.log('callback');
  };

  return (
    <>
      <div className="utility-nav">
        <div className="nav-items">
          <div>View Highscores</div>
          <div>Time: {count}</div>
        </div>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Knot QUIZ Challenge</h1>
      <p>This is a timed quiz where you match illustrations of knots to their names.<br/>See your overall ranking at the end.</p>
      <div className="card">
        <button onClick={startGame}>
          Start Quiz presses {count}
        </button>
      </div>
    </>
  )
}

export default App
