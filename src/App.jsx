import React, { useState } from "react"
import pads from "./pads"
import Pad from "./Pad.jsx"
import "./App.css"

function App() {

    const [padArray, setPadArray] = useState(pads)


    const buttonElements = padArray.map (pad => (
        <Pad key = {pad.id}>  </Pad>))

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