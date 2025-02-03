import './App.css';
import { useState } from 'react';
import Break from './Break/Break';
import Session from './Session/Session';
import Time from './Time/Time';
import Buttons from './Buttons/Buttons';

function App() {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [time, setTime] = useState('25:00');
  const [start, setStart] = useState(false);
  const [counterTime, setCounterTime] = useState(Number((time[0] + time[1]) * 60 * 1000) + (Number(time[3] + time[4]) * 1000));
  const [breakActive, setBreakActive] = useState(false);

  const resetTimer = () => {
    setBreakTime(5);
    setSessionTime(25);
    setTime('25:00');
    setCounterTime(1500000);
    setStart(false);
    setBreakActive(false);
  }

  // console.log(counterTime);

  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <div id="section-1">
        <Break breakTime={breakTime} setBreakTime={setBreakTime} />
        <Session sessionTime={sessionTime} setSessionTime={setSessionTime} time={time} setTime={setTime} />
      </div>
      <Time
        counterTime={counterTime}
        setCounterTime={setCounterTime}
        time={time}
        start={start}
        setStart={setStart}
        sessionTime={sessionTime}
        setTime={setTime}
        breakTime={breakTime}
        breakActive={breakActive}
        setBreakActive={setBreakActive}
      />
      <Buttons
        resetTimer={resetTimer}
        start={start}
        setStart={setStart}
        counterTime={counterTime}
        breakActive={breakActive}
      />
      <div>Created by <a>DinosMpo</a></div>
    </div>
  );
}

export default App;
