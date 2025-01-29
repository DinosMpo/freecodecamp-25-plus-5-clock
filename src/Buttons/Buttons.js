import React from 'react'
import './Buttons.css';

export default function Buttons({resetTimer, start, setStart}) {
    return (
        <div id="buttons-container">
            <div id="start_stop" onClick={() => setStart(prev => !prev)}>{!start ? 'start' : 'stop'}</div>
            <div id="reset" onClick={() => resetTimer()}>reset</div>
        </div>
    )
}
