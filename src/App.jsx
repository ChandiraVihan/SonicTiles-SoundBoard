import React, { useState } from "react"
import pads from "./pads"
import "./App.css"

function App() {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */

    const [padArray, setPadArray] = useState(pads)
    return (
        <>
          <h1> SonicTiles</h1>
          <main>
            <div className="pad-container">
                {padArray.map(pad => (
                    <button key={pad.id}></button>
                ))}
            </div>
        </main>
        </>
    )
}

export default App;