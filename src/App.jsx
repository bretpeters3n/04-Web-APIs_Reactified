import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



export default function App() {
  const [count, setCount] = useState(0);
  // setCount(0);
  return (
    <>
      <div className="utility-nav">
        <div className="nav-items">
          <div>View Highscores</div>
          <div>Time: {count}</div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="knot-quiz" element={<KnotQuiz />} />
          <Route path="leader-board" element={<LeaderBoard />} />
          <Route path="about" element={<About />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  )
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/knot-quiz">Knot Quiz</Link>
          </li>
          <li>
            <Link to="/leader-board">Leader Board</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <hr /> */}

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  const [count, setCount] = useState(0);
  // setCount(0);

  function startGame() {
    setCount(60);
    // timer(60, callback);
    let reveal = document.getElementById('objectDetails');
    reveal.style.display = 'block';
  }
  
  // function timer(seconds, cb) {
  //   var remaningTime = seconds;
  //   window.setTimeout(function() {
  //     cb();
  //     setCount(remaningTime);
  //     console.log(remaningTime);
  //     if (remaningTime > 0) {
  //       timer(remaningTime - 1, cb); 
  //     }
  //   }, 1000);
  // }
  
  // var callback = function() {
  //   console.log('callback');
  // };

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
      <Link className="button" to="/knot-quiz" onClick={startGame}>Knot Quiz</Link>
        {/* <button onClick={startGame}>
          Start Quiz presses {count}
        </button> */}
      </div>
      <div id="objectDetails">
        {quizQuestions.map(
          (
            { question, answers: { answer01: { answer01Copy, correct01 }, answer02: { answer02Copy, correct02 } } },
            index
          ) => {
            return (
              <div className="employees" key={index}>
                <p>{question}</p>
              </div>
            )
          }
        )}
      </div>
    </>
  );
}

function KnotQuiz() {
  return (
    <div>
      <h2>Knot Quiz</h2>
    </div>
  );
}

function LeaderBoard() {
  return (
    <div>
      <h2>Leaderboard</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}