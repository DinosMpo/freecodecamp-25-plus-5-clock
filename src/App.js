import './App.css';

function App() {
  return (
    <div className="App">
      <div id="break-container">
        <div id="break-label">Break Length</div>
        <div id="break-decrement">down</div>
        <div id="break-increment">up</div>
        <div id="break-length">5</div>
      </div>
      <div id="session-container">
        <div id="session-label">Session Length</div>
        <div id="session-decrement">down</div>
        <div id="session-increment">up</div>
        <div id="session-length">25</div>
      </div>
      <div id="time-container">
        <div id="timer-label">Session</div>
        <div id="time-left">25:00</div>
      </div>
      <div id="buttons-container">
        <div id="start_stop">start</div>
        <div id="reset">reset</div>
      </div>
    </div>
  );
}

export default App;
