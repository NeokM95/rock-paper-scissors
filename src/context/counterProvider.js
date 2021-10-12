import React, { createContext, useState } from "react";

export const CounterContext = createContext(null)

function CounterContextProvider({children}){

    const [counter, setCounter] = useState(0)

    function addCounter(){
        setCounter(counter + 1)
    }

    function subtractCounter(){
        setCounter(counter -1)
    }

    return (
        <CounterContext.Provider value={{
            counter,
            setCounter,
            addCounter,
            subtractCounter
        }}>
            {children}
        </CounterContext.Provider>
    )

}

export default CounterContextProvider