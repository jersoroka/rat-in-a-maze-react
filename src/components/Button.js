import './Button.css';
import {BUTTON_TEXT} from '../constants/enums'

function Button({ text, handleClick }) {

    const backgroundColor = setBackgroundColor();

    function setBackgroundColor() {
        switch (text) {
            case BUTTON_TEXT.CLEAR:
            case BUTTON_TEXT.SOLVE:
                return '#0EAD69';
            case BUTTON_TEXT.RESET:
                return '#D7816A';
            case BUTTON_TEXT.INFO_PANEL:
                return '#2F6690';
            case BUTTON_TEXT.GET_MAZE:
                return '#553739';
            default:
                return '#2F6690';
        }

    }
    return (
        <button className="button" style={{background: `${backgroundColor}`}} onClick={() => handleClick()}>{text}</button>
    )
}

export default Button;