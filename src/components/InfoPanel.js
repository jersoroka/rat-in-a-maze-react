import Button from './Button';
import './InfoPanel.css';

function InfoPanel({setIsInfoPanelShown}) {

    return (
        <div className="infopanel">
            <h4>What is the Rat in a Maze Problem?</h4>

            <span>The Rat in a Maze problem is a popular problem that can be solved using a backtracking algorithm. The goal is to find a path in the maze from the rat to the cheese, given the following conditions:</span>

            <ul>
                <li>A rat is at the top-left cell</li>
                <li>The destination (the cheese) is at the bottom-right cell</li>
                <li>The rat can only move right or down</li>
            </ul>
            <Button text="CLOSE" isMini={true} handleClick={() => setIsInfoPanelShown(false)}/>
        </div>
        
    )

}

export default InfoPanel;