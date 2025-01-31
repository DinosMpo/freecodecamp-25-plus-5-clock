import React from 'react'
import './Break.css';

export default function Break({ breakTime, setBreakTime }) {
    const breakOptions = (type) => {
        if(type === 'dec') {
            if(breakTime > 1) {
                setBreakTime(prev => prev-1);
            }
        }else if(type === 'inc') {
            if(breakTime < 60) {
                setBreakTime(prev => prev + 1);
            }
        }
    }

    return (
        <div id="break-container">
            <div id="break-label">Break Length</div>
            <div id="break-dec-inc-buttons">
                <div id="break-decrement" onClick={() => breakOptions('dec')}>down</div>
                <div id="break-length">{breakTime}</div>
                <div id="break-increment" onClick={() => breakOptions('inc')}>up</div>
            </div>
        </div>
    )
}
