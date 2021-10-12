import React from 'react';

import { ReactComponent as Logo } from '../../assets/images/logo.svg'

import ScoreBoard from "../scoreBoard/ScoreBoard";

import './header.css'

function Header() {
    return (
        <div className="header">
            <Logo/>
            <ScoreBoard/>
        </div>
    );
}

export default Header;