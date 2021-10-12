import React, { useContext, useEffect, useState } from 'react';

import { ReactComponent as Triangle } from '../../assets/images/bg-triangle.svg'
import { ReactComponent as Rock } from '../../assets/images/icon-rock.svg'
import { ReactComponent as Paper } from '../../assets/images/icon-paper.svg'
import { ReactComponent as Scissors } from '../../assets/images/icon-scissors.svg'

import {CounterContext} from "../../context/counterProvider";

import './gameField.css'

function GameField() {

    const {addCounter, subtractCounter} = useContext(CounterContext)

    const [ userChoice, setUserChoice ] = useState( 0 )
    const [ userDisplay, setUserDisplay ] = useState( '' )
    const [ cpuChoice, setCpuChoice ] = useState( 0 )
    const [ cpuDisplay, setCpuDisplay ] = useState( '' )
    const [ gameMessage, setGameMessage ] = useState( '' )

    function getRandomChoice() {
        return Math.ceil( Math.random() * 3 )
    }

    useEffect( () => {

        function displayUserChoice() {
            switch ( userChoice ) {
                case 1:
                    return (
                        <div className="btn rock-choice">
                            <Rock/>
                        </div>
                    )
                case 2:
                    return (
                        <div className="btn paper-choice">
                            <Paper/>
                        </div>
                    )

                case 3:
                    return (
                        <div className="btn scissors-choice">
                            <Scissors/>
                        </div>
                    )
            }
        }

        function displayCPUChoice() {


            switch ( cpuChoice ) {
                case 1:
                    return (
                        <div className="btn rock-choice">
                            <Rock/>
                        </div>
                    )
                case 2:
                    return (
                        <div className="btn paper-choice">
                            <Paper/>
                        </div>
                    )

                case 3:
                    return (
                        <div className="btn scissors-choice">
                            <Scissors/>
                        </div>
                    )
            }
        }

        if ( userChoice > 0 ) {
            setUserDisplay( displayUserChoice() )
            setCpuDisplay( displayCPUChoice() )

            if ( userChoice === cpuChoice ) {
                setGameMessage( "IT'S A TIE" )
            } else if (
                ( userChoice === 1 && cpuChoice === 2 ) ||
                ( userChoice === 2 && cpuChoice === 3 ) ||
                ( userChoice === 3 && cpuChoice === 1 )
            ) {
                setGameMessage( "HOUSE WINS" )
                subtractCounter()
            } else {
                setGameMessage( "YOU WIN" )
                addCounter()
            }
        }

    }, [ userChoice ] )


    return (
        <>
            { !userChoice ?
                <section className="game-field-container">
                    <Triangle/>
                    <div className="btn rock-img" onClick={ () => {
                        setUserChoice( 1 )
                        setCpuChoice( getRandomChoice() )
                    } }>
                        <Rock/>
                    </div>
                    <div className="btn paper-img" onClick={ () => {
                        setUserChoice( 2 )
                        setCpuChoice( getRandomChoice() )
                    } }>
                        <Paper/>
                    </div>
                    <div className="btn scissors-img" onClick={ () => {
                        setUserChoice( 3 )
                        setCpuChoice( getRandomChoice() )
                    } }>
                        <Scissors/>
                    </div>
                </section>
                :
                <section className="choices-container">
                    <div className="choice">
                        <h3>YOU PICKED</h3>
                        { userDisplay }
                    </div>

                    <div className="game-message">
                        <h4>{ gameMessage }</h4>
                        <button onClick={() => setUserChoice(0)}>PLAY AGAIN</button>
                    </div>

                    <div className="choice">
                        <h3>THE HOUSE PICKED</h3>
                        { cpuDisplay }
                    </div>
                </section>
            }
        </>
    );
}

export default GameField;