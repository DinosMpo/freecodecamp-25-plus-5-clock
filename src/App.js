import './App.css';
import { useState } from 'react';
import Break from './Break/Break';
import Session from './Session/Session';
import Time from './Time/Time';
import Buttons from './Buttons/Buttons';

function App() {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(58);
  const [time, setTime] = useState('25:00');
  const [start, setStart] = useState(false);
  
  const resetTimer = () => {
    setBreakTime(5);
    setSessionTime(25);
    setTime('25:00');
    setStart(false);
  }

  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <div id="section-1">
        <Break breakTime={breakTime} setBreakTime={setBreakTime} />
        <Session sessionTime={sessionTime} setSessionTime={setSessionTime} time={time} setTime={setTime} />
      </div>
      <Time time={time} start={start} setStart={setStart} sessionTime={sessionTime}/>
      <Buttons resetTimer={resetTimer} start={start} setStart={setStart}/>
      <div>Created by <a>DinosMpo</a></div>
    </div>
  );
}

export default App;
