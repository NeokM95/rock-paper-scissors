import React, { useContext } from 'react';

import {CounterContext} from "../../context/counterProvider";

function ScoreBoard() {

    const { counter } = useContext(CounterContext)

    return (
        <div className="score-board">
            <h4>score</h4>
            <h2>
                {counter}
            </h2>
        </div>
    );
}

export default ScoreBoard;