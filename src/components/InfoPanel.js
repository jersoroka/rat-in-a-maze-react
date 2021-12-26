import Button from './Button';
import './InfoPanel.css';

function InfoPanel({setIsInfoPanelShown}) {

    return (
        <div className="infopanel">
            <p className="infopanel-text">What is the Rat in a Maze problem?</p>
            <Button text="CLOSE" isMini={true} handleClick={() => setIsInfoPanelShown(false)}/>
        </div>
        
    )

}

export default InfoPanel;