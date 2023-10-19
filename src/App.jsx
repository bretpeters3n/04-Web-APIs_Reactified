import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function startGame() {
    // setCount(60);
    timer(60, callback);
    let reveal = document.getElementById('objectDetails');
    reveal.style.display = 'block';
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

  let quizQuestions = [
    {
      question: 'Name this knot',
      answers:  {
        answer01: {
          answer: 'Answer #1',
          correct: false,
        },
        answer02: {
          answer: 'Answer #2',
          correct: false,
        },
        answer03: {
          answer: 'Answer #3',
          correct: false,
        },
        answer04: {
          answer: 'Answer #4',
          correct: true,
        },
      },
    },
  ];

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
      <p >This is a timed quiz where you match illustrations of knots to their names.<br/>See your overall ranking at the end.</p>
      <div className="card">
        <button onClick={startGame}>
          Start Quiz presses {count}
        </button>
      </div>
      {/* <div id="objectDetails">{quizQuestions[0]}</div> */}
      {/* <div id="objectDetails">{quizQuestions.map(quizQuestions => (
        <div key={quizQuestions.question}>
          <p>{quizQuestions.question}</p> */}
          {/* <p>{quizQuestions.answers}</p> */}
        {/* </div>))}
      </div> */}
      <div id="objectDetails">
        {quizQuestions.map(
          (
            { question, answers: { answer01: { answerCopy, correct } } },
            index
          ) => {
            return (
              <div className="employees" key={index}>
                <p>{question}</p>
                <p>{quizQuestions.answerCopy}</p>
                <p>{correct}</p>
              </div>
            )
          }
        )}
      </div>
    </>
  )
}

export default App
