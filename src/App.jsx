import React, { useState } from "react"
import pads from "./pads"
import "./App.css"

function App( darkMode) {

    const [padArray, setPadArray] = useState(pads)


    const style = {
        backgroundColor: darkMode ? "red" : "lightblue"}

    const buttonElements = padArray.map (pad => (
        <button style = {style}                     //inline styling example
            key={pad.id} >  </button>))

    return (
        <>
          <h1> SonicTiles</h1>
          <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
        </>
    )
}

export default App;