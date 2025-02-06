import './Session.css';

export default function Session({ sessionTime, setSessionTime, setTime }) {
    const sessionsOptions = (type) => {
        if(type === 'dec') {
            if(sessionTime > 1) {
                setSessionTime(prev => prev-1);
                setTime((sessionTime - 1) + ':00');
            }
        }else if(type === 'inc') {
            if(sessionTime < 60) {
                setSessionTime(prev => prev + 1);
                setTime((sessionTime + 1) + ':00');
            }
        }
    }

    return (
        <div id="session-container">
            <div id="session-label">Session Length</div>
            <div id="session-dec-inc-buttons">
                <div id="session-decrement" onClick={() => sessionsOptions('dec')}>
                    <img className="down-arrow" src="./down-arrow-icon.png" alt="down arrow" title="descend"/>
                </div>
                <div id="session-length">{sessionTime}</div>
                <div id="session-increment" onClick={() => sessionsOptions('inc')}>
                    <img className="up-arrow" src="./up-arrow-icon.png" alt="up arrow" title="ascend"/>
                </div>
            </div>
        </div>
    )
}
