import './Button.css';

function Button({ text, handleClick }) {

    const backgroundColor = text === 'SOLVE' ? '#0EAD69' : '#D7816A';
    return (
        <button className="button" style={{background: `${backgroundColor}`}} onClick={() => handleClick()}>{text}</button>
    )
}

export default Button;