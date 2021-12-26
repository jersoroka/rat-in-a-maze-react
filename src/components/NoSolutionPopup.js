import Button from './Button';
import './NoSolutionPopup.css';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function NoSolutionPopUp() {
    const { setShowNoSolutionPopup } = useContext(GlobalContext);

    return (
        <div className='popup'>
            <p>This maze doesn't have a solution! &#128577;</p>
            <Button className="border" text="CLOSE" handleClick={() => setShowNoSolutionPopup(false)}isMini={true}/>
        </div>
    )
}

export default NoSolutionPopUp;