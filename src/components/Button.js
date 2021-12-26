import './Button.css';

function Button({ text, handleClick }) {

    const backgroundColor = setBackgroundColor();

    function setBackgroundColor() {
        switch (text) {
            case 'CLEAR MAZE SOLUTION':
            case 'SOLVE':
                return '#0EAD69';
            case 'RESET':
                return '#D7816A';
            case 'THE RAT IN A MAZE PROBLEM':
                return '#2F6690';
            case 'USE PRE-GENERATED MAZE':
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