import './App.css';

import Header from "./components/header/Header";
import GameField from "./components/gameField/GameField";
import Rules from "./components/rules/Rules";
import { useState } from "react";

import { ReactComponent as ImageRules } from "./assets/images/image-rules.svg";
import { ReactComponent as Close } from "./assets/images/icon-close.svg";

// import Footer from "./components/footer/Footer";


function App() {

    const [ showPopUp, setShowPopUp ] = useState( false )
    console.log( showPopUp )

    return (
        <>

            <Header/>
            <GameField/>
            <Rules
                setPopUp={ setShowPopUp }
            />
            { showPopUp &&
            <div className="rules-container">
                <div className="rules-container-header">
                    <h3>RULES</h3> <Close onClick={ () => setShowPopUp( false ) }/>
                </div>
                <ImageRules/>
            </div>
            }
            {/*<Footer/>*/ }
        </>
    );
}

export default App;
