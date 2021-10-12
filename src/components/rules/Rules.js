import React from 'react';

import './rules.css'

function Rules({setPopUp}) {
    return (
        <div className="rules-btn-container">
            <div className="rules-btn" onClick={() => setPopUp(true)}>
                RULES
            </div>
        </div>
    );
}

export default Rules;