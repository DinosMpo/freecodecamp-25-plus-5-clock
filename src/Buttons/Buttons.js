import './Buttons.css';

export default function Buttons({ resetTimer, start, setStart }) {
    return (
        <div id="buttons-container">
            <div id="start_stop" onClick={() => setStart(prev => !prev)}>
                <img id="start-pause-icon" src={!start ? './play-icon.png' : './pause-button-icon.png'} alt={!start ? 'startplay-icon' : 'pause-button-icon'} title={!start ? 'play' : 'stop'}/>
            </div>
            <div id="reset" onClick={() => resetTimer()}>
                <img id="reset-icon" src="./undo-arrow-icon.png" alt="reset" title="reset"/>
            </div>
        </div>
    )
}
