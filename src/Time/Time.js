import { useEffect } from 'react'
import './Time.css';

export default function Time({ counterTime, setCounterTime, time, start, setStart, sessionTime, setTime, breakTime, breakActive, setBreakActive }) {
    //time 25:00
    // const [counterTime, setCounterTime] = useState(Number((time[0] + time[1]) * 60 * 1000) + (Number(time[3] + time[4]) * 1000));

    //if the timer have start and every second run this code
    useEffect(() => {
        if (start) {
            // if(counterTime == 0 && breakActive == false) {
            //     setCounterTime(Number((time[0] + time[1]) * 60 * 1000) + (Number(time[3] + time[4]) * 1000));
            // }
            const interval = setInterval(() => {
                if (counterTime > 0) {
                    setCounterTime(counterTime - 1000);
                    // setTime(time - 1);
                } else if (counterTime == 0 && breakActive == false) {
                    // setStart(false);
                    setBreakActive(true);
                    setCounterTime(breakTime * 60 * 1000);
                } else if (counterTime == 0 && breakActive == true) {
                    // setStart(false);
                    setBreakActive(false);
                    setCounterTime(time.length > 4 ? Number((time[0] + time[1]) * 60 * 1000) + (Number(time[3] + time[4]) * 1000) : Number((time[0]) * 60 * 1000) + (Number(time[2] + time[3]) * 1000));
                }
                console.log('counterTime ', counterTime);
                console.log('time ', time);
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
        // let minutes = parseInt(totalMinutes % 60);
        // console.log(`${totalMinutes < 10 ? '0' + totalMinutes : totalMinutes}:${seconds < 10 ? '0' + seconds : seconds}`);
        return `${totalMinutes < 10 ? '0' + totalMinutes : totalMinutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }

    return (
        <div id="time-container">
            <div id="timer-label" className={breakActive ? 'break-time' : ''}>{breakActive ? 'Break' : 'Session'}</div>
            <div id="time-left">{formatTime()}</div>
        </div>
    )
}
