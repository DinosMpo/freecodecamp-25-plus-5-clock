import { useEffect } from 'react'
import './Time.css';

export default function Time({ counterTime, setCounterTime, time, start, sessionTime, breakTime, breakActive, setBreakActive }) {
    const audioElement = document.getElementById('beep');

    useEffect(() => {
        if (start) {
            const interval = setInterval(() => {
                if (counterTime > 0) {
                    setCounterTime(counterTime - 1000);
                } else if (counterTime === 0 && breakActive === false) {
                    audioElement.play();
                    setBreakActive(true);
                    setCounterTime(breakTime * 60 * 1000);
                } else if (counterTime === 0 && breakActive === true) {
                    setBreakActive(false);
                    setCounterTime(time.length > 4 ? Number((time[0] + time[1]) * 60 * 1000) + (Number(time[3] + time[4]) * 1000) : Number((time[0]) * 60 * 1000) + (Number(time[2] + time[3]) * 1000));
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [start, counterTime]);

    //if you change the session time then calculate the new counter
    useEffect(() => {
        let newCounterTime = time.length > 4 ? Number((time[0] + time[1]) * 60 * 1000) + (Number(time[3] + time[4]) * 1000) : Number((time[0]) * 60 * 1000) + (Number(time[2] + time[3]) * 1000);
        setCounterTime(newCounterTime);
    }, [sessionTime]);

    const formatTime = () => {
        let totalSeconds = parseInt(Math.floor(counterTime / 1000));
        let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
        let seconds = parseInt(totalSeconds % 60);
        return `${totalMinutes < 10 ? '0' + totalMinutes : totalMinutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }

    return (
        <div id="time-container">
            <div id="timer-label" className={breakActive ? 'break-time' : ''}>{breakActive ? 'Break' : 'Session'}</div>
            <div id="time-left">{formatTime()}</div>
        </div>
    )
}
